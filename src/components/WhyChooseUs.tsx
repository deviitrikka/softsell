'use client';

import { ShieldCheckIcon, BanknotesIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const features = [
  {
    name: 'Secure Transactions',
    description: 'Bank-level security for all your license transfers and payments.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Best Market Rates',
    description: 'Get the highest value for your software licenses.',
    icon: BanknotesIcon,
  },
  {
    name: 'Fast Processing',
    description: '24-hour payment processing guaranteed.',
    icon: ClockIcon,
  },
  {
    name: 'Expert Support',
    description: 'Dedicated team to assist you throughout the process.',
    icon: UserGroupIcon,
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

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    console.log('WhyChooseUs in view:', isInView);
  }, [isInView]);

  return (
    <motion.div
      id="why-us"
      className="bg-gray-100 dark:bg-black py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Why Choose Us
          </motion.h2>
          <motion.p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to sell your licenses
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                variants={itemVariants}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
}