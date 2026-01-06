import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pixel-orange relative selection:bg-pixel-yellow selection:text-black">
       {/* Global decorative grid pattern */}
       <div 
         className="fixed inset-0 pointer-events-none opacity-5 z-0"
         style={{
           backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }}
       ></div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="bg-pixel-dark text-white py-6 text-center font-vt text-lg relative z-20 border-t-4 border-black">
        <p>&copy; {new Date().getFullYear()} PixelDev. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-1">Press Start to Continue</p>
      </footer>
    </div>
  );
}

export default App;