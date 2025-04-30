import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeaderServerProps {
  isScrolled?: boolean;
}

const HeaderServer: React.FC<HeaderServerProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const baseStyle =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md";
  const scrolledStyle = isScrolled
    ? "bg-green-200/70 shadow-lg"
    : "bg-green-200/30";

  const navLinks = [
    { href: "#about-us", label: "About Us" },
    { href: "#mission", label: "Mission" },
    { href: "#vision", label: "Vision" },
    { href: "#products", label: "Products" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(baseStyle, scrolledStyle)}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Animation */}
          <motion.div
            initial={{ x: -30, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/LIFEBOTICA_logo-2.png"
                alt="Life Botica Logo"
                width={70}
                height={75}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-green-700 hover:text-green-900 dark:hover:text-green-300 transition-colors duration-300
                            font-medium text-base relative group"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.08 }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-700 origin-left scale-x-0
                                    transform transition-transform duration-300 group-hover:scale-x-100"
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Open Menu"
                >
                  <Menu className="text-green-700 w-6 h-6 cursor-pointer" />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-green-100/90 dark:bg-gray-900 space-y-6 p-6 w-64"
              >
                {/* Removed the explicit close button here */}
                <AnimatePresence>
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="block text-lg font-medium text-green-700 hover:text-green-900 dark:hover:text-green-300 py-2 transition-colors"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.15,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 80,
                      }}
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default HeaderServer;

