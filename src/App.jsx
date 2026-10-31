import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
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
  const [activeDocType, setActiveDocType] = useState('resume'); // 'resume' | 'cv'
  const [toastMessage, setToastMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const isTransitioningRef = useRef(false);

  const handleOpenDocument = (type = 'resume') => {
    setActiveDocType(type);
    setResumeModalOpen(true);
  };

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

  // Circular reveal dark/light toggle with View Transitions API & CSS clip-path: circle()
  const toggleDarkMode = (event) => {
    if (isTransitioningRef.current) return;
    const nextMode = !isDarkMode;

    // Fallback for browsers that do not support document.startViewTransition or users who prefer reduced motion
    const supportsViewTransition =
      typeof document.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition) {
      setIsDarkMode(nextMode);
      return;
    }

    isTransitioningRef.current = true;

    // Determine toggle coordinates (originating from the toggle switch center)
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event?.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (event?.clientX !== undefined && event?.clientY !== undefined) {
      x = event.clientX;
      y = event.clientY;
    }

    // Radius needed for the circle to expand across the furthest corner of the viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Provide CSS variables on root for CSS clip-path support
    document.documentElement.style.setProperty('--toggle-x', `${x}px`);
    document.documentElement.style.setProperty('--toggle-y', `${y}px`);
    document.documentElement.style.setProperty('--toggle-r', `${endRadius}px`);

    // Flag transition direction:
    // to-dark: expanding outward to reveal dark mode
    // to-light: reversing flow (contracting inward into switch to reveal light mode)
    document.documentElement.dataset.themeTransition = nextMode ? 'to-dark' : 'to-light';

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(nextMode);
        document.documentElement.classList.toggle('dark', nextMode);
        localStorage.setItem('theme', nextMode ? 'dark' : 'light');
      });
    });

    transition.ready.then(() => {
      const isExpanding = nextMode; // true = Light -> Dark, false = Dark -> Light (reverse)

      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: isExpanding ? clipPath : [...clipPath].reverse()
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: isExpanding
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)'
        }
      );
    });

    transition.finished.finally(() => {
      delete document.documentElement.dataset.themeTransition;
      isTransitioningRef.current = false;
    });
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
          activeDocType={activeDocType}
          onOpenDocument={handleOpenDocument}
          onOpenResume={() => handleOpenDocument('resume')}
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
        onOpenResume={() => handleOpenDocument('resume')}
        onOpenDocument={handleOpenDocument}
      />

      {/* PDF Document Modal (Resume & CV Switcher) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        activeType={activeDocType}
        onTypeChange={setActiveDocType}
      />

      {/* Copy Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
};

export default App;
