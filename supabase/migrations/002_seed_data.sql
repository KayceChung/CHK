-- CHUNG HIẾN KHANG PORTFOLIO - DATA SEED
-- Purpose: Populate database with initial data from existing codebase
-- Run this after 001_initial_schema.sql

-- =============================================
-- SEED: Translations (nav section)
-- =============================================

INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('nav.about', 'About', 'Giới Thiệu', '关于', 'nav'),
('nav.services', 'Services', 'Dịch Vụ', '服务', 'nav'),
('nav.techstack', 'Tech Stack', 'Công Nghệ', '技术栈', 'nav'),
('nav.education', 'Education', 'Học Vấn', '教育', 'nav'),
('nav.experience', 'Experience', 'Kinh Nghiệm', '经验', 'nav'),
('nav.projects', 'Projects', 'Dự Án', '项目', 'nav'),
('nav.contact', 'Contact', 'Liên Hệ', '联系', 'nav');

-- =============================================
-- SEED: Translations (hero section)
-- =============================================

INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('hero.greeting', 'Hello, I''m', 'Xin chào, tôi là', '你好，我是', 'hero'),
('hero.name', 'Chung Hiến Khang', 'Chung Hiến Khang', 'Chung Hiến Khang', 'hero'),
('hero.title', 'Technology Solutions Consultant', 'Chuyên Viên Tư Vấn Giải Pháp Công Nghệ', '技术解决方案顾问', 'hero'),
('hero.subtitle', 'E-Commerce & Data Analysis Specialist', 'Chuyên Gia Thương Mại Điện Tử & Phân Tích Dữ Liệu', '电子商务与数据分析专家', 'hero'),
('hero.description', 'Helping businesses optimize operations through no-code solutions, data analysis, and process automation.', 'Giúp doanh nghiệp tối ưu hóa hoạt động thông qua giải pháp no-code, phân tích dữ liệu và tự động hóa quy trình.', '通过无代码解决方案、数据分析和流程自动化帮助企业优化运营。', 'hero'),
('hero.cta', 'View Case Studies', 'Xem Dự Án', '查看案例研究', 'hero'),
('hero.contact', 'Get in Touch', 'Liên Hệ', '联系我', 'hero');

-- =============================================
-- SEED: Projects
-- =============================================

