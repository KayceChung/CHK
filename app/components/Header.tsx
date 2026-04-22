import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileLangMenuOpen, setMobileLangMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // Nếu đang ở trang chủ, scroll trực tiếp
    if (location.pathname === '/' || location.pathname === '/CHK' || location.pathname === '/CHK/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ rồi scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setMobileMenuOpen(false);
    }
  };

  const getLanguageLabel = () => {
    switch (language) {
      case 'en': return 'EN';
      case 'vi': return 'VI';
      case 'zh': return '中文';
      default: return 'EN';
    }
  };

  const selectLanguage = (lang: 'en' | 'vi' | 'zh') => {
    setLanguage(lang);
    setLangMenuOpen(false);
    setMobileLangMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold text-xl cursor-pointer">
              CHK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('techstack')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.techstack')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.experience')}
            </button>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.projects')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2"
                aria-label="Select language"
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
              >
                <Languages className="size-4" aria-hidden="true" />
                <span>{getLanguageLabel()}</span>
                <ChevronDown className="size-4" aria-hidden="true" />
              </Button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10" role="menu" aria-label="Language options">
                  <button
                    onClick={() => selectLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'en' ? 'bg-blue-50 text-blue-600' : ''}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage('vi')}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'vi' ? 'bg-blue-50 text-blue-600' : ''}`}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => selectLanguage('zh')}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'zh' ? 'bg-blue-50 text-blue-600' : ''}`}
                  >
                    中文
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileLangMenuOpen(!mobileLangMenuOpen)}
              aria-label="Open language menu"
              aria-expanded={mobileLangMenuOpen}
            >
              <Languages className="size-5" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2" role="menu" aria-label="Mobile navigation menu">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('techstack')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {t('nav.techstack')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {t('nav.experience')}
            </button>
            <Link
              to="/projects"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}

        {/* Mobile Language Menu */}
        {mobileLangMenuOpen && (
          <div className="md:hidden py-4 space-y-2" role="menu" aria-label="Mobile language selection">
            <button
              onClick={() => selectLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'en' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              English
            </button>
            <button
              onClick={() => selectLanguage('vi')}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'vi' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              Tiếng Việt
            </button>
            <button
              onClick={() => selectLanguage('zh')}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${language === 'zh' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              中文
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}