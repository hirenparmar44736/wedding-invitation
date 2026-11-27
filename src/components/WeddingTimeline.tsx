import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Sun, Music, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { LeafSprig } from './DecorativeArtwork';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Utensils,
  Sun,
  Music,
  HeartHandshake,
};

interface WeddingTimelineProps {
  lang: 'en' | 'gu';
}

export const WeddingTimeline: React.FC<WeddingTimelineProps> = ({ lang }) => {
  const { schedule } = weddingConfig;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <LeafSprig className="w-8 h-8 text-[#A88438] mb-2" stroke="#A88438" />

        <span className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-1">
          {lang === 'gu' ? 'મંગલ કાર્યક્રમ' : 'PROGRAM OF CELEBRATION'}
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E3325] font-semibold text-center mb-4">
          {lang === 'gu' ? 'લગ્નોત્સવ સમયસારણી' : 'Wedding Itinerary'}
        </h2>

        <p className="text-xs sm:text-sm text-[#5F7464] font-serif-luxury italic text-center max-w-md mb-12">
          {lang === 'gu'
            ? 'પરંપરા અને સ્નેહથી ગૂંથાયેલા મંગલ પ્રસંગોની રૂપરેખા'
            : 'Join us across two blissful days of timeless Indian rituals, culinary delights and celebration'}
        </p>

        {/* Days Accordion / Section */}
        <div className="w-full space-y-16">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: dayIndex * 0.15 }}
              className="relative bg-[#FFFDF9] border border-[#E3D7C1] rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_-15px_rgba(40,55,42,0.08)]"
            >
              {/* Day Header Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#EADFCB] pb-5 mb-8 text-center sm:text-left gap-2">
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#27402F] text-[#FFF4D4] text-xs font-semibold tracking-widest uppercase mb-1">
                    {lang === 'gu' ? `દિવસ ${day.dayNumber}` : `DAY ${day.dayNumber}`}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1E3325] font-bold">
                    {day.formattedDate[lang]}
                  </h3>
                </div>
                <div className="text-xs text-[#826932] font-sans font-medium uppercase tracking-wider">
                  Umrala, Gujarat
                </div>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#D4AF37] before:via-[#B59132] before:to-[#8E6D1C]">
                {day.events.map((evt, evtIndex) => {
                  const Icon = iconMap[evt.iconName] || Sparkles;

                  return (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: evtIndex * 0.1 }}
                      className="relative flex items-start gap-4 sm:gap-6 group"
                    >
                      {/* Timeline Node Icon */}
                      <div className="absolute -left-[30px] sm:-left-[43px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FAF4E6] border-2 border-[#C8A452] flex items-center justify-center text-[#8C6F2A] shadow-md group-hover:scale-110 group-hover:bg-[#C8A452] group-hover:text-white transition-all">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Event Details Card */}
                      <div className="flex-1 bg-[#F9F5EC]/70 rounded-2xl p-4 sm:p-5 border border-[#E8DEC9] hover:border-[#D4AF37] transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#1E3325] font-semibold">
                            {evt.name[lang]}
                          </h4>
                          {/* Day period badge */}
                          <span className="self-start sm:self-center px-2.5 py-0.5 rounded-full bg-[#E8DEC7] text-[#553E17] text-xs font-semibold tracking-wider uppercase">
                            {evt.timeDisplay ? evt.timeDisplay[lang] : evt.period[lang]}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#546857] leading-relaxed">
                          {evt.description[lang]}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
