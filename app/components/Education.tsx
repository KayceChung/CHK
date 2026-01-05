import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();

  const certificates = [
    'Aptis General (184/200) - C1',
    'EF SET English Certificate (74/100 - C2 Advanced)',
    'Fundamentals of Digital Marketing - Google Certificate',
    'Fundamentals of Google Cloud',
    'Hoa Sen Award 2022 - Sen',
    '3rd placed team at Hoa Sen Young Logistics 2022',
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              {t('education.title')}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="size-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-gray-900">
                  {t('education.university')}
                </h3>
                <p className="text-gray-600">{t('education.period')}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{t('education.degree')}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{t('education.major')}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">{t('education.gpa')}</span>
                <span className="text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  3.65
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold">Top Cohort:</span> Graduated in 2024 with a GPA of 3.65/4 in the top cohort, demonstrating strong academic performance and commitment to excellence.
              </p>
            </div>
          </motion.div>

          {/* Certificates & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="size-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-gray-900">
                  {t('certificates.title')}
                </h3>
                <p className="text-gray-600">{t('certificates.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-3">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="mt-1">
                    <div className="size-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                  </div>
                  <span className="text-gray-700 flex-1">{cert}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">English Proficiency:</span> Certified C1-C2 level, enabling effective communication with international clients and teams.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
