import React from 'react';
import MissionStatement from './MissionStatement';  // ✅ correct file!
import CoreValues from './CoreValues';
import { Leaf, ShieldCheck, PackageCheck, Truck } from 'lucide-react';
const MissionSection = () => {
  return (
    <section className="py-16 pb-1 bg-transparent dark:bg-transparent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl py-5 pb-0.1 font-bold text-green-700 dark:text-green-300 mb-8">
          Our Mission
        </h2>
        <MissionStatement />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 my-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <Leaf className="w-12 h-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Our Mission</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Bringing <span className="font-bold text-green-600">natural</span>,{' '}
          <span className="font-bold text-green-600">healthy</span>, and{' '}
          <span className="font-bold text-green-600">authentic</span> products to households across India.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Purity & Quality</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Crafted with <span className="font-bold text-green-600">purity</span> and{' '}
          <span className="font-bold text-green-600">quality</span> in mind, ensuring the best for every customer.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <PackageCheck className="w-12 h-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Safe Packaging</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Using <span className="font-bold text-green-600">food-grade packaging</span> that safeguards freshness without compromise.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <Truck className="w-12 h-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Trust & Delivery</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Swift delivery and a commitment to quality that earns the trust and loyalty of our customers.
        </p>
      </div>
    </div>
    <MissionStatement />
        <CoreValues />
      </div>
    </section>
  );
};

export default MissionSection;
