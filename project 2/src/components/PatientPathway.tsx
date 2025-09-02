import React from 'react';
import { Eye, Layers, LucideRadius as Caduceus } from 'lucide-react';

const pathwaySteps = [
  {
    icon: Eye,
    title: 'Preliminary Evaluation: Getting To Know You',
    description: 'Digital Assessment for Precise Evaluation: Ensuring Timely and Optimized Spinal Care',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    buttonStyle: 'bg-amber-900 text-white hover:bg-amber-800',
  },
  {
    icon: Layers,
    title: 'Non-Surgical Care Optimisation',
    description: 'Prioritizing Timely Treatment and Seamless Access to Specialist Support',
    bgColor: 'bg-gradient-to-br from-amber-900 to-red-900',
    textColor: 'text-white',
    buttonStyle: 'bg-white text-amber-900 hover:bg-gray-100',
  },
  {
    icon: Caduceus,
    title: 'Specialist Surgeon Consultation',
    description: 'Comprehensive Care and Expert Guidance with Prof. Buckland for Optimal Treatment Outcomes',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    buttonStyle: 'bg-amber-900 text-white hover:bg-amber-800',
  },
];

const PatientPathway = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-4xl font-script text-gray-400 mb-4" style={{ fontFamily: 'cursive' }}>
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Patient Pathway
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our 3-step patient pathway ensures you receive personalized, evidence-based treatment, 
            guiding you from initial assessment to long-term recovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathwaySteps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col`}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${index === 1 ? 'bg-white/20' : 'bg-amber-100'}`}>
                  <step.icon 
                    className={`h-8 w-8 ${index === 1 ? 'text-amber-400' : 'text-amber-600'}`} 
                  />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${step.textColor} mb-4 text-center leading-tight`}>
                {step.title}
              </h3>
              
              <p className={`${step.textColor} ${index === 1 ? 'opacity-90' : 'opacity-70'} text-center mb-8 flex-grow leading-relaxed`}>
                {step.description}
              </p>
              
              <div className="text-center">
                <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${step.buttonStyle} transform hover:scale-105`}>
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientPathway;