import React, { useState, useEffect } from 'react';
import './assets/index.css';
import { portfolioData } from './data/portfolioData';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutEducationSection } from './components/AboutEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // Initialize theme
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);
  }, []);

  // Synchronize <html> class with theme state
  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleCopy = (text, fieldIdentifier) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldIdentifier);
      showToast(`Copied "${text}" to clipboard`);
      setTimeout(() => setCopiedField(null), 2400);
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-zinc-500 font-mono text-xs animate-pulse">
          Loading portfolio...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      
      {/* Main Content Sections */}
      <main>
        <Hero
          personal={portfolioData.personal}
          onOpenResume={() => setResumeModalOpen(true)}
          onCopy={handleCopy}
          copiedField={copiedField}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <ProjectsSection projects={portfolioData.projects} />

        <SkillsSection
          skills={portfolioData.skills}
          onCopy={handleCopy}
          copiedField={copiedField}
        />

        <AboutEducationSection
          education={portfolioData.education}
          personal={portfolioData.personal}
        />

        <ContactSection
          personal={portfolioData.personal}
          onCopy={handleCopy}
          copiedField={copiedField}
        />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer
        personal={portfolioData.personal}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* ATS Resume Modal for Quick Preview & Printing */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onCopy={handleCopy}
        copiedField={copiedField}
      />

      {/* Copy Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
};

export default App;
