import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Briefcase, Building2, CheckCircle } from 'lucide-react';

export function Experience() {
  const { t, language } = useLanguage();

  const experiences = [
    {
      title: t('experience.hk.title'),
      company: t('experience.hk.company'),
      period: 'August 2024 - Present',
      location: 'Ho Chi Minh City, Vietnam',
      role: t('experience.hk.role'),
      icon: Building2,
      colorKey: 'blue',
      achievements: [
        {
          en: 'Designed and implemented real-time data collection workflow for Dispatching Control department',
          vi: 'Thiết kế và triển khai quy trình thu thập dữ liệu real-time cho bộ phận Dispatching Control',
          zh: '为调度控制部门设计并实施实时数据收集工作流程',
        },
        {
          en: 'Reduced operational delays from 5-10 minutes to under 5 minutes across all routes',
          vi: 'Giảm độ trễ vận hành từ 5-10 phút xuống dưới 5 phút trên tất cả các tuyến',
          zh: '将所有路线的运营延迟从5-10分钟减少到5分钟以内',
        },
        {
          en: 'Developed internal software using AppSheet and AppScript for workflow automation',
          vi: 'Phát triển phần mềm nội bộ sử dụng AppSheet và AppScript để tự động hóa quy trình',
          zh: '使用AppSheet和AppScript开发内部软件以实现工作流自动化',
        },
        {
          en: 'Performed SQL-based data analysis to identify bottlenecks and optimize operations',
          vi: 'Thực hiện phân tích dữ liệu SQL để xác định điểm nghẽn và tối ưu vận hành',
          zh: '执行基于SQL的数据分析以识别瓶颈并优化运营',
        },
        {
          en: 'Created comprehensive dashboards for real-time operational monitoring',
          vi: 'Tạo dashboard toàn diện cho giám sát vận hành thời gian thực',
          zh: '创建全面的仪表板以进行实时运营监控',
        },
      ],
      technologies: ['SQL', 'AppSheet', 'AppScript', 'Data Analysis', 'Process Optimization'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('experience.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const colorClasses = {
              blue: {
                bg: 'bg-blue-100',
                text: 'text-blue-600',
                gradient: 'from-blue-50 to-blue-100',
                border: 'border-blue-200',
              },
              cyan: {
                bg: 'bg-cyan-100',
                text: 'text-cyan-600',
                gradient: 'from-cyan-50 to-cyan-100',
                border: 'border-cyan-200',
              },
              purple: {
                bg: 'bg-purple-100',
                text: 'text-purple-600',
                gradient: 'from-purple-50 to-purple-100',
                border: 'border-purple-200',
              },
            };
            const colors = colorClasses[exp.colorKey as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 ${colors.bg} rounded-xl shrink-0`}>
                    <Icon className={`size-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl mb-2 text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-1">
                        {exp.company}
                      </p>
                      {exp.role && (
                        <p className="text-gray-600 italic">{exp.role}</p>
                      )}
                      {exp.period && (
                        <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                      )}
                      {exp.location && (
                        <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className={`size-5 ${colors.text} shrink-0 mt-0.5`} />
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'en' ? achievement.en : language === 'vi' ? achievement.vi : achievement.zh}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div className="mt-4">
                        <h4 className="text-gray-600 font-bold">Technologies:</h4>
                        <p className="text-gray-500">
                          {exp.technologies.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}