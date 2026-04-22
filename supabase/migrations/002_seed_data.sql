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
    'ConstructTrack is a real-world web platform for construction teams that need one operational hub for projects, field updates, customers, and staff.\n\nThe product was built around daily site workflow, where managers need overview and supervisors need fast update tools from the field.\n\nMain modules:\n\n• Role-based login and account control\n• Project tracking with contract value, timeline, and customer info\n• 6-stage Kanban board for progress flow\n• Task templates by project type\n• Lightweight CRM for leads and follow-up history\n• Staff approval and assignment\n• Webhook notifications for key events',
    'Before ConstructTrack, progress tracking was split across spreadsheets, chat groups, and manual reminders.\n\nThis created operational pain:\n\n• Managers had no single real-time dashboard\n• Supervisors updated status inconsistently\n• New projects took too long to initialize\n• Customer and staffing data were disconnected\n• Critical updates were easy to miss\n\nThe team spent too much time coordinating instead of executing.',
    'ConstructTrack unified the full process into one workflow-first system, built with React 18, TypeScript, Tailwind CSS, Zustand, and Supabase.\n\nKey implementation decisions:\n\n• Centralized project CRUD with structured data\n• Drag-and-drop Kanban updates for daily execution\n• Standardized task templates to speed up kickoff\n• CRM + project linkage for better customer continuity\n• Controlled staff permissions for internal governance\n• Webhook automation to reduce manual notifications',
    'ConstructTrack improved day-to-day execution clarity for both office and site teams.\n\nBusiness impact:\n\n• Faster project setup through reusable templates\n• Better progress visibility across active projects\n• Smoother collaboration between managers, supervisors, and clients\n• More stable event handling with webhook automation\n• Solid base architecture (Auth + RLS + PostgreSQL) for future scale\n\nView live: https://construction-planning.vercel.app/',
    'If your operations are still scattered across chat and spreadsheets, I can build a focused platform like ConstructTrack to centralize workflow and improve execution control.',
    'ConstructTrack — Nền Tảng Quản Lý Tiến Độ Thi Công',
    'ConstructTrack là nền tảng web thực tế dành cho đội ngũ thi công cần một nơi tập trung để quản lý dự án, tiến độ hiện trường, khách hàng và nhân sự.\n\nSản phẩm được thiết kế theo đúng nhịp vận hành công trường: quản lý cần bức tranh tổng quan, còn giám sát cần cập nhật nhanh và chính xác ngay tại hiện trường.\n\nCác phân hệ chính:\n\n• Đăng nhập và phân quyền theo vai trò\n• Quản lý dự án với timeline, giá trị hợp đồng, thông tin khách hàng\n• Kanban 6 trạng thái để theo dõi tiến độ\n• Template công việc theo loại công trình\n• CRM nhẹ cho lead và lịch sử chăm sóc\n• Duyệt và phân công nhân sự\n• Webhook gửi thông báo khi có sự kiện quan trọng',
    'Trước ConstructTrack, tiến độ thi công bị tách rời giữa file Excel, nhóm chat và nhắc việc thủ công.\n\nĐiều này gây ra nhiều vấn đề:\n\n• Quản lý không có dashboard thời gian thực\n• Giám sát cập nhật không đồng nhất\n• Khởi tạo dự án mới mất nhiều thời gian\n• Dữ liệu khách hàng và nhân sự thiếu liên kết\n• Các thay đổi quan trọng dễ bị trễ thông báo\n\nKết quả là đội ngũ tốn nhiều thời gian phối hợp hơn là triển khai công việc.',
    'ConstructTrack gom toàn bộ quy trình vào một hệ thống tập trung theo workflow, xây dựng bằng React 18, TypeScript, Tailwind CSS, Zustand và Supabase.\n\nCác điểm triển khai chính:\n\n• Chuẩn hóa dữ liệu dự án bằng CRUD có cấu trúc\n• Cập nhật tiến độ hàng ngày qua Kanban kéo thả\n• Tái sử dụng template để rút ngắn khởi tạo dự án\n• Liên kết CRM với dự án để theo dõi khách hàng xuyên suốt\n• Phân quyền nhân sự để kiểm soát nội bộ rõ ràng\n• Tự động hóa thông báo bằng webhook thay cho thao tác tay',
    'ConstructTrack giúp đội thi công làm việc rõ ràng và mạch lạc hơn giữa văn phòng và công trường.\n\nTác động thực tế:\n\n• Khởi tạo dự án nhanh hơn nhờ template tái sử dụng\n• Theo dõi tiến độ tốt hơn trên nhiều dự án cùng lúc\n• Phối hợp mượt hơn giữa quản lý, giám sát và khách hàng\n• Xử lý sự kiện ổn định hơn nhờ webhook\n• Nền tảng sẵn sàng mở rộng dài hạn với Auth + RLS + PostgreSQL\n\nXem trực tiếp: https://construction-planning.vercel.app/',
    'Nếu quy trình vận hành của bạn còn rời rạc giữa chat và bảng tính, tôi có thể xây dựng một nền tảng tập trung như ConstructTrack để tăng khả năng kiểm soát và tốc độ triển khai.',
    'ConstructTrack — 施工进度管理平台',
    'ConstructTrack 是面向施工团队的实战型平台，用于统一管理项目进度、现场更新、客户信息和人员协作。\n\n产品围绕真实工地场景设计：管理者需要总览，现场主管需要快速、标准化地更新任务。\n\n核心模块：\n\n• 角色权限登录\n• 项目管理（合同金额、时间线、客户信息）\n• 六状态 Kanban 流程\n• 按项目类型复用任务模板\n• 轻量 CRM 跟进客户\n• 人员审批与分配\n• 关键事件 Webhook 通知',
    '在 ConstructTrack 之前，团队依赖表格、聊天和人工提醒管理进度。\n\n常见问题包括：\n\n• 缺少统一实时看板\n• 现场更新不一致\n• 新项目初始化耗时\n• 客户与人员数据脱节\n• 关键变化通知滞后\n\n结果是沟通成本高、执行效率低、工期控制困难。',
    'ConstructTrack 使用 React 18、TypeScript、Tailwind CSS、Zustand 与 Supabase，将分散流程整合为统一系统。\n\n主要实现：\n\n• 结构化项目 CRUD\n• 拖拽式 Kanban 更新\n• 任务模板标准化启动流程\n• CRM 与项目联动\n• 人员权限治理\n• Webhook 自动通知，减少手动沟通',
    'ConstructTrack 明显提升了施工团队在办公室与工地之间的协同效率。\n\n实际价值：\n\n• 新项目启动更快\n• 多项目进度可视化更清晰\n• 管理者、主管与客户沟通更顺畅\n• 关键事件处理更稳定\n• 具备长期扩展基础（Auth + RLS + PostgreSQL）\n\n在线查看：https://construction-planning.vercel.app/',
    '如果您的运营仍分散在聊天和表格中，我可以为您构建像 ConstructTrack 这样的流程平台，帮助团队提升执行效率与管理可控性。',
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
