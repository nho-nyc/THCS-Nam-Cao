import type {
  AchievementRecord,
  GalleryPhoto,
  HeroSlide,
  NewsArticle,
  SchoolActivity,
  StatMetric,
  TeacherProfile,
} from '../types/school';

export const SCHOOL_INFO = {
  name: 'Trường THCS Nam Cao',
  shortName: 'THCS Nam Cao',
  motto: 'Nơi nuôi dưỡng tri thức, chắp cánh tương lai',
  establishedNote: 'Cổng thông tin giới thiệu nhà trường (Phiên bản mẫu)',
  address: '[Địa chỉ Trường THCS Nam Cao — Cập nhật theo thông tin chính thức]',
  phone: '(024) 0000 0000 (Số mẫu)',
  email: 'lienhe@thcsnamcao.edu.vn (Email mẫu)',
  officeHours: 'Thứ Hai – Thứ Bảy · 07:30 – 17:00',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/src/assets/images/namcao_courtyard_hero_1795265455149.jpg',
    alt: 'Khuôn viên sân trường THCS Nam Cao rợp bóng cây xanh trong nắng sớm',
    caption: 'Không gian học đường xanh — thân thiện — kỷ cương',
    highlight: 'Khuôn viên học tập chuẩn mực',
  },
  {
    id: 'slide-2',
    image: '/src/assets/images/hero_library_learning_1795265435234.jpg',
    alt: 'Học sinh Trường THCS Nam Cao tự học và thảo luận nhóm tại thư viện',
    caption: 'Thư viện mở & không gian tự học khơi gợi niềm say mê đọc sách',
    highlight: 'Văn hóa đọc & nghiên cứu STEM',
  },
  {
    id: 'slide-3',
    image: '/src/assets/images/modern_classroom_view_1795265435967.jpg',
    alt: 'Tiết học Ngữ văn sôi nổi trong phòng học đầy ánh sáng tự nhiên',
    caption: 'Lớp học hiện đại kết nối tri thức sách giáo khoa và thực tiễn đời sống',
    highlight: 'Đổi mới phương pháp giảng dạy',
  },
];

