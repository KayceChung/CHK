import { createContext, useContext, useState, ReactNode } from 'react';

// Language Context for trilingual support (EN/VI/ZH) - Updated
type Language = 'en' | 'vi' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.techstack': 'Tech Stack',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Technology Solutions Consultant',
    'hero.subtitle': 'Specializing in Business Automation & E-Commerce Systems',
    'hero.description': 'I work with businesses to design and implement practical technology solutions that streamline operations, improve data visibility, and support growth. My experience includes building business automation systems, internal tools, and e-commerce workflows using AppSheet, SQL, and data-driven approaches.',
    'hero.cta': 'View Case Studies',
    'hero.contact': 'Let\'s Talk About Your Project',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about data-driven solutions and process optimization',
    'about.description': 'As a graduate from Hoa Sen University with a degree in International Business (E-commerce), I specialize in operational bottleneck analysis and process optimization. My experience at HK Buslines has equipped me with practical skills in SQL, AppSheet, and data analytics to drive meaningful business improvements.',
    'about.gpa': 'GPA',
    'about.projects': 'Projects Completed',
    'about.clients': 'Award & Recognition',
    
    // Education Section
    'education.title': 'Education',
    'education.degree': 'Bachelor of International Business',
    'education.major': 'Major: E-commerce',
    'education.university': 'Hoa Sen University',
    'education.period': '2020 - 2024',
    'education.gpa': 'GPA: 3.65/4.0',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.subtitle': 'Professional Journey',
    'experience.hk.title': 'Solutions Consultant',
    'experience.hk.company': 'HK Buslines',
    'experience.hk.role': 'Operational Bottleneck Analysis & Process Optimization',
    'experience.intern.title': 'Faculty Assistant & Intern',
    'experience.intern.company': 'Hoa Sen University - Faculty of Logistics',
    'experience.intern.period': 'April 2022 - August 2022',
    'experience.telesale.title': 'Telesales Consultant',
    'experience.telesale.company': 'Student Experience Room',
    'experience.telesale.period': 'April 2022 - Present',
    
    // Services Section
    'services.title': 'What I Offer',
    'services.subtitle': 'Core Competencies',
    'services.analysis.title': 'Operational Analysis',
    'services.analysis.description': 'Data-driven bottleneck analysis and process optimization using SQL and advanced analytics.',
    'services.software.title': 'Software Development',
    'services.software.description': 'Internal software systems development using AppSheet, AppScript, and workflow automation.',
    'services.data.title': 'Data Management',
    'services.data.description': 'Collect, manage, and analyze data to support decision-making and business intelligence.',
    'services.cta': 'Get Started',
    'services.viewProfile': 'View LinkedIn Profile',
    'services.availability': 'Available for freelance projects and consulting',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Key Achievements',
    'projects.view': 'Learn More',
    'projects.hk.title': 'Real-Time Data Collection System',
    'projects.hk.description': 'Designed and implemented a real-time data collection workflow for the Dispatching Control department, improving on-time performance by reducing delays from 5-10 minutes to under 5 minutes across all routes.',
    'projects.club.title': 'Hoa Sen Ecom Club Leadership',
    'projects.club.description': 'Led the Hoa Sen Ecom Club as President, managing member recruitment, organizing seminars and workshops, and providing academic content for the fanpage.',
    'projects.best.title': 'BEST Project & SIT Program',
    'projects.best.description': 'Associate role in BEST Project organizing content plans and classroom management. Translator and tour guide for SIT Program supporting international students.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.technical': 'Technical',
    'skills.tools': 'Tools & Platforms',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    
    // Certificates
    'certificates.title': 'Certificates & Awards',
    'certificates.subtitle': 'Achievements & Recognition',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Connect',
    'contact.description': 'Interested in collaborating or discussing opportunities? I\'d love to hear from you.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.datacamp': 'DataCamp Profile',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.connect': 'Connect with me',
  },
  vi: {
    // Navigation
    'nav.about': 'Giới Thiệu',
    'nav.services': 'Dịch Vụ',
    'nav.techstack': 'Tech Stack',
    'nav.education': 'Học Vấn',
    'nav.experience': 'Kinh Nghiệm',
    'nav.projects': 'Dự Án',
    'nav.contact': 'Liên Hệ',
    
    // Hero Section
    'hero.greeting': 'Xin chào, tôi là',
    'hero.title': 'Chuyên Viên Tư Vấn Giải Pháp Công Nghệ',
    'hero.subtitle': 'Chuyên về Tự Động Hóa Doanh Nghiệp & Hệ Thống E-Commerce',
    'hero.description': 'Tôi làm việc với các doanh nghiệp để thiết kế và triển khai các giải pháp công nghệ thực tế nhằm tối ưu hóa vận hành, cải thiện khả năng hiển thị dữ liệu và hỗ trợ tăng trưởng. Kinh nghiệm của tôi bao gồm xây dựng hệ thống tự động hóa doanh nghiệp, công cụ nội bộ và quy trình e-commerce sử dụng AppSheet, SQL và phương pháp dựa trên dữ liệu.',
    'hero.cta': 'Xem Case Study',
    'hero.contact': 'Trao Đổi Về Dự Án',
    
    // About Section
    'about.title': 'Giới Thiệu',
    'about.subtitle': 'Đam mê giải pháp dữ liệu và tối ưu quy trình',
    'about.description': 'Tốt nghiệp Đại học Hoa Sen với bằng Kinh Doanh Quốc Tế (E-commerce), tôi chuyên về phân tích điểm nghẽn vận hành và tối ưu quy trình. Kinh nghiệm tại HK Buslines đã trang bị cho tôi kỹ năng thực tế về SQL, AppSheet và phân tích dữ liệu để thúc đẩy cải thiện doanh nghiệp.',
    'about.gpa': 'GPA',
    'about.projects': 'Dự Án Hoàn Thành',
    'about.clients': 'Giải Thưởng',
    
    // Education Section
    'education.title': 'Học Vấn',
    'education.degree': 'Cử Nhân Kinh Doanh Quốc Tế',
    'education.major': 'Chuyên ngành: E-commerce',
    'education.university': 'Đại Học Hoa Sen',
    'education.period': '2020 - 2024',
    'education.gpa': 'GPA: 3.65/4.0',
    
    // Experience Section
    'experience.title': 'Kinh Nghiệm',
    'experience.subtitle': 'Hành Trình Nghề Nghiệp',
    'experience.hk.title': 'Solutions Consultant',
    'experience.hk.company': 'HK Buslines',
    'experience.hk.role': 'Phân Tích Điểm Nghẽn Vận Hành & Tối Ưu Quy Trình',
    'experience.intern.title': 'Trợ Giảng & Intern',
    'experience.intern.company': 'Đại Học Hoa Sen - Khoa Logistics',
    'experience.intern.period': 'Tháng 4/2022 - Tháng 8/2022',
    'experience.telesale.title': 'Tư Vấn Telesales',
    'experience.telesale.company': 'Phòng Trải Nghiệm Sinh Viên',
    'experience.telesale.period': 'Tháng 4/2022 - Hiện tại',
    
    // Services Section
    'services.title': 'Năng Lực',
    'services.subtitle': 'Chuyên Môn Cốt Lõi',
    'services.analysis.title': 'Phân Tích Vận Hành',
    'services.analysis.description': 'Phân tích điểm nghẽn và tối ưu quy trình dựa trên dữ liệu sử dụng SQL và phân tích nâng cao.',
    'services.software.title': 'Phát Triển Phần Mềm',
    'services.software.description': 'Phát triển hệ thống phần mềm nội bộ sử dụng AppSheet, AppScript và tự động hóa quy trình.',
    'services.data.title': 'Quản Lý Dữ Liệu',
    'services.data.description': 'Thu thập, quản lý và phân tích dữ liệu để hỗ trợ ra quyết định và business intelligence.',
    'services.cta': 'Bắt Đầu Ngay',
    'services.viewProfile': 'Xem Hồ Sơ LinkedIn',
    'services.availability': 'Có sẵn cho các dự án tự do và tư vấn',
    
    // Projects Section
    'projects.title': 'Dự Án Nổi Bật',
    'projects.subtitle': 'Thành Tựu Chính',
    'projects.view': 'Tìm Hiểu Thêm',
    'projects.hk.title': 'Hệ Thống Thu Thập Dữ Liệu Thời Gian Thực',
    'projects.hk.description': 'Thiết kế và triển khai quy trình thu thập dữ liệu thời gian thực cho bộ phận Dispatching Control, cải thiện hiệu suất đúng giờ bằng cách giảm độ trễ từ 5-10 phút xuống dưới 5 phút trên tất cả các tuyến.',
    'projects.club.title': 'Chủ Tịch Hoa Sen Ecom Club',
    'projects.club.description': 'Lãnh đạo Hoa Sen Ecom Club với vai trò Chủ tịch, quản lý tuyển dụng thành viên, tổ chức hội thảo và workshop, cung cấp nội dung học thuật cho fanpage.',
    'projects.best.title': 'BEST Project & SIT Program',
    'projects.best.description': 'Vai trò Associate trong BEST Project tổ chức kế hoạch nội dung và quản lý lớp học. Phiên dịch và hướng dẫn viên cho SIT Program hỗ trợ sinh viên quốc tế.',
    
    // Skills
    'skills.title': 'Kỹ Năng Kỹ Thuật',
    'skills.technical': 'Kỹ Thuật',
    'skills.tools': 'Công Cụ & Nền Tảng',
    'skills.soft': 'Kỹ Năng Mềm',
    'skills.languages': 'Ngôn Ngữ',
    
    // Certificates
    'certificates.title': 'Chứng Chỉ & Giải Thưởng',
    'certificates.subtitle': 'Thành Tích & Ghi Nhận',
    
    // Contact Section
    'contact.title': 'Liên Hệ',
    'contact.subtitle': 'Kết Nối',
    'contact.description': 'Quan tâm đến hợp tác hoặc thảo luận cơ hội? Rất mong được nghe từ bạn.',
    'contact.name': 'Tên của bạn',
    'contact.email': 'Email của bạn',
    'contact.message': 'Tin nhắn',
    'contact.send': 'Gửi Tin Nhắn',
    'contact.datacamp': 'Hồ Sơ DataCamp',
    
    // Footer
    'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.connect': 'Kết nối với tôi',
  },
  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.techstack': '技术栈',
    'nav.education': '教育',
    'nav.experience': '经验',
    'nav.projects': '项目',
    'nav.contact': '联系',
    
    // Hero Section
    'hero.greeting': '你好，我是',
    'hero.title': '技术解决方案顾问',
    'hero.subtitle': '专注于业务自动化和电子商务系统',
    'hero.description': '我与企业合作，设计和实施实用的技术解决方案，以简化运营、提高数据可见性并支持增长。我的经验包括使用AppSheet、SQL和数据驱动方法构建业务自动化系统、内部工具和电子商务工作流程。',
    'hero.cta': '查看案例研究',
    'hero.contact': '讨论您的项目',
    
    // About Section
    'about.title': '关于我',
    'about.subtitle': '热衷于数据驱动的解决方案和流程优化',
    'about.description': '作为Hoa Sen大学国际商务（电子商务）学位的毕业生，我专注于运营瓶颈分析和流程优化。在HK Buslines的经验使我掌握了SQL、AppSheet和数据分析的实用技能，以推动有意义的业务改进。',
    'about.gpa': '平均绩点',
    'about.projects': '完成项目',
    'about.clients': '奖项与认可',
    
    // Education Section
    'education.title': '教育背景',
    'education.degree': '国际商务学士',
    'education.major': '专业：电子商务',
    'education.university': 'Hoa Sen大学',
    'education.period': '2020 - 2024',
    'education.gpa': 'GPA：3.65/4.0',
    
    // Experience Section
    'experience.title': '工作经验',
    'experience.subtitle': '职业历程',
    'experience.hk.title': '解决方案顾问',
    'experience.hk.company': 'HK Buslines',
    'experience.hk.role': '运营瓶颈分析与流程优化',
    'experience.intern.title': '助教与实习生',
    'experience.intern.company': 'Hoa Sen大学 - 物流学院',
    'experience.intern.period': '2022年4月 - 2022年8月',
    'experience.telesale.title': '电话销售顾问',
    'experience.telesale.company': '学生体验室',
    'experience.telesale.period': '2022年4月 - 至今',
    
    // Services Section
    'services.title': '我的服务',
    'services.subtitle': '核心能力',
    'services.analysis.title': '运营分析',
    'services.analysis.description': '使用SQL和高级分析进行数据驱动的瓶颈分析和流程优化。',
    'services.software.title': '软件开发',
    'services.software.description': '使用AppSheet、AppScript和工作流自动化开发内部软件系统。',
    'services.data.title': '数据管理',
    'services.data.description': '收集、管理和分析数据以支持决策制定和商业智能。',
    'services.cta': '开始合作',
    'services.viewProfile': '查看LinkedIn资料',
    'services.availability': '可提供自由职业项目和咨询服务',
    
    // Projects Section
    'projects.title': '精选项目',
    'projects.subtitle': '主要成就',
    'projects.view': '了解更多',
    'projects.hk.title': '实时数据收集系统',
    'projects.hk.description': '为调度控制部门设计并实施实时数据收集工作流程，通过将所有路线的延迟从5-10分钟减少到5分钟以内，提高了准时性能。',
    'projects.club.title': 'Hoa Sen电商俱乐部领导',
    'projects.club.description': '担任Hoa Sen电商俱乐部主席，管理成员招募、组织研讨会和工作坊，并为粉丝页面提供学术内容。',
    'projects.best.title': 'BEST项目与SIT计划',
    'projects.best.description': '在BEST项目中担任副职，组织内容计划和课堂管理。担任SIT计划的翻译和导游，支持国际学生。',
    
    // Skills
    'skills.title': '技术技能',
    'skills.technical': '技术',
    'skills.tools': '工具与平台',
    'skills.soft': '软技能',
    'skills.languages': '语言',
    
    // Certificates
    'certificates.title': '证书与奖项',
    'certificates.subtitle': '成就与认可',
    
    // Contact Section
    'contact.title': '联系我',
    'contact.subtitle': '建立联系',
    'contact.description': '有兴趣合作或讨论机会？我很乐意听到您的声音。',
    'contact.name': '您的姓名',
    'contact.email': '您的邮箱',
    'contact.message': '您的信息',
    'contact.send': '发送消息',
    'contact.datacamp': 'DataCamp资料',
    
    // Footer
    'footer.rights': '保留所有权利。',
    'footer.connect': '与我联系',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}