import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    const response = await groq.chat.completions.create({
      model: 'llama3-70b-8192',
      messages: [{ role: 'user', content: message }],
    });

    const botResponse = response.choices?.[0]?.message?.content || 'I am experiencing high traffic. Please try again later.';

    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}