export const SCHOOL_STATS: StatMetric[] = [
  {
    id: 'years',
    label: 'Năm xây dựng & phát triển',
    target: 25,
    suffix: '+',
    detail: 'Số liệu minh họa — cập nhật theo lịch sử trường',
  },
  {
    id: 'staff',
    label: 'Cán bộ, giáo viên & nhân viên',
    target: 68,
    suffix: '',
    detail: 'Số liệu minh họa — cập nhật theo biên chế năm học',
  },
  {
    id: 'students',
    label: 'Học sinh từ khối 6 đến khối 9',
    target: 1250,
    suffix: '+',
    detail: 'Số liệu minh họa — cập nhật theo sĩ số thực tế',
  },
  {
    id: 'classes',
    label: 'Lớp học & phòng bộ môn',
    target: 32,
    suffix: '',
    detail: 'Số liệu minh họa — cập nhật theo cơ sở vật chất',
  },
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'Nhân ái & Tôn trọng',
    description:
      'Nuôi dưỡng lòng trắc ẩn, sự lễ phép và tinh thần biết lắng nghe giữa thầy cô, học sinh và gia đình.',
  },
  {
    number: '02',
    title: 'Tri thức vững vàng',
    description:
      'Xây nền tảng kiến thức cơ bản chắc chắn, bồi đắp tư duy logic và khả năng tự học suốt đời.',
  },
  {
    number: '03',
    title: 'Chủ động & Sáng tạo',
    description:
      'Khuyến khích học sinh đặt câu hỏi, thực hành khoa học, nghệ thuật và ứng dụng kiến thức vào cuộc sống.',
  },
  {
    number: '04',
    title: 'Kỷ cương & Trách nhiệm',
    description:
      'Rèn luyện nếp sống nề nếp, trung thực trong học tập và ý thức trách nhiệm với tập thể, cộng đồng.',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Lễ Khai giảng và phát động chủ đề năm học mới (Bản tin mẫu)',
    category: 'Thông báo',
    publishedAt: '05/09/2026',
    readTime: '3 phút đọc',
    featured: true,
    summary:
      'Toàn thể thầy và trò Trường THCS Nam Cao bước vào năm học mới với quyết tâm xây dựng môi trường học đường thân thiện, sáng tạo và giàu bản sắc.',
    content: [
      'Đây là bài viết mẫu minh họa bố cục tin tức sự kiện trọng điểm của Trường THCS Nam Cao. Khi đưa vào vận hành chính thức, Ban Biên tập nhà trường có thể thay thế bằng diễn văn khai giảng, hình ảnh lễ chào cờ và thông điệp năm học thực tế.',
      'Trong không khí trang trọng của buổi sáng đầu thu, học sinh các khối lớp 6, 7, 8 và 9 cùng nhau tham gia nghi thức đón học sinh đầu cấp, lắng nghe định hướng rèn luyện đạo đức và học tập từ Ban Giám hiệu.',
      'Nhà trường tiếp tục chú trọng cân bằng giữa chất lượng giảng dạy văn hóa, rèn luyện kỹ năng sống, hoạt động Đội và giáo dục thể chất toàn diện.',
    ],
    image: '/src/assets/images/namcao_courtyard_hero_1795265455149.jpg',
    imageAlt: 'Quang cảnh sân trường THCS Nam Cao trong ngày tựu trường',
  },
  {
    id: 'news-2',
    title: 'Ngày hội STEM: Khơi nguồn sáng tạo khoa học kỹ thuật (Bản tin mẫu)',
    category: 'Hoạt động',
    publishedAt: '18/10/2026',
    readTime: '4 phút đọc',
    summary:
      'Các nhóm học sinh khối 7 và khối 8 giới thiệu mô hình xe năng lượng mặt trời và hệ thống tưới cây tự động dưới sự hướng dẫn của giáo viên bộ môn.',
    content: [
      'Bản tin mẫu minh họa chuyên mục hoạt động học thuật và trải nghiệm STEM. Các dự án được trình bày trực quan ngay tại sân trường để học sinh toàn trường tham quan và trao đổi.',
      'Thông qua mô hình học tập gắn với thực hành, học sinh rèn luyện kỹ năng làm việc nhóm, thuyết trình ý tưởng và áp dụng kiến thức Vật lý, Công nghệ, Tin học vào giải quyết vấn đề gần gũi.',
    ],
    image: '/src/assets/images/namcao_stem_activity_1795265457260.jpg',
    imageAlt: 'Giáo viên và học sinh thảo luận bên mô hình STEM năng lượng mặt trời',
  },
  {
    id: 'news-3',
    title: 'Tuần lễ Đọc sách và phát triển văn hóa tự học tại Thư viện (Bản tin mẫu)',
    category: 'Học tập',
    publishedAt: '12/11/2026',
    readTime: '3 phút đọc',
    summary:
      'Thư viện nhà trường mở rộng danh mục đầu sách văn học, lịch sử và khoa học thường thức phục vụ học sinh nghiên cứu ngoài giờ lên lớp.',
    content: [
      'Nhằm lan tỏa thói quen đọc sách bền vững, thư viện nhà trường duy trì các buổi giới thiệu sách hay theo chủ đề hàng tháng, gắn với tác phẩm của nhà văn Nam Cao và nền văn học Việt Nam.',
      'Học sinh có thể tra cứu tài liệu, làm việc nhóm và ghi chép thu hoạch đọc sách trong không gian yên tĩnh, tràn ngập ánh sáng tự nhiên.',
    ],
    image: '/src/assets/images/hero_library_learning_1795265435234.jpg',
    imageAlt: 'Học sinh đọc sách và trao đổi bài tại thư viện trường',
  },
  {
    id: 'news-4',
    title: 'Thông báo hướng dẫn tìm hiểu thông tin tuyển sinh lớp 6 (Bản tin mẫu)',
    category: 'Tuyển sinh',
    publishedAt: '20/05/2026',
    readTime: '4 phút đọc',
    summary:
      'Tổng hợp các mốc thời gian dự kiến, quy trình tiếp nhận hồ sơ và kênh tư vấn dành cho quý phụ huynh có con chuẩn bị vào lớp 6.',
    content: [
      'Đây là thông báo mẫu phục vụ mục Tuyển sinh. Văn phòng nhà trường sẽ cập nhật thông báo chính thức theo kế hoạch phân tuyến và hướng dẫn của Phòng Giáo dục & Đào tạo địa phương.',
      'Phụ huynh có thể liên hệ trực tiếp qua biểu mẫu ở cuối trang để nhận tư vấn về lịch tiếp nhận hồ sơ và chương trình học tập của học sinh khối 6.',
    ],
    image: '/src/assets/images/modern_classroom_view_1795265435967.jpg',
    imageAlt: 'Phòng học khang trang chuẩn bị đón học sinh lớp 6',
  },
  {
    id: 'news-5',
    title: 'Giải Thể thao học sinh cấp trường — Tinh thần đoàn kết, trung thực (Bản tin mẫu)',
    category: 'Hoạt động',
    publishedAt: '24/11/2026',
    readTime: '3 phút đọc',
    summary:
      'Các đội tuyển bóng chuyền, cầu lông và điền kinh từ bốn khối lớp thi đấu sôi nổi, nâng cao thể lực và gắn kết tập thể lớp.',
    content: [
      'Hoạt động thể dục thể thao thường niên tạo sân chơi lành mạnh sau những giờ học căng thẳng, giúp học sinh phát triển chiều cao, sức bền và tinh thần đồng đội.',
      'Nội dung chi tiết, lịch thi đấu và bảng kết quả thực tế sẽ được cập nhật theo từng học kỳ.',
    ],
    image: '/src/assets/images/namcao_sports_activity_1795265457686.jpg',
    imageAlt: 'Học sinh thi đấu bóng chuyền trên sân thể thao trường học',
  },
];

