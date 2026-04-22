import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Languages, ShoppingCart, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  const { t, language } = useLanguage();
  const services = [
    {
      icon: Languages,
      titleEn: 'Business Interpretation',
      titleVi: 'Phiên Dịch Đối Thoại Kinh Doanh',
      titleZh: '商务口译',
      descriptionEn: 'Professional English-Vietnamese interpretation for business meetings, negotiations, and corporate communications.',
      descriptionVi: 'Phiên dịch chuyên nghiệp Anh-Việt cho các cuộc họp kinh doanh, đàm phán và giao tiếp doanh nghiệp.',
      descriptionZh: '为商务会议、谈判和企业沟通提供专业英越口译服务。',
      color: 'from-blue-500 to-cyan-500',
      features: [
        { en: 'Certified C1-C2 English proficiency', vi: 'Chứng chỉ tiếng Anh C1-C2', zh: 'C1-C2英语证书' },
        { en: 'Real-time business dialogue translation', vi: 'Phiên dịch đối thoại kinh doanh real-time', zh: '商务对话实时口译' },
        { en: 'Technical & commercial terminology expertise', vi: 'Chuyên môn thuật ngữ kỹ thuật & thương mại', zh: '技术与商业术语专长' },
        { en: 'Cross-cultural communication facilitation', vi: 'Hỗ trợ giao tiếp đa văn hóa', zh: '跨文化沟通支持' },
      ],
    },
    {
      icon: ShoppingCart,
      titleEn: 'E-Commerce Solutions',
      titleVi: 'Giải Pháp Thương Mại Điện Tử',
      titleZh: '电商解决方案',
      descriptionEn: 'End-to-end e-commerce strategy, platform optimization, and digital sales channel management.',
      descriptionVi: 'Chiến lược thương mại điện tử toàn diện, tối ưu hóa nền tảng và quản lý kênh bán hàng số.',
      descriptionZh: '端到端电商战略、平台优化与数字销售渠道管理。',
      color: 'from-purple-500 to-pink-500',
      features: [
        { en: 'E-Commerce strategy & market analysis', vi: 'Chiến lược E-Commerce & phân tích thị trường', zh: '电商战略与市场分析' },
        { en: 'Platform setup & optimization', vi: 'Thiết lập & tối ưu nền tảng', zh: '平台搭建与优化' },
        { en: 'Sales funnel & conversion optimization', vi: 'Tối ưu phễu bán hàng & chuyển đổi', zh: '销售漏斗与转化优化' },
        { en: 'Digital marketing integration', vi: 'Tích hợp marketing số', zh: '数字营销整合' },
      ],
    },
    {
      icon: Workflow,
      titleEn: 'Technology & Automation',
      titleVi: 'Công Nghệ & Tự Động Hóa',
      titleZh: '技术与自动化',
      descriptionEn: 'Custom business applications, workflow automation, and data-driven solutions using modern tech stack.',
      descriptionVi: 'Ứng dụng kinh doanh tùy chỉnh, tự động hóa quy trình và giải pháp dữ liệu với công nghệ hiện đại.',
      descriptionZh: '定制业务应用、流程自动化与数据驱动解决方案。',
      color: 'from-emerald-500 to-teal-500',
      features: [
        { en: 'No-code app development (AppSheet)', vi: 'Phát triển ứng dụng no-code (AppSheet)', zh: '无代码应用开发（AppSheet）' },
        { en: 'Workflow automation & optimization', vi: 'Tự động hóa & tối ưu quy trình', zh: '流程自动化与优化' },
        { en: 'SQL database & data analysis', vi: 'Cơ sở dữ liệu SQL & phân tích dữ liệu', zh: 'SQL数据库与数据分析' },
        { en: 'API integration & scripting', vi: 'Tích hợp API & scripting', zh: 'API集成与脚本开发' },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
              {'<'} Professional Services {'/>'} 
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('services.title') || 'What I Offer'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle') || 'Comprehensive solutions combining language expertise, e-commerce knowledge, and cutting-edge technology'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            let title = service.titleEn, desc = service.descriptionEn, features = service.features.map(f => f.en);
            if (language === 'vi') {
              title = service.titleVi;
              desc = service.descriptionVi;
              features = service.features.map(f => f.vi);
            } else if (language === 'zh') {
              title = service.titleZh;
              desc = service.descriptionZh;
              features = service.features.map(f => f.zh);
            }
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl shadow-lg shadow-${service.color}/50 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="size-10 text-white" />
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {desc}
                  </p>
                  {/* Features */}
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 -z-10 rounded-2xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-lg font-medium">
                {t('services.cta') || 'Get Started'}
              </span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://www.linkedin.com/in/hien-khang-chung-677105284/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-white rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-lg">
                {t('services.viewProfile') || 'View LinkedIn Profile'}
              </span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="mt-6 text-gray-400 font-mono text-sm">
            {t('services.availability') || 'Available for freelance projects and consulting'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
