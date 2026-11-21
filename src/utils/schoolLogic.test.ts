import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGalleryPhotos,
  filterNewsArticles,
  filterTeachers,
  formatStatNumber,
  getAdjacentIndex,
  normalizeVietnamese,
  validateContactForm,
} from './schoolLogic';
import type { GalleryPhoto, NewsArticle, TeacherProfile } from '../types/school';

const sampleArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Ngày hội STEM và Sáng tạo trẻ năm học mẫu',
    category: 'Hoạt động',
    publishedAt: '15/10/2026',
    readTime: '3 phút đọc',
    summary: 'Học sinh khối 6 đến 9 tham gia trưng bày mô hình năng lượng xanh.',
    content: ['Nội dung mẫu'],
    image: '/sample-1.jpg',
    imageAlt: 'Ảnh mẫu 1',
  },
  {
    id: '2',
    title: 'Thông báo kế hoạch tuyển sinh lớp 6',
    category: 'Tuyển sinh',
    publishedAt: '02/06/2026',
    readTime: '4 phút đọc',
    summary: 'Hướng dẫn hồ sơ và mốc thời gian tiếp nhận học sinh đầu cấp.',
    content: ['Nội dung mẫu'],
    image: '/sample-2.jpg',
    imageAlt: 'Ảnh mẫu 2',
  },
];

const samplePhotos: GalleryPhoto[] = [
  {
    id: 'p1',
    title: 'Sân trường buổi sáng',
    category: 'Khuôn viên',
    description: 'Không gian xanh mát',
    image: '/p1.jpg',
    alt: 'Sân trường',
  },
  {
    id: 'p2',
    title: 'Giờ học Ngữ văn',
    category: 'Học tập',
    description: 'Lớp học hiện đại',
    image: '/p2.jpg',
    alt: 'Lớp học',
  },
];

const sampleTeachers: TeacherProfile[] = [
  {
    id: 't1',
    placeholderName: 'Hiệu trưởng (Hồ sơ mẫu)',
    role: 'Hiệu trưởng',
    subject: 'Quản lý giáo dục',
    department: 'Ban Giám hiệu',
    initials: 'HT',
    note: 'Mẫu giới thiệu nhân sự',
  },
  {
    id: 't2',
    placeholderName: 'Giáo viên Toán (Hồ sơ mẫu)',
    role: 'Tổ trưởng chuyên môn',
    subject: 'Toán học',
    department: 'Tổ Khoa học Tự nhiên',
    initials: 'TH',
    note: 'Mẫu giới thiệu nhân sự',
  },
];

test('normalizeVietnamese removes accents and folds đ/Đ', () => {
  assert.equal(normalizeVietnamese('Trường THCS Nam Cao — Đọc thêm'), 'truong thcs nam cao — doc them');
});

test('filterNewsArticles supports accent-insensitive search and category filtering', () => {
  assert.equal(filterNewsArticles(sampleArticles, 'tuyen sinh', 'Tất cả').length, 1);
  assert.equal(filterNewsArticles(sampleArticles, 'stem', 'Hoạt động').length, 1);
  assert.equal(filterNewsArticles(sampleArticles, 'stem', 'Thông báo').length, 0);
});

test('filterGalleryPhotos filters by category accurately', () => {
  assert.equal(filterGalleryPhotos(samplePhotos, 'Tất cả').length, 2);
  assert.equal(filterGalleryPhotos(samplePhotos, 'Học tập').length, 1);
  assert.equal(filterGalleryPhotos(samplePhotos, 'Ngoại khóa').length, 0);
});

test('getAdjacentIndex wraps cleanly at boundaries', () => {
  assert.equal(getAdjacentIndex(0, 4, 'prev'), 3);
  assert.equal(getAdjacentIndex(3, 4, 'next'), 0);
  assert.equal(getAdjacentIndex(0, 0, 'next'), -1);
});

test('filterTeachers filters by department', () => {
  assert.equal(filterTeachers(sampleTeachers, 'Tất cả').length, 2);
  assert.equal(filterTeachers(sampleTeachers, 'Ban Giám hiệu').length, 1);
});

test('formatStatNumber formats Vietnamese thousands separator and suffix', () => {
  assert.equal(formatStatNumber(1250, '+'), '1.250+');
  assert.equal(formatStatNumber(32, ''), '32');
});

test('validateContactForm rejects empty or malformed input and passes valid input', () => {
  const invalid = validateContactForm({
    fullName: 'A',
    contact: 'khong-hop-le',
    subject: '',
    message: 'ngắn',
  });
  assert.ok(invalid.fullName);
  assert.ok(invalid.contact);
  assert.ok(invalid.subject);
  assert.ok(invalid.message);

  const valid = validateContactForm({
    fullName: 'Nguyễn Minh Anh (Phụ huynh)',
    contact: '0912345678',
    subject: 'Tìm hiểu tuyển sinh lớp 6',
    message: 'Kính gửi nhà trường, tôi muốn hỏi lịch tiếp nhận hồ sơ tham khảo.',
  });
  assert.deepEqual(valid, {});
});
