import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import profileImage from 'figma:asset/6b103b8f9f9c9996af06186d75435bca4d39505a.png';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t('about.gpa'), value: '3.65' },
    { label: 'Tech Projects', value: '10+' },
    { label: 'Code Commits', value: '1000+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="mb-4 text-gray-800">{t('skills.technical')}</h3>
              <div className="flex flex-wrap gap-2">
                {['AppSheet', 'AppScript', 'SQL', 'Canva', 'Figma'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="mb-4 text-gray-800">{t('skills.tools')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Microsoft Office', 'Excel', 'PowerPoint', 'Word', 'Outlook'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="mb-4 text-gray-800">{t('skills.soft')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Planning', 'Time Management', 'Communication', 'Critical Thinking'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="mb-4 text-gray-800">{t('skills.languages')}</h3>
              <div className="flex flex-wrap gap-2">
                {['English (C1-C2)', 'Vietnamese (Native)'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}