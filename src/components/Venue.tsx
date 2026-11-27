import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { LeafSprig, OrnamentalCorner } from './DecorativeArtwork';

interface VenueProps {
  lang: 'en' | 'gu';
}

export const Venue: React.FC<VenueProps> = ({ lang }) => {
  const { location } = weddingConfig;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center bg-[#F3EDE2]/60 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#DFD3BA] rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_-15px_rgba(40,55,42,0.1)] text-center overflow-hidden"
      >
        <div className="absolute top-3 left-3 pointer-events-none">
          <OrnamentalCorner position="top-left" className="w-12 h-12 text-[#C8A452]" />
        </div>
        <div className="absolute top-3 right-3 pointer-events-none">
          <OrnamentalCorner position="top-right" className="w-12 h-12 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <OrnamentalCorner position="bottom-left" className="w-12 h-12 text-[#C8A452]" />
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <OrnamentalCorner position="bottom-right" className="w-12 h-12 text-[#C8A452]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <LeafSprig className="w-8 h-8 text-[#A88438] mb-2" stroke="#A88438" />

          <span className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-1">
            {lang === 'gu' ? 'સ્થળ વિગત' : 'CELEBRATION VENUE'}
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E3325] font-semibold mb-3">
            {lang === 'gu' ? 'શુભ વિવાહ સ્થળ' : 'Wedding Location'}
          </h2>

          <div className="my-6 p-6 rounded-2xl bg-[#FAF5EC] border border-[#E5D7BF] w-full max-w-md flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#EFE3CD] border border-[#C8A452] flex items-center justify-center text-[#876B26] mb-3">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1E3325] font-bold">
              {location.venueName[lang]}
            </h3>

            <p className="font-serif-luxury text-xl text-[#394E3E] font-medium mt-1">
              {location.area[lang]}
            </p>

            <p className="text-xs sm:text-sm text-[#627566] font-sans mt-0.5">
              {location.cityState[lang]}
            </p>

            <p className="text-xs text-[#826A33] mt-3 italic font-serif-luxury">
              {lang === 'gu'
                ? 'ઉમરાળા ખાતે પરમાર પરિવારના આંગણે પધારવા ભાવભર્યું આમંત્રણ.'
                : 'We warmly welcome you to join us at the family residence in Umrala.'}
            </p>
          </div>

          {/* GET DIRECTIONS BUTTON */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#27402F] text-[#FFF7E0] border border-[#D4AF37] font-semibold text-sm tracking-[0.2em] uppercase shadow-lg hover:bg-[#1E3325] transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#E5C768]" />
            <span>{lang === 'gu' ? 'નકશા પર દિશા-નિર્દેશ (DIRECTIONS)' : 'GET DIRECTIONS'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E5C768]" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
