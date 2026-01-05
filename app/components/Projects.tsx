import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: t('projects.hk.title'),
      description: t('projects.hk.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['AppSheet', 'SQL', 'Data Analysis', 'Process Optimization'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: language === 'en' ? 'Automated Workflow System' : language === 'vi' ? 'Hệ Thống Tự Động Hóa Quy Trình' : '自动化工作流系统',
      description: language === 'en' 
        ? 'Built comprehensive workflow automation using AppScript and Google Workspace APIs, reducing manual processing time by 70% and improving data accuracy.'
        : language === 'vi'
        ? 'Xây dựng hệ thống tự động hóa quy trình toàn diện sử dụng AppScript và Google Workspace APIs, giảm 70% thời gian xử lý thủ công và cải thiện độ chính xác dữ liệu.'
        : '使用AppScript和Google Workspace API构建全面的工作流自动化，将手动处理时间减少70%并提高数据准确性。',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['AppScript', 'Automation', 'Google Workspace', 'API Integration'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: language === 'en' ? 'SQL Database Optimization' : language === 'vi' ? 'Tối Ưu Cơ Sở Dữ Liệu SQL' : 'SQL数据库优化',
      description: language === 'en'
        ? 'Optimized complex SQL queries and database structure, achieving 60% faster query execution and improved system performance for real-time reporting.'
        : language === 'vi'
        ? 'Tối ưu hóa các truy vấn SQL phức tạp và cấu trúc cơ sở dữ liệu, đạt được tốc độ thực thi nhanh hơn 60% và cải thiện hiệu suất hệ thống cho báo cáo thời gian thực.'
        : '优化复杂的SQL查询和数据库结构，实现查询执行速度提高60%，并改善实时报告的系统性能。',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      tags: ['SQL', 'Database', 'Performance Optimization', 'Analytics'],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
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
              {t('projects.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="text-xl mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                >
                  {t('projects.view')}
                  <ExternalLink className="size-4 ml-2" />
                </Button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${project.gradient} group-hover:h-full transition-all duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}