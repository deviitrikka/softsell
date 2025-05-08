'use client';

import { ClipboardDocumentIcon, CurrencyDollarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const steps = [
  {
    name: 'Upload License',
    description: 'Share your software license details securely through our platform.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Get Valuation',
    description: 'Receive an instant market-based valuation for your licenses.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Get Paid',
    description: 'Accept our offer and receive payment within 24 hours.',
    icon: CurrencyDollarIcon,
  },
];

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

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    console.log('Is in view:', isInView);
  }, [isInView]);

  return (
    <motion.div
      id="how-it-works"
      className="py-24 sm:py-32 bg-gray-100 dark:bg-black"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
            variants={itemVariants}
          >
            Simple Process
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={itemVariants}
          >
            How It Works
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Turn your unused software licenses into cash in three simple steps
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.name}
                className="flex flex-col items-start"
                variants={itemVariants}
              >
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2">
                  <step.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900 dark:text-white">
                  {step.name}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                  {step.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
}
