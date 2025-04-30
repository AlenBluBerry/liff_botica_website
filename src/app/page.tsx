"use client";
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/HeaderSectionClient";
{/*import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";*/}

import React, { useEffect, useCallback } from 'react';
{/*import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";*/}
import CallToAction from "./components/CTA/CallToAction";
import MissionSection from "./components/MissionSections/MissionSection";
import Tagline from './components/TagLine/TagLine';
import Distributorship from './components/Distributorship/Distributorship';
import Vision from './components/Vision/Vision';
import GoToTopButton from './components/GoToTop';
import Achievements from './components/Achievements/Achievements';
export default function HomePage() {
  const handleSmoothScroll = useCallback((event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute("href");
    
    if (!href?.startsWith("#")) return;
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;
    
    const headerHeight = 80; // Adjust based on your header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", handleSmoothScroll, { passive: false });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, [handleSmoothScroll]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CallToAction />
        <Tagline text="Sustaining Nature, Nurturing Wellness, Empowering Lives." />
        <section id="about-us" className="scroll-mt-20">
          <AboutUs />
          
        </section>
        <div><section id="distributorship" className="scroll-mt-20">
          <Distributorship />
        </section></div>
        
        <section id="products" className="scroll-mt-20">
          <Products />
        </section>
        <Achievements />
        <div className="my-8 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>

        <div><section id="mission" className="scroll-mt-20">
          <MissionSection />
        </section></div>
        
        <section id="vision" className="scroll-mt-20">
          <Vision />
        </section>
        
        


        <Footer />
      </main>

      <GoToTopButton />
    </div>
  );
}

{/*const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {["light", "dark", "system"].map((theme) => (
            <DropdownMenuItem 
              key={theme}
              onClick={() => setTheme(theme)}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};*/}
{/*<ModeToggle />*/}