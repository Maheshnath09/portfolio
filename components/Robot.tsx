import React from 'react';

export const Robot: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-64 h-64 md:w-80 md:h-80 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
        {/* Antenna */}
        <rect x="45" y="10" width="10" height="10" fill="#111" />
        <rect x="40" y="20" width="20" height="5" fill="#111" />
        
        {/* Head */}
        <rect x="25" y="25" width="50" height="40" fill="#E2E8F0" rx="2" stroke="#111" strokeWidth="4" />
        {/* Eyes */}
        <rect x="35" y="38" width="10" height="10" fill="#F37E33" />
        <rect x="55" y="38" width="10" height="10" fill="#F37E33" />
        
        {/* Mouth */}
        <rect x="40" y="55" width="20" height="4" fill="#111" />
        
        {/* Body */}
        <rect x="30" y="65" width="40" height="35" fill="#3B82F6" stroke="#111" strokeWidth="4" />
        
        {/* Arms */}
        <rect x="10" y="70" width="20" height="8" fill="#E2E8F0" stroke="#111" strokeWidth="3" transform="rotate(-20 10 70)" />
        <rect x="70" y="70" width="20" height="8" fill="#E2E8F0" stroke="#111" strokeWidth="3" transform="rotate(20 90 70)" />
        
        {/* Details */}
        <rect x="45" y="75" width="10" height="10" fill="#F9D71C" />
      </svg>
      
      {/* Floating Elements Animation */}
      <div className="absolute top-0 right-0 animate-bounce delay-700">
        <div className="w-8 h-8 bg-pixel-yellow border-2 border-black flex items-center justify-center font-press text-xs">?</div>
      </div>
      <div className="absolute bottom-10 left-[-20px] animate-pulse">
        <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center font-code text-xs overflow-hidden">
           {'</>'}
        </div>
      </div>
    </div>
  );
};