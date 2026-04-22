-- CHUNG HIẾN KHANG PORTFOLIO - SUPABASE DATABASE SCHEMA
-- Generated: April 22, 2026
-- Purpose: Complete database schema for portfolio website

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- TABLE: projects
-- Purpose: Store all project case studies
-- =============================================

CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    image TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    
    -- English content
    title_en TEXT NOT NULL,
    context_en TEXT NOT NULL,
    problem_en TEXT NOT NULL,
    solution_en TEXT NOT NULL,
    result_en TEXT NOT NULL,
    cta_en TEXT NOT NULL,
    
    -- Vietnamese content
    title_vi TEXT NOT NULL,
    context_vi TEXT NOT NULL,
    problem_vi TEXT NOT NULL,
    solution_vi TEXT NOT NULL,
    result_vi TEXT NOT NULL,
    cta_vi TEXT NOT NULL,
    
    -- Chinese content
    title_zh TEXT NOT NULL,
    context_zh TEXT NOT NULL,
    problem_zh TEXT NOT NULL,
    solution_zh TEXT NOT NULL,
    result_zh TEXT NOT NULL,
    cta_zh TEXT NOT NULL,
    
    -- Metadata
    order_index INTEGER NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON public.projects(is_published);
CREATE INDEX IF NOT EXISTS idx_projects_order ON public.projects(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to published projects
CREATE POLICY "Public can view published projects"
    ON public.projects FOR SELECT
    USING (is_published = true);

-- Policy: Allow authenticated users to manage all projects (for admin)
CREATE POLICY "Authenticated users can manage projects"
    ON public.projects
    USING (auth.role() = 'authenticated');

-- =============================================
-- TABLE: translations
-- Purpose: Store all UI translations
-- =============================================

CREATE TABLE IF NOT EXISTS public.translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value_en TEXT NOT NULL,
    value_vi TEXT NOT NULL,
    value_zh TEXT NOT NULL,
    category TEXT NOT NULL, -- e.g., 'nav', 'hero', 'about', 'services'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on key for fast lookups
CREATE INDEX IF NOT EXISTS idx_translations_key ON public.translations(key);
CREATE INDEX IF NOT EXISTS idx_translations_category ON public.translations(category);

-- Enable RLS
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Public can view translations"
    ON public.translations FOR SELECT
    USING (true);

-- Policy: Allow authenticated users to manage translations
CREATE POLICY "Authenticated users can manage translations"
    ON public.translations
    USING (auth.role() = 'authenticated');

-- =============================================
-- TABLE: experiences
-- Purpose: Store work experience entries
-- =============================================

CREATE TABLE IF NOT EXISTS public.experiences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company TEXT NOT NULL,
    
    -- Multi-language position titles
    position_en TEXT NOT NULL,
    position_vi TEXT NOT NULL,
    position_zh TEXT NOT NULL,
    
    -- Multi-language descriptions
    description_en TEXT NOT NULL,
    description_vi TEXT NOT NULL,
    description_zh TEXT NOT NULL,
    
    -- Dates
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN NOT NULL DEFAULT false,
    
    -- Metadata
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on order
CREATE INDEX IF NOT EXISTS idx_experiences_order ON public.experiences(order_index);

-- Enable RLS
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Public can view experiences"
    ON public.experiences FOR SELECT
    USING (true);

-- Policy: Allow authenticated users to manage experiences
CREATE POLICY "Authenticated users can manage experiences"
    ON public.experiences
    USING (auth.role() = 'authenticated');

-- =============================================
-- TABLE: services
-- Purpose: Store service offerings
-- =============================================

CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    icon TEXT NOT NULL, -- Icon name from lucide-react
    
    -- Multi-language titles
    title_en TEXT NOT NULL,
    title_vi TEXT NOT NULL,
    title_zh TEXT NOT NULL,
    
    -- Multi-language descriptions
    description_en TEXT NOT NULL,
    description_vi TEXT NOT NULL,
    description_zh TEXT NOT NULL,
    
    -- Multi-language feature lists
    features_en TEXT[] NOT NULL DEFAULT '{}',
    features_vi TEXT[] NOT NULL DEFAULT '{}',
    features_zh TEXT[] NOT NULL DEFAULT '{}',
    
    -- Metadata
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on order
CREATE INDEX IF NOT EXISTS idx_services_order ON public.services(order_index);

-- Enable RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Public can view services"
    ON public.services FOR SELECT
    USING (true);

-- Policy: Allow authenticated users to manage services
CREATE POLICY "Authenticated users can manage services"
    ON public.services
    USING (auth.role() = 'authenticated');

-- =============================================
-- TABLE: tech_skills
-- Purpose: Store technical skills and proficiencies
-- =============================================

CREATE TABLE IF NOT EXISTS public.tech_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'technical', 'tools', 'soft', 'languages'
    proficiency INTEGER NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on category
CREATE INDEX IF NOT EXISTS idx_tech_skills_category ON public.tech_skills(category);
CREATE INDEX IF NOT EXISTS idx_tech_skills_order ON public.tech_skills(order_index);

-- Enable RLS
ALTER TABLE public.tech_skills ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Public can view tech skills"
    ON public.tech_skills FOR SELECT
    USING (true);

-- Policy: Allow authenticated users to manage skills
CREATE POLICY "Authenticated users can manage tech skills"
    ON public.tech_skills
    USING (auth.role() = 'authenticated');

-- =============================================
-- TABLE: contact_submissions
-- Purpose: Store contact form submissions
-- =============================================

CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on status and created_at
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
    ON public.contact_submissions FOR INSERT
    WITH CHECK (true);

-- Policy: Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view contact submissions"
    ON public.contact_submissions FOR SELECT
    USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update submissions
CREATE POLICY "Authenticated users can update contact submissions"
    ON public.contact_submissions FOR UPDATE
    USING (auth.role() = 'authenticated');

-- =============================================
-- FUNCTIONS: Automatic updated_at timestamp
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_translations_updated_at BEFORE UPDATE ON public.translations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_experiences_updated_at BEFORE UPDATE ON public.experiences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tech_skills_updated_at BEFORE UPDATE ON public.tech_skills
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SEED DATA: Insert existing project data
-- =============================================

-- Project 1: Real-Time Data Collection System
INSERT INTO public.projects (slug, image, tags, title_en, context_en, problem_en, solution_en, result_en, cta_en, title_vi, context_vi, problem_vi, solution_vi, result_vi, cta_vi, title_zh, context_zh, problem_zh, solution_zh, result_zh, cta_zh, order_index)
VALUES (
    'real-time-data-collection-system',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ARRAY['AppSheet', 'SQL', 'Data Analysis', 'Process Optimization'],
    'Real-Time Data Collection System',
    'A mid-sized bus company struggled with delayed data processing, causing operational inefficiencies. Our mandate was to redesign their data collection workflow using low-code tools.',
    'The company experienced 5-10 minute delays when drivers reported issues manually. This led to scheduling conflicts, passenger complaints, and missed opportunities for proactive maintenance.',
    'Built a real-time data collection workflow using AppSheet (no-code) and SQL. Drivers input data via mobile forms, triggering automated alerts to dispatch. SQL dashboards provide live insights to operations teams.',
    'Reduced operational delays to under 5 minutes on all routes. Improved on-time performance significantly, leading to higher customer satisfaction and optimized resource allocation.',
    'Interested in real-time workflow automation for your business? Let''s discuss how similar solutions can streamline your operations.',
    'Hệ Thống Thu Thập Dữ Liệu Thời Gian Thực',
    'Một công ty xe buýt quy mô vừa gặp khó khăn với việc xử lý dữ liệu bị chậm trễ, gây ra sự kém hiệu quả trong hoạt động. Nhiệm vụ của chúng tôi là thiết kế lại quy trình thu thập dữ liệu của họ bằng các công cụ low-code.',
    'Công ty gặp phải tình trạng chậm trễ 5-10 phút khi tài xế báo cáo vấn đề thủ công. Điều này dẫn đến xung đột lịch trình, khiếu nại của hành khách và bỏ lỡ cơ hội bảo trì chủ động.',
    'Xây dựng quy trình thu thập dữ liệu thời gian thực bằng AppSheet (no-code) và SQL. Tài xế nhập dữ liệu qua form mobile, kích hoạt cảnh báo tự động đến điều phối. Dashboard SQL cung cấp thông tin trực tiếp cho đội ngũ vận hành.',
    'Giảm thời gian chậm trễ hoạt động xuống dưới 5 phút trên tất cả các tuyến. Cải thiện đáng kể hiệu suất đúng giờ, dẫn đến sự hài lòng cao hơn của khách hàng và phân bổ nguồn lực tối ưu.',
    'Quan tâm đến tự động hóa quy trình thời gian thực cho doanh nghiệp của bạn? Hãy thảo luận về cách các giải pháp tương tự có thể hợp lý hóa hoạt động của bạn.',
    '实时数据收集系统',
    '一家中型巴士公司在数据处理延迟方面遇到困难，导致运营效率低下。我们的任务是使用低代码工具重新设计他们的数据收集工作流程。',
    '当司机手动报告问题时，公司经历了5-10分钟的延迟。这导致了调度冲突、乘客投诉和错失主动维护的机会。',
    '使用AppSheet（无代码）和SQL构建实时数据收集工作流程。司机通过移动表单输入数据，触发自动警报到调度中心。SQL仪表板为运营团队提供实时洞察。',
    '将所有路线的运营延迟减少到5分钟以内。显著提高准时性能，提高客户满意度并优化资源分配。',
    '对实时工作流程自动化感兴趣？让我们讨论类似的解决方案如何简化您的运营。',
    1
);

-- Project 2: Chung Tiểu Đình Portfolio
INSERT INTO public.projects (slug, image, tags, title_en, context_en, problem_en, solution_en, result_en, cta_en, title_vi, context_vi, problem_vi, solution_vi, result_vi, cta_vi, title_zh, context_zh, problem_zh, solution_zh, result_zh, cta_zh, order_index)
VALUES (
    'chung-tieu-dinh-portfolio',
    'https://kaycechung.github.io/CTD/assets/image-main-DIbEWIwB.png',
    ARRAY['Portfolio', 'Personal Brand', 'Professional Showcase', 'Design', 'Development'],
    'Chung Tiểu Đình - Professional Portfolio',
    'Chung Tiểu Đình needed a professional online presence to showcase her expertise as a business consultant and attract high-value clients. The challenge was to create a visually stunning yet conversion-focused website.',
    'Without a professional portfolio, Chung Tiểu Đình struggled to convert potential clients who wanted to learn more about her services. She needed a platform that highlighted her case studies, testimonials, and clear call-to-actions.',
    'Designed and developed a modern, high-converting portfolio website featuring: detailed case studies, client testimonials, service breakdowns, and multiple CTAs. The site is fully responsive and optimized for conversions.',
    '+40% increase in potential clients reaching out through the portfolio. +30% conversion rate from viewers to actual contacts. Increased professional recognition on LinkedIn and other platforms. View live: https://kaycechung.github.io/CTD/',
    'Want a portfolio that converts visitors into clients? Let''s build your professional online presence.',
    'Chung Tiểu Đình - Portfolio Chuyên Nghiệp',
    'Chung Tiểu Đình cần một sự hiện diện trực tuyến chuyên nghiệp để giới thiệu chuyên môn của cô ấy với tư cách là một nhà tư vấn kinh doanh và thu hút khách hàng có giá trị cao. Thách thức là tạo ra một trang web vừa đẹp mắt vừa tập trung vào chuyển đổi.',
    'Không có portfolio chuyên nghiệp, Chung Tiểu Đình gặp khó khăn trong việc chuyển đổi khách hàng tiềm năng muốn tìm hiểu thêm về dịch vụ của cô. Cô cần một nền tảng nổi bật các nghiên cứu tình huống, lời chứng thực và lời kêu gọi hành động rõ ràng.',
    'Thiết kế và phát triển một trang web portfolio hiện đại, có khả năng chuyển đổi cao với: các nghiên cứu tình huống chi tiết, lời chứng thực của khách hàng, phân tích dịch vụ và nhiều CTA. Trang web hoàn toàn responsive và được tối ưu hóa cho chuyển đổi.',
    'Tăng +40% khách hàng tiềm năng liên hệ qua portfolio. Tỷ lệ chuyển đổi +30% từ người xem thành liên hệ thực tế. Tăng sự công nhận chuyên nghiệp trên LinkedIn và các nền tảng khác. Xem trực tiếp: https://kaycechung.github.io/CTD/',
    'Muốn có một portfolio chuyển đổi khách truy cập thành khách hàng? Hãy xây dựng sự hiện diện trực tuyến chuyên nghiệp của bạn.',
    'Chung Tiểu Đình - 专业作品集',
    'Chung Tiểu Đình需要专业的在线形象来展示她作为商业顾问的专业知识，并吸引高价值客户。挑战在于创建一个视觉上令人惊叹且专注于转化的网站。',
    '没有专业的作品集，Chung Tiểu Đình难以转化想了解更多她服务的潜在客户。她需要一个平台来突出展示她的案例研究、客户推荐和明确的行动号召。',
    '设计和开发了一个现代化、高转化率的作品集网站，包含：详细的案例研究、客户推荐、服务细分和多个CTA。该网站完全响应式并针对转化进行了优化。',
    '通过作品集联系的潜在客户增加了+40%。从访客到实际联系人的转化率增加了+30%。在LinkedIn和其他平台上的专业认可度提高。查看实时网站：https://kaycechung.github.io/CTD/',
    '想要一个能将访客转化为客户的作品集？让我们建立您的专业在线形象。',
    2
);

-- =============================================
-- COMPLETION MESSAGE
-- =============================================

-- Display success message
DO $$
BEGIN
    RAISE NOTICE '✅ Database schema created successfully!';
    RAISE NOTICE '📊 Tables created: projects, translations, experiences, services, tech_skills, contact_submissions';
    RAISE NOTICE '🔒 Row Level Security (RLS) enabled on all tables';
    RAISE NOTICE '🌱 Seed data inserted for 2 projects';
    RAISE NOTICE '';
    RAISE NOTICE 'Next steps:';
    RAISE NOTICE '1. Copy your Supabase anon key to .env file';
    RAISE NOTICE '2. Run data migration scripts to populate remaining data';
    RAISE NOTICE '3. Update React components to fetch from Supabase';
    RAISE NOTICE '';
    RAISE NOTICE '⚠️ Remember to set up proper authentication for admin operations!';
END $$;
