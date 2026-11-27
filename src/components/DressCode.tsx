import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { LeafSprig } from './DecorativeArtwork';

// Custom SVG motifs for traditional Indian attire
const SareeLehengaMotif: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#9F7E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 22 C44 26 56 26 62 22" />
      <path d="M38 22 L30 36 L40 40 L45 32 L55 32 L60 40 L70 36 L62 22" fill="#EADFCE" />
      <path d="M42 42 H58 L78 88 H22 L42 42Z" fill="#F4EDE1" />
      <path d="M50 42 V88" strokeDasharray="3 3" />
      <path d="M36 46 L34 88" strokeDasharray="2 3" />
      <path d="M64 46 L66 88" strokeDasharray="2 3" />
      <path d="M22 84 H78" strokeWidth="2" stroke="#C8A452" />
      <path d="M34 26 C26 38 28 62 38 74" stroke="#7A9380" strokeWidth="1.2" />
    </g>
  </svg>
);

const KurtaSherwaniMotif: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#9F7E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M42 22 H58 V28 H42 V22Z" fill="#C8A452" />
      <path d="M30 28 L42 24 H58 L70 28 L72 50 L64 52 L64 88 H36 L36 52 L28 50 L30 28Z" fill="#F4EDE1" />
      <path d="M50 28 V56" stroke="#9F7E33" strokeWidth="1" />
      <circle cx="50" cy="34" r="1.5" fill="#C8A452" />
      <circle cx="50" cy="40" r="1.5" fill="#C8A452" />
      <circle cx="50" cy="46" r="1.5" fill="#C8A452" />
      <circle cx="50" cy="52" r="1.5" fill="#C8A452" />
      <path d="M56 38 H62 V43 H56 Z" fill="#698570" />
      <path d="M36 84 H64" strokeWidth="2" stroke="#C8A452" />
    </g>
  </svg>
);

interface DressCodeProps {
  lang: 'en' | 'gu';
}

export const DressCode: React.FC<DressCodeProps> = ({ lang }) => {
  const { dressCode } = weddingConfig;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        <LeafSprig className="w-8 h-8 text-[#A88438] mb-2" stroke="#A88438" />

        <span className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-1">
          {lang === 'gu' ? 'પરિધાન / વસ્ત્ર શૈલી' : 'ATTIRE INSPIRATION'}
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E3325] font-semibold mb-3">
          {lang === 'gu' ? 'ડ્રેસ કોડ માર્ગદર્શન' : 'Dress Code'}
        </h2>

        <p className="text-xs sm:text-sm text-[#5C7161] font-serif-luxury italic max-w-md mb-8">
          {dressCode.colorNote[lang]}
        </p>

        {/* Two Attire Cards: Women & Men */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* WOMEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E3D7C1] shadow-[0_10px_30px_-10px_rgba(40,55,42,0.06)] flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#FAF4E8] border border-[#DFCEAB] flex items-center justify-center mb-4">
              <SareeLehengaMotif className="w-12 h-12" />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#8C6F2A] mb-1">
              {dressCode.women.title[lang]}
            </span>

            <h3 className="font-serif-luxury text-2xl text-[#1E3325] font-bold">
              {dressCode.women.attire[lang]}
            </h3>

            <p className="text-xs text-[#687C6D] font-sans mt-2">
              {dressCode.women.note[lang]}
            </p>
          </motion.div>

          {/* MEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E3D7C1] shadow-[0_10px_30px_-10px_rgba(40,55,42,0.06)] flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#FAF4E8] border border-[#DFCEAB] flex items-center justify-center mb-4">
              <KurtaSherwaniMotif className="w-12 h-12" />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#8C6F2A] mb-1">
              {dressCode.men.title[lang]}
            </span>

            <h3 className="font-serif-luxury text-2xl text-[#1E3325] font-bold">
              {dressCode.men.attire[lang]}
            </h3>

            <p className="text-xs text-[#687C6D] font-sans mt-2">
              {dressCode.men.note[lang]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
