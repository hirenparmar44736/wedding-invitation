import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'gu';
  onChange: (lang: 'en' | 'gu') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onChange }) => {
  return (
    <div className="bg-[#FAF7F2]/90 backdrop-blur-md border border-[#DFCFA8] rounded-full p-1 shadow-lg flex items-center gap-1">
      <div className="pl-2 pr-1 text-[#846A2C]">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => onChange('gu')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
          currentLang === 'gu'
            ? 'bg-[#263D2D] text-[#FFF6DB] shadow-sm'
            : 'text-[#4E6353] hover:text-[#1F3325]'
        }`}
      >
        ગુજરાતી
      </button>
      <span className="text-[#D3C7AB] text-xs">|</span>
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
          currentLang === 'en'
            ? 'bg-[#263D2D] text-[#FFF6DB] shadow-sm'
            : 'text-[#4E6353] hover:text-[#1F3325]'
        }`}
      >
        English
      </button>
    </div>
  );
};
