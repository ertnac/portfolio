import React from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection = ({ personal, onCopy, copiedField, onOpenEmail }) => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 text-white p-8 sm:p-14 lg:p-16 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Initiate Conversation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's build something exceptional together.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Whether you're looking for a software engineer to join your engineering team, need full-stack development, or simply want to connect, my inbox is always open.
            </p>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Email Card (Opens Gmail Draft Modal) */}
              <div
                onClick={onOpenEmail}
                className="group p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-left transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>EMAIL ADDRESS (CLICK TO DRAFT)</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCopy(personal.contact.email, 'contact-email');
                    }}
                    className="p-1 rounded hover:bg-zinc-800 transition-colors"
                    title="Copy email only"
                  >
                    {copiedField === 'contact-email' ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-white break-all flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{personal.contact.email}</span>
                </div>
              </div>

              {/* Phone Card */}
              <button
                onClick={() => onCopy(personal.contact.phone, 'contact-phone')}
                className="group p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-left transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>PHONE / WHATSAPP</span>
                  {copiedField === 'contact-phone' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  )}
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-white">
                  {personal.contact.phone}
                </div>
              </button>
            </div>

            {/* Direct Mail CTA (Opens Gmail Draft Modal) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 transition-transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Compose Message in Gmail</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personal.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
