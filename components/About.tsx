import React from 'react';
import { PixelCard, SectionHeading } from './ui/PixelStyles';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="ABOUT ME" subtitle="Level 25 Python Architect based in the Cloud" />
        
        <PixelCard className="bg-white">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-pixel-blue border-4 border-pixel-dark overflow-hidden relative">
               <img 
                 src="https://picsum.photos/300/300?grayscale" 
                 alt="Profile" 
                 className="w-full h-full object-cover pixel-antialiasing-off"
               />
               <div className="absolute inset-0 bg-orange-500 mix-blend-multiply opacity-30"></div>
            </div>
            
            <div className="font-vt text-xl md:text-2xl space-y-4">
              <p>
                <span className="font-bold text-pixel-orange text-2xl">Hi, I'm Mahesh.</span> I turn caffeine into clean, efficient code.
              </p>
              <p>
                With a background in Computer Science and a passion for retro aesthetics, I build modern AI solutions that don't just work—they perform. 
                Whether it's training a neural network to recognize cats or building a high-frequency trading bot, I love solving complex puzzles.
              </p>
              <div className="flex gap-2 flex-wrap pt-4">
                 {["Remote", "Freelance", "Full-time"].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-pixel-dark text-white text-sm border-2 border-transparent">
                     #{tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};