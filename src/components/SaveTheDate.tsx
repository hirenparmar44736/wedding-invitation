import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Check, MapPin } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { LeafSprig, VintageFloralDivider, OrnamentalCorner } from './DecorativeArtwork';

interface SaveTheDateProps {
  lang: 'en' | 'gu';
}

export const SaveTheDate: React.FC<SaveTheDateProps> = ({ lang }) => {
  const [downloaded, setDownloaded] = useState(false);
  const { dates, location } = weddingConfig;

  // Generate real .ics calendar invitation file download
  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Hiren & Ashlesha Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:Hiren & Ashlesha Wedding',
      'X-WR-TIMEZONE:Asia/Kolkata',
      // EVENT 1: 24 February 2027
      'BEGIN:VEVENT',
      'UID:hiren-ashlesha-day1-20270224@wedding',
      'DTSTAMP:20261124T000000Z',
      'DTSTART;TZID=Asia/Kolkata:20270224T080000',
      'DTEND;TZID=Asia/Kolkata:20270224T230000',
      'SUMMARY:Hiren & Ashlesha Wedding — Day 1 Celebrations (Ganesh Pujan, Jamanvar, Haldi & Garba)',
      'DESCRIPTION:Day 1 celebrations of Hiren Parmar & Ashlesha Modhvania wedding.\\nEvents: Ganesh Pujan (Morning), Jamanvar (Afternoon), Haldi (Evening), Raas Garba (Night).\\nVenue: Family Residence, Umrala, Gujarat.\\nMap: https://maps.app.goo.gl/DRkNPQi3CRdGRTUr5',
      'LOCATION:Family Residence, Umrala, Gujarat, India',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      // EVENT 2: 25 February 2027
      'BEGIN:VEVENT',
      'UID:hiren-ashlesha-day2-20270225@wedding',
      'DTSTAMP:20261124T000000Z',
      'DTSTART;TZID=Asia/Kolkata:20270225T080000',
      'DTEND;TZID=Asia/Kolkata:20270225T140000',
      'SUMMARY:Hiren & Ashlesha Wedding — Shadi / Wedding Ceremony (Day 2)',
      'DESCRIPTION:Auspicious Shadi / Sacred Vedic Marriage Ceremony of Hiren Parmar & Ashlesha Modhvania.\\nVenue: Family Residence, Umrala, Gujarat.\\nMap: https://maps.app.goo.gl/DRkNPQi3CRdGRTUr5',
      'LOCATION:Family Residence, Umrala, Gujarat, India',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Hiren-Ashlesha-Wedding-2027.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="save-the-date-section" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center bg-[#F5EFE6]/60">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#DFCFA8] rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_-15px_rgba(40,55,42,0.1)] text-center overflow-hidden"
      >
        {/* Subtle Ornamental Corners */}
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
          <LeafSprig className="w-8 h-8 text-[#A88438] mb-3" stroke="#A88438" />

          <span className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-2">
            {lang === 'gu' ? 'મંગલ તારીખ સાચવો' : 'SAVE THE DATES'}
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#1E3325] font-semibold tracking-wide mb-2">
            Hiren <span className="text-[#C8A452]">♥</span> Ashlesha
          </h2>

          <VintageFloralDivider className="w-56 h-5 my-3" color="#C8A452" />

          {/* Elegant Date Callout Badge */}
          <div className="my-4 px-6 py-4 rounded-2xl bg-[#F6EFE2] border border-[#DECFA4] max-w-md w-full">
            <p className="font-serif-luxury text-2xl sm:text-3xl text-[#1E3325] font-semibold">
              {dates.primaryDatesText[lang]}
            </p>
            <p className="text-xs sm:text-sm text-[#5B6F5F] font-sans mt-1 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A452]" />
              <span>{location.venueName[lang]}, {location.area[lang]}, {location.cityState[lang]}</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#5F7363] font-serif-luxury italic max-w-md mb-8">
            {lang === 'gu'
              ? 'કૃપા કરીને આ શુભ તારીખો આપના કેલેન્ડરમાં સાચવી લેશો, જેથી આપની ઉપસ્થિતિથી અમારો પ્રસંગ દીપી ઉઠે.'
              : 'Please mark these auspicious days on your calendar to join us in commemorating our sacred journey.'}
          </p>

          {/* Add to Calendar Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadCalendar}
            className="px-8 py-3.5 rounded-full bg-[#27402F] text-[#FFF6DB] border border-[#D4AF37] font-semibold text-sm tracking-[0.15em] uppercase shadow-md hover:bg-[#1E3325] transition-colors flex items-center gap-3 cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'gu' ? 'કેલેન્ડર ડાઉનલોડ થયું!' : 'CALENDAR SAVED!'}</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 text-[#E5C768]" />
                <span>{lang === 'gu' ? 'કેલેન્ડરમાં ઉમેરો (.ICS)' : 'ADD TO CALENDAR'}</span>
                <Download className="w-4 h-4 text-[#E5C768]" />
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
