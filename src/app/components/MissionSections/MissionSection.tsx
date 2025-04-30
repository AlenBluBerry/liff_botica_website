import React from 'react';
import MissionStatement from './MissionStatement';
import CoreValues from './CoreValues';

const MissionSection = () => {
  return (
    <section className="py-16 pb-1 bg-transparent dark:bg-transparent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl py-5 pb-0.1 font-bold text-green-700 dark:text-green-300 mb-8">Our Mission</h2>
        <MissionStatement />
        <CoreValues />
      </div>
    </section>
  );
};

export default MissionSection;