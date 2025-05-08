'use client';

import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('hidden');
      await controls.start('visible');
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      className="relative isolate px-6 pt-14 lg:px-8 bg-gray-100 dark:bg-black"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            variants={itemVariants}
          >
            Transform Your Software Licenses into Cash
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Get the best value for your unused software licenses. Fast, secure, and hassle-free.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={itemVariants}
          >
            <Link
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}