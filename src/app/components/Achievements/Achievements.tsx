'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Img from '.././Img'; // ✅ Adjust this path if different

const achievements = [
  {
    title: '200+ Super Stockists',
    icon: '/travel-destination.gif',
  },
  {
    title: 'International Shipping',
    subtitle: 'Canada, Hong Kong, Kuwait, Bhutan, Uganda, Singapore, New Zealand',
    icon: '/truck.gif',
  },
  {
    title: '1st Indian Brand to Get All Shark Deals',
    icon: '/growth.gif',
  },
];

const Achievements = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-green-700">Our Achievements</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Img
              src={item.icon}
              alt={item.title}
              className="h-40 mx-auto"
              width={160}
              height={160}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">{item.title}</h3>
            {item.subtitle && (
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{item.subtitle}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
