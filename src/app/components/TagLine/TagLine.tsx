import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // If you're using a utility like clsx/cn

interface TaglineProps {
    text: string;
    className?: string;
    animated?: boolean;
}

const Tagline: React.FC<TaglineProps> = ({ text, className, animated = true }) => {
    const baseClasses =
        "text-center text-2xl sm:text-3xl font-semibold tracking-tight text-green-700 py-23 pb-5 pt-27 dark:text-green-300";

    if (!animated) {
        return <p className={cn(baseClasses, className)}>{text}</p>;
    }

    return (
        <motion.p
            className={cn(baseClasses, className)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            {text}
        </motion.p>
    );
};

export default Tagline;
