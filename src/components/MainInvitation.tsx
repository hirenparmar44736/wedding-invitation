import React from 'react';
import { motion } from 'framer-motion';
import {
  ChampagneCurtainBanner,
  OrnamentalCorner,
  GardenFountainIllustration,
  VintageFloralDivider,
  LeafSprig,
} from './DecorativeArtwork';
import { weddingConfig } from '../config/wedding';

interface MainInvitationProps {
  lang: 'en' | 'gu';
}

export const MainInvitation: React.FC<MainInvitationProps> = ({ lang }) => {
  const { couple, dates, location } = weddingConfig;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center overflow-hidden bg-[#FAF7F2]">
      {/* Background Soft Botanical Foliage Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-35 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Main Luxury Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#E0D3BC] rounded-2xl p-6 sm:p-12 shadow-[0_25px_60px_-15px_rgba(40,55,42,0.12)] text-center overflow-hidden"
      >
        {/* Authentic Champagne Curtains Drapery Banner */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 pointer-events-none opacity-90 overflow-hidden">
          <ChampagneCurtainBanner className="w-full h-full object-cover" />
        </div>

        {/* Four Ornamental Vintage Corners */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <OrnamentalCorner position="top-left" className="w-14 h-14 sm:w-20 sm:h-20 text-[#C8A452]" />
        </div>
        <div className="absolute top-3 right-3 pointer-events-none">
          <OrnamentalCorner position="top-right" className="w-14 h-14 sm:w-20 sm:h-20 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <OrnamentalCorner position="bottom-left" className="w-14 h-14 sm:w-20 sm:h-20 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <OrnamentalCorner position="bottom-right" className="w-14 h-14 sm:w-20 sm:h-20 text-[#C8A452]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-16 sm:pt-20 pb-4 flex flex-col items-center">
          {/* Top Sprig */}
          <LeafSprig className="w-8 h-8 text-[#A88438] mb-3" stroke="#A88438" />

          {/* Sacred Opening Inscription */}
          <p className="text-[#846830] text-sm tracking-[0.25em] uppercase font-serif-luxury font-medium mb-1">
            {lang === 'gu' ? '॥ શ્રી ગણેશાય નમઃ ॥' : 'OM SHREE GANESHAYA NAMAHA'}
          </p>

          <h2 className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-medium mb-6">
            {lang === 'gu'
              ? 'પરિવારના આશીર્વાદ સાથે સ્નેહભર્યું નિમંત્રણ'
              : 'WITH THE BLESSINGS OF OUR FAMILIES'}
          </h2>

          {/* Invitation Invocation */}
          <p className="text-[#4E6152] font-serif-luxury text-base sm:text-lg italic max-w-lg mb-8 leading-relaxed">
            {lang === 'gu' ? (
              <>
                શ્રી પરમાર પરિવાર અને શ્રી મોઢવાણિયા પરિવાર આપ સર્વે સ્નેહીજનોને અમારા સંતાનોના શુભ વિવાહ
                પ્રસંગે સહર્ષ આમંત્રણ પાઠવે છે.
              </>
            ) : (
              <>
                The Parmar &amp; Modhwania families cordially request the honor of your presence to celebrate
                the joyous wedding ceremony of
              </>
            )}
          </p>

          {/* The Couple's Names — Prominently Displayed with Luxury Serif & Calligraphy */}
          <div className="my-3 flex flex-col items-center">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#1E3325] font-semibold tracking-wide flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
              <span>{couple.groom.name}</span>
              <span className="text-[#C8A452] font-serif text-3xl sm:text-4xl">♥</span>
              <span>{couple.bride.name}</span>
            </h1>

            <div className="mt-3">
              <VintageFloralDivider className="w-56 sm:w-72 h-6" color="#C8A452" />
            </div>
          </div>

          {/* Family Lineage / Parents Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 w-full max-w-lg text-center border-y border-[#E8DFC9] py-6">
            {/* Groom's Family */}
            <div className="flex flex-col items-center px-4">
              <span className="text-[#8B713A] text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-1">
                {lang === 'gu' ? 'વરપક્ષ' : "GROOM'S FAMILY"}
              </span>
              <p className="font-serif-luxury text-lg sm:text-xl text-[#213526] font-medium leading-snug">
                {couple.groom.fullName}
              </p>
              <p className="text-xs sm:text-sm text-[#546A58] mt-1.5 leading-relaxed">
                {lang === 'gu' ? 'સુપુત્ર: ' : 'Son of: '}
                <br />
                <span className="font-medium text-[#2E4233]">{couple.groom.parents.mother}</span>
                <br />
                &amp; <span className="font-medium text-[#2E4233]">{couple.groom.parents.father}</span>
              </p>
            </div>

            {/* Bride's Family */}
            <div className="flex flex-col items-center px-4 md:border-l border-[#E8DFC9]">
              <span className="text-[#8B713A] text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-1">
                {lang === 'gu' ? 'કન્યાપક્ષ' : "BRIDE'S FAMILY"}
              </span>
              <p className="font-serif-luxury text-lg sm:text-xl text-[#213526] font-medium leading-snug">
                {couple.bride.fullName}
              </p>
              <p className="text-xs sm:text-sm text-[#546A58] mt-1.5 leading-relaxed">
                {lang === 'gu' ? 'સુપુત્રી: ' : 'Daughter of: '}
                <br />
                <span className="font-medium text-[#2E4233]">{couple.bride.parents.mother}</span>
                <br />
                &amp; <span className="font-medium text-[#2E4233]">{couple.bride.parents.father}</span>
              </p>
            </div>
          </div>

          {/* Garden Fountain Decorative Illustration */}
          <div className="my-2 flex justify-center">
            <GardenFountainIllustration className="w-24 h-24" />
          </div>

          {/* Dates & Location Card Highlight */}
          <div className="mt-4 flex flex-col items-center">
            <p className="font-serif-luxury text-2xl sm:text-3xl text-[#1F3324] font-semibold tracking-wide">
              {lang === 'gu' ? dates.primaryDatesText.gu : dates.primaryDatesText.en}
            </p>
            <p className="text-sm sm:text-base text-[#617465] font-sans mt-1">
              {location.venueName[lang]}, {location.area[lang]}, {location.cityState[lang]}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
