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
