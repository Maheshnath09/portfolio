import React from 'react';
import { EDUCATION } from '../constants';
import { SectionHeading, PixelCard } from './ui/PixelStyles';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white border-y-4 border-pixel-dark">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="LORE & HISTORY" subtitle="Academic achievements and background" />
        
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-pixel-dark transform md:-translate-x-1/2 hidden md:block"></div>

          {EDUCATION.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={edu.id} className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block"></div>
                
                {/* Timeline Dot */}
                <div className="w-8 h-8 bg-pixel-yellow border-4 border-pixel-dark z-10 shrink-0 hidden md:block"></div>

                {/* Content Card */}
                <div className="flex-1 w-full">
                   <PixelCard className={`relative ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      {/* Mobile Line Decorator */}
                      <div className="md:hidden absolute -left-4 top-8 w-4 h-1 bg-pixel-dark"></div>
                      
                      <span className="inline-block bg-pixel-dark text-white font-press text-xs px-2 py-1 mb-2">
                        {edu.year}
                      </span>
                      <h3 className="font-press text-base md:text-lg mb-1">{edu.degree}</h3>
                      <h4 className="font-vt text-xl text-gray-600 mb-2">{edu.institution}</h4>
                      <p className="font-vt text-lg leading-snug">{edu.description}</p>
                   </PixelCard>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};