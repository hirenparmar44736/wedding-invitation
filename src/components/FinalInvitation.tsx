import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { LeafSprig, VintageFloralDivider, OrnamentalCorner } from './DecorativeArtwork';

interface FinalInvitationProps {
  lang: 'en' | 'gu';
}

export const FinalInvitation: React.FC<FinalInvitationProps> = ({ lang }) => {
  const { location } = weddingConfig;

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 flex justify-center items-center bg-[#FAF7F2] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#DFCFA8] rounded-3xl p-8 sm:p-14 shadow-[0_25px_60px_-15px_rgba(40,55,42,0.12)] text-center overflow-hidden"
      >
        {/* Four corner floral accents */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <OrnamentalCorner position="top-left" className="w-14 h-14 text-[#C8A452]" />
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <OrnamentalCorner position="top-right" className="w-14 h-14 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <OrnamentalCorner position="bottom-left" className="w-14 h-14 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <OrnamentalCorner position="bottom-right" className="w-14 h-14 text-[#C8A452]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <LeafSprig className="w-8 h-8 text-[#A88438] mb-3" stroke="#A88438" />

          {/* Closing Heading */}
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E3325] font-semibold tracking-wide mb-4 max-w-lg leading-tight">
            {lang === 'gu'
              ? 'અમે આપની ઉપસ્થિતિ અને આશીર્વાદની પ્રતીક્ષા કરીશું'
              : 'We look forward to celebrating with you.'}
          </h2>

          <p className="text-xs sm:text-sm text-[#59705E] font-serif-luxury italic max-w-md mb-6 leading-relaxed">
            {lang === 'gu'
              ? 'આપના સ્નેહ, ઉપસ્થિતિ અને મંગલ આશીર્વાદથી અમારો વિવાહ પ્રસંગ યાદગાર બનશે.'
              : 'Your gracious presence and heartfelt blessings will make our wedding celebration truly unforgettable.'}
          </p>

          <VintageFloralDivider className="w-64 h-6 my-4" color="#C8A452" />

          {/* Couple Display */}
          <h3 className="font-serif-luxury text-4xl sm:text-5xl text-[#1E3325] font-semibold mt-2">
            Hiren <span className="text-[#C8A452]">♥</span> Ashlesha
          </h3>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#866A2B] font-semibold mt-4">
            {lang === 'gu' ? '૨૪–૨૫ ફેબ્રુઆરી ૨૦૨૭' : '24–25 FEBRUARY 2027'}
          </p>

          <p className="text-xs sm:text-sm text-[#617464] font-sans mt-1">
            {location.area[lang]}, {location.cityState[lang]}
          </p>

          <div className="mt-8 pt-6 border-t border-[#E8DEC7] text-[11px] text-[#8C9F90] tracking-widest uppercase font-sans">
            Parmar &amp; Modhwania Families • With Warm Regards
          </div>
        </div>
      </motion.div>
    </section>
  );
};
