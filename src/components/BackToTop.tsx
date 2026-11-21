import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Cuộn lên đầu trang"
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0F2744] text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#193B66] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744]"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
