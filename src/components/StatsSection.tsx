import { useEffect, useRef, useState } from 'react';
import { SCHOOL_STATS } from '../data/schoolData';
import { formatStatNumber } from '../utils/schoolLogic';

export function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => SCHOOL_STATS.map((item) => item.target));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts(SCHOOL_STATS.map((item) => item.target));
      setHasAnimated(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1100;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(SCHOOL_STATS.map((item) => Math.round(item.target * eased)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          setCounts(SCHOOL_STATS.map(() => 0));
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="thong-ke"
      ref={sectionRef}
      aria-label="Số liệu minh họa quy mô nhà trường"
      className="bg-[#0F2744] py-16 text-white lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-white/15 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#F5DC93]">
              Quy mô đào tạo · Dữ liệu minh họa
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Những con số đồng hành cùng từng năm học
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#CBD8E6] sm:text-sm">
            Các chỉ số dưới đây là dữ liệu minh họa cấu trúc thống kê, dễ dàng cập nhật theo báo cáo năm học chính thức.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOOL_STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="rounded-xl border border-white/15 bg-white/[0.04] p-6 transition-colors duration-200 hover:bg-white/[0.07]"
            >
              <div className="font-display tabular-nums text-4xl font-bold tracking-tight text-[#F5DC93] sm:text-5xl">
                {formatStatNumber(counts[index] ?? stat.target, stat.suffix)}
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{stat.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#B8C9DC]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
