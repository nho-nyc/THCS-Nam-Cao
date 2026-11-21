import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, SCHOOL_INFO } from '../data/schoolData';
import { getAdjacentIndex } from '../utils/schoolLogic';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => getAdjacentIndex(prev, HERO_SLIDES.length, 'next'));
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => getAdjacentIndex(prev, HERO_SLIDES.length, 'prev'));
  };

  const handleNext = () => {
    setActiveIndex((prev) => getAdjacentIndex(prev, HERO_SLIDES.length, 'next'));
  };

  return (
    <section
      id="trang-chu"
      aria-label="Giới thiệu chính Trường THCS Nam Cao"
      className="relative flex min-h-[82vh] w-full items-end overflow-hidden bg-[#0F2744] lg:min-h-[88vh]"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          aria-hidden={idx !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            idx === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ResilientImage
            src={slide.image}
            alt={slide.alt}
            priority={idx === 0}
            className="h-full w-full object-cover object-center"
            aspectClassName="h-full w-full"
          />
        </div>
      ))}

      {/* Measured Contrast Scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#091A2E]/92 via-[#0B2038]/55 to-[#0B2038]/25"
      />

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-[#F5DC93]">
            {SCHOOL_INFO.establishedNote}
          </p>

          <h1 className="font-display text-balance text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SCHOOL_INFO.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-normal leading-relaxed text-[#E2EAF4] sm:text-xl lg:text-2xl">
            {SCHOOL_INFO.motto}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#CBD8E6] sm:text-base">
            {currentSlide.caption}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#gioi-thieu"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#D9A441] px-6 py-3 text-sm font-semibold text-[#0F2744] transition-colors duration-150 hover:bg-[#E7B657] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              <span>Khám phá nhà trường</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#hoat-dong"
              className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              Xem hoạt động
            </a>
          </div>
        </div>

        {/* Slideshow Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex items-center gap-2 text-xs font-medium text-[#D6E2EE] sm:text-sm">
            <span className="tabular-nums text-[#F5DC93]">
              0{activeIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentSlide.highlight}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="mr-2 flex items-center gap-1.5" role="tablist" aria-label="Chọn ảnh giới thiệu">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Chuyển đến ảnh ${idx + 1}: ${slide.highlight}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    idx === activeIndex ? 'w-7 bg-[#F5DC93]' : 'w-2.5 bg-white/45 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Ảnh trước"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Ảnh tiếp theo"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