export const SCHOOL_ACTIVITIES: SchoolActivity[] = [
  {
    id: 'act-1',
    indexNumber: '01',
    category: 'Ngoại khóa',
    title: 'Hoạt động ngoại khóa & Câu lạc bộ STEM',
    schedule: 'Sinh hoạt định kỳ 2 tuần / lần (Mẫu)',
    summary:
      'Học sinh tham gia các câu lạc bộ Khoa học, Tin học, Tiếng Anh và đọc sách nhằm mở rộng kiến thức thực tiễn.',
    details: [
      'Tổ chức chuyên đề thực hành khoa học tự nhiên, lập trình cơ bản và thuyết trình song ngữ.',
      'Khuyến khích học sinh tự đề xuất đề tài nghiên cứu nhỏ phù hợp lứa tuổi THCS.',
    ],
    image: '/src/assets/images/namcao_stem_activity_1795265457260.jpg',
    imageAlt: 'Học sinh thực hành mô hình STEM ngoài trời cùng giáo viên',
  },
  {
    id: 'act-2',
    indexNumber: '02',
    category: 'Thể thao',
    title: 'Hoạt động thể thao & Rèn luyện thể chất',
    schedule: 'Hội khỏe học đường theo học kỳ (Mẫu)',
    summary:
      'Phát triển phong trào bóng chuyền, cầu lông, bóng đá và chạy bền, xây dựng thói quen vận động lành mạnh.',
    details: [
      'Giải đấu giao hữu giữa các chi đội nhằm tăng cường tinh thần đồng đội và ý thức kỷ luật.',
      'Tuyển chọn và bồi dưỡng học sinh năng khiếu tham gia hội thao các cấp.',
    ],
    image: '/src/assets/images/namcao_sports_activity_1795265457686.jpg',
    imageAlt: 'Học sinh thi đấu bóng chuyền trong khuôn viên xanh của trường',
  },
  {
    id: 'act-3',
    indexNumber: '03',
    category: 'Văn nghệ',
    title: 'Phong trào văn nghệ & Gìn giữ bản sắc',
    schedule: 'Các dịp lễ lớn 20/11, 26/3, bế giảng (Mẫu)',
    summary:
      'Khơi dậy năng khiếu ca hát, nhạc cụ dân tộc, múa và dẫn chương trình trong những ngày hội truyền thống học đường.',
    details: [
      'Câu lạc bộ Âm nhạc và Tuyên truyền măng non luyện tập các tiết mục ca ngợi thầy cô, mái trường, quê hương.',
      'Giúp học sinh tự tin đứng trước tập thể và bồi dưỡng cảm xúc thẩm mỹ lành mạnh.',
    ],
    image: '/src/assets/images/namcao_arts_activity_1795265456578.jpg',
    imageAlt: 'Học sinh biểu diễn guitar và hát tập thể trong phòng âm nhạc',
  },
  {
    id: 'act-4',
    indexNumber: '04',
    category: 'Đoàn – Đội',
    title: 'Hoạt động Đoàn – Đội Thiếu niên Tiền phong',
    schedule: 'Sinh hoạt Liên đội hàng tuần (Mẫu)',
    summary:
      'Giáo dục truyền thống uống nước nhớ nguồn, rèn nếp tự quản, đội cờ đỏ và các phong trào "Nghìn việc tốt".',
    details: [
      'Tổ chức lễ kết nạp Đội viên, các buổi sinh hoạt dưới cờ theo chủ điểm từng tháng.',
      'Phát động phong trào giữ gìn vệ sinh trường lớp xanh – sạch – đẹp và giúp bạn vượt khó.',
    ],
    image: '/src/assets/images/namcao_courtyard_hero_1795265455149.jpg',
    imageAlt: 'Học sinh mang khăn quàng đỏ đi học tại sân trường THCS Nam Cao',
  },
  {
    id: 'act-5',
    indexNumber: '05',
    category: 'Cuộc thi học tập',
    title: 'Các cuộc thi học tập & Bồi dưỡng học sinh giỏi',
    schedule: 'Xuyên suốt hai học kỳ (Mẫu)',
    summary:
      'Tổ chức sân chơi trí tuệ các môn Ngữ văn, Toán, Tiếng Anh, Khoa học Tự nhiên và Tin học trẻ.',
    details: [
      'Các câu lạc bộ bộ môn hỗ trợ học sinh ôn luyện có phương pháp, không tạo áp lực nặng nề.',
      'Lan tỏa tinh thần thi đua học tốt và tôn vinh nỗ lực tiến bộ của từng cá nhân.',
    ],
    image: '/src/assets/images/hero_library_learning_1795265435234.jpg',
    imageAlt: 'Học sinh ôn luyện và trao đổi tài liệu tại thư viện trường',
  },
  {
    id: 'act-6',
    indexNumber: '06',
    category: 'Trải nghiệm',
    title: 'Hoạt động trải nghiệm & Hướng nghiệp',
    schedule: 'Theo kế hoạch từng khối lớp (Mẫu)',
    summary:
      'Kết nối bài học trên lớp với tham quan di tích văn hóa – lịch sử, rèn kỹ năng phòng chống tai nạn và định hướng nghề nghiệp.',
    details: [
      'Xây dựng các chuyên đề kỹ năng giao tiếp, an toàn giao thông và ứng xử văn minh trên không gian mạng.',
      'Hoạt động hướng nghiệp sớm giúp học sinh khối 8–9 hiểu sở thích và năng lực bản thân.',
    ],
    image: '/src/assets/images/modern_classroom_view_1795265435967.jpg',
    imageAlt: 'Tiết học trải nghiệm và tương tác trong lớp học hiện đại',
  },
];

