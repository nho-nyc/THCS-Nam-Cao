import { useMemo, useState } from 'react';
import { TEACHERS } from '../data/schoolData';
import type { TeacherDepartment } from '../types/school';
import { filterTeachers } from '../utils/schoolLogic';
import { RevealOnScroll } from './RevealOnScroll';

const DEPARTMENTS: TeacherDepartment[] = [
  'Tất cả',
  'Ban Giám hiệu',
  'Tổ Khoa học Tự nhiên',
  'Tổ Khoa học Xã hội',
  'Tổ Ngoại ngữ & Năng khiếu',
];

export function TeachersSection() {
  const [department, setDepartment] = useState<TeacherDepartment>('Tất cả');

  const visibleTeachers = useMemo(
    () => filterTeachers(TEACHERS, department),
    [department],
  );

  return (
    <section id="doi-ngu" className="border-b border-[#0F2744]/8 bg-[#FAFBFD] py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#0F2744]/10 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Đội ngũ sư phạm
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Ban Giám hiệu &amp; Giáo viên các tổ chuyên môn
              </h2>
              <p className="mt-2.5 text-sm text-[#64748B]">
                Hiển thị hồ sơ mẫu theo chức danh và bộ môn. Nhà trường sẽ cập nhật ảnh chân dung và họ tên chính thức để không giả mạo danh tính.
              </p>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Lọc đội ngũ giáo viên theo tổ chuyên môn"
              className="flex flex-wrap gap-1.5 rounded-xl border border-[#0F2744]/10 bg-white p-1"
            >
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  role="tab"
                  aria-selected={department === dept}
                  onClick={() => setDepartment(dept)}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    department === dept
                      ? 'bg-[#0F2744] text-white'
                      : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <p className="tabular-nums text-xs font-medium text-[#64748B]">
              {visibleTeachers.length} hồ sơ mẫu
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleTeachers.map((teacher) => (
              <article
                key={teacher.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#0F2744]/10 bg-white transition-colors duration-200 hover:border-[#2E7D5B]/40"
              >
                {/* Academic Portrait Placeholder Frame */}
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-[#EEF3F8] via-[#F7F9FC] to-[#E8F3EE] p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#0F2744]/15 bg-[#0F2744] text-xl font-bold tracking-wider text-[#F5DC93]">
                    {teacher.initials}
                  </div>
                  <span className="mt-3 text-xs font-medium text-[#64748B]">
                    Khung ảnh chân dung mẫu
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-xs font-semibold text-[#2E7D5B]">{teacher.role}</p>
                    <h3 className="font-display mt-1.5 text-lg font-bold leading-snug text-[#0F2744]">
                      {teacher.placeholderName}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#334155]">{teacher.subject}</p>
                  </div>

                  <p className="mt-4 border-t border-[#0F2744]/8 pt-3 text-xs leading-relaxed text-[#64748B]">
                    {teacher.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
