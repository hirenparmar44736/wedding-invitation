import React from 'react';

// Botanical Leaf Sprig Motif
export const LeafSprig: React.FC<{ className?: string; stroke?: string }> = ({
  className = "w-6 h-6",
  stroke = "#D4AF37"
}) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35C20 22 20 10 20 5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 28C14 26 10 22 9 18C15 18 19 22 20 28Z" fill={stroke} fillOpacity="0.25" stroke={stroke} strokeWidth="1" />
    <path d="M20 28C26 26 30 22 31 18C25 18 21 22 20 28Z" fill={stroke} fillOpacity="0.25" stroke={stroke} strokeWidth="1" />
    <path d="M20 20C15 18 12 15 11 11C16 11 19 15 20 20Z" fill={stroke} fillOpacity="0.3" stroke={stroke} strokeWidth="1" />
    <path d="M20 20C25 18 28 15 29 11C24 11 21 15 20 20Z" fill={stroke} fillOpacity="0.3" stroke={stroke} strokeWidth="1" />
    <path d="M20 12C17 10 15 7 14 4C18 4 20 7 20 12Z" fill={stroke} fillOpacity="0.35" stroke={stroke} strokeWidth="0.8" />
    <path d="M20 12C23 10 25 7 26 4C22 4 20 7 20 12Z" fill={stroke} fillOpacity="0.35" stroke={stroke} strokeWidth="0.8" />
    <circle cx="20" cy="5" r="1.5" fill={stroke} />
  </svg>
);

// Ornamental Floral Corner (for luxury frames)
export const OrnamentalCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
}> = ({ position = 'top-left', className = "w-16 h-16", color = "#D4AF37" }) => {
  const transform = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ transform, transformOrigin: 'center' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer borders */}
      <path d="M4 96 V16 C4 9.37 9.37 4 16 4 H96" stroke={color} strokeWidth="1.2" strokeOpacity="0.8" />
      <path d="M12 96 V22 C12 16.48 16.48 12 22 12 H96" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.6" />
      {/* Corner leaf flourishes */}
      <path
        d="M12 12 C18 26 30 36 46 40 C34 46 22 42 16 34 C12 28 10 20 12 12Z"
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M26 26 C38 18 52 14 68 14 C56 24 44 28 36 28 C30 28 26 26 26 26Z"
        fill={color}
        fillOpacity="0.14"
        stroke={color}
        strokeWidth="0.9"
      />
      <circle cx="16" cy="16" r="3" fill={color} />
      <circle cx="28" cy="28" r="2" fill={color} />
      <path d="M4 32 C12 30 18 24 20 16" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
};

// Royal Antique Gold Seal with H & A monogram
export const OrnamentalSeal: React.FC<{
  monogram?: string;
  size?: number;
  onClick?: () => void;
  isOpening?: boolean;
}> = ({ monogram = "H & A", size = 120, onClick, isOpening = false }) => {
  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`relative rounded-full cursor-pointer select-none transition-transform duration-700 ${
        isOpening ? 'scale-110 rotate-12' : 'hover:scale-105 active:scale-95'
      }`}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="sealMetallic" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#FFF5D6" />
            <stop offset="20%" stop-color="#E5C768" />
            <stop offset="50%" stop-color="#C59A3F" />
            <stop offset="85%" stop-color="#8E651D" />
            <stop offset="100%" stop-color="#5E4010" />
          </radialGradient>
          <linearGradient id="sealRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFAE0" />
            <stop offset="40%" stop-color="#D4AF37" />
            <stop offset="70%" stop-color="#936A1C" />
            <stop offset="100%" stop-color="#E0BA53" />
          </linearGradient>
          <filter id="sealDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0D1A10" floodOpacity="0.45" />
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FFF7D6" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Scalloped outer edge / wax crest */}
        <g filter="url(#sealDepth)">
          <circle cx="100" cy="100" r="92" fill="url(#sealMetallic)" stroke="url(#sealRing)" strokeWidth="3" />
          
          {/* Decorative milled dots rim */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 360) / 360 * Math.PI * 2;
            const cx = 100 + 82 * Math.cos(angle);
            const cy = 100 + 82 * Math.sin(angle);
            return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#4A340F" fillOpacity="0.6" />;
          })}

          {/* Inner ring */}
          <circle cx="100" cy="100" r="72" fill="none" stroke="url(#sealRing)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="67" fill="none" stroke="#6C4C14" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Botanical wreath on seal */}
          <path
            d="M50 100 C50 68 70 48 100 48 C130 48 150 68 150 100 C150 132 130 152 100 152 C70 152 50 132 50 100"
            fill="none"
            stroke="url(#sealRing)"
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />

          {/* Top leaf ornament */}
          <path d="M100 42 C103 48 103 54 100 58 C97 54 97 48 100 42Z" fill="#FFF2C6" />
          <path d="M93 50 C98 51 101 54 102 56 C97 56 94 54 93 50Z" fill="#E5C768" />
          <path d="M107 50 C102 51 99 54 98 56 C103 56 106 54 107 50Z" fill="#E5C768" />

          {/* Bottom leaf ornament */}
          <path d="M100 158 C103 152 103 146 100 142 C97 146 97 152 100 158Z" fill="#FFF2C6" />
          <path d="M93 150 C98 149 101 146 102 144 C97 144 94 146 93 150Z" fill="#E5C768" />
          <path d="M107 150 C102 149 99 146 98 144 C103 144 106 146 107 150Z" fill="#E5C768" />

          {/* Monogram text */}
          <text
            x="100"
            y="108"
            fontFamily="'Cinzel Decorative', Georgia, serif"
            fontSize="27"
            fontWeight="700"
            fill="#FFF8DE"
            textAnchor="middle"
            letterSpacing="2"
            style={{
              filter: 'drop-shadow(0 2px 2px rgba(45, 27, 4, 0.7))',
            }}
          >
            {monogram}
          </text>

          <text
            x="100"
            y="126"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="8"
            fontWeight="600"
            fill="#FFEBB0"
            textAnchor="middle"
            letterSpacing="3"
            opacity="0.9"
          >
            2027
          </text>
        </g>
      </svg>
    </div>
  );
};

