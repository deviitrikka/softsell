import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MotionLayout from '@/components/MotionLayout';
import './globals.css';
import ChatWidget from '@/components/ChatWidget'; // Import the ChatWidget

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoftSell - Software License Marketplace',
  description: 'Transform your unused software licenses into cash',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <MotionLayout>
            {children}
            <ChatWidget /> {/* Add the ChatWidget here */}
          </MotionLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}