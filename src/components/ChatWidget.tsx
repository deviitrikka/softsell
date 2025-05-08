'use client';

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage: Message = { role: 'bot', content: data.response || 'I am unable to provide a response at this time.' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const widgetVariants = {
    open: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { scale: 0, opacity: 0, y: 50, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={`w-full max-w-md h-[600px] ${theme === 'light' ? 'bg-white' : 'bg-gray-900 border-1 border-indigo-800'} rounded-2xl shadow-xl overflow-hidden flex flex-col`}
            variants={widgetVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              maxWidth: '90vw', // Responsive width
            }}
          >
            <div className={`p-5 flex justify-between items-center ${theme === 'light' ? 'bg-indigo-700 text-white' : 'bg-indigo-800 text-gray-100'}`}>
              <h2 className="text-xl font-semibold tracking-tight">Customer Support</h2>
              <button onClick={toggleChat} className="focus:outline-none">
                <svg
                  className="h-7 w-7 hover:text-indigo-200 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div ref={chatBodyRef} className="p-5 overflow-y-auto flex-grow space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl shadow-md ${message.role === 'user'
                    ? theme === 'light' ? 'bg-indigo-50 text-indigo-900 self-end' : 'bg-indigo-900 text-indigo-50 self-end'
                    : theme === 'light' ? 'bg-gray-50 text-gray-900 self-start' : 'bg-gray-700 text-gray-200 self-start'
                    }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && <div className="text-gray-500 animate-pulse">Loading...</div>}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-indigo-400">
              <div className="flex rounded-xl shadow-sm">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-grow focus:ring-indigo-500 focus:border-indigo-500 border-1 border-indigo-400 block w-full min-w-0 p-2 rounded-l-xl sm:text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-100 bg-gray-950'}`}
                />
                <button
                  type="submit"
                  className={`px-5 py-2 inline-flex items-center font-medium rounded-r-xl transition-colors duration-200 ${theme === 'light'
                    ? 'bg-indigo-700 hover:bg-indigo-800 border-indigo-700 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-500 border-indigo-600 text-gray-100'
                    }`}
                  disabled={isLoading}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            onClick={toggleChat}
            className={`rounded-full p-4 shadow-lg focus:outline-none transition-colors duration-200 ${theme === 'light'
              ? 'bg-indigo-700 hover:bg-indigo-800 text-white'
              : 'bg-indigo-600 hover:bg-indigo-500 text-gray-100'
              }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10v8m0 0l4-4m-4 4l4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}