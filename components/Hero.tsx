import React from 'react';
import { PixelButton } from './ui/PixelStyles';
import { Robot } from './Robot';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-black opacity-10"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-black opacity-10"></div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-black opacity-10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-block bg-pixel-dark text-white px-3 py-1 font-vt text-lg mb-6 transform -rotate-2">
            HELLO_WORLD.EXE
          </div>
          
          <h1 className="font-press text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
            PIXEL PERFECT <br />
            <span className="text-white text-stroke-black">PYTHON DEV</span>
          </h1>
          
          <p className="font-vt text-xl md:text-2xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed bg-white/20 p-4 border-2 border-black backdrop-blur-sm">
            Crafting intelligent algorithms, scalable backends, and nostalgic digital experiences. Specializing in AI/ML & Web Technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="mailto:maheshnath2143@gmail.com" aria-label="Email maheshnath2143@gmail.com">
              <PixelButton size="lg">HIRE ME</PixelButton>
            </a>
            <a href="#projects">
              <PixelButton variant="secondary" size="lg">VIEW WORK</PixelButton>
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="order-1 md:order-2 flex justify-center">
          <Robot className="transform hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};