import React from 'react';

export const Robot: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-64 h-64 md:w-80 md:h-80 group ${className}`}>
      <style>{`
        @keyframes blink {
          0%, 90%, 100% { fill: #FF8800; height: 12px; }
          95% { fill: #000; height: 2px; }
        }
        .robot-eye {
          animation: blink 4s infinite;
          transform-origin: center;
        }
        .robot-antenna-container {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy wiggling */
            transform-origin: 80px 28px; /* Pivot at the base on the head */
        }
        .group:hover .robot-antenna-container {
            transform: rotate(10deg);
        }
      `}</style>
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full transition-transform duration-300 group-hover:-translate-y-2"
        shapeRendering="crispEdges" // Key for pixel art
      >
        {/* Antenna Group - Wiggles together - lighter shadow */}
        <g className="robot-antenna-container drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          {/* Base connector */}
          <rect x="75" y="28" width="10" height="4" fill="#000" />

          {/* Thinner Shaft */}
          <rect x="78" y="10" width="4" height="18" fill="#000" />

          {/* Bulb - Dark red default, bright red on hover */}
          <rect
            x="74"
            y="2"
            width="12"
            height="8"
            className="fill-[#4a0000] group-hover:fill-[#FF0000] transition-colors duration-300"
          />
          {/* Bulb Highlight (adds depth) */}
          <rect x="76" y="4" width="4" height="2" fill="rgba(255,255,255,0.3)" />
        </g>

        {/* Main Body Group - Heavy shadow */}
        <g className="drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {/* Head - black main */}
          <rect x="35" y="28" width="90" height="65" fill="#000" />

          {/* Head - white border frame */}
          <rect x="42" y="35" width="76" height="18" fill="#FFF" />

          {/* Eyes background - black */}
          <rect x="48" y="42" width="64" height="12" fill="#000" />

          {/* Left eye */}
          <rect x="60" y="46" width="12" height="12" className="robot-eye" />

          {/* Right eye */}
          <rect x="88" y="46" width="12" height="12" className="robot-eye" />

          {/* Mouth - cream */}
          <rect x="62" y="62" width="36" height="8" fill="#F5E6D3" />

          {/* Left side box/arm - gray */}
          <rect x="20" y="50" width="18" height="28" fill="#888" stroke="#000" strokeWidth="2" />

          {/* Right side box/arm - gray */}
          <rect x="122" y="50" width="18" height="28" fill="#888" stroke="#000" strokeWidth="2" />

          {/* Body - light gray/white */}
          <rect x="38" y="92" width="84" height="90" fill="#E8E8E8" stroke="#000" strokeWidth="3" />

          {/* Left body panel - darker gray */}
          <rect x="30" y="102" width="10" height="70" fill="#888" stroke="#000" strokeWidth="2" />

          {/* Right body panel - darker gray */}
          <rect x="120" y="102" width="10" height="70" fill="#888" stroke="#000" strokeWidth="2" />
        </g>
      </svg>

      {/* Floating Elements Animation - Desynchronized */}
      <div className="absolute top-0 right-0 animate-bounce [animation-duration:3s]">
        <div className="w-8 h-8 bg-[#FFD700] border-2 border-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0_rgba(0,0,0,1)] transition-transform group-hover:scale-110">?</div>
      </div>
      <div className="absolute bottom-10 left-[-20px] animate-bounce [animation-duration:2.5s] [animation-delay:0.5s]">
        <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-mono text-xs overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,1)] transition-transform group-hover:rotate-12">
          {'</>'}
        </div>
      </div>
    </div>
  );
};