INSERT INTO public.projects (
    slug, image, tags,
    title_en, context_en, problem_en, solution_en, result_en, cta_en,
    title_vi, context_vi, problem_vi, solution_vi, result_vi, cta_vi,
    title_zh, context_zh, problem_zh, solution_zh, result_zh, cta_zh,
    order_index, is_published
) VALUES
(
    'real-time-data-collection-system',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ARRAY['AppSheet', 'SQL', 'Data Analysis', 'Process Optimization'],
    'Real-Time Data Collection System',
    'A mid-sized bus company needed to improve on-time performance across multiple routes.',
    'Delays in data collection led to late buses and poor service reliability.',
    'Designed and implemented a real-time data collection workflow using AppSheet and SQL.',
    'Reduced average delay from 5-10 minutes to under 5 minutes on all routes.',
    'Curious how this approach could help your operations? Let''s connect.',
    'Hệ Thống Thu Thập Dữ Liệu Thời Gian Thực',
    'Một công ty xe buýt quy mô vừa cần cải thiện tỷ lệ đúng giờ trên nhiều tuyến.',
    'Việc thu thập dữ liệu chậm khiến xe thường trễ và dịch vụ thiếu ổn định.',
    'Thiết kế và triển khai quy trình thu thập dữ liệu thời gian thực bằng AppSheet và SQL.',
    'Giảm độ trễ trung bình từ 5-10 phút xuống dưới 5 phút trên tất cả các tuyến.',
    'Bạn muốn biết giải pháp này có phù hợp với doanh nghiệp của mình? Hãy trao đổi.',
    '实时数据收集系统',
    '一家中型公交公司需要提升多条线路的准点率。',
    '数据收集延迟导致车辆晚点，服务不稳定。',
    '使用AppSheet和SQL设计并实施了实时数据收集流程。',
    '将平均延误从5-10分钟缩短到5分钟以内。',
    '想了解这种方法如何帮助您的业务？欢迎交流。',
    1,
    true
),
(
    'constructtrack-construction-progress-platform',
    'constructtrack-cover.png',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase', 'Kanban', 'CRM'],
    'ConstructTrack — Construction Progress Management Platform',
    'ConstructTrack is a production-ready web application built for construction teams that need one place to manage project execution, site updates, clients, and staff coordination. The system supports two operational roles: manager and supervisor.\n\nCore modules include authentication, project management, a six-column kanban workflow, task templates, lightweight CRM, staff assignment, and webhook automation with Zalo notifications.',
    'Construction progress is often managed through scattered spreadsheets, chat messages, and manual follow-up. Managers lack a single real-time view, supervisors struggle to update the field consistently, and customer and staff information is disconnected from execution.',
    'ConstructTrack centralizes operations into one workflow-focused platform using React 18, Vite, TypeScript, Tailwind CSS, Zustand, and Supabase. It delivers role-based auth, project CRUD, drag-and-drop kanban updates, task templates by project type, CRM tracking, staff approval, and webhook integrations.',
    'ConstructTrack gives construction teams a clearer operational system instead of disconnected tools. Delivered outcomes include faster project setup, better visibility into execution progress, smoother coordination across teams, and more reliable event handling through Supabase webhooks. View live: https://construction-planning.vercel.app/',
    'Need a custom operations platform for your business? I can design and build workflow-focused systems like ConstructTrack that turn scattered processes into one manageable product.',
    'ConstructTrack — Nền Tảng Quản Lý Tiến Độ Thi Công',
    'ConstructTrack là ứng dụng web hoàn chỉnh cho đội ngũ thi công cần một nơi tập trung để quản lý tiến độ dự án, cập nhật hiện trường, khách hàng và nhân sự. Hệ thống hỗ trợ hai vai trò chính: quản lý và giám sát.\n\nCác phân hệ chính gồm xác thực, quản lý dự án, kanban 6 cột, template công việc, CRM nhẹ, phân công nhân sự và webhook gửi thông báo Zalo.',
    'Tiến độ thi công thường bị quản lý rời rạc qua bảng tính, tin nhắn và việc nhắc tay. Quản lý không có màn hình thời gian thực để nhìn toàn bộ trạng thái dự án, giám sát khó cập nhật hiện trường nhất quán, còn dữ liệu khách hàng và nhân sự bị tách khỏi quá trình triển khai.',
    'ConstructTrack gom toàn bộ vận hành vào một nền tảng thống nhất, xây dựng bằng React 18, Vite, TypeScript, Tailwind CSS, Zustand và Supabase. Giải pháp cung cấp xác thực theo vai trò, CRUD dự án, kanban kéo thả, template task theo loại công trình, CRM theo dõi lead, phân quyền nhân sự và tích hợp webhook.',
    'ConstructTrack giúp đội ngũ thi công vận hành trên một hệ thống rõ ràng thay vì nhiều công cụ rời rạc. Kết quả là khởi tạo dự án nhanh hơn, theo dõi tiến độ tốt hơn, phối hợp mạch lạc hơn và xử lý sự kiện ổn định hơn nhờ webhook Supabase. Xem trực tiếp: https://construction-planning.vercel.app/',
    'Nếu bạn cần một nền tảng quản lý vận hành riêng cho doanh nghiệp, tôi có thể thiết kế và xây dựng các hệ thống tập trung vào workflow như ConstructTrack để thay thế các quy trình rời rạc.',
    'ConstructTrack — 施工进度管理平台',
    'ConstructTrack 是一个面向施工团队的完整 Web 应用，用于集中管理项目执行、现场更新、客户信息和人员协作。系统支持经理和现场主管两种主要角色。\n\n核心模块包括认证、项目管理、六列 Kanban 工作流、任务模板、轻量 CRM、人员分配以及通过 Zalo 发送通知的 Webhook 自动化。',
    '施工进度往往分散在表格、聊天消息和人工跟进中。管理者无法实时统一查看状态，现场主管难以稳定更新任务，而客户与人员数据又与项目执行脱节。',
    'ConstructTrack 使用 React 18、Vite、TypeScript、Tailwind CSS、Zustand 和 Supabase，将分散流程整合为一个统一平台。它提供角色权限认证、项目 CRUD、拖拽式 Kanban、按项目类型生成任务模板、CRM 跟踪、人员审批与 Webhook 集成。',
    'ConstructTrack 为施工团队提供了一个清晰的运营系统，替代彼此割裂的工具组合。交付结果包括更快的项目启动、更清楚的进度可视化、更顺畅的团队协作，以及借助 Supabase Webhook 实现更可靠的事件处理。在线查看：https://construction-planning.vercel.app/',
    '如果您需要为企业定制运营平台，我可以构建像 ConstructTrack 这样以工作流为核心的系统，把分散流程整合为可管理的产品。',
    2,
    true
),
(
    'chung-tieu-dinh-portfolio',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ARRAY['Portfolio', 'Personal Brand', 'Professional Showcase', 'Design', 'Development'],
    'Chung Tiểu Đình — Creative / Professional Portfolio',
    'Chung Tiểu Đình is a professional with experience and achievements in web development, design, and digital branding.\n\nThis portfolio was created to showcase capabilities and working style, present representative projects, and increase credibility with clients and partners.',
    'Many professionals lack a structured online presence, which makes it difficult to prove real value and create trust at first contact.',
    'This portfolio combines content strategy, visual design, project storytelling, and a clear CTA so viewers can quickly understand the profile, skills, and completed work.',
    'The portfolio became a professional personal page that supports lead generation, demonstrates working mindset, and strengthens personal branding. View live: https://kaycechung.github.io/CTD/',
    'Want a portfolio like this? Let''s build a beautiful, effective, high-converting portfolio together.',
    'Chung Tiểu Đình — Portfolio Chuyên Nghiệp',
    'Chung Tiểu Đình là chuyên gia có kinh nghiệm trong phát triển web, thiết kế và xây dựng thương hiệu số.\n\nPortfolio này được tạo ra để giới thiệu năng lực, trình bày dự án tiêu biểu và tăng độ tin cậy với khách hàng.',
    'Nhiều chuyên gia thiếu một điểm chạm online có cấu trúc, dẫn đến khó chứng minh giá trị thực tế và tạo niềm tin ngay từ lần đầu tiếp xúc.',
    'Portfolio kết hợp chiến lược nội dung, thiết kế trực quan, storytelling cho dự án và CTA rõ ràng để người xem nhanh chóng hiểu profile, kỹ năng và thành quả đã thực hiện.',
    'Portfolio trở thành trang cá nhân chuyên nghiệp hỗ trợ tạo lead, thể hiện tư duy làm việc và củng cố thương hiệu cá nhân. Xem trực tiếp: https://kaycechung.github.io/CTD/',
    'Bạn muốn có portfolio như thế này? Cùng xây dựng một portfolio đẹp, hiệu quả và có khả năng chuyển đổi cao.',
    'Chung Tiểu Đình — 专业作品集',
    'Chung Tiểu Đình 是一位在网页开发、设计和数字品牌建设方面拥有经验的专业人士。\n\n这个作品集用于展示能力、呈现代表性项目，并提高与客户和合作伙伴沟通时的可信度。',
    '许多专业人士缺少结构清晰的线上展示入口，因此难以在首次接触时证明真实价值并建立信任。',
    '该作品集结合内容策略、视觉设计、项目叙事和明确 CTA，让访客能够快速理解个人简介、核心技能和已完成的工作。',
    '该作品集成为支持获客、展示工作方法并强化个人品牌的专业页面。在线查看：https://kaycechung.github.io/CTD/',
    '想要这样的作品集吗？让我们一起打造一个美观、高效、具备转化能力的专业作品集。',
    3,
    true
);

