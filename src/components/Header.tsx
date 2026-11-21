import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Hoạt động', href: '#hoat-dong' },
  { label: 'Thành tích', href: '#thanh-tich' },
  { label: 'Thư viện', href: '#thu-vien' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'border-b border-[#0F2744]/10 bg-white/95 backdrop-blur-md shadow-xs'
          : 'border-b border-[#0F2744]/8 bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Crest + Single-line School Name */}
        <a
          href="#trang-chu"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2744]"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="64" height="64" rx="14" fill="#0F2744" />
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
          <span className="font-display text-base font-bold tracking-tight text-[#0F2744] sm:text-lg">
            TRƯỜNG THCS NAM CAO
          </span>
        </a>

        {/* Zone 2: Desktop Navigation */}
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative shrink-0 whitespace-nowrap py-2 text-sm font-medium text-[#334155] transition-colors duration-150 hover:text-[#0F2744] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2744]"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#2E7D5B] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#lien-he"
            className="hidden shrink-0 whitespace-nowrap rounded-lg bg-[#0F2744] px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#193B66] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744] lg:inline-flex"
          >
            Liên hệ
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#0F2744]/15 text-[#0F2744] transition-colors hover:bg-[#EEF2F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menu di động"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#0F2744]/10 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-medium text-[#1E293B] transition-colors hover:bg-[#F3F6FA] hover:text-[#0F2744]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lien-he"
              onClick={handleNavClick}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F2744] px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#193B66]"
            >
              Liên hệ nhà trường
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
