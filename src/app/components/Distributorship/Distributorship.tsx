'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Leaf, Droplet, IceCream } from "lucide-react";

interface DistributorshipProps {
  className?: string;
}

const Distributorship: React.FC<DistributorshipProps> = ({ className }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const items = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Maharani Tea",
      description:
        "Delivering the finest blends with captivating aroma and rich taste. A premium experience in every cup.",
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
      title: "Packaged Drinking Water",
      description:
        "Clean, purified, and mineral-balanced hydration for health-conscious consumers.",
    },
    {
      icon: <IceCream className="w-8 h-8 text-pink-500" />,
      title: "Skippi Ice Pops",
      description:
        "India’s first hygienic ice pops brand—natural, fun, and featured on Shark Tank India!",
    },
  ];

  return (
    <section className={cn("py-20 px-4 md:px-8 bg-white dark:bg-gray-900", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-green-300 tracking-tight">
            Distributors of Premium Brands
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transition hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Distributorship;