-- =============================================
-- SEED: Services
-- =============================================

INSERT INTO public.services (icon, title_en, title_vi, title_zh, description_en, description_vi, description_zh, features_en, features_vi, features_zh, order_index) VALUES
(
    'Languages',
    'Business Interpretation',
    'Phiên Dịch Kinh Doanh',
    '商务口译',
    'Professional English-Vietnamese interpretation services for business meetings, conferences, and negotiations. C1-C2 proficiency level.',
    'Dịch vụ phiên dịch Anh-Việt chuyên nghiệp cho các cuộc họp kinh doanh, hội nghị và đàm phán. Trình độ C1-C2.',
    '为商务会议、会议和谈判提供专业的英越口译服务。C1-C2 水平。',
    ARRAY['Real-time translation', 'Cross-cultural communication', 'Business terminology expertise', 'Conference interpretation'],
    ARRAY['Dịch thuật thời gian thực', 'Giao tiếp đa văn hóa', 'Chuyên môn thuật ngữ kinh doanh', 'Phiên dịch hội nghị'],
    ARRAY['实时翻译', '跨文化交流', '商务术语专业知识', '会议口译'],
    1
),
(
    'ShoppingCart',
    'E-Commerce Solutions',
    'Giải Pháp Thương Mại Điện Tử',
    '电子商务解决方案',
    'Complete e-commerce strategy, market analysis, platform optimization, and sales funnel design to maximize your online revenue.',
    'Chiến lược thương mại điện tử hoàn chỉnh, phân tích thị trường, tối ưu hóa nền tảng và thiết kế phễu bán hàng để tối đa hóa doanh thu trực tuyến của bạn.',
    '完整的电子商务战略、市场分析、平台优化和销售漏斗设计，以最大化您的在线收入。',
    ARRAY['Strategy & market analysis', 'Platform optimization', 'Sales funnel optimization', 'Digital marketing'],
    ARRAY['Chiến lược & phân tích thị trường', 'Tối ưu hóa nền tảng', 'Tối ưu hóa phễu bán hàng', 'Marketing kỹ thuật số'],
    ARRAY['战略和市场分析', '平台优化', '销售漏斗优化', '数字营销'],
    2
),
(
    'Workflow',
    'Technology & Automation',
    'Công Nghệ & Tự Động Hóa',
    '技术与自动化',
    'Custom no-code app development (AppSheet), workflow automation, SQL database design, and API integration to streamline your business processes.',
    'Phát triển ứng dụng no-code tùy chỉnh (AppSheet), tự động hóa quy trình, thiết kế cơ sở dữ liệu SQL và tích hợp API để hợp lý hóa quy trình kinh doanh của bạn.',
    '定制无代码应用程序开发（AppSheet）、工作流程自动化、SQL 数据库设计和 API 集成，以简化您的业务流程。',
    ARRAY['No-code app development (AppSheet)', 'Workflow automation', 'SQL & data analysis', 'API integration'],
    ARRAY['Phát triển ứng dụng no-code (AppSheet)', 'Tự động hóa quy trình', 'SQL & phân tích dữ liệu', 'Tích hợp API'],
    ARRAY['无代码应用开发（AppSheet）', '工作流程自动化', 'SQL 和数据分析', 'API 集成'],
    3
);

