import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Database, Code, BarChart3, Workflow, Cloud, Layers } from 'lucide-react';

export function TechStack() {
  const { t } = useLanguage();

  const techStacks = [
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'SQL', level: 90, description: 'Advanced querying & optimization' },
        { name: 'Data Analysis', level: 85, description: 'Statistical analysis & insights' },
        { name: 'Business Intelligence', level: 80, description: 'Dashboard & reporting' },
      ],
    },
    {
      category: 'Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'AppSheet', level: 90, description: 'No-code app development' },
        { name: 'AppScript', level: 85, description: 'Automation & scripting' },
        { name: 'JavaScript', level: 75, description: 'Web development' },
      ],
    },
    {
      category: 'Workflow & Automation',
      icon: Workflow,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Process Optimization', level: 90, description: 'Bottleneck analysis' },
        { name: 'Workflow Design', level: 85, description: 'System architecture' },
        { name: 'API Integration', level: 75, description: 'Third-party connections' },
      ],
    },
    {
      category: 'Cloud & Tools',
      icon: Cloud,
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Google Cloud', level: 80, description: 'Cloud services & deployment' },
        { name: 'Excel Advanced', level: 90, description: 'Complex formulas & macros' },
        { name: 'Figma', level: 85, description: 'UI/UX design' },
      ],
    },
  ];

  return (
    <section id="techstack" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {'<'} Building solutions with modern technology {'/>'} 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${stack.color} rounded-xl shadow-lg`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-white">{stack.category}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {stack.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-mono">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${stack.color} rounded-full`}
                        />
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DataCamp Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.datacamp.com/portfolio/chunghienkhang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/50 transition-all group"
          >
            <BarChart3 className="size-6" />
            <span className="text-lg">View My DataCamp Portfolio</span>
            <span className="text-sm opacity-75 group-hover:opacity-100">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
