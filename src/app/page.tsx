'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { slides } from '@/data/slides';

const Presentation = dynamic(() => import('@/components/Presentation'), {
  ssr: false,
});

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  const goTo = useCallback((i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return (
    <main className="w-screen h-screen overflow-hidden bg-white">
      <Presentation
        currentIndex={currentIndex}
        direction={direction}
        onNext={goNext}
        onPrev={goPrev}
        onGoTo={goTo}
      />
      <div className="fixed bottom-4 right-4 text-[11px] text-[#6E6E73] hidden md:flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-black/[0.06]">
        <span className="font-mono bg-[#F5F5F7] rounded px-1.5 py-0.5">←→</span>
        to navigate
      </div>
    </main>
  );
}
