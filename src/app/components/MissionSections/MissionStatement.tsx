import React from 'react';
import { motion } from 'framer-motion';

const TextEffect = ({
    children,
    preset = "fade-in-blur",
    speedSegment = 0.3,
    as: Component = 'h1', // Default to h1
    className = "",
    delay = 0,
    per = "character"
}) => {
    const getPresetVariants = (presetType: string) => {
        switch (presetType) {
            case "fade-in-blur":
                return {
                    hidden: { opacity: 0, filter: 'blur(12px)' },
                    visible: { opacity: 1, filter: 'blur(0px)' },
                };
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case "slide-in-top":
                return {
                    hidden: { opacity: 0, y: '-100%' },
                    visible: { opacity: 1, y: '0%' },
                };
            case "slide-in-bottom":
                return {
                    hidden: { opacity: 0, y: '100%' },
                    visible: { opacity: 1, y: '0%' },
                };
            case "zoom-in":
                return {
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                };
            default:
                return {
                    hidden: {},
                    visible: {},
                };
        }
    };

    const variants = getPresetVariants(preset);

    const splitText = (text: string) => {
      if (per === "character") {
        return text.split("");
      } else if (per === "word") {
        return text.split(" ");
      } else if (per === "line") {
          return text.split(/(\r?\n)/g); // Split by newline, preserves newlines
      }
        return [text];
    };

    const textArray = splitText(children);

    return (
        <Component className={className} style={{ display: 'block' }}>
            {textArray.map((char, index) => {
                const isNewline = char === "\n" || char === "\r\n"; // Check for newline
                return (
                    <motion.span
                        key={index}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: speedSegment,
                            delay: delay + index * 0.03,
                            ease: "easeInOut"
                        }}
                        style={{
                            display: isNewline ? 'block' : 'inline-block', // important
                            whiteSpace: isNewline ? 'pre-line' : 'inherit'
                        }}
                    >
                        {isNewline ? <br /> : char}
                    </motion.span>
                );
            })}
        </Component>
    );
};

const HeroSection = () => {
    return (
        <>
            <main className="overflow-hidden">
                <section>
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        {/*<TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-balance py-3 text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Modern Solutions for Customer Engagement
                                </TextEffect>*/}
                            <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance pt-0.5 text-xl">
Our mission is simple yet powerful: 
to bring natural, healthy, and authentic products to households across India. Every offering is crafted with purity and quality in mind, ensuring that our customers receive nothing but the best. From sourcing premium ingredients to using food-grade packaging that safeguards freshness, we never compromise on excellence                                </TextEffect>
                            <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={1.0}
                                    as="p"
                                    className="mx-auto mt-4 max-w-2xl text-balance text-xl">
We take pride in our swift delivery and unwavering commitment to quality, earning the trust and loyalty of our valued customers. For us, it’s not just about delivering products—it’s about enhancing lives with pure, natural, and thoughtfully crafted offerings. 
                            </TextEffect>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HeroSection;



/*Our mission is to empower individuals and businesses through innovative
        solutions, fostering growth, and creating a positive impact on the world.
        We strive to deliver exceptional value, build lasting relationships, and
        continuously adapt to the evolving needs of our community and industry.

        */