-- =============================================
-- SEED: Experiences
-- =============================================

INSERT INTO public.experiences (company, position_en, position_vi, position_zh, description_en, description_vi, description_zh, start_date, end_date, is_current, order_index) VALUES
(
    'HK Buslines',
    'Solutions Consultant',
    'Chuyên Viên Tư Vấn Giải Pháp',
    '解决方案顾问',
    'Analyze operational bottlenecks and design data-driven solutions to optimize processes. Built real-time data collection systems using AppSheet and SQL, reducing delays from 10 minutes to under 5 minutes.',
    'Phân tích các điểm nghẽn hoạt động và thiết kế các giải pháp dựa trên dữ liệu để tối ưu hóa quy trình. Xây dựng hệ thống thu thập dữ liệu thời gian thực bằng AppSheet và SQL, giảm thời gian chậm trễ từ 10 phút xuống dưới 5 phút.',
    '分析运营瓶颈并设计数据驱动的解决方案以优化流程。使用 AppSheet 和 SQL 构建实时数据收集系统，将延迟从 10 分钟减少到 5 分钟以内。',
    '2024-01-01',
    NULL,
    true,
    1
),
(
    'Hoa Sen University',
    'Faculty Assistant & Intern',
    'Trợ Lý Khoa & Thực Tập Sinh',
    '学院助理和实习生',
    'Faculty of Logistics. Assisted with academic administration, student support, and research projects.',
    'Khoa Logistics. Hỗ trợ quản lý học thuật, hỗ trợ sinh viên và các dự án nghiên cứu.',
    '物流学院。协助学术管理、学生支持和研究项目。',
    '2022-04-01',
    '2022-08-31',
    false,
    2
),
(
    'Student Experience Room',
    'Telesales Consultant',
    'Chuyên Viên Telesales',
    '电话销售顾问',
    'Student recruitment and consultation services. Provided information about programs, admissions, and student life.',
    'Dịch vụ tuyển sinh và tư vấn sinh viên. Cung cấp thông tin về các chương trình, tuyển sinh và cuộc sống sinh viên.',
    '学生招聘和咨询服务。提供有关课程、录取和学生生活的信息。',
    '2022-04-01',
    NULL,
    true,
    3
);

