import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { useEffect } from 'react';

// Main App Component - Updated with trilingual support
export default function App() {
  // SEO Meta Tags
  useEffect(() => {
    // Set page title
    document.title = 'Chung Hiến Khang - Solutions Consultant & E-Commerce Specialist';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Solutions Consultant and E-Commerce Specialist from Hoa Sen University. Expertise in operational analysis, AppSheet, SQL, and data-driven process optimization.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Solutions Consultant and E-Commerce Specialist from Hoa Sen University. Expertise in operational analysis, AppSheet, SQL, and data-driven process optimization.';
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'solutions consultant, e-commerce, appsheet, sql, data analysis, process optimization, hoa sen university, business intelligence');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'solutions consultant, e-commerce, appsheet, sql, data analysis, process optimization, hoa sen university, business intelligence';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Chung Hiến Khang - Solutions Consultant & E-Commerce Specialist';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Expertise in operational analysis, data-driven solutions, and software development using AppSheet and SQL.';
      document.head.appendChild(meta);
    }

    // Set viewport for responsive design
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}