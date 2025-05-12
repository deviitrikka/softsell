# SoftSell - Software License Marketplace (https://softsell-pied.vercel.app/)

## Project Description

SoftSell is a platform designed to transform your unused software licenses into cash. It provides a fast, secure, and hassle-free way to sell your licenses and get the best market value. This project was built as a single-page marketing website to showcase the core features and benefits of SoftSell.

---

## Features

- **Secure Transactions:** Bank-level security for all license transfers and payments.
- **Best Market Rates:** Get the highest value for your software licenses.
- **Fast Processing:** 24-hour payment processing guaranteed.
- **Expert Support:** Dedicated team to assist you throughout the process.
- **Interactive Chat Widget:** Get instant support with our AI-powered customer chat using Groq API.
- **Dark/Light Theme:** Toggle between light and dark themes for optimal viewing experience.
- **Smooth Animations:** Enjoy a visually appealing experience with Framer Motion animations.
- **Responsive Design:** Fully responsive layout that adapts to different screen sizes.
- **SEO Optimized:** Includes SEO meta tags and a descriptive page title.
- **Contact Form:** Easy-to-use contact form with frontend validation.

---

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for building performant web applications.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React.
- **[Groq API](https://groq.com/)** - For powering the AI chat widget.
- **[Heroicons](https://heroicons.com/)** - For the icons.

---

## UI/UX Design Choices

- **Visually Appealing and Modern:** The design incorporates a clean and modern aesthetic with a focus on readability and user experience.
- **Coherent Color Palette:** A cohesive color palette using indigo and gray tones was chosen to create a professional and trustworthy feel.
- **Mobile Responsive Layout:** The layout is fully responsive, ensuring a seamless experience on all devices.
- **Framer Motion Animations:** Subtle animations were added using Framer Motion to enhance the user experience and provide visual feedback.

---

## Components

- **Header** ([`src/components/Header.tsx`](src/components/Header.tsx)): Navigation header with theme toggle and links to sections.
- **Hero** ([`src/components/Hero.tsx`](src/components/Hero.tsx)): Main hero section with project introduction and call-to-action.
- **HowItWorks** ([`src/components/HowItWorks.tsx`](src/components/HowItWorks.tsx)): Section explaining the process of selling licenses in three steps.
- **WhyChooseUs** ([`src/components/WhyChooseUs.tsx`](src/components/WhyChooseUs.tsx)): Section highlighting the benefits of using SoftSell.
- **Testimonials** ([`src/components/Testimonials.tsx`](src/components/Testimonials.tsx)): Section displaying customer testimonials.
- **ContactForm** ([`src/components/ContactForm.tsx`](src/components/ContactForm.tsx)): Contact form for users to send inquiries.
- **ChatWidget** ([`src/components/ChatWidget.tsx`](src/components/ChatWidget.tsx)): AI-powered customer chat widget using Groq API.
- **MotionLayout** ([`src/components/MotionLayout.tsx`](src/components/MotionLayout.tsx)): Layout component with Framer Motion animations.

---

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd softsell
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env.local` file in the root directory.
   - Add your Groq API key:

     ```plaintext
     GROQ_API_KEY=your_api_key_here
     ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure

```
softsell/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│   └── api/
│       └── chat/
│           └── route.ts
├── components/
│   ├── ChatWidget.tsx
│   ├── ContactForm.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── MotionLayout.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
├── context/
│   └── ThemeContext.tsx
├── next.config.ts
└── README.md
```

---

## LLM-Powered Chat Feature Implementation

- **AI-Powered Chat Widget:** Integrated a basic AI-powered customer chat widget using the Groq API.
- **Intuitive Chat UX:** The chat widget provides a clean and intuitive interface for users to interact with the AI assistant.
- **Clear Prompts and Fallback Responses:** The chat widget includes clear prompts and fallback responses to guide users and handle errors gracefully.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License

[MIT](LICENSE)

---