-- =============================================
-- SEED: Tech Skills
-- =============================================

-- Technical skills
INSERT INTO public.tech_skills (name, category, proficiency, order_index) VALUES
('SQL', 'technical', 85, 1),
('AppSheet', 'technical', 90, 2),
('Google Apps Script', 'technical', 75, 3),
('Python', 'technical', 70, 4),
('JavaScript', 'technical', 65, 5);

-- Tools & Platforms
INSERT INTO public.tech_skills (name, category, proficiency, order_index) VALUES
('Google Workspace', 'tools', 95, 1),
('GitHub', 'tools', 80, 2),
('Figma', 'tools', 75, 3),
('Microsoft Office', 'tools', 90, 4);

-- Soft Skills
INSERT INTO public.tech_skills (name, category, proficiency, order_index) VALUES
('Problem Solving', 'soft', 90, 1),
('Communication', 'soft', 95, 2),
('Leadership', 'soft', 85, 3),
('Project Management', 'soft', 80, 4);

-- Languages
INSERT INTO public.tech_skills (name, category, proficiency, order_index) VALUES
('Vietnamese (Native)', 'languages', 100, 1),
('English (C1)', 'languages', 90, 2),
('Chinese (HSK4)', 'languages', 70, 3);

-- =============================================
-- SEED: More Translations (additional sections)
-- =============================================

-- About section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('about.title', 'About Me', 'Về Tôi', '关于我', 'about'),
('about.gpa', 'GPA', 'Điểm TB', '平均绩点', 'about'),
('about.projects', 'Projects Completed', 'Dự Án Hoàn Thành', '完成项目', 'about'),
('about.clients', 'Happy Clients', 'Khách Hàng Hài Lòng', '满意客户', 'about');

-- Services section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('services.title', 'My Services', 'Dịch Vụ Của Tôi', '我的服务', 'services'),
('services.subtitle', 'How I Can Help Your Business', 'Tôi Có Thể Giúp Doanh Nghiệp Bạn Như Thế Nào', '我如何帮助您的业务', 'services');

