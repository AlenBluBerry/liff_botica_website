'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperClass } from 'swiper/types';
import { createPortal } from 'react-dom';

const products = [
    {
        id: 1,
        title: 'Safflower Oil',
        description:
            'Extracted from the finest safflower seeds, perfect for cooking and dressing. Rich in flavor and nutrients.',
        image: '/oil1.webp',
        benefits: [
            'High in healthy fats',
            'Rich in Vitamin E',
            'Supports heart health',
            'Versatile for cooking',
        ],
    },
    {
        id: 2,
        title: 'Sesame Oil',
        description:
            'Extracted from the vibrant sesame seeds, ideal for high-heat cooking and dressings. Distinctive aroma and taste.',
        image: '/oil2.webp',
        benefits: [
            'Enhances flavor',
            'Contains antioxidants',
            'Good for skin and hair',
            'Ideal for stir-fries',
        ],
    },
    {
        id: 3,
        title: 'Coconut Oil',
        description: 'Pure, cold-pressed coconut oil with rich aroma and nutrition.',
        image: '/oil3.webp',
        benefits: [
            'Supports immune health',
            'Rich in healthy fats',
            'Great for skin care',
            'High smoke point for cooking',
        ],
    },
    {
        id: 4,
        title: 'Mustard Oil',
        description:
            'Extracted from mustard seeds, with a pungent and strong flavor. Perfect for Indian cooking.',
        image: '/oil4.webp',
        benefits: [
            'Rich in Omega-3',
            'Improves digestion',
            'Promotes heart health',
            'Adds flavor to meals',
        ],
    },
];

const ProductCarouselPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const swiperRef = useRef<SwiperClass | null>(null);
    const setSwiperRef = (swiper: SwiperClass | null) => {
        swiperRef.current = swiper;
    };

    const togglePopup = () => setShowPopup(!showPopup);

    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    useEffect(() => {
        const portalDiv = document.createElement('div');
        portalDiv.id = 'product-carousel-popup-root';
        document.body.appendChild(portalDiv);
        setPortalElement(portalDiv);

        return () => {
            if (portalDiv) {
                document.body.removeChild(portalDiv);
            }
        };
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update?.();
        }
    }, [showPopup]);

    if (!portalElement) {
        return (
            <div className="relative">
                <div className="absolute top-4 right-20 z-10">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="text-gray-700 hover:text-gray-900"
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>
                <Button
                    onClick={togglePopup}
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white
                                hover:from-pink-400 hover:to-purple-400 hover:text-white
                                transition-all duration-300
                                shadow-lg hover:shadow-pink-500/20 flex items-center gap-2"
                >
                    Discover More  <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="absolute top-4 right-20 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                    className={isDarkMode ? "text-white" : "text-gray-700 hover:text-gray-900"}
                >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </div>
            <Button
                onClick={togglePopup}
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white
                            hover:from-pink-400 hover:to-purple-400 hover:text-white
                            transition-all duration-300
                            shadow-lg hover:shadow-pink-500/20 flex items-center gap-2"
            >
                Discover More  <ArrowRight className="w-5 h-5" />
            </Button>

            {showPopup &&
                createPortal(
                    <motion.div
                        className="fixed inset-0 z-50 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={isDarkMode ? "dark" : ""}>
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-[90vw] max-w-[600px] h-[80vh] overflow-hidden relative">
                                <button
                                    onClick={togglePopup}
                                    className={
                                        isDarkMode
                                            ? "absolute top-4 right-4 text-2xl font-bold text-gray-300 hover:text-red-500 transition-all z-10"
                                            : "absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-500 transition-all z-10"
                                    }
                                >
                                    ×
                                </button>

                                <motion.section className="py-8 px-4 h-full overflow-y-auto">
                                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6 dark:text-white">
                                        Featured Products
                                    </h2>
                                    <Swiper
                                        onSwiper={setSwiperRef}
                                        modules={[Navigation, Autoplay]}
                                        navigation
                                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop
                                    >
                                        {products.map((product) => (
                                            <SwiperSlide key={product.id}>
                                                <div className="flex flex-col items-center rounded-3xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                                                    <div className="w-full">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.title}
                                                            width={600}
                                                            height={250}
                                                            className="w-full h-[250px] object-cover rounded-t-3xl"
                                                        />
                                                    </div>

                                                    <motion.div
                                                        whileHover={{ scale: 1.03 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: 'easeInOut',
                                                        }}
                                                        className="p-5 text-center space-y-4 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-b-3xl w-full dark:bg-gray-800/70"
                                                    >
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                            {product.title}
                                                        </h3>
                                                        <p className="text-md text-gray-700 dark:text-gray-300">
                                                            {product.description}
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-600 text-sm text-left dark:text-gray-400">
                                                            {product.benefits.map((benefit, index) => (
                                                                <li key={index}>{benefit}</li>
                                                            ))}
                                                        </ul>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className={
                                                                isDarkMode
                                                                    ? "bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-400 hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-300 border-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                                                                    : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-500 border-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-pink-500/20 flex items-center gap-2"
                                                            }
                                                        >
                                                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </motion.section>
                            </div>
                        </div>
                    </motion.div>,
                    portalElement
                )}
        </div>
    );
};

export default ProductCarouselPopup;
