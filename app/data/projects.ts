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
        context: 'ConstructTrack is a production-ready web application built for construction teams that need one place to manage project execution, site updates, clients, and staff coordination. The system supports two operational roles: manager and supervisor.\n\nIt was designed around real construction workflows where status updates, task ownership, field evidence, and communication need to stay synchronized across office and site teams.\n\nCore modules include:\n\n• Supabase authentication with role-based access\n• Project management with contract value, address, client, and timeline tracking\n• Kanban board with six status columns and drag-and-drop task updates\n• Task templates by project type for faster project setup\n• Lightweight CRM for leads, interactions, and project linkage\n• Staff approval, activation, and assignment management\n• Webhook automation for Zalo notifications and business events',
        problem: 'Construction progress is often managed through scattered spreadsheets, chat messages, and manual follow-up. That creates several operational gaps:\n\n• Managers lack a single real-time view of project status\n• Supervisors have difficulty updating task progress consistently from the field\n• Repetitive project setup wastes time when teams start similar projects\n• Customer and staff information is disconnected from project execution\n• Important changes such as new customers or project updates are hard to notify automatically\n\nThe result is slower coordination, higher communication overhead, and weaker control over deadlines and accountability.',
        solution: 'ConstructTrack centralizes operations into a structured management platform built with React 18, Vite, TypeScript, Tailwind CSS, Zustand, and Supabase.\n\nThe solution includes:\n\n• A secure authentication flow with login, registration, and password reset via Supabase Auth\n• Full project CRUD with customer, project type, contract value, address, and start/end dates\n• A kanban workflow with six statuses: todo, in_progress, pending, adjustment, done, and cancelled\n• Per-task deadlines, drag-and-drop updates, and image uploads for on-site proof\n• Reusable task templates that auto-populate work items for each project type\n• CRM tracking for lead pipeline stages and interaction history\n• Staff approval and assignment tools for internal workforce control\n• Webhook triggers for customer, project, and employee events with Zalo notification integration',
        result: 'ConstructTrack gives construction teams a clearer operational system instead of disconnected tools.\n\nDelivered outcomes:\n\n• Faster project setup through reusable task templates\n• Better visibility into execution progress across multiple projects\n• Cleaner coordination between managers, supervisors, clients, and staff\n• More reliable event handling through Supabase webhooks and Zalo notifications\n• A scalable foundation for construction operations management with Auth, RLS, and PostgreSQL\n\nView live: https://construction-planning.vercel.app/',
        cta: 'Need a custom operations platform for your business? I can design and build workflow-focused systems like ConstructTrack that turn scattered processes into one manageable product.'
      },
      vi: {
        title: 'ConstructTrack — Nền Tảng Quản Lý Tiến Độ Thi Công',
        context: 'ConstructTrack là ứng dụng web hoàn chỉnh dành cho đội ngũ thi công cần một nơi tập trung để quản lý tiến độ dự án, cập nhật hiện trường, khách hàng và nhân sự. Hệ thống hỗ trợ hai vai trò vận hành chính: quản lý và giám sát.\n\nSản phẩm được thiết kế bám sát quy trình thi công thực tế, nơi trạng thái công việc, người phụ trách, hình ảnh hiện trường và trao đổi nội bộ phải luôn đồng bộ giữa văn phòng và công trường.\n\nCác phân hệ chính gồm:\n\n• Xác thực Supabase với phân quyền theo vai trò\n• Quản lý dự án với giá trị hợp đồng, địa chỉ, khách hàng và mốc thời gian\n• Kanban 6 cột với kéo thả để cập nhật trạng thái công việc\n• Template task theo loại công trình để khởi tạo nhanh\n• CRM nhẹ để quản lý lead, lịch sử tương tác và liên kết dự án\n• Quản lý duyệt, kích hoạt và phân công nhân sự\n• Tự động webhook để gửi thông báo Zalo và xử lý sự kiện',
        problem: 'Tiến độ thi công thường bị quản lý rời rạc qua bảng tính, tin nhắn và việc nhắc tay. Điều đó tạo ra nhiều khoảng trống vận hành:\n\n• Quản lý không có một màn hình thời gian thực để nhìn toàn bộ trạng thái dự án\n• Giám sát khó cập nhật tiến độ công việc nhất quán từ hiện trường\n• Việc tạo mới dự án lặp đi lặp lại gây tốn thời gian\n• Dữ liệu khách hàng và nhân sự bị tách rời khỏi quá trình triển khai\n• Những thay đổi quan trọng như khách hàng mới hoặc cập nhật dự án khó được thông báo tự động\n\nHệ quả là phối hợp chậm hơn, chi phí giao tiếp cao hơn và khả năng kiểm soát deadline cũng như trách nhiệm bị giảm.',
        solution: 'ConstructTrack gom toàn bộ vận hành vào một nền tảng quản lý thống nhất, xây dựng bằng React 18, Vite, TypeScript, Tailwind CSS, Zustand và Supabase.\n\nGiải pháp bao gồm:\n\n• Luồng xác thực an toàn với đăng nhập, đăng ký và quên mật khẩu qua Supabase Auth\n• CRUD dự án đầy đủ với khách hàng, loại công trình, giá trị hợp đồng, địa chỉ và ngày bắt đầu/kết thúc\n• Quy trình kanban với 6 trạng thái: todo, in_progress, pending, adjustment, done và cancelled\n• Deadline theo từng task, kéo thả cập nhật và upload ảnh thực tế tại công trường\n• Template công việc tái sử dụng để tự động sinh task theo loại dự án\n• CRM theo dõi pipeline lead và lịch sử tương tác\n• Công cụ duyệt tài khoản và phân công nhân sự cho đội ngũ nội bộ\n• Webhook cho các sự kiện khách hàng, dự án và nhân sự, tích hợp thông báo Zalo',
        result: 'ConstructTrack giúp đội ngũ thi công vận hành trên một hệ thống rõ ràng thay vì nhiều công cụ rời rạc.\n\nKết quả mang lại:\n\n• Khởi tạo dự án nhanh hơn nhờ template công việc tái sử dụng\n• Theo dõi tiến độ tốt hơn trên nhiều dự án cùng lúc\n• Phối hợp mạch lạc hơn giữa quản lý, giám sát, khách hàng và nhân sự\n• Xử lý sự kiện ổn định hơn nhờ webhook Supabase và thông báo Zalo\n• Tạo nền tảng mở rộng lâu dài cho quản lý vận hành thi công với Auth, RLS và PostgreSQL\n\nXem trực tiếp: https://construction-planning.vercel.app/',
        cta: 'Nếu bạn cần một nền tảng quản lý vận hành riêng cho doanh nghiệp, tôi có thể thiết kế và xây dựng các hệ thống tập trung vào workflow như ConstructTrack để thay thế các quy trình rời rạc.'
      },
      zh: {
        title: 'ConstructTrack — 施工进度管理平台',
        context: 'ConstructTrack 是一个面向施工团队的完整 Web 应用，用于集中管理项目执行、现场更新、客户信息和人员协作。系统支持两种主要角色：经理和现场主管。\n\n该产品围绕真实施工流程设计，在这些流程中，任务状态、负责人、现场图片和沟通信息必须在办公室与工地之间保持同步。\n\n核心模块包括：\n\n• 基于 Supabase Auth 的角色权限认证\n• 包含客户、项目类型、合同金额、地址和时间线的项目管理\n• 六列状态的 Kanban 看板与拖拽更新\n• 按项目类型自动生成任务的模板系统\n• 用于销售线索、互动记录和项目关联的轻量 CRM\n• 员工审批、激活与项目分配管理\n• 通过 Webhook 和 Zalo 实现业务事件通知自动化',
        problem: '施工进度往往分散在表格、聊天消息和人工跟进中，容易产生多种运营问题：\n\n• 管理者无法实时统一查看项目状态\n• 现场主管难以稳定地从工地更新任务进度\n• 相似项目重复初始化，浪费时间\n• 客户与人员数据与项目执行脱节\n• 新客户、项目更新等关键事件难以自动通知\n\n最终会导致协作变慢、沟通成本上升，以及对工期和责任的控制能力下降。',
        solution: 'ConstructTrack 使用 React 18、Vite、TypeScript、Tailwind CSS、Zustand 和 Supabase，将分散流程整合为一个统一的平台。\n\n解决方案包括：\n\n• 基于 Supabase Auth 的登录、注册与找回密码流程\n• 完整的项目 CRUD，覆盖客户、项目类型、合同金额、地址和开始/结束日期\n• 六种状态的 Kanban 工作流：todo、in_progress、pending、adjustment、done、cancelled\n• 每个任务的截止日期、拖拽更新和现场图片上传\n• 可复用的任务模板，按项目类型自动填充任务\n• 跟踪销售线索阶段和互动历史的 CRM 模块\n• 员工审批与分配工具\n• 针对客户、项目和员工事件的 Webhook 与 Zalo 通知集成',
        result: 'ConstructTrack 为施工团队提供了一个清晰的运营系统，替代彼此割裂的工具组合。\n\n交付结果：\n\n• 通过任务模板更快地启动新项目\n• 更清楚地掌握多个项目的执行进度\n• 管理者、主管、客户和员工之间协作更顺畅\n• 借助 Supabase Webhook 和 Zalo 通知，更可靠地处理关键事件\n• 以 Auth、RLS 和 PostgreSQL 为基础，形成可扩展的施工运营平台\n\n在线查看：https://construction-planning.vercel.app/',
        cta: '如果您需要为企业定制运营平台，我可以构建像 ConstructTrack 这样以工作流为核心的系统，把分散流程整合为可管理的产品。'
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
