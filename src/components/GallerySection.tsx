import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/schoolData';
import type { GalleryCategory } from '../types/school';
import { filterGalleryPhotos, getAdjacentIndex } from '../utils/schoolLogic';
import { ResilientImage } from './ResilientImage';
import { RevealOnScroll } from './RevealOnScroll';

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Tất cả',
  'Khuôn viên',
  'Học tập',
  'Ngoại khóa',
  'Thể thao & Văn nghệ',
];

export function GallerySection() {
  const [category, setCategory] = useState<GalleryCategory>('Tất cả');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(
    () => filterGalleryPhotos(GALLERY_PHOTOS, category),
    [category],
  );

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : getAdjacentIndex(prev, visiblePhotos.length, 'next'),
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : getAdjacentIndex(prev, visiblePhotos.length, 'prev'),
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto =
    lightboxIndex !== null && visiblePhotos[lightboxIndex]
      ? visiblePhotos[lightboxIndex]
      : null;

  return (
    <section id="thu-vien" className="border-b border-[#0F2744]/8 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#0F2744]/10 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Thư viện hình ảnh
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Khoảnh khắc đẹp dưới mái trường
              </h2>
              <p className="mt-2.5 text-sm text-[#64748B]">
                Nhấp vào từng bức ảnh để xem kích thước lớn trong chế độ Lightbox.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Phân loại thư viện hình ảnh"
              className="flex flex-wrap gap-1.5 rounded-xl border border-[#0F2744]/10 bg-[#FAFBFD] p-1"
            >
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => {
                    setCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    category === cat
                      ? 'bg-[#0F2744] text-white'
                      : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Xem ảnh lớn: ${photo.title}`}
                className="group relative overflow-hidden rounded-2xl border border-[#0F2744]/10 bg-[#FAFBFD] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744]"
              >
                <ResilientImage
                  src={photo.image}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  aspectClassName="aspect-[4/3]"
                />

                {/* Hover Caption Overlay with Measured Scrim */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#091A2E]/88 via-[#091A2E]/20 to-transparent p-5 opacity-95 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                >
                  <div className="flex justify-end">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#0F2744]">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#F5DC93]">{photo.category}</p>
                    <p className="font-display mt-0.5 text-lg font-bold text-white">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06101C]/90 p-4 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#0F2744] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-[#CBD8E6]">
                <span className="tabular-nums font-semibold text-[#F5DC93]">
                  {lightboxIndex + 1} / {visiblePhotos.length}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activePhoto.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Đóng hộp xem ảnh"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative bg-[#081526]">
              <ResilientImage
                src={activePhoto.image}
                alt={activePhoto.alt}
                bgClassName="bg-[#081526]"
                className="max-h-[65vh] w-full object-contain"
                aspectClassName="flex items-center justify-center"
              />

              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(getAdjacentIndex(lightboxIndex, visiblePhotos.length, 'prev'))
                    }
                    aria-label="Ảnh trước trong thư viện"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#091A2E]/75 text-white transition-colors hover:bg-[#091A2E]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(getAdjacentIndex(lightboxIndex, visiblePhotos.length, 'next'))
                    }
                    aria-label="Ảnh tiếp theo trong thư viện"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#091A2E]/75 text-white transition-colors hover:bg-[#091A2E]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="px-6 py-4">
              <h3 id="lightbox-title" className="font-display text-xl font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="mt-1 text-sm text-[#CBD8E6]">{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
