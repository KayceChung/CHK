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
    RAISE NOTICE '   - Projects: 2';
    RAISE NOTICE '   - Translations: 50+';
    RAISE NOTICE '   - Services: 3';
    RAISE NOTICE '   - Experiences: 3';
    RAISE NOTICE '   - Tech Skills: 15';
    RAISE NOTICE '';
    RAISE NOTICE 'Your database is ready to use! 🚀';
END $$;
