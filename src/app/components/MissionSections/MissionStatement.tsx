import React from 'react';

interface MissionStatementProps {
  children?: React.ReactNode;
}

const MissionStatement: React.FC<MissionStatementProps> = () => {
  return (
    <div className="my-8 space-y-6">
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Our mission is simple yet powerful: to bring 
        <span className="font-semibold text-green-600 dark:text-green-400"> natural</span>, 
        <span className="font-semibold text-green-600 dark:text-green-400"> healthy</span>, and 
        <span className="font-semibold text-green-600 dark:text-green-400"> authentic products</span> to households across India. 
        Every offering is crafted with 
        <span className="font-semibold text-green-600 dark:text-green-400"> purity</span> and 
        <span className="font-semibold text-green-600 dark:text-green-400"> quality</span> in mind, 
        ensuring that our customers receive nothing but the 
        <span className="font-semibold text-green-600 dark:text-green-400"> best</span>. 
        From sourcing 
        <span className="font-semibold text-green-600 dark:text-green-400"> premium ingredients</span> to using 
        <span className="font-semibold text-green-600 dark:text-green-400"> food-grade packaging</span> that 
        safeguards freshness, we never compromise on excellence.
      </p>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We take pride in our 
        <span className="font-semibold text-green-600 dark:text-green-400"> swift delivery</span> and 
        <span className="font-semibold text-green-600 dark:text-green-400"> unwavering commitment</span> to quality, 
        earning the trust and loyalty of our valued customers. For us, it&apos;s not just about delivering products&mdash;it&apos;s about 
        <span className="font-semibold text-green-600 dark:text-green-400"> enhancing lives</span> with 
        <span className="font-semibold text-green-600 dark:text-green-400"> pure</span>, 
        <span className="font-semibold text-green-600 dark:text-green-400"> natural</span>, and 
        <span className="font-semibold text-green-600 dark:text-green-400"> thoughtfully crafted</span> offerings.
      </p>
    </div>
  );
};

export default MissionStatement;