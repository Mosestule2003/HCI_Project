'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '@/data/slides';
import { TitleSlide, ContentSlide, ModelSlide, CanvasSlide, AnalysisSlide } from './Slides';
import { Slide } from '@/data/slides';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const PAGE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? '3.5%' : '-3.5%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? '-3.5%' : '3.5%', opacity: 0 }),
};

const PAGE_TRANSITION = { duration: 0.36, ease: [0.25, 0.46, 0.45, 0.94] };

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case 'title':    return <TitleSlide    slide={slide} />;
    case 'content':  return <ContentSlide  slide={slide} />;
    case 'model':    return <ModelSlide    slide={slide} />;
    case 'canvas':   return <CanvasSlide   slide={slide} />;
    case 'analysis': return <AnalysisSlide slide={slide} />;
    default:         return <ContentSlide  slide={slide} />;
  }
}

interface PresentationProps {
  currentIndex: number;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (i: number) => void;
}

export default function Presentation({ currentIndex, direction, onNext, onPrev, onGoTo }: PresentationProps) {
  const slide = slides[currentIndex];

  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">

      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-[#e5e7eb] bg-white shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={2} />
          </div>
          <span className="text-[11px] font-700 tracking-widest uppercase text-[#374151]">
            Behavioral Biometrics
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? 'w-5 h-[5px] bg-[#16A34A]'
                  : 'w-[5px] h-[5px] bg-[#d1d5db] hover:bg-[#9ca3af]'
              }`}
            />
          ))}
        </div>

        <span className="text-[11px] font-600 text-[#9ca3af] tabular-nums">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Slide area ──────────────────────────────────────────────── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={PAGE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={PAGE_TRANSITION}
            className="absolute inset-0"
          >
            {renderSlide(slide)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