-- Tech Stack section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('skills.title', 'Tech Stack', 'Công Nghệ', '技术栈', 'skills'),
('skills.technical', 'Technical Skills', 'Kỹ Năng Kỹ Thuật', '技术技能', 'skills'),
('skills.tools', 'Tools & Platforms', 'Công Cụ & Nền Tảng', '工具和平台', 'skills'),
('skills.soft', 'Soft Skills', 'Kỹ Năng Mềm', '软技能', 'skills'),
('skills.languages', 'Languages', 'Ngôn Ngữ', '语言', 'skills');

-- Education section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('education.title', 'Education', 'Học Vấn', '教育', 'education'),
('education.degree', 'Bachelor of International Business', 'Cử Nhân Kinh Doanh Quốc Tế', '国际商务学士', 'education'),
('education.major', 'Major: E-commerce', 'Chuyên ngành: Thương mại điện tử', '专业：电子商务', 'education'),
('education.university', 'Hoa Sen University', 'Đại Học Hoa Sen', '华盛大学', 'education'),
('education.period', '2020 - 2024', '2020 - 2024', '2020 - 2024', 'education'),
('education.gpa', 'GPA: 3.65/4.0', 'Điểm TB: 3.65/4.0', '平均绩点：3.65/4.0', 'education');

-- Experience section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('experience.title', 'Work Experience', 'Kinh Nghiệm Làm Việc', '工作经验', 'experience'),
('experience.current', 'Present', 'Hiện tại', '至今', 'experience');

-- Projects section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('projects.title', 'Featured Projects', 'Dự Án Nổi Bật', '特色项目', 'projects'),
('projects.subtitle', 'Real-world solutions that deliver results', 'Giải pháp thực tế mang lại kết quả', '提供结果的实际解决方案', 'projects'),
('projects.view', 'View Details', 'Xem Chi Tiết', '查看详情', 'projects'),
('projects.all', 'View All Projects', 'Xem Tất Cả Dự Án', '查看所有项目', 'projects');

-- Contact section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('contact.title', 'Get In Touch', 'Liên Hệ Với Tôi', '联系我', 'contact'),
('contact.subtitle', 'Let''s discuss how I can help your business', 'Hãy thảo luận cách tôi có thể giúp doanh nghiệp bạn', '让我们讨论我如何帮助您的业务', 'contact'),
('contact.name', 'Your Name', 'Tên Của Bạn', '您的姓名', 'contact'),
('contact.email', 'Your Email', 'Email Của Bạn', '您的电子邮件', 'contact'),
('contact.message', 'Your Message', 'Tin Nhắn Của Bạn', '您的留言', 'contact'),
('contact.send', 'Send Message', 'Gửi Tin Nhắn', '发送消息', 'contact'),
('contact.success', 'Message sent successfully!', 'Tin nhắn đã được gửi thành công!', '消息发送成功！', 'contact'),
('contact.error', 'Failed to send message. Please try again.', 'Gửi tin nhắn thất bại. Vui lòng thử lại.', '发送消息失败。请重试。', 'contact');

-- Footer section
INSERT INTO public.translations (key, value_en, value_vi, value_zh, category) VALUES
('footer.rights', 'All rights reserved', 'Bảo lưu mọi quyền', '保留所有权利', 'footer'),
('footer.connect', 'Connect with me', 'Kết nối với tôi', '与我联系', 'footer');

-- =============================================
-- COMPLETION MESSAGE
-- =============================================

DO $$
BEGIN
    RAISE NOTICE '✅ Seed data inserted successfully!';
    RAISE NOTICE '📊 Data inserted:';
    RAISE NOTICE '   - Projects: 3';
    RAISE NOTICE '   - Translations: 50+';
    RAISE NOTICE '   - Services: 3';
    RAISE NOTICE '   - Experiences: 3';
    RAISE NOTICE '   - Tech Skills: 15';
    RAISE NOTICE '';
    RAISE NOTICE 'Your database is ready to use! 🚀';
END $$;
