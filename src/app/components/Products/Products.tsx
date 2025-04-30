'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { cn } from '@/lib/utils'; // Using @ for path alias
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
    {
        id: 1,
        title: 'Safflower Oil',
        description: 'Extracted from the finest safflower seeds, perfect for cooking and dressing. Rich in flavor and nutrients.',
        image: '/oil1.webp',
        benefits: [
            "High in healthy fats",
            "Rich in Vitamin E",
            "Supports heart health",
            "Versatile for cooking",
        ],
    },
    {
        id: 2,
        title: 'Sesame Oil',
        description: 'Extracted from the vibrant sesame seeds, ideal for high-heat cooking and dressings. Distinctive aroma and taste.',
        image: '/oil2.webp',
        benefits: [
            "Enhances flavor",
            "Contains antioxidants",
            "Good for skin and hair",
            "Ideal for stir-fries",
        ],
    },
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.2,
        },
    },
};

const slideVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.4 } },
};

const imageVariants = {
    hidden: { scale: 1.05 },
    animate: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

const Products = () => {
    // Removed unused theme variable

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
                "py-16 px-4 md:px-8",
                "bg-gradient-to-b from-white via-gray-50 to-white", // Light mode background
                "dark:from-gray-950 dark:via-gray-900 dark:to-black", // Dark mode background
            )}
        >
            <h2
                className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-12"
            >
                Featured Products
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                spaceBetween={60}
                slidesPerView={1}
                loop
                className="max-w-6xl mx-auto"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <motion.div
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={cn(
                                "flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl overflow-hidden transition-all duration-300",
                                "border border-gray-100/50", // Light mode border
                                "hover:shadow-purple-500/20 hover:scale-[1.01] group",
                                "bg-white/80 backdrop-blur-md", // Light mode background
                                "dark:bg-gray-900/80 dark:border-gray-800/50", // Dark mode background and border
                            )}
                        >
                            <motion.div
                                variants={imageVariants}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="w-full md:w-1/2"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto max-h-[400px] object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none
                                               transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </motion.div>

                            <div className="p-8 md:p-12 w-full md:w-1/2 text-left space-y-6">
                                <motion.h3
                                    variants={textVariants}
                                    className={cn(
                                        "text-3xl font-bold",
                                        "text-gray-900", // Light mode text
                                        "dark:text-white", // Dark mode text
                                    )}
                                >
                                    {product.title}
                                </motion.h3>
                                <motion.p
                                    variants={textVariants}
                                    className={cn(
                                        "text-lg leading-relaxed",
                                        "text-gray-700", // Light mode text
                                        "dark:text-gray-300"  // Dark mode text
                                    )}
                                >
                                    {product.description}
                                </motion.p>
                                <motion.ul
                                    variants={textVariants}
                                    className={cn(
                                        "list-disc list-inside space-y-2",
                                        "text-gray-600", // Light mode text
                                        "dark:text-gray-400" // Dark mode text
                                    )}
                                >
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </motion.ul>
                                <motion.div variants={textVariants}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600
                                                   hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-500
                                                   border-pink-500/30 transition-all duration-300
                                                   shadow-lg hover:shadow-pink-500/20 flex items-center gap-2"
                                    >
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.section>
    );
};

export default Products;
