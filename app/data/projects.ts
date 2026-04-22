// Dữ liệu dự án động, có thể mở rộng
const projects = [
  {
    slug: 'real-time-data-collection-system',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['AppSheet', 'SQL', 'Data Analysis', 'Process Optimization'],
    content: {
      en: {
        title: 'Real-Time Data Collection System',
        context: 'A mid-sized bus company needed to improve on-time performance across multiple routes.',
        problem: 'Delays in data collection led to late buses and poor service reliability.',
        solution: 'Designed and implemented a real-time data collection workflow using AppSheet and SQL.',
        result: 'Reduced average delay from 5-10 minutes to under 5 minutes on all routes.',
        cta: 'Curious how this approach could help your operations? Let’s connect.'
      },
      vi: {
        title: 'Hệ Thống Thu Thập Dữ Liệu Thời Gian Thực',
        context: 'Một công ty xe buýt quy mô vừa cần cải thiện tỷ lệ đúng giờ trên nhiều tuyến.',
        problem: 'Việc thu thập dữ liệu chậm khiến xe thường trễ và dịch vụ thiếu ổn định.',
        solution: 'Thiết kế và triển khai quy trình thu thập dữ liệu thời gian thực bằng AppSheet và SQL.',
        result: 'Giảm độ trễ trung bình từ 5-10 phút xuống dưới 5 phút trên tất cả các tuyến.',
        cta: 'Bạn muốn biết giải pháp này có phù hợp với doanh nghiệp của mình? Hãy trao đổi.'
      },
      zh: {
        title: '实时数据收集系统',
        context: '一家中型公交公司需要提升多条线路的准点率。',
        problem: '数据收集延迟导致车辆晚点，服务不稳定。',
        solution: '使用AppSheet和SQL设计并实施了实时数据收集流程。',
        result: '将平均延误从5-10分钟缩短到5分钟以内。',
        cta: '想了解这种方法如何帮助您的业务？欢迎交流。'
      }
    }
  },
  {
    slug: 'constructtrack-construction-progress-platform',
    image: '/constructtrack-cover.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase', 'Kanban', 'CRM'],
    content: {
      en: {
        title: 'ConstructTrack — Construction Progress Management Platform',
        context: 'ConstructTrack is a real-world web platform for construction teams that need one operational hub for projects, field updates, customers, and staff.\n\nThe product was built around daily site workflow, where managers need overview and supervisors need fast update tools from the field.\n\nMain modules:\n\n• Role-based login and account control\n• Project tracking with contract value, timeline, and customer info\n• 6-stage Kanban board for progress flow\n• Task templates by project type\n• Lightweight CRM for leads and follow-up history\n• Staff approval and assignment\n• Webhook notifications for key events',
        problem: 'Before ConstructTrack, progress tracking was split across spreadsheets, chat groups, and manual reminders.\n\nThis created operational pain:\n\n• Managers had no single real-time dashboard\n• Supervisors updated status inconsistently\n• New projects took too long to initialize\n• Customer and staffing data were disconnected\n• Critical updates were easy to miss\n\nThe team spent too much time coordinating instead of executing.',
        solution: 'ConstructTrack unified the full process into one workflow-first system, built with React 18, TypeScript, Tailwind CSS, Zustand, and Supabase.\n\nKey implementation decisions:\n\n• Centralized project CRUD with structured data\n• Drag-and-drop Kanban updates for daily execution\n• Standardized task templates to speed up kickoff\n• CRM + project linkage for better customer continuity\n• Controlled staff permissions for internal governance\n• Webhook automation to reduce manual notifications',
        result: 'ConstructTrack improved day-to-day execution clarity for both office and site teams.\n\nBusiness impact:\n\n• Faster project setup through reusable templates\n• Better progress visibility across active projects\n• Smoother collaboration between managers, supervisors, and clients\n• More stable event handling with webhook automation\n• Solid base architecture (Auth + RLS + PostgreSQL) for future scale\n\nView live: https://construction-planning.vercel.app/',
        cta: 'If your operations are still scattered across chat and spreadsheets, I can build a focused platform like ConstructTrack to centralize workflow and improve execution control.'
      },
      vi: {
        title: 'ConstructTrack — Nền Tảng Quản Lý Tiến Độ Thi Công',
        context: 'ConstructTrack là nền tảng web thực tế dành cho đội ngũ thi công cần một nơi tập trung để quản lý dự án, tiến độ hiện trường, khách hàng và nhân sự.\n\nSản phẩm được thiết kế theo đúng nhịp vận hành công trường: quản lý cần bức tranh tổng quan, còn giám sát cần cập nhật nhanh và chính xác ngay tại hiện trường.\n\nCác phân hệ chính:\n\n• Đăng nhập và phân quyền theo vai trò\n• Quản lý dự án với timeline, giá trị hợp đồng, thông tin khách hàng\n• Kanban 6 trạng thái để theo dõi tiến độ\n• Template công việc theo loại công trình\n• CRM nhẹ cho lead và lịch sử chăm sóc\n• Duyệt và phân công nhân sự\n• Webhook gửi thông báo khi có sự kiện quan trọng',
        problem: 'Trước ConstructTrack, tiến độ thi công bị tách rời giữa file Excel, nhóm chat và nhắc việc thủ công.\n\nĐiều này gây ra nhiều vấn đề:\n\n• Quản lý không có dashboard thời gian thực\n• Giám sát cập nhật không đồng nhất\n• Khởi tạo dự án mới mất nhiều thời gian\n• Dữ liệu khách hàng và nhân sự thiếu liên kết\n• Các thay đổi quan trọng dễ bị trễ thông báo\n\nKết quả là đội ngũ tốn nhiều thời gian phối hợp hơn là triển khai công việc.',
        solution: 'ConstructTrack gom toàn bộ quy trình vào một hệ thống tập trung theo workflow, xây dựng bằng React 18, TypeScript, Tailwind CSS, Zustand và Supabase.\n\nCác điểm triển khai chính:\n\n• Chuẩn hóa dữ liệu dự án bằng CRUD có cấu trúc\n• Cập nhật tiến độ hàng ngày qua Kanban kéo thả\n• Tái sử dụng template để rút ngắn khởi tạo dự án\n• Liên kết CRM với dự án để theo dõi khách hàng xuyên suốt\n• Phân quyền nhân sự để kiểm soát nội bộ rõ ràng\n• Tự động hóa thông báo bằng webhook thay cho thao tác tay',
        result: 'ConstructTrack giúp đội thi công làm việc rõ ràng và mạch lạc hơn giữa văn phòng và công trường.\n\nTác động thực tế:\n\n• Khởi tạo dự án nhanh hơn nhờ template tái sử dụng\n• Theo dõi tiến độ tốt hơn trên nhiều dự án cùng lúc\n• Phối hợp mượt hơn giữa quản lý, giám sát và khách hàng\n• Xử lý sự kiện ổn định hơn nhờ webhook\n• Nền tảng sẵn sàng mở rộng dài hạn với Auth + RLS + PostgreSQL\n\nXem trực tiếp: https://construction-planning.vercel.app/',
        cta: 'Nếu quy trình vận hành của bạn còn rời rạc giữa chat và bảng tính, tôi có thể xây dựng một nền tảng tập trung như ConstructTrack để tăng khả năng kiểm soát và tốc độ triển khai.'
      },
      zh: {
        title: 'ConstructTrack — 施工进度管理平台',
        context: 'ConstructTrack 是面向施工团队的实战型平台，用于统一管理项目进度、现场更新、客户信息和人员协作。\n\n产品围绕真实工地场景设计：管理者需要总览，现场主管需要快速、标准化地更新任务。\n\n核心模块：\n\n• 角色权限登录\n• 项目管理（合同金额、时间线、客户信息）\n• 六状态 Kanban 流程\n• 按项目类型复用任务模板\n• 轻量 CRM 跟进客户\n• 人员审批与分配\n• 关键事件 Webhook 通知',
        problem: '在 ConstructTrack 之前，团队依赖表格、聊天和人工提醒管理进度。\n\n常见问题包括：\n\n• 缺少统一实时看板\n• 现场更新不一致\n• 新项目初始化耗时\n• 客户与人员数据脱节\n• 关键变化通知滞后\n\n结果是沟通成本高、执行效率低、工期控制困难。',
        solution: 'ConstructTrack 使用 React 18、TypeScript、Tailwind CSS、Zustand 与 Supabase，将分散流程整合为统一系统。\n\n主要实现：\n\n• 结构化项目 CRUD\n• 拖拽式 Kanban 更新\n• 任务模板标准化启动流程\n• CRM 与项目联动\n• 人员权限治理\n• Webhook 自动通知，减少手动沟通',
        result: 'ConstructTrack 明显提升了施工团队在办公室与工地之间的协同效率。\n\n实际价值：\n\n• 新项目启动更快\n• 多项目进度可视化更清晰\n• 管理者、主管与客户沟通更顺畅\n• 关键事件处理更稳定\n• 具备长期扩展基础（Auth + RLS + PostgreSQL）\n\n在线查看：https://construction-planning.vercel.app/',
        cta: '如果您的运营仍分散在聊天和表格中，我可以为您构建像 ConstructTrack 这样的流程平台，帮助团队提升执行效率与管理可控性。'
      }
    }
  },
  {
    slug: 'chung-tieu-dinh-portfolio',
    image: new URL('../assets/project-ctd.png', import.meta.url).href,
    tags: ['Portfolio', 'Personal Brand', 'Professional Showcase', 'Design', 'Development'],
    content: {
      en: {
        title: 'Chung Tiểu Đình — Creative / Professional Portfolio',
        context: 'Chung Tiểu Đình is a professional with experience and achievements in web development, design, and digital branding.\n\nThis portfolio was created to:\n\n• Showcase capabilities and working style\n• Present completed representative projects\n• Increase credibility and connection opportunities with clients/partners\n\nKey highlights: years of experience, major projects completed, and standout skills in modern web technologies.',
        problem: 'Common challenges faced by many professionals:\n\n• Lack of online presence to professionally showcase capabilities\n• Scattered portfolio without structured information flow\n• Difficulty proving real value to clients at first contact\n\nThis is why a focused, clear, easy-to-follow portfolio that drives collaboration decisions is essential.',
        solution: 'A seamless portfolio with content strategy that helps viewers:\n\n• Understand personal profile and core skills\n• View project examples and understand the approach\n• Build professional trust and make collaboration decisions\n\nPortfolio highlights:\n\n• Personal introduction and career direction\n• Core skills and tech stack used\n• Detailed case studies for each project\n• Reviews and testimonials\n• Clear call-to-action for quick contact',
        result: 'Portfolio delivers measurable impact:\n\n• Professional personal page to showcase capabilities and products\n• Increased lead generation and new client contacts\n• Clear demonstration of working mindset and project process\n• Effective marketing tool for personal branding\n\nMeasurable results:\n\n• +40% potential clients through personal portfolio\n• +30% conversion from viewers to direct contacts\n• Increased personal recognition on professional platforms\n\nView live: https://kaycechung.github.io/CTD/',
        cta: 'Want a portfolio like this? A professional portfolio helps elevate your personal brand and boost job opportunities. Let\'s build a beautiful, effective, high-converting portfolio together.'
      },
      vi: {
        title: 'Chung Tiểu Đình — Portfolio Chuyên Nghiệp',
        context: 'Chung Tiểu Đình là chuyên gia có kinh nghiệm và thành tựu trong phát triển web, thiết kế và xây dựng thương hiệu số.\n\nTrang portfolio này được tạo ra nhằm:\n\n• Giới thiệu năng lực và phong cách làm việc\n• Trình bày các dự án tiêu biểu đã hoàn thành\n• Tăng độ tin cậy và cơ hội kết nối với khách hàng\n\nCác điểm nổi bật: số năm kinh nghiệm, các dự án lớn đã thực hiện, kỹ năng mạnh về công nghệ web hiện đại.',
        problem: 'Vấn đề chung đối với nhiều chuyên gia:\n\n• Thiếu điểm chạm online để giới thiệu năng lực chuyên nghiệp\n• Portfolio rời rạc, không có cấu trúc dẫn dắt thông tin\n• Khó chứng minh giá trị thực tế với khách hàng lần đầu tiếp xúc\n\nĐây chính là lý do cần một portfolio tập trung, rõ ràng và thúc đẩy quyết định hợp tác.',
        solution: 'Trang portfolio liền mạch với chiến lược nội dung giúp người xem:\n\n• Nắm bắt profile cá nhân và kỹ năng chính\n• Xem ví dụ dự án và hiểu cách tiếp cận\n• Tạo niềm tin và quyết định hợp tác\n\nNội dung nổi bật:\n\n• Giới thiệu bản thân và định hướng nghề nghiệp\n• Kỹ năng cốt lõi và tech stack sử dụng\n• Case studies chi tiết từng dự án\n• Đánh giá và lời chứng thực\n• CTA rõ ràng để liên hệ nhanh',
        result: 'Portfolio mang lại tác động có thể đo lường:\n\n• Trang cá nhân chuyên nghiệp giới thiệu năng lực\n• Tăng khả năng lead và liên hệ khách hàng mới\n• Thể hiện rõ tư duy làm việc và quy trình dự án\n• Công cụ marketing hiệu quả cho thương hiệu cá nhân\n\nKết quả đo lường:\n\n• Tăng 40% khách hàng tiềm năng từ portfolio\n• Tăng 30% chuyển đổi từ người xem sang liên hệ\n• Tăng độ nhận diện trên các nền tảng chuyên môn\n\nXem trực tiếp: https://kaycechung.github.io/CTD/',
        cta: 'Bạn muốn có portfolio như thế này? Portfolio chuyên nghiệp giúp nâng thương hiệu cá nhân và thúc đẩy cơ hội việc làm. Cùng xây dựng portfolio đẹp và hiệu quả.'
      },
      zh: {
        title: 'Chung Tiểu Đình — 专业作品集',
        context: 'Chung Tiểu Đình 是一位在网页开发、设计和数字品牌建设方面拥有经验和成就的专家。\n\n创建此作品集旨在：\n\n• 展示能力和工作风格\n• 呈现已完成的代表性项目\n• 提高可信度并增加客户联系机会\n\n重要亮点：工作年限、完成的主要项目、现代网络技术的突出技能。',
        problem: '许多专业人士面临的共同挑战：\n\n• 缺乏在线展示能力的专业平台\n• 作品集分散，缺乏结构化信息流\n• 难以在首次接触时证明真正价值\n\n这就是为什么需要一个集中、清晰并推动合作决策的作品集。',
        solution: '具有内容策略的无缝作品集帮助观众：\n\n• 了解个人简介和核心技能\n• 查看项目示例并理解方法\n• 建立专业信任并做出合作决策\n\n作品集亮点：\n\n• 个人介绍和职业方向\n• 核心技能和使用的技术栈\n• 每个项目的详细案例研究\n• 评价和推荐\n• 明确的快速联系CTA',
        result: '作品集带来可衡量的影响：\n\n• 专业个人页面展示能力和产品\n• 增加潜在客户和新客户接触\n• 清晰展示工作思维和项目流程\n• 个人品牌的有效营销工具\n\n可衡量结果：\n\n• 通过作品集增加40%潜在客户\n• 访客到联系的转化率提高30%\n• 在专业平台上提高认知度\n\n在线查看：https://kaycechung.github.io/CTD/',
        cta: '想要这样的作品集吗？专业作品集帮助提升个人品牌和促进工作机会。让我们一起打造美观高效的作品集。'
      }
    }
  }
];

export default projects;
