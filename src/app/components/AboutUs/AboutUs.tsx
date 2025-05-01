import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Discover from "../Discover";

// Reusable Card
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div
    className={cn(
      "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 transition hover:shadow-xl",
      className
    )}
  >
    {children}
  </div>
);

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => (
  <div className={cn("p-6 space-y-5", className)}>{children}</div>
);

const AboutUs = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    },
  };

  const heritageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    },
  };

  return (
    <section className="py-20 pt-2 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/70 dark:to-black/70">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Image & About Us Text */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <Card className="overflow-hidden rounded-3xl shadow-2xl max-h-[450px]">
              <div className="relative h-full">
                <Image
                  src="/LIFEBOTICA_logo-2.png"
                  alt="Life Botica Products"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300" />
              </div>
            </Card>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-green-700 dark:text-green-300 tracking-tight">
                About Us
              </h2>
              <div className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-md">
                <Image
                  src="/info.gif"
                  alt="About Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Welcome to <strong className="geist-bold">Life Botica LLP</strong>
              , where <strong className="geist-bold">tradition</strong>,{" "}
              <strong className="geist-bold">innovation</strong>, and{" "}
              <strong className="geist-bold">quality</strong> converge to form a
              trusted brand across India.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              We are committed to <strong className="geist-bold">purity</strong>{" "}
              and <strong className="geist-bold">authenticity</strong>,
              delivering premium products that enhance your daily lifestyle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Focused on <strong className="geist-bold">excellence</strong> and{" "}
              <strong className="geist-bold">customer satisfaction</strong>, we
              are proud to be a{" "}
              <strong className="geist-bold">household name</strong> in
              wellness.
            </p>
          </motion.div>
        </div>

        {/* Our Heritage */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={heritageVariants}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#8C471F] dark:text-green-200 tracking-tight">
                NLYV® - Enriching Lifestyle
              </h3>
              <div className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-md">
                <Image
                  src="/brand.gif"
                  alt="NLYV Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </div>

            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Our flagship brand,{" "}
                  <strong className="geist-bold">NLYV</strong>, is built upon
                  the rich heritage of{" "}
                  <strong className="geist-bold">
                    wood-pressing techniques
                  </strong>
                  , ensuring every drop of wood-pressed cooking oil retains its{" "}
                  <strong className="geist-bold">natural essence</strong>,{" "}
                  <strong className="geist-bold">rich nutrition</strong>, and{" "}
                  <strong className="geist-bold">wholesome goodness</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Featuring <strong className="geist-bold">Groundnut</strong>,{" "}
                  <strong className="geist-bold">Safflower</strong>,{" "}
                  <strong className="geist-bold">Sunflower</strong>,{" "}
                  <strong className="geist-bold">Coconut</strong>,{" "}
                  <strong className="geist-bold">Sesame</strong>, and{" "}
                  <strong className="geist-bold">Mustard oils</strong>,{" "}
                  <strong className="geist-bold">NLYV</strong> guarantees{" "}
                  <strong className="geist-bold">pure</strong>,{" "}
                  <strong className="geist-bold">unrefined</strong>, and{" "}
                  <strong className="geist-bold">chemical-free</strong> cooking
                  oils—empowering health-conscious individuals to embrace better
                  nutrition and{" "}
                  <strong className="geist-bold">authentic flavors</strong> in
                  everyday meals.
                </p>
                <Discover />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
