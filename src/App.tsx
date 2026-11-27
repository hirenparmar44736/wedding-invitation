import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { OpeningInvitation } from './components/OpeningInvitation';
import { MainInvitation } from './components/MainInvitation';
import { ScratchReveal } from './components/ScratchReveal';
import { SaveTheDate } from './components/SaveTheDate';
import { Countdown } from './components/Countdown';
import { WeddingTimeline } from './components/WeddingTimeline';
import { Venue } from './components/Venue';
import { DressCode } from './components/DressCode';
import { FinalInvitation } from './components/FinalInvitation';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { WhatsAppShareModal } from './components/WhatsAppShareModal';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'gu' | 'en'>('gu');
  const [showShareModal, setShowShareModal] = useState(false);

  const scrollToSaveTheDate = () => {
    const el = document.getElementById('save-the-date-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#243729] font-sans antialiased selection:bg-[#435C4A]/20">
      {/* Top Floating Controls: Language Switcher & WhatsApp Share Button */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        {/* Quick WhatsApp Share Floating Button */}
        <button
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] active:scale-95 transition-all text-xs font-semibold cursor-pointer border border-white/30"
          title="Share Invitation on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span className="hidden sm:inline">{lang === 'gu' ? 'શેર કરો' : 'Share'}</span>
        </button>

        {/* Language Switcher */}
        <LanguageSwitcher currentLang={lang} onChange={setLang} />
      </div>

      {/* WhatsApp Share Dialog Modal */}
      <WhatsAppShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        lang={lang}
      />

      {/* Opening Invitation Panels Overlay */}
      <AnimatePresence>
        {!isOpen && (
          <OpeningInvitation
            lang={lang}
            onOpen={() => setIsOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Main Experience Flow */}
      <main className="w-full flex flex-col items-center">
        {/* Section 2: Main Wedding Invitation */}
        <MainInvitation lang={lang} />

        {/* Section 3: Interactive Scratch to Reveal */}
        <ScratchReveal lang={lang} onSaveTheDateClick={scrollToSaveTheDate} />

        {/* Section 4: Save The Date with real .ics Download */}
        <SaveTheDate lang={lang} />

        {/* Section 5: Live Countdown to 24 Feb 2027 */}
        <Countdown lang={lang} />

        {/* Section 6: Wedding Timeline */}
        <WeddingTimeline lang={lang} />

        {/* Section 7: Venue and Exact Google Maps Destination */}
        <Venue lang={lang} />

        {/* Section 8: Traditional Dress Code */}
        <DressCode lang={lang} />

        {/* Section 9: Final Invitation Closing */}
        <FinalInvitation lang={lang} />

        {/* Bottom Call to Action for Guests to Share */}
        <section className="w-full py-12 px-4 flex justify-center bg-[#FAF4E8] border-t border-[#DECFA4]">
          <div className="text-center flex flex-col items-center max-w-md">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6F2A] font-semibold mb-2">
              {lang === 'gu' ? 'મિત્રો અને સ્નેહીજનો સાથે વહેંચો' : 'SHARE WITH LOVED ONES'}
            </span>
            <p className="text-xs sm:text-sm text-[#5C7161] font-sans mb-5">
              {lang === 'gu'
                ? 'આ સુંદર ડિજિટલ આમંત્રણ પત્રિકા આપના વોટ્સએપ ગ્રૂપ કે પરિવારજનો સાથે સરળતાથી શેર કરો.'
                : 'Share this elegant digital invitation with friends and family members on WhatsApp.'}
            </p>
            <button
              onClick={() => setShowShareModal(true)}
              className="px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'gu' ? 'વોટ્સએપ પર આમંત્રણ શેર કરો' : 'SHARE INVITATION ON WHATSAPP'}</span>
            </button>
          </div>
        </section>
      </main>

      {/* Subtle Footer */}
      <footer className="w-full py-6 text-center text-xs text-[#7D9181] font-serif-luxury bg-[#FAF7F2] border-t border-[#EAE1D1]">
        Hiren ♥ Ashlesha • 24 &amp; 25 February 2027 • Umrala, Gujarat
      </footer>
    </div>
  );
}

export default App;