// Champagne Curtains Drapery SVG (used for the authentic video curtain backdrop)
export const ChampagneCurtainBanner: React.FC<{ className?: string }> = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drapeGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E8DFD0" />
        <stop offset="40%" stop-color="#D9CCA3" />
        <stop offset="70%" stop-color="#BCA877" />
        <stop offset="100%" stop-color="#9C8754" />
      </linearGradient>
      <linearGradient id="fabricShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F7F1E5" stop-opacity="0.9" />
        <stop offset="25%" stop-color="#E2D4B7" stop-opacity="0.5" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.8" />
        <stop offset="75%" stop-color="#D9CCA3" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#F2E8D5" stop-opacity="0.9" />
      </linearGradient>
    </defs>
    
    {/* Swags and folds */}
    <g fill="url(#drapeGold)" opacity="0.95">
      {/* Center high swag */}
      <path d="M0 0 H1200 V40 C1050 40 950 120 600 120 C250 120 150 40 0 40 Z" />
      {/* Left swag */}
      <path d="M0 0 H600 C450 90 250 110 0 70 Z" fillOpacity="0.4" />
      {/* Right swag */}
      <path d="M1200 0 H600 C750 90 950 110 1200 70 Z" fillOpacity="0.4" />
    </g>
    
    {/* Tassel and rope detail line */}
    <path
      d="M0 38 C200 75 400 105 600 105 C800 105 1000 75 1200 38"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
      strokeDasharray="4 2"
    />
    <circle cx="600" cy="105" r="4" fill="#D4AF37" />
  </svg>
);

// Vintage Garden Fountain Illustration (authentic element from reference video)
export const GardenFountainIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#8B7340" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
      {/* Fountain tiers */}
      <path d="M50 15 V30" strokeWidth="1.5" />
      <path d="M46 30 H54 C54 36 46 36 46 30" fill="#E8DEC5" />
      <path d="M38 42 C38 36 62 36 62 42 L58 48 H42 L38 42Z" fill="#E8DEC5" />
      <path d="M30 60 C30 50 70 50 70 60 L65 72 H35 L30 60Z" fill="#E8DEC5" />
      {/* Base */}
      <path d="M22 84 C22 75 78 75 78 84 H22Z" fill="#D9CCA8" />
      <path d="M26 84 V88 H74 V84" />
      {/* Water droplets */}
      <path d="M50 15 C42 12 34 22 34 32" stroke="#688B77" strokeDasharray="1.5 2" />
      <path d="M50 15 C58 12 66 22 66 32" stroke="#688B77" strokeDasharray="1.5 2" />
      <path d="M50 15 C48 8 52 8 50 15" stroke="#688B77" strokeWidth="1.2" />
      {/* Surrounding botanical plants */}
      <path d="M20 84 C18 78 12 76 10 74 C16 74 18 78 20 84" fill="#5A7760" fillOpacity="0.4" />
      <path d="M80 84 C82 78 88 76 90 74 C84 74 82 78 80 84" fill="#5A7760" fillOpacity="0.4" />
    </g>
  </svg>
);

// Vintage Floral Divider line
export const VintageFloralDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "w-64 h-6",
  color = "#C8A452"
}) => (
  <svg viewBox="0 0 300 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="12" x2="110" y2="12" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
    <circle cx="115" cy="12" r="2" fill={color} />
    
    {/* Center flower rosette */}
    <g transform="translate(150, 12)">
      <circle cx="0" cy="0" r="3" fill={color} />
      <path d="M0 -6 C2 -3 2 3 0 6 C-2 3 -2 -3 0 -6Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.8" />
      <path d="M-6 0 C-3 2 3 2 6 0 C3 -2 -3 -2 -6 0Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.8" />
      <path d="M-4.2 -4.2 C-1.5 -1.5 1.5 1.5 4.2 4.2 C1.5 1.5 -1.5 -1.5 -4.2 -4.2Z" stroke={color} strokeWidth="0.6" />
      <path d="M4.2 -4.2 C1.5 -1.5 -1.5 1.5 -4.2 4.2 C-1.5 1.5 1.5 -1.5 4.2 -4.2Z" stroke={color} strokeWidth="0.6" />
    </g>

    <circle cx="185" cy="12" r="2" fill={color} />
    <line x1="190" y1="12" x2="290" y2="12" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
  </svg>
);
