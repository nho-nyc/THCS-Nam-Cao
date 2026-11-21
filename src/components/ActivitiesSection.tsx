import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { SCHOOL_ACTIVITIES } from '../data/schoolData';
import type { SchoolActivity } from '../types/school';
import { ResilientImage } from './ResilientImage';
import { RevealOnScroll } from './RevealOnScroll';

export function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<SchoolActivity | null>(null);

  useEffect(() => {
    if (!selectedActivity) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedActivity(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedActivity]);

  return (
    <section id="hoat-dong" className="border-b border-[#0F2744]/8 bg-[#FAFBFD] py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#0F2744]/10 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Đời sống học đường
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Hoạt động giáo dục toàn diện
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#475569]">
              Sáu mảng hoạt động trọng tâm giúp học sinh Trường THCS Nam Cao rèn luyện tri thức, thể chất, thẩm mỹ và kỹ năng sống.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SCHOOL_ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0F2744]/10 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2E7D5B]/40"
              >
                <ResilientImage
                  src={activity.image}
                  alt={activity.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  aspectClassName="aspect-[4/3]"
                />

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#64748B]">
                      <span className="tabular-nums font-semibold text-[#2E7D5B]">
                        {activity.indexNumber}.
                      </span>
                      <span className="whitespace-nowrap">{activity.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{activity.schedule}</span>
                    </div>

                    <h3 className="font-display mt-2.5 text-xl font-bold leading-snug text-[#0F2744]">
                      {activity.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                      {activity.summary}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#0F2744]/8 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedActivity(activity)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#0F2744] transition-colors hover:text-[#2E7D5B]"
                    >
                      <span>Xem chi tiết hoạt động</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="activity-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#091A2E]/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#0F2744]/10 pb-4">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                {selectedActivity.indexNumber}. {selectedActivity.category}
              </p>
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                aria-label="Đóng chi tiết hoạt động"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2744]/15 text-[#0F2744] hover:bg-[#F3F6FA]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3
              id="activity-modal-title"
              className="font-display mt-5 text-2xl font-bold text-[#0F2744]"
            >
              {selectedActivity.title}
            </h3>

            <p className="mt-1 text-xs font-medium text-[#64748B]">{selectedActivity.schedule}</p>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#0F2744]/10">
              <ResilientImage
                src={selectedActivity.image}
                alt={selectedActivity.imageAlt}
                aspectClassName="aspect-[4/3]"
              />
            </div>

            <p className="mt-5 text-base leading-relaxed text-[#334155]">
              {selectedActivity.summary}
            </p>

            <ul className="mt-4 space-y-2.5 border-t border-[#0F2744]/10 pt-4 text-sm leading-relaxed text-[#475569]">
              {selectedActivity.details.map((item, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="tabular-nums font-semibold text-[#2E7D5B]">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="min-h-[44px] rounded-lg bg-[#0F2744] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#193B66]"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
