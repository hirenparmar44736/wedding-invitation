import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { LeafSprig, VintageFloralDivider } from './DecorativeArtwork';

interface ScratchRevealProps {
  lang: 'en' | 'gu';
  onSaveTheDateClick: () => void;
}

export const ScratchReveal: React.FC<ScratchRevealProps> = ({ lang, onSaveTheDateClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  // Initialize Canvas Heart Coating
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device Pixel Ratio for crisp retina scratch
    const dpr = window.devicePixelRatio || 1;
    const width = 280;
    const height = 260;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Draw Heart Mask Path
    ctx.save();
    ctx.beginPath();
    const topCurveHeight = height * 0.3;
    ctx.moveTo(width / 2, height / 5);
    // Top left curve
    ctx.bezierCurveTo(width / 2, 0, 0, 0, 0, topCurveHeight);
    // Bottom left curve
    ctx.bezierCurveTo(0, (height + topCurveHeight) / 2, width / 2, (height + topCurveHeight) / 1.7, width / 2, height - 15);
    // Bottom right curve
    ctx.bezierCurveTo(width / 2, (height + topCurveHeight) / 1.7, width, (height + topCurveHeight) / 2, width, topCurveHeight);
    // Top right curve
    ctx.bezierCurveTo(width, 0, width / 2, 0, width / 2, height / 5);
    ctx.closePath();
    ctx.clip();

    // Sage Green Glitter Texture Background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#36533E');
    gradient.addColorStop(0.5, '#4D7058');
    gradient.addColorStop(1, '#2E4936');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle Glitter / Golden flakes on the scratch layer
    for (let i = 0; i < 220; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(235, 205, 115, 0.45)' : 'rgba(255, 255, 255, 0.35)';
      ctx.fill();
    }

    // Calligraphy guide in scratch heart
    ctx.fillStyle = '#F5ECD2';
    ctx.font = "bold 15px 'Cormorant Garamond', Georgia, serif";
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH HERE', width / 2, height / 2 - 8);

    ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = '#DDE8DB';
    ctx.fillText(lang === 'gu' ? 'સ્પર્શ કરીને ખોલો' : 'to reveal', width / 2, height / 2 + 14);

    // Small Gold Heart Icon in center
    ctx.font = '22px serif';
    ctx.fillStyle = '#E5C768';
    ctx.fillText('♥', width / 2, height / 2 + 45);

    ctx.restore();
  }, [lang]);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const triggerReveal = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);

    // Elegant gold celebration confetti
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#62836B', '#F5E6BF', '#917128', '#FFFFFF'],
      ticks: 200,
    });
  }, [isRevealed]);

  // Scratch action
  const scratch = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Check scratched percentage approximately every few scratches
    if (Math.random() > 0.4) {
      checkScratched();
    }
  };

  const checkScratched = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentCount = 0;
      const totalPixels = data.length / 4;

      // Sample every 16th pixel for performance
      for (let i = 3; i < data.length; i += 64) {
        if (data[i] === 0) {
          transparentCount++;
        }
      }

      const percent = (transparentCount / (totalPixels / 16)) * 100;

      if (percent > 38 && !isRevealed) {
        triggerReveal();
      }
    } catch {
      // In case of any cross-origin issue, allow fallback
    }
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  // Touch Handlers for Mobile Phone
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsScratching(true);
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden">
      {/* Decorative vintage frame */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-xl bg-white border border-[#E2D8C3] rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_-15px_rgba(40,55,42,0.1)] text-center flex flex-col items-center"
      >
        <LeafSprig className="w-8 h-8 text-[#A88438] mb-2" stroke="#A88438" />

        <h2 className="text-[#3A5240] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-1">
          {lang === 'gu' ? 'મનની વાત' : 'INTERACTIVE BLESSING'}
        </h2>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E3325] font-semibold mb-2">
          {lang === 'gu' ? 'સ્ક્રેચ કરી મંગલ સંદેશ મેળવો' : 'Scratch to Reveal'}
        </h3>

        <p className="text-[#6C7E70] text-xs sm:text-sm font-sans max-w-sm mb-6">
          {lang === 'gu'
            ? 'હૃદય પર આંગળી અથવા માઉસ ફેરવીને શુભ સંદેશ જાહેર કરો'
            : 'Gently scratch the sage-green heart below to unveil the couple’s message'}
        </p>

        {/* Scratch Heart Stage */}
        <div className="relative w-[280px] h-[260px] my-4 flex items-center justify-center select-none touch-none">
          {/* UNDERNEATH LAYER: The Revealed Message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center rounded-3xl bg-gradient-to-b from-[#FAF4EA] to-[#F1E8D5] border border-[#DFCBA7] shadow-inner">
            <Heart className="w-8 h-8 text-[#A63737] mb-2 fill-[#A63737]/20" />
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#1F3324] font-semibold italic leading-snug">
              "{weddingConfig.scratchReveal.hiddenMessage[lang]}"
            </p>
            <p className="text-xs sm:text-sm text-[#5C7060] font-sans mt-2 max-w-[210px] leading-relaxed">
              {weddingConfig.scratchReveal.subtitle[lang]}
            </p>
          </div>

          {/* TOP CANVAS SCRATCH COATING */}
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`absolute top-0 left-0 cursor-pointer z-10 transition-opacity duration-700 ${
              isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />
        </div>

        {/* Accessible Reveal-All Fallback Button for easy interaction */}
        {!isRevealed && (
          <button
            onClick={triggerReveal}
            type="button"
            className="mt-3 text-xs tracking-wider text-[#7A612A] underline underline-offset-4 hover:text-[#4A3B19] transition-colors"
          >
            {lang === 'gu' ? 'અથવા અહીં ક્લિક કરીને સીધું ખોલો' : 'Or tap here to reveal directly'}
          </button>
        )}

        {/* REVEALED ACTIONS: SAVE THE DATE BUTTON */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 flex flex-col items-center"
            >
              <VintageFloralDivider className="w-48 h-5 mb-4" color="#C8A452" />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onSaveTheDateClick}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#243B2B] via-[#33533D] to-[#243B2B] text-[#FFF4D0] border border-[#D4AF37] font-semibold text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E5C768]" />
                <span>{lang === 'gu' ? 'કેલેન્ડરમાં તારીખ સાચવો' : 'SAVE THE DATE'}</span>
                <Sparkles className="w-4 h-4 text-[#E5C768]" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
