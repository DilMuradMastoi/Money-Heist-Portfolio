import React from 'react';
import { X, Download, Printer, ExternalLink, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, resume, skills } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate an automatic clean printable view or prompt save
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#0B0D0F] border border-[#24282C] shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24282C] bg-[#050607]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50924] shadow-[0_0_8px_#E50924]" />
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
              OFFICIAL CURRICULUM VITAE // DILMURAD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0B0D0F] hover:bg-[#15191E] border border-[#24282C] hover:border-[#E50924] text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#E50924]" />
              <span className="hidden sm:inline">PRINT / SAVE AS PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A7ADB5] hover:text-white border border-[#24282C] hover:border-[#E50924] bg-[#0B0D0F] transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Paper */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-[#111317]">
          <div className="max-w-2xl mx-auto bg-[#F7F6F2] text-[#151515] p-8 sm:p-12 shadow-2xl rounded-xs font-sans print:shadow-none print:p-0">
            {/* Header */}
            <div className="border-b-2 border-[#151515] pb-6 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#111] leading-none">
                  Dilmurad
                </h1>
                <p className="font-mono text-xs text-[#E50924] font-bold uppercase tracking-widest mt-1">
                  {personal.role}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-[#333]">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#8E0017]" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#8E0017]" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#8E0017]" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#8E0017] tracking-wider mb-2 border-b border-[#ddd] pb-1">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {resume.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-6">
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#8E0017] tracking-wider mb-2 border-b border-[#ddd] pb-1">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-[#E8E6DF] text-[#111] font-mono text-[11px] rounded-xs font-medium"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#8E0017] tracking-wider mb-2 border-b border-[#ddd] pb-1">
                Work Experience
              </h2>
              {resume.experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-[#111]">{exp.role}</h3>
                    <span className="font-mono text-xs text-[#666]">{exp.period}</span>
                  </div>
                  <p className="text-xs italic text-[#555] mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside text-xs text-[#333] space-y-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#8E0017] tracking-wider mb-2 border-b border-[#ddd] pb-1">
                Education & Certifications
              </h2>
              {resume.education.map((edu, i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-[#111]">{edu.degree}</h3>
                    <span className="font-mono text-xs text-[#666]">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[#555]">{edu.institution}</p>
                  <p className="text-xs text-[#666] mt-0.5">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#8E0017] tracking-wider mb-2 border-b border-[#ddd] pb-1">
                Languages
              </h2>
              <p className="text-xs text-[#333]">
                {resume.languages.join('  •  ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
