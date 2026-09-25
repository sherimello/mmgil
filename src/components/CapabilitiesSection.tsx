import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import imgAlloy from '../assets/images/cap_alloy.jpg';
import imgInfra from '../assets/images/cap_infra.jpg';
import imgQa from '../assets/images/cap_qa.jpg';
import imgLogistics from '../assets/images/cap_logistics.jpg';

const capabilities = [
  {
    title: 'Custom Alloy Engineering',
    description: 'We partner with aerospace and automotive sectors to engineer proprietary steel alloys tailored for extreme stress, temperature, and unique material requirements.',
    image: imgAlloy
  },
  {
    title: 'Infrastructure Supply',
    description: 'Providing immense structural capacity for the world’s most ambitious mega-projects, ensuring end-to-end supply of TMT bars and heavy structural steel.',
    image: imgInfra
  },
  {
    title: 'Quality Assurance',
    description: 'Our in-house laboratories utilize advanced laser spectrometry and ultrasonic testing to guarantee zero-defect metallurgical integrity down to the micro-level.',
    image: imgQa
  },
  {
    title: 'Global Logistics Network',
    description: 'A deeply integrated supply chain via oceanic freighters and high-speed rail, guaranteeing just-in-time delivery for crucial infrastructure timelines.',
    image: imgLogistics
  }
];

export default function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-32 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16">Our Core Capabilities</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Accordion / List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className={`group border-t border-zinc-800 py-8 cursor-pointer transition-all duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-4xl font-light">{cap.title}</h3>
                  <ArrowRight className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 ${activeIndex === index ? 'rotate-0' : '-rotate-45'}`} />
                </div>
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-400 text-lg max-w-md">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-800"></div>
          </div>
          
          {/* Image Display */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden rounded-lg">
            {capabilities.map((cap, index) => (
              <img 
                key={index}
                src={cap.image} 
                alt={cap.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${activeIndex === index ? 'scale-100 opacity-100 z-10' : 'scale-110 opacity-0 z-0'}`}
              />
            ))}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
