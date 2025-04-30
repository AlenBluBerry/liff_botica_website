'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { Sparkles, Heart, CheckCircle } from 'lucide-react';

// Define the type for the coreValues array
interface CoreValue {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for the icon (React component)
}

const coreValues: CoreValue[] = [
  {
    name: 'Quality',
    description: 'We deliver the highest quality and purity in every drop.',
    icon: Sparkles,
  },
  {
    name: 'Healthy and Natural',
    description: 'Promoting health and well-being through our natural oils.',
    icon: Heart,
  },
  {
    name: 'Trust',
    description: 'A brand you can trust for your family\'s needs.',
    icon: CheckCircle,
  },
];

const CoreValues = () => {
  const ref = useRef<HTMLDivElement>(null); // Corrected type for ref
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Define the type for the Card component props
  interface CardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
    description: string;
  }

  const Card: React.FC<CardProps> = ({ icon, name, description }) => {
    return (
      <div className="w-full h-64 perspective">
        <div className="relative w-full h-full transition-transform duration-700 transform-style group hover:rotate-y-180">
          {/* Front */}
          <div className="absolute inset-0 bg-white dark:bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white/10 flex flex-col items-center justify-center backface-hidden">
            {React.createElement(icon, { className: 'w-10 h-10 text-green-500 mb-3' })}
            <h3 className="text-lg font-bold text-center text-green-700 dark:text-green-300">{name}</h3>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-white dark:bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white/10 flex items-center justify-center transform rotate-y-180 backface-hidden">
            <p className="text-center text-gray-800 dark:text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h2 className="text-3xl font-semibold text-center text-green-700 dark:text-green-300 mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coreValues.map((val, index) => (
          <motion.div key={index} variants={cardVariants} className="group">
            <Card {...val} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreValues;
