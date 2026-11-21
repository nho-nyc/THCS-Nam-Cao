import { useMemo, useState } from 'react';
import { Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/schoolData';
import type { AchievementPillar } from '../types/school';
import { RevealOnScroll } from './RevealOnScroll';

const PILLARS: { id: AchievementPillar; label: string }[] = [
  { id: 'Học tập', label: 'Thành tích học tập' },
  { id: 'Giáo viên', label: 'Thành tích giáo viên' },
  { id: 'Thể thao', label: 'Thành tích thể thao' },
  { id: 'Phong trào', label: 'Thành tích phong trào' },
];

export function AchievementsSection() {
  const [activePillar, setActivePillar] = useState<AchievementPillar>('Học tập');

  const items = useMemo(
    () => ACHIEVEMENTS.filter((item) => item.pillar === activePillar),
    [activePillar],
  );

  return (
    <section id="thanh-tich" className="border-b border-[#0F2744]/8 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#0F2744]/10 pb-8 xl:flex-row xl:items-end">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-wide text-[#B58122]">
                Bảng vàng truyền thống · Cấu trúc mẫu
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Dấu ấn thi đua dạy tốt – học tốt
              </h2>
              <p className="mt-2.5 text-sm text-[#64748B]">
                Nội dung dưới đây là cấu trúc mẫu phân loại 4 lĩnh vực thành tích, sẵn sàng cập nhật số liệu và giải thưởng chính thức của trường.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Chọn nhóm thành tích"
              className="flex shrink-0 flex-wrap gap-1 rounded-xl border border-[#0F2744]/10 bg-[#FAFBFD] p-1"
            >
              {PILLARS.map((pillar) => (
                <button
                  key={pillar.id}
                  id={`ach-tab-${pillar.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activePillar === pillar.id}
                  aria-controls="ach-tabpanel"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                    activePillar === pillar.id
                      ? 'bg-[#0F2744] text-white'
                      : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {pillar.label}
                </button>
              ))}
            </div>
          </div>

          <div
            id="ach-tabpanel"
            role="tabpanel"
            aria-labelledby={`ach-tab-${activePillar}`}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {items.map((record) => (
              <div
                key={record.id}
                className="flex flex-col justify-between rounded-2xl border border-[#0F2744]/10 bg-[#FAFBFD] p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#0F2744]/10 pb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#2E7D5B]">
                      <Award className="h-4 w-4 text-[#D9A441]" aria-hidden="true" />
                      <span>{record.pillar}</span>
                    </div>
                    <span className="tabular-nums text-xs font-medium text-[#64748B]">
                      {record.year} · {record.metric}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-bold leading-snug text-[#0F2744]">
                    {record.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[#475569]">
                    {record.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Grid Across All 4 Pillars */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#0F2744]/10 pt-8 lg:grid-cols-4">
            {PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(pillar.id)}
                className={`rounded-xl border p-4 text-left transition-colors duration-150 ${
                  activePillar === pillar.id
                    ? 'border-[#0F2744] bg-[#0F2744] text-white'
                    : 'border-[#0F2744]/10 bg-white text-[#0F2744] hover:border-[#0F2744]/30'
                }`}
              >
                <span
                  className={`tabular-nums text-xs font-semibold ${
                    activePillar === pillar.id ? 'text-[#F5DC93]' : 'text-[#2E7D5B]'
                  }`}
                >
                  0{idx + 1}.
                </span>
                <div className="mt-1 text-sm font-semibold">{pillar.label}</div>
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
