import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type TextEffectProps = {
  children: ReactNode;
  preset?: 'fade-in-blur' | 'fade-in' | 'slide-in-top' | 'slide-in-bottom' | 'zoom-in';
  speedSegment?: number;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  per?: 'character' | 'word' | 'line';
};

const TextEffect = ({
  children,
  preset = "fade-in-blur",
  speedSegment = 0.3,
  as: Component = 'h1',
  className = "",
  delay = 0,
  per = "character",
}: TextEffectProps) => {

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

  // Safely convert children to string
  const textContent = React.Children.toArray(children).join("");

  if (typeof textContent !== 'string' || textContent.trim() === '') {
    console.error("TextEffect component expects 'children' to be plain text or simple string content.");
    return <Component className={className} />;
  }

  const splitText = (text: string) => {
    if (per === "character") return text.split("");
    if (per === "word") return text.split(" ");
    if (per === "line") return text.split(/(\r?\n)/g);
    return [text];
  };

  const textArray = splitText(textContent);

  return (
    <Component className={className} style={{ display: 'block' }}>
      {textArray.map((char, index) => {
        const isNewline = char === "\n" || char === "\r\n";
        const isWordSplit = per === 'word';

        return (
          <motion.span
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: speedSegment,
              delay: delay + index * 0.03,
              ease: "easeInOut",
            }}
            style={{
              display: isNewline ? 'block' : 'inline-block',
              whiteSpace: isNewline ? 'pre-line' : 'inherit',
              marginRight: isWordSplit ? '0.25em' : '0',  // ✅ added spacing
            }}
          >
            {isNewline ? <br /> : char}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default TextEffect;
