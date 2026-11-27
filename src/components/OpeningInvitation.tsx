import React from 'react';
import { motion } from 'framer-motion';
import { OrnamentalSeal, LeafSprig, OrnamentalCorner } from './DecorativeArtwork';
import { weddingConfig } from '../config/wedding';

interface OpeningInvitationProps {
  onOpen: () => void;
  lang: 'en' | 'gu';
}

export const OpeningInvitation: React.FC<OpeningInvitationProps> = ({ onOpen, lang }) => {
  const [isOpening, setIsOpening] = React.useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#18261C]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Container with 3D perspective */}
      <div className="relative w-full h-full flex overflow-hidden">
        {/* LEFT PANEL / GATE */}
        <motion.div
          className="relative w-1/2 h-full bg-gradient-to-br from-[#23382A] via-[#2F4837] to-[#1E3024] border-r border-[#D4AF37]/30 flex flex-col justify-between p-6 sm:p-12 origin-left shadow-2xl"
          animate={isOpening ? { x: '-100%', rotateY: -25, opacity: 0.95 } : { x: 0, rotateY: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Subtle Embossed Floral Background Pattern */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="relative z-10">
            <OrnamentalCorner position="top-left" className="w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF37]" />
          </div>

          <div className="relative z-10 flex flex-col items-end text-right pr-2 sm:pr-8">
            <span className="text-[#C2D4BE] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans">
              {lang === 'gu' ? 'મંગલ આમંત્રણ' : 'A SPECIAL'}
            </span>
            <span className="font-serif-luxury text-2xl sm:text-4xl text-[#F4E8C1] tracking-wide mt-1">
              {weddingConfig.couple.groom.name}
            </span>
          </div>

          <div className="relative z-10">
            <OrnamentalCorner position="bottom-left" className="w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF37]" />
          </div>
        </motion.div>

        {/* RIGHT PANEL / GATE */}
        <motion.div
          className="relative w-1/2 h-full bg-gradient-to-bl from-[#2A4132] via-[#24382A] to-[#1A2A1E] border-l border-[#D4AF37]/30 flex flex-col justify-between p-6 sm:p-12 origin-right shadow-2xl"
          animate={isOpening ? { x: '100%', rotateY: 25, opacity: 0.95 } : { x: 0, rotateY: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Subtle Embossed Floral Background Pattern */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

          <div className="relative z-10 flex justify-end">
            <OrnamentalCorner position="top-right" className="w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF37]" />
          </div>

          <div className="relative z-10 flex flex-col items-start text-left pl-2 sm:pl-8">
            <span className="text-[#C2D4BE] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans">
              {lang === 'gu' ? 'શુભ લગ્નોત્સવ' : 'INVITATION'}
            </span>
            <span className="font-serif-luxury text-2xl sm:text-4xl text-[#F4E8C1] tracking-wide mt-1">
              {weddingConfig.couple.bride.name}
            </span>
          </div>

          <div className="relative z-10 flex justify-end">
            <OrnamentalCorner position="bottom-right" className="w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF37]" />
          </div>
        </motion.div>

        {/* CENTER OVERLAY: SEAL & INTERACTIVE OPEN TRIGGER */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4">
          <motion.div
            className="flex flex-col items-center pointer-events-auto"
            animate={
              isOpening
                ? { scale: 1.25, opacity: 0, y: -20, transition: { duration: 0.7 } }
                : { scale: 1, opacity: 1 }
            }
          >
            {/* Top Botanical sprig */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-3"
            >
              <LeafSprig className="w-8 h-8 text-[#E5C768]" stroke="#E5C768" />
            </motion.div>

            {/* Couple Title */}
            <motion.h1
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif-luxury text-3xl sm:text-5xl text-[#FFF3CD] text-center font-medium tracking-wide drop-shadow-md mb-1"
            >
              Hiren <span className="text-[#E8BA45] text-2xl sm:text-3xl">♥</span> Ashlesha
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.4 }}
              className="text-[#C5D6C1] text-xs sm:text-sm tracking-[0.35em] uppercase font-sans mb-8 text-center"
            >
              {lang === 'gu' ? '૨૪ અને ૨૫ ફેબ્રુઆરી ૨૦૨૭' : '24 & 25 FEBRUARY 2027'}
            </motion.p>

            {/* Antique Gold Seal */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer"
              onClick={handleOpenClick}
            >
              <div className="absolute -inset-4 rounded-full bg-[#E5C768]/15 blur-xl animate-pulse" />
              <OrnamentalSeal
                monogram={weddingConfig.couple.monogram}
                size={120}
                isOpening={isOpening}
              />
            </motion.div>

            {/* Instruction button */}
            <motion.button
              onClick={handleOpenClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, repeat: Infinity, repeatType: 'reverse', duration: 1.8 }}
              className="mt-8 px-7 py-2.5 rounded-full bg-[#18261C]/80 border border-[#D4AF37]/80 text-[#FFF1C6] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase shadow-lg backdrop-blur-md flex items-center gap-2 group cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#E5C768] group-hover:scale-125 transition-transform" />
              <span>{lang === 'gu' ? 'આમંત્રણ ખોલવા સ્પર્શ કરો' : 'TAP TO OPEN'}</span>
              <span className="w-2 h-2 rounded-full bg-[#E5C768] group-hover:scale-125 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
