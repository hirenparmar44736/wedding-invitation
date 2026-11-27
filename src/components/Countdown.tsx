import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { LeafSprig } from './DecorativeArtwork';

interface CountdownProps {
  lang: 'en' | 'gu';
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ lang }) => {
  const calculateTimeLeft = (): TimeRemaining => {
    const targetDate = new Date(weddingConfig.dates.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: lang === 'gu' ? 'દિવસ' : 'DAYS', value: timeLeft.days },
    { label: lang === 'gu' ? 'કલાક' : 'HOURS', value: timeLeft.hours },
    { label: lang === 'gu' ? 'મિનિટ' : 'MINUTES', value: timeLeft.minutes },
    { label: lang === 'gu' ? 'સેકન્ડ' : 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 flex justify-center items-center bg-[#23382A] text-[#FAF7F2] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        <LeafSprig className="w-8 h-8 text-[#E5C768] mb-2" stroke="#E5C768" />

        <span className="text-[#C5D8C2] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-medium mb-1">
          {lang === 'gu' ? 'મંગલ ક્ષણની ગણતરી' : 'COUNTDOWN TO THE CELEBRATION'}
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FFF3D1] font-semibold mb-8">
          {lang === 'gu' ? 'શુભ મુહૂર્તની પ્રતીક્ષા' : 'Awaiting the Auspicious Day'}
        </h2>

        {/* Countdown Digits Matrix */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 w-full max-w-xl">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-3 sm:p-5 rounded-2xl bg-[#1A2C20]/80 border border-[#D4AF37]/30 shadow-lg backdrop-blur-sm"
            >
              <div className="font-serif-luxury text-3xl sm:text-5xl text-[#FFF6DB] font-bold tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-[#C5D8C2] tracking-[0.2em] font-sans font-medium uppercase mt-2">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-[#BFD2BE] font-serif-luxury italic">
          {lang === 'gu'
            ? '૨૪ ફેબ્રુઆરી ૨૦૨૭ • ઉમરાળા, ગુજરાત'
            : '24 February 2027 • Umrala, Gujarat'}
        </p>
      </div>
    </section>
  );
};