export const ACHIEVEMENTS: AchievementRecord[] = [
  {
    id: 'ach-1',
    pillar: 'Học tập',
    year: 'Mẫu năm học',
    title: 'Chất lượng giáo dục toàn diện & thi vào lớp 10',
    metric: 'Dữ liệu mẫu',
    description:
      'Khu vực trình bày tỷ lệ học sinh hoàn thành chương trình THCS, kết quả thi tuyển sinh lớp 10 THPT và giải học sinh giỏi các cấp sau khi cập nhật số liệu xác thực.',
  },
  {
    id: 'ach-2',
    pillar: 'Học tập',
    year: 'Mẫu năm học',
    title: 'Sân chơi trí tuệ & Nghiên cứu khoa học kỹ thuật',
    metric: 'Dữ liệu mẫu',
    description:
      'Ghi nhận các đề tài khoa học kỹ thuật, tin học trẻ và giải thưởng học sinh giỏi văn hóa cấp huyện/quận, cấp tỉnh/thành phố.',
  },
  {
    id: 'ach-3',
    pillar: 'Giáo viên',
    year: 'Mẫu năm học',
    title: 'Hội thi Giáo viên dạy giỏi & Sáng kiến kinh nghiệm',
    metric: 'Dữ liệu mẫu',
    description:
      'Tôn vinh các thầy cô đạt danh hiệu Giáo viên dạy giỏi, Giáo viên chủ nhiệm giỏi và các sáng kiến đổi mới phương pháp dạy học hiệu quả.',
  },
  {
    id: 'ach-4',
    pillar: 'Giáo viên',
    year: 'Mẫu năm học',
    title: 'Ứng dụng công nghệ thông tin & Bài giảng điện tử',
    metric: 'Dữ liệu mẫu',
    description:
      'Xây dựng kho học liệu số phục vụ giảng dạy chương trình giáo dục phổ thông mới và hỗ trợ học sinh tự ôn tập.',
  },
  {
    id: 'ach-5',
    pillar: 'Thể thao',
    year: 'Mẫu năm học',
    title: 'Hội khỏe Phù Đổng & Giải thể thao học đường',
    metric: 'Dữ liệu mẫu',
    description:
      'Tổng hợp huy chương, giải tập thể các môn điền kinh, cầu lông, bóng chuyền, cờ vua khi đội tuyển trường tham gia thi đấu.',
  },
  {
    id: 'ach-6',
    pillar: 'Thể thao',
    year: 'Mẫu năm học',
    title: 'Phong trào rèn luyện sức khỏe học sinh toàn trường',
    metric: 'Dữ liệu mẫu',
    description:
      'Duy trì thể dục giữa giờ, câu lạc bộ thể thao học đường và phổ cập kỹ năng vận động an toàn cho học sinh.',
  },
  {
    id: 'ach-7',
    pillar: 'Phong trào',
    year: 'Mẫu năm học',
    title: 'Liên đội vững mạnh & Công tác Đội xuất sắc',
    metric: 'Dữ liệu mẫu',
    description:
      'Ghi nhận danh hiệu Liên đội mạnh, phong trào Kế hoạch nhỏ, quyên góp sách vở và hoạt động thiện nguyện vì cộng đồng.',
  },
  {
    id: 'ach-8',
    pillar: 'Phong trào',
    year: 'Mẫu năm học',
    title: 'Xây dựng trường học xanh – sạch – đẹp – an toàn',
    metric: 'Dữ liệu mẫu',
    description:
      'Phối hợp chặt chẽ giữa nhà trường, phụ huynh và địa phương giữ gìn cảnh quan sư phạm thân thiện, văn minh.',
  },
];

