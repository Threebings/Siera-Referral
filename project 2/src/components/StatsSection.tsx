import React, { useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  target: number;
}

const stats: StatItem[] = [
  { value: '190+', label: 'Peer Reviewed Publications', target: 190 },
  { value: '120+', label: 'Podium Presentations', target: 120 },
  { value: '10+', label: 'International Society Awards', target: 10 },
  { value: '2,000+', label: 'Spinal Surgeries Performed', target: 2000 },
];

const StatsSection = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, stat.target);
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(newValue);
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                {animatedValues[index]}
                {index === 3 ? ',' + Math.floor(animatedValues[index] / 1000) + 'k' : '+'}
              </div>
              <div className="text-sm md:text-base font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;