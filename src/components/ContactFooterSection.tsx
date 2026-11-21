import { useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { ContactFormErrors, ContactFormInput } from '../types/school';
import { validateContactForm } from '../utils/schoolLogic';
import { RevealOnScroll } from './RevealOnScroll';

const INITIAL_FORM: ContactFormInput = {
  fullName: '',
  contact: '',
  subject: 'Tìm hiểu thông tin tuyển sinh',
  message: '',
};

const QUICK_LINKS = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Hoạt động', href: '#hoat-dong' },
  { label: 'Thành tích', href: '#thanh-tich' },
  { label: 'Thư viện', href: '#thu-vien' },
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="lien-he" className="bg-[#FAFBFD] py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Kết nối &amp; Giải đáp
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Liên hệ với Trường THCS Nam Cao
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">
                Quý phụ huynh, học sinh và khách truy cập có thể gửi câu hỏi hoặc góp ý qua biểu mẫu dưới đây.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
              {/* Contact Form */}
              <div className="rounded-2xl border border-[#0F2744]/10 bg-white p-6 sm:p-8 lg:col-span-7">
                {submitted ? (
                  <div
                    role="status"
                    className="flex h-full flex-col items-start justify-center py-6"
                  >
                    <CheckCircle2 className="h-11 w-11 text-[#2E7D5B]" aria-hidden="true" />
                    <h3 className="font-display mt-4 text-2xl font-bold text-[#0F2744]">
                      Đã ghi nhận lời nhắn mẫu thành công
                    </h3>
                    <p className="mt-2.5 max-w-lg text-base leading-relaxed text-[#475569]">
                      Cảm ơn <strong className="text-[#0F2744]">{formData.fullName}</strong>. Trong bản website triển khai chính thức, thông tin liên hệ của bạn về chủ đề “{formData.subject}” sẽ được chuyển tới văn phòng nhà trường.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 min-h-[44px] rounded-lg bg-[#0F2744] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#193B66]"
                    >
                      Gửi lời nhắn khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-fullname"
                          className="block text-sm font-semibold text-[#0F2744]"
                        >
                          Họ và tên
                        </label>
                        <input
                          id="contact-fullname"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                            if (errors.fullName) {
                              setErrors((prev) => ({ ...prev, fullName: undefined }));
                            }
                          }}
                          placeholder="Ví dụ: Nguyễn Văn An"
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#0F2744]/15 bg-[#FAFBFD] px-3.5 py-2.5 text-sm text-[#0F2744] placeholder:text-[#94A3B8] focus:border-[#0F2744] focus:bg-white focus:outline-none"
                        />
                        {errors.fullName && (
                          <p role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-info"
                          className="block text-sm font-semibold text-[#0F2744]"
                        >
                          Email hoặc Số điện thoại
                        </label>
                        <input
                          id="contact-info"
                          type="text"
                          value={formData.contact}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, contact: e.target.value }));
                            if (errors.contact) {
                              setErrors((prev) => ({ ...prev, contact: undefined }));
                            }
                          }}
                          placeholder="email@example.com hoặc 09xxxxxxxx"
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#0F2744]/15 bg-[#FAFBFD] px-3.5 py-2.5 text-sm text-[#0F2744] placeholder:text-[#94A3B8] focus:border-[#0F2744] focus:bg-white focus:outline-none"
                        />
                        {errors.contact && (
                          <p role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                            {errors.contact}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-semibold text-[#0F2744]"
                      >
                        Chủ đề trao đổi
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, subject: e.target.value }));
                          if (errors.subject) {
                            setErrors((prev) => ({ ...prev, subject: undefined }));
                          }
                        }}
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#0F2744]/15 bg-[#FAFBFD] px-3.5 py-2.5 text-sm text-[#0F2744] focus:border-[#0F2744] focus:bg-white focus:outline-none"
                      >
                        <option value="Tìm hiểu thông tin tuyển sinh">
                          Tìm hiểu thông tin tuyển sinh
                        </option>
                        <option value="Hoạt động học tập & ngoại khóa">
                          Hoạt động học tập &amp; ngoại khóa
                        </option>
                        <option value="Liên hệ công tác & hành chính">
                          Liên hệ công tác &amp; hành chính
                        </option>
                        <option value="Góp ý xây dựng nhà trường">
                          Góp ý xây dựng nhà trường
                        </option>
                      </select>
                      {errors.subject && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-[#0F2744]"
                      >
                        Nội dung lời nhắn
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message) {
                            setErrors((prev) => ({ ...prev, message: undefined }));
                          }
                        }}
                        placeholder="Nhập nội dung câu hỏi hoặc thông tin cần hỗ trợ..."
                        className="mt-1.5 w-full rounded-xl border border-[#0F2744]/15 bg-[#FAFBFD] px-3.5 py-2.5 text-sm text-[#0F2744] placeholder:text-[#94A3B8] focus:border-[#0F2744] focus:bg-white focus:outline-none"
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#193B66] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Gửi thông tin liên hệ</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Map Ready Placeholder */}
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#0F2744]/10 bg-white p-6 sm:p-8 lg:col-span-5">
                <div className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-[#0F2744]">
                    Thông tin văn phòng
                  </h3>

                  <dl className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D5B]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0F2744]">Địa chỉ</dt>
                        <dd className="mt-0.5 text-[#475569]">{SCHOOL_INFO.address}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D5B]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0F2744]">Điện thoại</dt>
                        <dd className="tabular-nums mt-0.5 text-[#475569]">{SCHOOL_INFO.phone}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D5B]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0F2744]">Thư điện tử</dt>
                        <dd className="mt-0.5 text-[#475569]">{SCHOOL_INFO.email}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D5B]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0F2744]">Giờ làm việc</dt>
                        <dd className="mt-0.5 text-[#475569]">{SCHOOL_INFO.officeHours}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* Honest Map Placeholder until Verified Address Provided */}
                <div className="rounded-xl border border-dashed border-[#0F2744]/20 bg-[#F4F7FA] p-5">
                  <p className="text-xs font-semibold tracking-wide text-[#0F2744]">
                    Vị trí bản đồ (Sẵn sàng tích hợp Google Maps)
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#475569]">
                    Khung bản đồ Google Maps sẽ hiển thị vị trí chính xác ngay khi cập nhật địa chỉ và tọa độ xác thực của Trường THCS Nam Cao.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
  );
}

