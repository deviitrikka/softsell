'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    body: "SoftSell made it incredibly easy to sell our unused enterprise licenses. The process was smooth and the payment was processed quickly.",
    author: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Solutions",
  },
  {
    body: "I was impressed by the professional service and the great rates they offered for our software licenses. Would definitely recommend!",
    author: "Michael Roberts",
    role: "Operations Manager",
    company: "Digital Innovations Inc",
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

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    console.log('Testimonials in view:', isInView);
  }, [isInView]);

  return (
    <motion.div
      id="testimonials"
      className="bg-gray-100 dark:bg-black py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Testimonials
          </motion.h2>
          <motion.p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Companies Worldwide
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              className="flex flex-col bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg"
              variants={itemVariants}
            >
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">"{testimonial.body}"</p>
                </div>
                <div className="mt-6">
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}