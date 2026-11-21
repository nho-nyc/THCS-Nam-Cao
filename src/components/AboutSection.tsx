import { useState } from 'react';
import { CORE_VALUES } from '../data/schoolData';
import { ResilientImage } from './ResilientImage';
import { RevealOnScroll } from './RevealOnScroll';

type AboutTab = 'overview' | 'vision' | 'values';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<AboutTab>('overview');

  return (
    <section id="gioi-thieu" className="border-b border-[#0F2744]/8 bg-[#FAFBFD] py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#0F2744]/10 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Giới thiệu nhà trường
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Truyền thống hiếu học &amp; môi trường giáo dục nhân văn
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div
              role="tablist"
              aria-label="Các nội dung giới thiệu nhà trường"
              className="inline-flex flex-wrap gap-1 rounded-xl border border-[#0F2744]/10 bg-white p-1"
            >
              <button
                id="about-tab-overview"
                type="button"
                role="tab"
                aria-selected={activeTab === 'overview'}
                aria-controls="about-tabpanel"
                onClick={() => setActiveTab('overview')}
                className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  activeTab === 'overview'
                    ? 'bg-[#0F2744] text-white'
                    : 'text-[#475569] hover:text-[#0F2744]'
                }`}
              >
                Tổng quan &amp; Lịch sử
              </button>
              <button
                id="about-tab-vision"
                type="button"
                role="tab"
                aria-selected={activeTab === 'vision'}
                aria-controls="about-tabpanel"
                onClick={() => setActiveTab('vision')}
                className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  activeTab === 'vision'
                    ? 'bg-[#0F2744] text-white'
                    : 'text-[#475569] hover:text-[#0F2744]'
                }`}
              >
                Tầm nhìn &amp; Sứ mệnh
              </button>
              <button
                id="about-tab-values"
                type="button"
                role="tab"
                aria-selected={activeTab === 'values'}
                aria-controls="about-tabpanel"
                onClick={() => setActiveTab('values')}
                className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  activeTab === 'values'
                    ? 'bg-[#0F2744] text-white'
                    : 'text-[#475569] hover:text-[#0F2744]'
                }`}
              >
                Giá trị cốt lõi
              </button>
            </div>
          </div>

          {/* 2-Column Balanced Content */}
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Structured Editorial Narrative */}
            <div
              id="about-tabpanel"
              role="tabpanel"
              aria-labelledby={`about-tab-${activeTab}`}
              className="flex flex-col justify-between lg:col-span-6"
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#0F2744]">
                      Giới thiệu tổng quan
                    </h3>
                    <p className="mt-3 text-base leading-[1.75] text-[#334155]">
                      Trường THCS Nam Cao là cơ sở giáo dục trung học cơ sở mang tên nhà văn hiện thực xuất sắc của nền văn học Việt Nam. Nhà trường hướng tới xây dựng không gian học tập an toàn, kỷ cương và giàu tình yêu thương, nơi mỗi học sinh được lắng nghe và khích lệ phát triển đúng năng lực.
                    </p>
                  </div>

                  <div className="border-t border-[#0F2744]/10 pt-6">
                    <h3 className="font-display text-2xl font-semibold text-[#0F2744]">
                      Lịch sử hình thành &amp; phát triển
                    </h3>
                    <p className="mt-3 text-base leading-[1.75] text-[#334155]">
                      Trải qua các giai đoạn xây dựng và trưởng thành, tập thể sư phạm nhà trường luôn gìn giữ nề nếp dạy tốt – học tốt, từng bước đầu tư phòng học khang trang, thư viện thân thiện và các phòng bộ môn đáp ứng chương trình giáo dục phổ thông mới.
                    </p>
                    <p className="mt-3 text-sm italic text-[#64748B]">
                      Ghi chú: Phần mốc năm thành lập và quyết định hành chính cụ thể có thể cập nhật trực tiếp theo hồ sơ truyền thống của nhà trường.
                    </p>
                  </div>

                  <div className="border-y border-[#0F2744]/12 py-5">
                    <p className="font-display text-xl italic leading-relaxed text-[#0F2744]">
                      “Dạy bằng trách nhiệm và tình thương; học bằng sự trung thực và khát vọng vươn lên.”
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-8">
                  <div className="rounded-xl border border-[#0F2744]/10 bg-white p-6 sm:p-7">
                    <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                      Định hướng phát triển
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-[#0F2744]">
                      Tầm nhìn
                    </h3>
                    <p className="mt-3 text-base leading-[1.75] text-[#334155]">
                      Trở thành ngôi trường trung học cơ sở chất lượng, thân thiện và hiện đại; nơi học sinh phát triển hài hòa về tri thức, nhân cách, thể chất và kỹ năng thích ứng trong thời đại mới.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#0F2744]/10 bg-white p-6 sm:p-7">
                    <p className="text-sm font-semibold tracking-wide text-[#B58122]">
                      Cam kết giáo dục
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-[#0F2744]">
                      Sứ mệnh
                    </h3>
                    <p className="mt-3 text-base leading-[1.75] text-[#334155]">
                      Đồng hành cùng gia đình và xã hội tạo dựng môi trường học tập bình đẳng, truyền cảm hứng tự học, nuôi dưỡng lòng nhân ái, niềm tự hào văn hóa dân tộc và tinh thần trách nhiệm công dân cho thế hệ trẻ.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CORE_VALUES.map((val) => (
                    <div
                      key={val.number}
                      className="rounded-xl border border-[#0F2744]/10 bg-white p-5 transition-colors duration-150 hover:border-[#2E7D5B]/40"
                    >
                      <span className="tabular-nums text-xs font-semibold tracking-widest text-[#2E7D5B]">
                        {val.number}.
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-[#0F2744]">{val.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Anchor below narrative */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#0F2744]/10 pt-6 text-sm">
                <a
                  href="#doi-ngu"
                  className="font-semibold text-[#0F2744] underline decoration-[#D9A441] decoration-2 underline-offset-4 transition-colors hover:text-[#2E7D5B]"
                >
                  Tìm hiểu đội ngũ giáo viên
                </a>
                <a
                  href="#thanh-tich"
                  className="font-semibold text-[#0F2744] underline decoration-[#2E7D5B] decoration-2 underline-offset-4 transition-colors hover:text-[#2E7D5B]"
                >
                  Xem bảng thành tích mẫu
                </a>
              </div>
            </div>

            {/* Right Column: Stretched Illustrative Campus Photo */}
            <div className="flex flex-col lg:col-span-6">
              <div className="flex-1 overflow-hidden rounded-2xl border border-[#0F2744]/10 bg-white p-2.5">
                <ResilientImage
                  src="/src/assets/images/modern_classroom_view_1795265435967.jpg"
                  alt="Phòng học tràn ngập ánh sáng tự nhiên tại Trường THCS Nam Cao"
                  className="h-full w-full rounded-xl object-cover"
                  aspectClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
                />
              </div>
              <p className="mt-3 text-xs italic text-[#64748B]">
                Hình ảnh minh họa — Không gian lớp học kết hợp ánh sáng tự nhiên và thiết bị giảng dạy hiện đại.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
