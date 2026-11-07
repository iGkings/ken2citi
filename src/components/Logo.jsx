import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', showBN = true, isWhite = false }) {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className="flex items-center gap-3">
      {/* Authentic Circular Brand Emblem */}
      <div className={`relative shrink-0 flex items-center justify-center rounded-full shadow-sm ${
        isSm ? 'w-10 h-10' : isLg ? 'w-14 h-14' : 'w-12 h-12'
      }`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* Circular text path */}
            <path
              id="logoCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
            <linearGradient id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A7A42" />
              <stop offset="100%" stopColor="#16A34A" />
            </linearGradient>
            <linearGradient id="logoDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
          </defs>

          {/* Outer circle boundary */}
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#0A7A42" strokeWidth="2.5" />
          
          {/* Green upper crescent */}
          <path d="M 50 4 A 46 46 0 0 1 96 50 L 50 50 Z" fill="url(#logoGreenGrad)" />
          <path d="M 4 50 A 46 46 0 0 1 50 4 L 50 50 Z" fill="url(#logoGreenGrad)" />

          {/* Charcoal lower crescent */}
          <path d="M 4 50 A 46 46 0 0 0 96 50 L 50 50 Z" fill="url(#logoDarkGrad)" />

          {/* Center inner white circle badge */}
          <circle cx="50" cy="50" r="23" fill="#FFFFFF" stroke="#0A7A42" strokeWidth="1.5" />

          {/* Center 'K' letter */}
          <text
            x="50"
            y="59"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontWeight="900"
            fontSize="26"
            fill="#1A1A1A"
          >
            K
          </text>

          {/* Outer Ring Text: KEN2 CITI COOL TECHNICAL SERVICE */}
          <text fontSize="6" fontWeight="bold" fill="#374151" letterSpacing="0.6">
            <textPath href="#logoCirclePath" startOffset="50%" textAnchor="middle">
              KEN2 CITI COOL TECHNICAL SERVICE
            </textPath>
          </text>
        </svg>
      </div>

      {/* Typography Brand Block */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-serif italic font-extrabold tracking-tight ${
            isWhite ? 'text-white' : 'text-brand-charcoal'
          } ${isSm ? 'text-lg' : isLg ? 'text-2xl' : 'text-xl'}`}>
            Ken2
          </span>
          <span className={`font-serif italic font-bold tracking-tight ${
            isWhite ? 'text-brand-yellow' : 'text-brand-green'
          } ${isSm ? 'text-base' : isLg ? 'text-xl' : 'text-lg'}`}>
            Citi Cool
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${
            isWhite ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Technical Services
          </span>
          {showBN && (
            <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
              isWhite 
                ? 'bg-white/10 text-brand-yellow border-white/20' 
                : 'bg-emerald-50 text-brand-green border-emerald-200'
            }`}>
              BN 2439593
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

