import type {
  ContactFormErrors,
  ContactFormInput,
  GalleryCategory,
  GalleryPhoto,
  NewsArticle,
  NewsCategory,
  TeacherDepartment,
  TeacherProfile,
} from '../types/school';

export function normalizeVietnamese(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export function filterNewsArticles(
  articles: NewsArticle[],
  query: string,
  category: NewsCategory,
): NewsArticle[] {
  const normalizedQuery = normalizeVietnamese(query);

  return articles.filter((article) => {
    const matchesCategory = category === 'Tất cả' || article.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const haystack = normalizeVietnamese(
      `${article.title} ${article.summary} ${article.category}`,
    );
    return haystack.includes(normalizedQuery);
  });
}

export function filterGalleryPhotos(
  photos: GalleryPhoto[],
  category: GalleryCategory,
): GalleryPhoto[] {
  if (category === 'Tất cả') {
    return photos;
  }
  return photos.filter((photo) => photo.category === category);
}

export function getAdjacentIndex(
  currentIndex: number,
  total: number,
  direction: 'prev' | 'next',
): number {
  if (total <= 0) {
    return -1;
  }
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}

export function filterTeachers(
  teachers: TeacherProfile[],
  department: TeacherDepartment,
): TeacherProfile[] {
  if (department === 'Tất cả') {
    return teachers;
  }
  return teachers.filter((teacher) => teacher.department === department);
}

export function formatStatNumber(value: number, suffix = ''): string {
  const rounded = Math.max(0, Math.round(value));
  const formatted = rounded.toLocaleString('vi-VN');
  return `${formatted}${suffix}`;
}

export function validateContactForm(input: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = input.fullName.trim();
  const contact = input.contact.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (fullName.length < 2) {
    errors.fullName = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(0|\+84)[0-9\s.-]{8,13}$/;
  if (!contact) {
    errors.contact = 'Vui lòng nhập email hoặc số điện thoại liên hệ.';
  } else if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
    errors.contact = 'Email hoặc số điện thoại chưa đúng định dạng.';
  }

  if (subject.length < 3) {
    errors.subject = 'Vui lòng nhập hoặc chọn chủ đề liên hệ.';
  }

  if (message.length < 10) {
    errors.message = 'Nội dung lời nhắn cần tối thiểu 10 ký tự.';
  }

  return errors;
}
