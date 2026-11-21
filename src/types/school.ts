export type NewsCategory = 'Tất cả' | 'Thông báo' | 'Hoạt động' | 'Học tập' | 'Tuyển sinh';

export type ActivityCategory =
  | 'Ngoại khóa'
  | 'Thể thao'
  | 'Văn nghệ'
  | 'Đoàn – Đội'
  | 'Cuộc thi học tập'
  | 'Trải nghiệm';

export type AchievementPillar = 'Học tập' | 'Giáo viên' | 'Thể thao' | 'Phong trào';

export type TeacherDepartment =
  | 'Tất cả'
  | 'Ban Giám hiệu'
  | 'Tổ Khoa học Tự nhiên'
  | 'Tổ Khoa học Xã hội'
  | 'Tổ Ngoại ngữ & Năng khiếu';

export type GalleryCategory = 'Tất cả' | 'Khuôn viên' | 'Học tập' | 'Ngoại khóa' | 'Thể thao & Văn nghệ';

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  caption: string;
  highlight: string;
}

export interface StatMetric {
  id: string;
  label: string;
  target: number;
  suffix: string;
  detail: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: Exclude<NewsCategory, 'Tất cả'>;
  publishedAt: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface SchoolActivity {
  id: string;
  indexNumber: string;
  category: ActivityCategory;
  title: string;
  schedule: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
}

export interface AchievementRecord {
  id: string;
  pillar: AchievementPillar;
  year: string;
  title: string;
  metric: string;
  description: string;
}

export interface TeacherProfile {
  id: string;
  placeholderName: string;
  role: string;
  subject: string;
  department: Exclude<TeacherDepartment, 'Tất cả'>;
  initials: string;
  note: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Tất cả'>;
  description: string;
  image: string;
  alt: string;
}

export interface ContactFormInput {
  fullName: string;
  contact: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  contact?: string;
  subject?: string;
  message?: string;
}
