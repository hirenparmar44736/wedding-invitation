import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, MessageCircle, X } from 'lucide-react';

interface WhatsAppShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'gu';
}

export const WhatsAppShareModal: React.FC<WhatsAppShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [selectedLang, setSelectedLang] = useState<'gu' | 'en'>(lang);

  // Use current website origin or fallback
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://hiren-weds-ashlesha.vercel.app/';

  // Personalized Welcome Messages for WhatsApp
  const gujaratiMessage = `🌿 *શ્રી ગણેશાય નમઃ* 🌿\n\nસ્નેહી શ્રી,\n\nઅતિ આનંદ અને હર્ષ સાથે જણાવવાનું કે અમારા સંતાનો *Hiren ♥ Ashlesha* ના શુભ લગ્નોત્સવ પ્રસંગે આપ શ્રીને સપરિવાર ભાવભર્યું આમંત્રણ પાઠવીએ છીએ.\n\n🗓️ *તારીખ:* ૨૪ અને ૨૫ ફેબ્રુઆરી ૨૦૨૭\n📍 *સ્થળ:* પરમાર નિવાસ, ઉમરાળા, ગુજરાત\n\n✨ *ડિજિટલ આમંત્રણ પત્રિકા જોવા માટે નીચેની લિંક પર ક્લિક કરો:*\n👉 ${shareUrl}\n\nઆપના સ્નેહભર્યા આશીર્વાદ અને પાવન ઉપસ્થિતિની અભિલાષા સાથે,\n— *પરમાર અને મોઢવાણિયા પરિવાર*`;

  const englishMessage = `🌿 *OM SHREE GANESHAYA NAMAHA* 🌿\n\nDear Family & Friends,\n\nWith immense joy and the blessings of our families, we cordially invite you to celebrate the wedding celebrations of\n\n💍 *Hiren ♥ Ashlesha*\n\n🗓️ *Dates:* 24 & 25 February 2027\n📍 *Venue:* Family Residence, Umrala, Gujarat\n\n✨ *Please open our interactive wedding invitation here:*\n👉 ${shareUrl}\n\nWe look forward to celebrating this special milestone with you!\n— *Parmar & Modhwania Families*`;

  const activeMessage = selectedLang === 'gu' ? gujaratiMessage : englishMessage;

  const handleShareToWhatsApp = () => {
    const encodedText = encodeURIComponent(activeMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(activeMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#FFFDF9] border border-[#D5C29C] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#7C6331] hover:text-[#263D2D] rounded-full hover:bg-[#F3EAD8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-2xl text-[#1E3325] font-bold">
                {lang === 'gu' ? 'વોટ્સએપ પર આમંત્રણ મોકલો' : 'Share on WhatsApp'}
              </h3>
              <p className="text-xs text-[#6C7E6F] font-sans">
                {lang === 'gu'
                  ? 'સુંદર સ્વાગત સંદેશ અને લિંક સાથે આમંત્રણ શેર કરો'
                  : 'Includes personalized welcome message & direct website link'}
              </p>
            </div>
          </div>

          {/* Language Toggle for Message */}
          <div className="flex items-center gap-2 my-3 p-1 bg-[#F1E8D5] rounded-full w-fit">
            <button
              type="button"
              onClick={() => setSelectedLang('gu')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedLang === 'gu'
                  ? 'bg-[#27402F] text-[#FFF6DB] shadow-sm'
                  : 'text-[#5F7362] hover:text-[#1E3325]'
              }`}
            >
              ગુજરાતી સંદેશ
            </button>
            <button
              type="button"
              onClick={() => setSelectedLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedLang === 'en'
                  ? 'bg-[#27402F] text-[#FFF6DB] shadow-sm'
                  : 'text-[#5F7362] hover:text-[#1E3325]'
              }`}
            >
              English Message
            </button>
          </div>

          {/* Message Preview Box */}
          <div className="relative my-3 p-4 bg-[#F8F4EA] border border-[#DECFA4] rounded-2xl max-h-48 overflow-y-auto font-sans text-xs sm:text-sm text-[#2C3E30] leading-relaxed whitespace-pre-line shadow-inner">
            {activeMessage}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
            <button
              onClick={handleShareToWhatsApp}
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'gu' ? 'વોટ્સએપ પર મોકલો' : 'SHARE TO WHATSAPP'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#FAF5EB] hover:bg-[#F2E8D2] text-[#2F4735] border border-[#C5B38C] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'gu' ? 'કોપી થયું!' : 'COPIED!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8C6F2A]" />
                  <span>{lang === 'gu' ? 'સંદેશ કોપી કરો' : 'COPY TEXT'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
