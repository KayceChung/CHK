import profileImage from '../assets/profile.png';
import { HologramImage } from './HologramImage';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';


export function Hero() {
  const { t } = useLanguage();

  // Sử dụng import từ assets cho ảnh hero

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-16">
      {/* Techno Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Neon Glow Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Scan Lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(6, 182, 212, 0.02) 50%)',
            backgroundSize: '100% 4px',
          }}
          animate={{ y: [0, 8] }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
                {t('hero.greeting')} <span className="text-cyan-600">Khang</span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl text-gray-800 mb-4 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
                {t('hero.title')}
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8 max-w-2xl leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
                {t('hero.description')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/50 transition-all"
              >
                {t('hero.cta')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-500 backdrop-blur-sm"
              >
                {t('hero.contact')}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm group"
              >
                <Github className="size-5 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/hien-khang-chung-677105284/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm group"
              >
                <Linkedin className="size-5 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
              </a>
              <a
                href="mailto:chunghienkhang@gmail.com"
                aria-label="Send email to chunghienkhang@gmail.com"
                className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm group"
              >
                <Mail className="size-5 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
              </a>
              <a
                href="https://www.datacamp.com/portfolio/chunghienkhang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit DataCamp portfolio"
                className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm group"
              >
                <ExternalLink className="size-5 text-gray-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Techno Projection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000 lg:-ml-8"
          >
            {/* Holographic Frame */}
            <div className="relative group">
              {/* Animated Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/50" />
              
              {/* Main Image Container with Hologram Effect */}
              <div className="relative rounded-2xl overflow-visible">
                {/* Priority load for above-the-fold hero image */}
                <HologramImage 
                  src={profileImage} 
                  alt="Chung Hiến Khang professional portrait" 
                  priority={true}
                />
              </div>
              
              {/* Floating Data Points */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-lg shadow-lg shadow-cyan-500/50 backdrop-blur-sm border border-cyan-400/50"
              >
                <div className="text-white text-xl font-mono">{'<AI/>'}</div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-lg shadow-lg shadow-purple-500/50 backdrop-blur-sm border border-purple-400/50"
              >
                <div className="text-white text-xl font-mono">{'SQL'}</div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/3 -right-12 bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-lg shadow-lg shadow-blue-500/50 backdrop-blur-sm border border-blue-400/50"
              >
                <div className="text-white text-sm font-mono">{'3.65'}</div>
              </motion.div>
            </div>
            
            {/* Particle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}