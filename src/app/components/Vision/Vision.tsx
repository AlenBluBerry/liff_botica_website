import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LeadershipVisionProps {
  className?: string;
}

const LeadershipVision: React.FC<LeadershipVisionProps> = ({ className }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className={cn("py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-950", className)}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-green-300 tracking-tight">
            Leadership & Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            At <strong className="text-green-700 dark:text-green-300">Life Botica LLP</strong>, we believe in the power of <strong>quality</strong>, <strong>trust</strong>, and <strong>innovation</strong> to shape a better future.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Under the visionary leadership of <strong>Mr. Jobin Joy Varghese</strong> and the mentorship of <strong>Mr. Joy Varghese</strong>, we are committed to empowering individuals and fostering growth that contributes to a <strong>self-reliant and prosperous India</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipVision;
