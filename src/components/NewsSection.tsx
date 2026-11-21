import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/schoolData';
import type { NewsArticle, NewsCategory } from '../types/school';
import { filterNewsArticles } from '../utils/schoolLogic';
import { ResilientImage } from './ResilientImage';
import { RevealOnScroll } from './RevealOnScroll';

const NEWS_CATEGORIES: NewsCategory[] = ['Tất cả', 'Thông báo', 'Hoạt động', 'Học tập', 'Tuyển sinh'];

export function NewsSection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<NewsCategory>('Tất cả');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = useMemo(
    () => filterNewsArticles(NEWS_ARTICLES, query, category),
    [query, category],
  );

  useEffect(() => {
    if (!selectedArticle) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedArticle]);

  const handleReset = () => {
    setQuery('');
    setCategory('Tất cả');
  };

  return (
    <section id="tin-tuc" className="border-b border-[#0F2744]/8 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="mb-8 flex flex-col justify-between gap-6 border-b border-[#0F2744]/10 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#2E7D5B]">
                Tin tức &amp; Sự kiện
              </p>
              <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">
                Bản tin mới nhất của nhà trường
              </h2>
              <p className="mt-2.5 text-sm text-[#64748B]">
                Các bài viết dưới đây là tin tức mẫu minh họa cấu trúc chuyên mục, không thay thế thông báo chính thức.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full max-w-sm">
              <label htmlFor="news-search-input" className="sr-only">
                Tìm kiếm tin tức
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]"
                />
                <input
                  id="news-search-input"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Tìm kiếm tin tức, sự kiện..."
                  className="min-h-[44px] w-full rounded-xl border border-[#0F2744]/15 bg-[#FAFBFD] py-2.5 pl-10 pr-10 text-sm text-[#0F2744] placeholder:text-[#64748B] focus:border-[#0F2744] focus:bg-white focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Xóa từ khóa tìm kiếm"
                    className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F2744]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Lọc bài viết theo danh mục"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#0F2744]/10 bg-[#FAFBFD] p-1"
            >
              {NEWS_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => setCategory(cat)}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    category === cat
                      ? 'bg-[#0F2744] text-white'
                      : 'text-[#475569] hover:text-[#0F2744]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <p className="tabular-nums text-xs font-medium text-[#64748B]">
              Hiển thị {filteredArticles.length} / {NEWS_ARTICLES.length} bài viết mẫu
            </p>
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-[#0F2744]/10 bg-[#FAFBFD] px-6 py-14 text-center">
              <p className="font-display text-xl font-semibold text-[#0F2744]">
                Không tìm thấy bài viết phù hợp
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Thử tìm bằng từ khóa khác hoặc đặt lại bộ lọc danh mục để xem tất cả bản tin mẫu.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-[#0F2744] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#193B66]"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, idx) => {
                const isLead = idx === 0 && filteredArticles.length >= 3 && category === 'Tất cả' && !query;
                return (
                  <article
                    key={article.id}
                    className={`group flex flex-col overflow-hidden rounded-2xl border border-[#0F2744]/10 bg-[#FAFBFD] transition-colors duration-200 hover:border-[#0F2744]/25 ${
                      isLead ? 'md:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-12' : ''
                    }`}
                  >
                    <div className={isLead ? 'lg:col-span-6 lg:h-full' : ''}>
                      <ResilientImage
                        src={article.image}
                        alt={article.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        aspectClassName={isLead ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}
                      />
                    </div>

                    <div
                      className={`flex flex-1 flex-col p-6 ${
                        isLead ? 'justify-center gap-6 lg:col-span-6 lg:p-8' : 'justify-between'
                      }`}
                    >
                      <div>
                        {/* Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748B]">
                          <span className="font-semibold text-[#2E7D5B]">{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <time className="tabular-nums">{article.publishedAt}</time>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3
                          className={`font-display mt-3 font-bold leading-snug text-[#0F2744] transition-colors group-hover:text-[#1E4B7A] ${
                            isLead ? 'text-2xl lg:text-[26px]' : 'text-xl'
                          }`}
                        >
                          {article.title}
                        </h3>

                        <p
                          className={`mt-3 text-sm leading-relaxed text-[#475569] ${
                            isLead ? 'line-clamp-4 sm:text-base' : 'line-clamp-3'
                          }`}
                        >
                          {article.summary}
                        </p>
                      </div>

                      <div className="mt-4 border-t border-[#0F2744]/8 pt-4">
                        <button
                          type="button"
                          onClick={() => setSelectedArticle(article)}
                          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#0F2744] transition-colors hover:text-[#2E7D5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744]"
                        >
                          <span>Đọc thêm</span>
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </RevealOnScroll>
      </div>

      {/* Accessible Article Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#091A2E]/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#0F2744]/10 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748B]">
                <span className="font-semibold text-[#2E7D5B]">{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <time className="tabular-nums">{selectedArticle.publishedAt}</time>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Đóng bài viết"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#0F2744]/15 text-[#0F2744] hover:bg-[#F3F6FA]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3
              id="news-modal-title"
              className="font-display mt-5 text-2xl font-bold leading-snug text-[#0F2744] sm:text-3xl"
            >
              {selectedArticle.title}
            </h3>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#0F2744]/10">
              <ResilientImage
                src={selectedArticle.image}
                alt={selectedArticle.imageAlt}
                aspectClassName="aspect-[16/9]"
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-[1.75] text-[#334155]">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex justify-end border-t border-[#0F2744]/10 pt-5">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="min-h-[44px] rounded-lg bg-[#0F2744] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#193B66]"
              >
                Đóng bản tin
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