export const TEACHERS: TeacherProfile[] = [
  {
    id: 'gv-1',
    placeholderName: 'Hiệu trưởng (Hồ sơ mẫu)',
    role: 'Hiệu trưởng',
    subject: 'Quản lý giáo dục',
    department: 'Ban Giám hiệu',
    initials: 'HT',
    note: 'Cập nhật họ tên và chân dung chính thức của thầy/cô Hiệu trưởng.',
  },
  {
    id: 'gv-2',
    placeholderName: 'Phó Hiệu trưởng (Hồ sơ mẫu)',
    role: 'Phó Hiệu trưởng',
    subject: 'Phụ trách Chuyên môn',
    department: 'Ban Giám hiệu',
    initials: 'PH',
    note: 'Cập nhật họ tên và thông tin phân công chuyên môn chính thức.',
  },
  {
    id: 'gv-3',
    placeholderName: 'Giáo viên Toán – Tin (Hồ sơ mẫu)',
    role: 'Tổ trưởng chuyên môn',
    subject: 'Bộ môn Toán học',
    department: 'Tổ Khoa học Tự nhiên',
    initials: 'TH',
    note: 'Đại diện đội ngũ giảng dạy Toán học và bồi dưỡng tư duy logic.',
  },
  {
    id: 'gv-4',
    placeholderName: 'Giáo viên KHTN (Hồ sơ mẫu)',
    role: 'Giáo viên bộ môn',
    subject: 'Khoa học Tự nhiên & STEM',
    department: 'Tổ Khoa học Tự nhiên',
    initials: 'KH',
    note: 'Phụ trách giảng dạy thực hành thí nghiệm và câu lạc bộ STEM.',
  },
  {
    id: 'gv-5',
    placeholderName: 'Giáo viên Ngữ văn (Hồ sơ mẫu)',
    role: 'Tổ trưởng chuyên môn',
    subject: 'Bộ môn Ngữ văn',
    department: 'Tổ Khoa học Xã hội',
    initials: 'NV',
    note: 'Đồng hành cùng học sinh rèn khả năng cảm thụ văn học và viết mạch lạc.',
  },
  {
    id: 'gv-6',
    placeholderName: 'Giáo viên Lịch sử & Địa lý (Hồ sơ mẫu)',
    role: 'Giáo viên bộ môn',
    subject: 'Lịch sử & Địa lý',
    department: 'Tổ Khoa học Xã hội',
    initials: 'SD',
    note: 'Giáo dục truyền thống lịch sử địa phương và kiến thức địa lý thực tiễn.',
  },
  {
    id: 'gv-7',
    placeholderName: 'Giáo viên Tiếng Anh (Hồ sơ mẫu)',
    role: 'Tổ trưởng chuyên môn',
    subject: 'Bộ môn Tiếng Anh',
    department: 'Tổ Ngoại ngữ & Năng khiếu',
    initials: 'TA',
    note: 'Phát triển kỹ năng giao tiếp ngoại ngữ và hội nhập cho học sinh.',
  },
  {
    id: 'gv-8',
    placeholderName: 'Giáo viên GDTC & Nghệ thuật (Hồ sơ mẫu)',
    role: 'Giáo viên bộ môn',
    subject: 'Thể chất & Âm nhạc',
    department: 'Tổ Ngoại ngữ & Năng khiếu',
    initials: 'NT',
    note: 'Tổ chức các hoạt động rèn luyện thể lực, văn nghệ và kỹ năng tập thể.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Khuôn viên sân trường rợp bóng cây',
    category: 'Khuôn viên',
    description: 'Sân trường sạch đẹp, thoáng mát đón học sinh mỗi buổi sáng.',
    image: '/src/assets/images/namcao_courtyard_hero_1795265455149.jpg',
    alt: 'Sân trường THCS Nam Cao với hàng cây xanh và dãy phòng học khang trang',
  },
  {
    id: 'gal-2',
    title: 'Thư viện & không gian tự học',
    category: 'Học tập',
    description: 'Học sinh tra cứu sách và thảo luận nhóm trong giờ tự học.',
    image: '/src/assets/images/hero_library_learning_1795265435234.jpg',
    alt: 'Học sinh thảo luận nhóm trong thư viện nhiều ánh sáng tự nhiên',
  },
  {
    id: 'gal-3',
    title: 'Tiết học Ngữ văn tương tác',
    category: 'Học tập',
    description: 'Lớp học rộng rãi kết hợp bảng viết truyền thống và thiết bị trình chiếu.',
    image: '/src/assets/images/modern_classroom_view_1795265435967.jpg',
    alt: 'Lớp học sáng sủa nhìn ra khoảng sân cây xanh',
  },
  {
    id: 'gal-4',
    title: 'Thực hành mô hình STEM ngoài trời',
    category: 'Ngoại khóa',
    description: 'Thầy trò cùng kiểm tra vận hành sản phẩm sáng tạo của câu lạc bộ.',
    image: '/src/assets/images/namcao_stem_activity_1795265457260.jpg',
    alt: 'Học sinh và giáo viên thử nghiệm mô hình xe năng lượng mặt trời',
  },
  {
    id: 'gal-5',
    title: 'Giải bóng chuyền học đường',
    category: 'Thể thao & Văn nghệ',
    description: 'Không khí thi đấu sôi nổi, rèn luyện thể chất sau giờ học.',
    image: '/src/assets/images/namcao_sports_activity_1795265457686.jpg',
    alt: 'Học sinh thi đấu bóng chuyền trên sân thể thao ngoài trời',
  },
  {
    id: 'gal-6',
    title: 'Sinh hoạt câu lạc bộ Âm nhạc',
    category: 'Thể thao & Văn nghệ',
    description: 'Học sinh luyện tập đàn guitar và hợp xướng chuẩn bị chương trình văn nghệ.',
    image: '/src/assets/images/namcao_arts_activity_1795265456578.jpg',
    alt: 'Học sinh chơi đàn và hát cùng nhau trong phòng âm nhạc',
  },
];
