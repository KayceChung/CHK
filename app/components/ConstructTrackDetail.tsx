import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Blocks,
  Bot,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  KanbanSquare,
  Lock,
  PlayCircle,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  X,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// ─── Static data (icons only — labels come from i18n) ────────────────────────
const featureIcons = [Blocks, KanbanSquare, Users, Cloud, Workflow, ShieldCheck];

const techStackIcons = [Wrench, Database, GitBranch];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index, duration: 0.45, ease: 'easeOut' },
  }),
};

// ─── Translations ─────────────────────────────────────────────────────────────
const i18n = {
  en: {
    badge: 'ConstructTrack Showcase',
    hero_title: 'Construction progress management platform for modern operations teams',
    hero_desc:
      'ConstructTrack consolidates the entire construction workflow into a single dashboard: project management, staff coordination, real-time progress updates, image storage, and automated webhook notifications.',
    cta_demo: 'Watch Demo',
    cta_start: 'Get Started',
    card1_label: 'Realtime Overview',
    card1_desc: 'Aggregated KPI, status, and resource dashboard for ongoing operations.',
    card2_label: 'Field Sync',
    card2_desc: 'Site updates synced instantly to management.',
    problem_title: 'Problem',
    problem_desc:
      'Before ConstructTrack, construction progress was fragmented across spreadsheets, chat groups, and manual reminders. Managers lacked a unified view, supervisors updated inconsistently, and staff and project data were disconnected.',
    problem_items: [
      'No real-time dashboard for the entire operations team.',
      'Progress delays caused by scattered notifications.',
      'Hard to scale workflows as the project count grows.',
    ],
    solution_title: 'Solution',
    solution_desc:
      'ConstructTrack provides a workflow-first platform connecting a unified dashboard, drag-and-drop Kanban, staff management, image storage, and webhook automation—all protected by Auth and RLS for safe, stable operations.',
    solution_items: [
      'One system for managers, supervisors, and site crews.',
      'Webhook integration to automate updates with external systems.',
      'Architecture ready to scale for more projects and users.',
    ],
    features_title: 'Core Features',
    features_desc:
      'Six major features that turn complex construction workflows into a manageable, trackable, and scalable system.',
    features: [
      {
        title: 'Centralized Dashboard',
        description: 'One place to track projects, tasks, staff, and construction KPIs in real time.',
        highlights: ['Multi-project overview', 'Real-time updates', 'Replaces Excel and scattered chat'],
      },
      {
        title: 'Smart Kanban Board',
        description: 'Drag status from To-Do to Done with clear workflows for fast team coordination.',
        highlights: ['Smooth drag-and-drop', 'Instant status updates', 'Transparent progress for the whole team'],
      },
      {
        title: 'Staff Management',
        description: 'Assign by role, track individual performance, and supervise on-site execution.',
        highlights: ['Role-based assignment', 'Track who is doing what', 'Supabase Auth and RLS'],
      },
      {
        title: 'Professional Image Storage',
        description: 'Upload progress photos directly from the app, stored safely with version control.',
        highlights: ['Fast upload from the field', 'Version management', 'Before/after comparison for decisions'],
      },
      {
        title: 'Automated Webhook System',
        description: 'Auto-push events to Zalo, CRM, Email, n8n when tasks are created, status changes, or photos are uploaded.',
        highlights: ['Triggered by Supabase function', 'Reduces manual work', 'Syncs with external systems'],
      },
      {
        title: 'Secure & Scalable',
        description: 'Data protection at every permission level, ready to scale as project volume grows.',
        highlights: ['Authentication and RLS policies', 'Clear data governance', 'Flexible deploy on Vercel / GitHub Pages'],
      },
    ],
    tech_title: 'Tech Stack',
    tech_desc: 'Technologies chosen for development speed, stability, and scalability.',
    tech_groups: [
      {
        title: 'Frontend',
        items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion (motion/react)', 'Zustand', 'React Hook Form + Zod'],
      },
      {
        title: 'Backend & Database',
        items: ['Supabase (PostgreSQL + Auth + RLS)', 'PostgreSQL Triggers', 'Webhook automation'],
      },
      {
        title: 'Deployment',
        items: ['Vercel', 'GitHub Pages', 'Supabase Cloud'],
      },
    ],
    metrics_title: 'Key Results',
    metrics_desc: 'Operational effectiveness improved measurably after centralizing the workflow.',
    metrics: [
      { value: '6+', label: 'Core feature modules' },
      { value: 'Realtime', label: 'Progress visibility' },
      { value: 'Role-based', label: 'Permission model' },
      { value: 'Webhook', label: 'Automation backbone' },
    ],
    cta_title: 'Ready to build a workflow platform for your business?',
    cta_desc:
      'If you want an operations system like ConstructTrack to manage progress, staff, and reports in real time, let\'s start a conversation.',
    cta_demo2: 'Watch Demo',
    cta_contact: 'Contact Now',
    modal_alt: 'ConstructTrack product demo',
    modal_close: 'Close',
  },

  vi: {
    badge: 'ConstructTrack Showcase',
    hero_title: 'Nền tảng quản lý tiến độ thi công cho đội vận hành hiện đại',
    hero_desc:
      'ConstructTrack tập trung toàn bộ quy trình thi công trong một dashboard duy nhất: quản lý dự án, điều phối nhân sự, cập nhật tiến độ realtime, lưu trữ hình ảnh và tự động hóa thông báo webhook.',
    cta_demo: 'Xem Demo',
    cta_start: 'Bắt Đầu Ngay',
    card1_label: 'Tổng Quan Realtime',
    card1_desc: 'Dashboard tổng hợp KPI, trạng thái và nguồn lực đang vận hành.',
    card2_label: 'Đồng Bộ Hiện Trường',
    card2_desc: 'Cập nhật từ công trường đồng bộ ngay lập tức cho quản lý.',
    problem_title: 'Vấn Đề',
    problem_desc:
      'Trước ConstructTrack, tiến độ thi công bị chia nhỏ qua Excel, Zalo và nhắc việc thủ công. Quản lý thiếu góc nhìn tổng quan, giám sát cập nhật không đồng nhất, thông tin nhân sự và dự án bị đứt đoạn.',
    problem_items: [
      'Không có dashboard realtime cho toàn bộ đội vận hành.',
      'Tiến độ dễ bị trễ do thông báo rời rạc.',
      'Khó mở rộng quy trình khi số dự án tăng nhanh.',
    ],
    solution_title: 'Giải Pháp',
    solution_desc:
      'ConstructTrack cung cấp một workflow-first platform kết nối dashboard tổng hợp, Kanban kéo thả, quản lý nhân sự, lưu trữ ảnh và webhook tự động. Tất cả được bảo vệ bởi Auth và RLS để vận hành an toàn và bền vững.',
    solution_items: [
      'Một hệ thống tập trung cho quản lý, giám sát và đội thi công.',
      'Tích hợp webhook để tự động hóa cập nhật với hệ thống ngoài.',
      'Kiến trúc sẵn sàng mở rộng cho nhiều dự án và người dùng hơn.',
    ],
    features_title: 'Tính Năng Cốt Lõi',
    features_desc:
      'Dưới đây là 6 tính năng lớn giúp ConstructTrack biến quy trình thi công phức tạp thành hệ thống dễ quản lý, dễ theo dõi và dễ mở rộng.',
    features: [
      {
        title: 'Dashboard Tập Trung',
        description: 'Một nơi duy nhất để theo dõi dự án, công việc, nhân sự và KPI thi công theo thời gian thực.',
        highlights: ['Tổng quan đa dự án', 'Cập nhật thời gian thực', 'Thay thế Excel và chat rời rạc'],
      },
      {
        title: 'Kanban Board Thông Minh',
        description: 'Kéo thả trạng thái từ To-Do đến Done với luồng công việc rõ ràng để đội nhóm phối hợp nhanh.',
        highlights: ['Kéo thả mượt mà', 'Trạng thái cập nhật tức thì', 'Tiến độ minh bạch toàn đội'],
      },
      {
        title: 'Quản Lý Nhân Sự',
        description: 'Phân công theo vai trò, theo dõi hiệu suất từng nhân sự và giám sát thực thi trên công trường.',
        highlights: ['Phân công theo vai trò', 'Theo dõi ai đang làm gì', 'Supabase Auth và RLS'],
      },
      {
        title: 'Lưu Trữ Ảnh Chuyên Nghiệp',
        description: 'Tải ảnh tiến độ trực tiếp từ ứng dụng, lưu an toàn, quản lý phiên bản và so sánh trước sau.',
        highlights: ['Tải ảnh nhanh từ hiện trường', 'Quản lý phiên bản', 'So sánh hình ảnh để ra quyết định'],
      },
      {
        title: 'Hệ Thống Webhook Tự Động',
        description: 'Tự động đẩy sự kiện sang Zalo, CRM, Email, n8n khi tạo việc, đổi trạng thái hoặc tải ảnh.',
        highlights: ['Trigger từ Supabase function', 'Giảm thao tác thủ công', 'Đồng bộ với hệ thống ngoài'],
      },
      {
        title: 'Bảo Mật và Dễ Mở Rộng',
        description: 'Bảo mật dữ liệu theo từng cấp quyền truy cập và sẵn sàng mở rộng khi số lượng dự án tăng.',
        highlights: ['Authentication và RLS policies', 'Quản trị dữ liệu rõ ràng', 'Triển khai linh hoạt trên Vercel/GitHub Pages'],
      },
    ],
    tech_title: 'Công Nghệ Sử Dụng',
    tech_desc: 'Công nghệ được chọn để đảm bảo tốc độ phát triển, độ ổn định và khả năng mở rộng.',
    tech_groups: [
      {
        title: 'Frontend',
        items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion (motion/react)', 'Zustand', 'React Hook Form + Zod'],
      },
      {
        title: 'Backend và Cơ Sở Dữ Liệu',
        items: ['Supabase (PostgreSQL + Auth + RLS)', 'PostgreSQL Triggers', 'Tự động hóa webhook'],
      },
      {
        title: 'Triển Khai',
        items: ['Vercel', 'GitHub Pages', 'Supabase Cloud'],
      },
    ],
    metrics_title: 'Kết Quả Vận Hành',
    metrics_desc: 'Hiệu quả vận hành được cải thiện rõ ràng sau khi tập trung hóa quy trình.',
    metrics: [
      { value: '6+', label: 'Nhóm tính năng cốt lõi' },
      { value: 'Realtime', label: 'Mức độ hiển thị tiến độ' },
      { value: 'Role-based', label: 'Mô hình phân quyền' },
      { value: 'Webhook', label: 'Nền tảng tự động hóa' },
    ],
    cta_title: 'Sẵn sàng xây workflow platform cho doanh nghiệp của bạn?',
    cta_desc:
      'Nếu bạn muốn một hệ thống vận hành như ConstructTrack để quản lý tiến độ, nhân sự và báo cáo theo thời gian thực, hãy bắt đầu trao đổi ngay.',
    cta_demo2: 'Xem Demo',
    cta_contact: 'Liên Hệ Ngay',
    modal_alt: 'Demo sản phẩm ConstructTrack',
    modal_close: 'Đóng',
  },

  zh: {
    badge: 'ConstructTrack 产品展示',
    hero_title: '面向现代施工团队的进度管理平台',
    hero_desc:
      'ConstructTrack 将施工全流程整合到单一仪表盘：项目管理、人员协调、实时进度更新、图片存储与 webhook 自动通知。',
    cta_demo: '查看演示',
    cta_start: '立即开始',
    card1_label: '实时总览',
    card1_desc: '汇总 KPI、状态及正在运行的资源仪表盘。',
    card2_label: '现场同步',
    card2_desc: '现场更新即时同步至管理层。',
    problem_title: '问题',
    problem_desc:
      '在 ConstructTrack 之前，施工进度分散在表格、聊天群和人工提醒中。管理层缺乏统一视图，主管更新不一致，人员与项目数据脱节。',
    problem_items: [
      '整个运营团队没有实时仪表盘。',
      '通知分散导致进度延误。',
      '项目增多时工作流难以扩展。',
    ],
    solution_title: '解决方案',
    solution_desc:
      'ConstructTrack 提供以工作流为核心的平台，连接统一仪表盘、拖拽看板、人员管理、图片存储与 webhook 自动化，所有数据由 Auth 和 RLS 保护。',
    solution_items: [
      '面向管理者、主管和施工队的统一系统。',
      '集成 webhook，自动与外部系统同步更新。',
      '可扩展架构，支持更多项目和用户。',
    ],
    features_title: '核心功能',
    features_desc: '以下六大功能将复杂的施工流程转化为易管理、可追踪、可扩展的系统。',
    features: [
      {
        title: '集中仪表盘',
        description: '一处查看所有项目、任务、人员及施工 KPI，实时更新。',
        highlights: ['多项目总览', '实时数据更新', '替代 Excel 和分散的聊天'],
      },
      {
        title: '智能看板',
        description: '拖拽状态从待办到完成，工作流清晰，团队协作高效。',
        highlights: ['流畅拖拽操作', '状态即时更新', '全队进度透明可见'],
      },
      {
        title: '人员管理',
        description: '按角色分配任务，跟踪每人绩效，监督现场执行情况。',
        highlights: ['基于角色的分配', '追踪谁在做什么', 'Supabase Auth 和 RLS'],
      },
      {
        title: '专业图片存储',
        description: '直接从应用上传进度照片，安全存储，版本管理，前后对比评估。',
        highlights: ['从现场快速上传', '版本管理', '对比图片辅助决策'],
      },
      {
        title: 'Webhook 自动化系统',
        description: '创建任务、状态变更或上传图片时，自动推送事件至 Zalo、CRM、邮件、n8n。',
        highlights: ['由 Supabase 函数触发', '减少手动操作', '与外部系统同步'],
      },
      {
        title: '安全且可扩展',
        description: '按权限级别保护数据，随项目量增长随时扩展。',
        highlights: ['Authentication 和 RLS 策略', '清晰的数据治理', '灵活部署至 Vercel/GitHub Pages'],
      },
    ],
    tech_title: '技术栈',
    tech_desc: '精选技术，保障开发速度、稳定性与可扩展性。',
    tech_groups: [
      {
        title: '前端',
        items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion (motion/react)', 'Zustand', 'React Hook Form + Zod'],
      },
      {
        title: '后端与数据库',
        items: ['Supabase (PostgreSQL + Auth + RLS)', 'PostgreSQL Triggers', 'Webhook 自动化'],
      },
      {
        title: '部署',
        items: ['Vercel', 'GitHub Pages', 'Supabase Cloud'],
      },
    ],
    metrics_title: '运营成果',
    metrics_desc: '流程集中化后，运营效率显著提升。',
    metrics: [
      { value: '6+', label: '核心功能模块' },
      { value: '实时', label: '进度可见性' },
      { value: '角色权限', label: '权限模型' },
      { value: 'Webhook', label: '自动化核心' },
    ],
    cta_title: '准备好为您的企业打造工作流平台了吗？',
    cta_desc:
      '如果您需要像 ConstructTrack 这样的运营系统来实时管理进度、人员和报告，欢迎立即开始交流。',
    cta_demo2: '查看演示',
    cta_contact: '立即联系',
    modal_alt: 'ConstructTrack 产品演示',
    modal_close: '关闭',
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────
export default function ConstructTrackDetail() {
  const [gifOpen, setGifOpen] = useState(false);
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n] ?? i18n.vi;

  return (
    <>
      <AnimatePresence>
        {gifOpen && (
          <motion.div
            key="gif-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setGifOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setGifOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-1.5 text-white transition hover:bg-black/80"
                aria-label={t.modal_close}
              >
                <X className="size-5" />
              </button>
              <img
                src="/constructtrack-screens/ConstructTrack.gif"
                alt={t.modal_alt}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 md:gap-20">

          {/* ── Hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-cyan-200 bg-cyan-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                {t.badge}
              </span>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t.hero_title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {t.hero_desc}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setGifOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-700"
                >
                  {t.cta_demo}
                  <PlayCircle className="size-4" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-100"
                >
                  {t.cta_start}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-white/90 p-4 shadow-xl shadow-cyan-100/60 backdrop-blur-sm sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-100/60 via-white to-teal-100/50">
                <img
                  src="/constructtrack-screens/ConstructTrack.gif"
                  alt={t.modal_alt}
                  className="h-64 w-full object-cover object-top sm:h-80"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-cyan-100 bg-cyan-50/80 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{t.card1_label}</p>
                  <p className="mt-1 text-sm text-slate-700">{t.card1_desc}</p>
                </div>
                <div className="rounded-xl border border-cyan-100 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{t.card2_label}</p>
                  <p className="mt-1 text-sm text-slate-700">{t.card2_desc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Problem / Solution ── */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{t.problem_title}</h2>
              <p className="mt-3 text-slate-700">{t.problem_desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {t.problem_items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Bot className="mt-0.5 size-4 shrink-0 text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{t.solution_title}</h2>
              <p className="mt-3 text-slate-700">{t.solution_desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {t.solution_items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          {/* ── Features ── */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-slate-900">{t.features_title}</h2>
              <p className="mt-2 max-w-3xl text-slate-700">{t.features_desc}</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <motion.article
                    key={feature.title}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="inline-flex rounded-xl bg-cyan-100 p-2 text-cyan-700">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.description}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                      {feature.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/50 to-teal-50/60 p-6 shadow-sm sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-3xl font-bold text-slate-900">{t.tech_title}</h2>
              <p className="mt-2 text-slate-700">{t.tech_desc}</p>
            </motion.div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {t.tech_groups.map((group, index) => {
                const GroupIcon = techStackIcons[index];
                return (
                  <motion.article
                    key={group.title}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <GroupIcon className="size-5 text-cyan-700" />
                      <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ── Metrics ── */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">{t.metrics_title}</h2>
              <p className="mt-2 text-slate-700">{t.metrics_desc}</p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-cyan-700">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-700">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-600 to-teal-600 p-8 text-white shadow-xl shadow-cyan-500/30 sm:p-10"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">{t.cta_title}</h2>
                <p className="mt-2 max-w-2xl text-cyan-50">{t.cta_desc}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setGifOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                >
                  {t.cta_demo2}
                  <PlayCircle className="size-4" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.cta_contact}
                  <Lock className="size-4" />
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </>
  );
}