export function Footer() {
  return (
      <footer className="bg-[#0B1E36] py-14 text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
            {/* School Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect width="64" height="64" rx="14" fill="#183A61" />
                  <path
                    d="M16 20C16 17.7909 17.7909 16 20 16H30V48H20C17.7909 48 16 46.2091 16 44V20Z"
                    fill="#FAFBFD"
                  />
                  <path
                    d="M48 20C48 17.7909 46.2091 16 44 16H34V48H44C46.2091 48 48 46.2091 48 44V20Z"
                    fill="#E8F3EE"
                  />
                  <path
                    d="M32 14L34.5 19.5L40.5 20.3L36.1 24.4L37.2 30.3L32 27.4L26.8 30.3L27.9 24.4L23.5 20.3L29.5 19.5L32 14Z"
                    fill="#D9A441"
                  />
                </svg>
                <span className="font-display text-xl font-bold text-white">
                  {SCHOOL_INFO.name}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#CBD8E6]">
                {SCHOOL_INFO.motto}. Cổng thông tin giới thiệu tổng quan, hoạt động giáo dục và kết nối phụ huynh – học sinh.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold tracking-wide text-[#F5DC93]">
                Liên kết nhanh
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm text-[#D6E2EE]">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[#F5DC93]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-semibold tracking-wide text-[#F5DC93]">
                Thông tin liên hệ
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#D6E2EE]">
                <li>Địa chỉ: {SCHOOL_INFO.address}</li>
                <li className="tabular-nums">Điện thoại: {SCHOOL_INFO.phone}</li>
                <li>Email: {SCHOOL_INFO.email}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-[#9DB3C9] sm:flex-row sm:items-center">
            <p>© 2026 {SCHOOL_INFO.name}. Giao diện giới thiệu mẫu — sẵn sàng cập nhật dữ liệu chính thức.</p>
            <div className="flex items-center gap-5">
              <a href="#gioi-thieu" className="hover:text-white">
                Giới thiệu
              </a>
              <a href="#tin-tuc" className="hover:text-white">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-white">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
