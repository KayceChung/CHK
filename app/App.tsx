import { lazy, Suspense, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ConversionCTA from './components/cta/ConversionCTA';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { PageLoadingSpinner } from './components/LoadingSpinner';

// Lazy load page components for better performance
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

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
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content" aria-label="Main content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ConversionCTA />
                <About />
                <Services />
                <TechStack />
                <Education />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/CHK" element={
              <>
                <Hero />
                <ConversionCTA />
                <About />
                <Services />
                <TechStack />
                <Education />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/CHK/" element={
              <>
                <Hero />
                <ConversionCTA />
                <About />
                <Services />
                <TechStack />
                <Education />
                <Experience />
                <Contact />
              </>
            } />
            {/* Lazy loaded routes with Suspense */}
            <Route path="/projects" element={
              <Suspense fallback={<PageLoadingSpinner />}>
                <Projects />
              </Suspense>
            } />
            <Route path="/CHK/projects" element={
              <Suspense fallback={<PageLoadingSpinner />}>
                <Projects />
              </Suspense>
            } />
            <Route path="/projects/:slug" element={
              <Suspense fallback={<PageLoadingSpinner />}>
                <ProjectDetail />
              </Suspense>
            } />
            <Route path="/CHK/projects/:slug" element={
              <Suspense fallback={<PageLoadingSpinner />}>
                <ProjectDetail />
              </Suspense>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CHK/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}