import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Mail, 
  ExternalLink,
  RotateCcw
} from 'lucide-react';

const PRESETS = [
  {
    id: 'opportunity',
    name: 'Job / Internship Inquiry',
    subject: 'Opportunity Inquiry for James Clarence Cantre',
    body: `Dear James,

Good day.

I came across your personal portfolio and was impressed by your projects (Saulado, Mapos Catering, Virtu Gallery) and technical stack.

We would like to connect with you regarding an opportunity:
- Role / Position: [Software Engineer / Full Stack Developer / Intern]
- Organization: [Company / Organization Name]
- Work Setup: [Remote / Hybrid / On-site]

Please let us know your availability for a brief conversation.

Best regards,
[Your Name]
[Your Contact Information]`
  },
  {
    id: 'collaboration',
    name: 'Project Collaboration',
    subject: 'Project Collaboration Inquiry – James Clarence Cantre',
    body: `Hi James,

I reviewed your work on your developer portfolio and would love to collaborate with you on a software project.

Project Overview:
- Scope: [Web Application / Mobile App / Backend API]
- Tech Stack: [React, Node.js, PHP, or others]
- Estimated Timeline: [Timeline]

Looking forward to your thoughts.

Best regards,
[Your Name]`
  },
  {
    id: 'internship_app',
    name: 'AHEAD Internship Application Template',
    subject: 'Application for Internship: IT & Web Maintenance – James Clarence Cantre',
    body: `Dear AHEAD Recruitment Team,

Good day.

I am writing to express my strong interest in joining AHEAD Tutorial & Review's Internship Program starting in January 2027. I am currently an undergraduate student pursuing a Bachelor of Science in Information Technology (BSIT) major in Software Development.

With a strong foundation in software engineering principles, full-stack web technologies, and systems troubleshooting, I am eager to apply my technical background to support your IT operations, digital platforms, and web maintenance initiatives. As someone passionate about education, I would welcome the opportunity to contribute to one of the most awarded educational institutions in the Philippines while learning under your mentorship.

In alignment with your program requirements and offerings:
- Remote Setup: I am equipped with my own workstation and reliable internet connection, ready to collaborate effectively in a fully online work environment.
- Flexible Hours: I can commit to your required schedule of at least 4 hours per day.
- Academic Endorsements: I can readily provide a School Endorsement Letter and Memorandum of Agreement (MOA) from my university ahead of the January 2027 start date.

I have attached my updated resume for your review. Thank you very much for your time and consideration, and I look forward to the opportunity to discuss how my software development background can add value to the AHEAD team.

Sincerely,

James Clarence Cantre
jamesclarencecantre@gmail.com
09664178646`
  }
];

export const GmailDraftCard = ({
  isOpen,
  onClose,
  recipient = "jamesclarencecantre@gmail.com"
}) => {
  const [activePreset, setActivePreset] = useState(PRESETS[0].id);
  const [subject, setSubject] = useState(PRESETS[0].subject);
  const [body, setBody] = useState(PRESETS[0].body);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);

  // Smoothly scroll to the card when opened
  useEffect(() => {
    if (isOpen && cardRef.current) {
      const timer = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSelectPreset = (preset) => {
    setActivePreset(preset.id);
    setSubject(preset.subject);
    setBody(preset.body);
  };

  const handleResetToCurrentPreset = () => {
    const p = PRESETS.find((x) => x.id === activePreset) || PRESETS[0];
    setSubject(p.subject);
    setBody(p.body);
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenMailto = () => {
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    const fullText = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out overflow-hidden ${
        isOpen
          ? 'max-h-[900px] opacity-100 translate-y-0 mt-8'
          : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none mt-0'
      }`}
    >
      <div className="w-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden text-zinc-900 dark:text-zinc-100">
        
        {/* Gmail Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            {/* Authentic Gmail Logo Icon */}
            <div className="w-6 h-5 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 18" className="w-full h-full">
                <path fill="#4285F4" d="M1.5 18h3V8.5L0 5v11.5C0 17.3 0.7 18 1.5 18z"/>
                <path fill="#34A853" d="M19.5 18h3c0.8 0 1.5-0.7 1.5-1.5V5l-4.5 3.5V18z"/>
                <path fill="#EA4335" d="M19.5 0H4.5C3.7 0 3 0.7 3 1.5v3.2l9 6.8 9-6.8V1.5c0-0.8-0.7-1.5-1.5-1.5z"/>
                <path fill="#FBBC05" d="M4.5 4.7L0 1.3V5l4.5 3.5V4.7z"/>
                <path fill="#EA4335" d="M19.5 8.5L24 5V1.3l-4.5 3.4V8.5z"/>
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
              Gmail Draft Composer
            </span>
            <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-500 font-mono text-[11px]">
              Ready to send via Gmail
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <button
              type="button"
              onClick={handleResetToCurrentPreset}
              className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              title="Reset template text"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleCopyDraft}
              className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              title="Copy message draft"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              aria-label="Close card"
              title="Close draft"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* To Row */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-2.5 border-b border-zinc-100 dark:border-zinc-800/80 text-xs">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-zinc-400 font-medium shrink-0">To</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 font-mono text-xs truncate">
              <span>{recipient}</span>
            </div>
          </div>
          <span className="text-zinc-400 text-xs font-mono shrink-0">Cc Bcc</span>
        </div>

        {/* Subject Row */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-zinc-100 dark:border-zinc-800/80">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
          />
        </div>

        {/* Body Textarea */}
        <div className="p-5 sm:p-6">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={11}
            className="w-full bg-transparent text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 font-normal leading-relaxed resize-none focus:outline-none font-sans"
            placeholder="Write your email message..."
          />
        </div>

        {/* Preset Selector Pill Bar */}
        <div className="px-5 sm:px-6 py-2.5 bg-zinc-50/70 dark:bg-zinc-900/60 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1 text-zinc-400 shrink-0 font-medium text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Templates:</span>
          </div>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleSelectPreset(p)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activePreset === p.id
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
          <p className="text-[11px] text-zinc-400">
            Creates a draft in Gmail. You can review and edit before sending.
          </p>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Fallback mailto button */}
            <button
              type="button"
              onClick={handleOpenMailto}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              title="Open in your default mail app"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Default Mail App</span>
            </button>

            {/* Primary Open in Gmail Button */}
            <button
              type="button"
              onClick={handleOpenGmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send via Gmail</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
