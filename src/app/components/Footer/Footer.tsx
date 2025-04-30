'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactUs from '../ContactUs/ContactUs'; // ✅ Ensure this path is correct
import Img from '../Img'; // ✅ Ensure this path is correct
const footerLinks = [
    {
        title: 'Company',
        items: ['About us', 'Leadership team'],
    },
    {
        title: 'Our Values',
        items: ['Our commitments'],
    },
    {
        title: 'Get in Touch',
        items: ['Contact us'],
    },
];

const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/nlyv.official/',
        icon: 'https://img.icons8.com/ios-filled/50/008000/instagram-new--v1.png',
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/+919579491337',
        icon: 'https://img.icons8.com/ios-filled/50/008000/whatsapp--v1.png',
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/people/NLYV/61556139359042/#',
        icon: 'https://img.icons8.com/ios-filled/50/008000/facebook-new.png',
    },
];

const companyAddress = 'Shop No.2, Rahul Paradise, Sai Nagar Ln, near Sai Baba mandir, Sai Nagar, Palghar, Maharashtra 401404';
const googleMapsUrl = 'https://www.google.com/maps/place/NLYV+-+Life+Botica/@19.6954452,72.7609379,17z/data=!3m1!4b1!4m6!3m5!1s0x3be71dcfa33d26a1:0x255eeea442b46678!8m2!3d19.6954452!4d72.7635128';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleItemClick = (item: string) => {
        if (item === 'Contact us') {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <motion.footer
                className="bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-md border-t border-gray-200 pt-16 pb-10 px-6 mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/LIFEBOTICA_logo-2.png"
                                alt="Life Botica Logo"
                                width={42}
                                height={42}
                                className="w-8 h-8 mr-2"
                            />
                            <h2 className="text-lg font-bold text-gray-800">LIFE BOTICA LLP</h2>
                        </div>
                        <p className="text-sm pt-2 pb-9 text-gray-600">Nurturing Wellness, Empowering Lives, Sustaining Nature.</p>
                        <div className="mt-4 flex items-start gap-2">
                            <Image src="/maps.svg" alt="Address" width={20} height={20} className="w-5 h-5 text-gray-500 mt-0.5" />
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-500 transition-colors cursor-pointer"
                            >
                                {companyAddress}
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="hover:text-green-500 transition-colors cursor-pointer"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mt-10 gap-6">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Img
  src={link.icon}
  alt={link.name}
  className="w-6 h-6"
  width={24}
  height={24}
/>
                        </motion.a>
                    ))}
                </div>

                {/* Footer Bottom */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    © {new Date().getFullYear()} YourCompany. All rights reserved.
                </p>
            </motion.footer>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-lg relative shadow-lg">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ×
                        </button>
                        <ContactUs />
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
