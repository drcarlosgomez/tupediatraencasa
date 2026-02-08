
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 950 480" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Tree Tops (Colorful Circles) - Redesigned to fit the specific 7-top arrangement shown in the image */}
      <g>
        <circle cx="150" cy="240" r="90" fill="#ED3237" /> {/* Red Left */}
        <circle cx="210" cy="140" r="80" fill="#A9D33F" /> {/* Green Left */}
        <circle cx="330" cy="110" r="100" fill="#39BDE9" /> {/* Blue Left-Center */}
        <circle cx="475" cy="190" r="90" fill="#F4B41A" /> {/* Yellow Center */}
        <circle cx="610" cy="110" r="100" fill="#39BDE9" /> {/* Blue Right-Center */}
        <circle cx="580" cy="210" r="100" fill="#A64E97" /> {/* Purple Mid-Right */}
        <circle cx="740" cy="140" r="80" fill="#A9D33F" /> {/* Green Right */}
        <circle cx="800" cy="240" r="90" fill="#ED3237" /> {/* Red Right */}
      </g>

      {/* Tree Trunks */}
      <path d="M220 180 L320 405 H280 L180 180 Z" fill="#2D2D2D" /> {/* Left Trunk slanted */}
      <path d="M730 180 L630 405 H670 L770 180 Z" fill="#2D2D2D" /> {/* Right Trunk slanted */}
      
      {/* The House */}
      <rect x="375" y="250" width="200" height="155" fill="white" />
      <rect x="410" y="280" width="45" height="45" fill="#2D2D2D" /> {/* Window L */}
      <rect x="495" y="280" width="45" height="45" fill="#2D2D2D" /> {/* Window R */}
      <rect x="452" y="340" width="45" height="65" fill="#2D2D2D" /> {/* Door */}

      {/* Stethoscope Base Line */}
      <path d="M120 405 H830" stroke="#2D2D2D" strokeWidth="18" strokeLinecap="round" />
      
      {/* Stethoscope Head (Right) */}
      <circle cx="880" cy="405" r="45" fill="#2D2D2D" />
      <circle cx="880" cy="405" r="30" fill="#A0A0A0" />
      <circle cx="880" cy="405" r="22" fill="#707070" />

      {/* Stethoscope Earpieces (Left) */}
      <path d="M125 405 C 40 405, 30 460, 110 460" stroke="#2D2D2D" strokeWidth="16" fill="none" />
      <path d="M125 405 C 40 405, 30 350, 110 350" stroke="#2D2D2D" strokeWidth="16" fill="none" />
      <rect x="105" y="340" width="12" height="18" rx="6" fill="#A0A0A0" />
      <rect x="105" y="452" width="12" height="18" rx="6" fill="#A0A0A0" />
    </svg>
  );
};

export default Logo;
