import React, { useState } from 'react';
import { Download, Eye, Printer, FileText, CheckCircle, ArrowUpRight } from 'lucide-react';
import resumeBg from '../assets/resume-background.webp';
import ResumeModal from '../components/ResumeModal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function ResumeSection() {
  const { personal, resume } = portfolioData;
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: Banco de España & Mastermind silhouette on right */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 42%, rgba(5,6,7,0.65) 75%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${resumeBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 30%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-radial-[at_85%_45%] from-[#8E0017]/18 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
            06 / CURRICULUM VITAE
          </span>
          <div className="h-[1px] w-12 bg-[#E50924]" />
        </div>

        <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          MY <span className="text-[#E50924]">RESUME</span>
        </h2>

        <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-12">
          DOWNLOAD MY CV
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: Document Sheet Preview (Stylized Paper) */}
          <div className="lg:col-span-7 bg-[#F7F6F2] text-[#151515] p-6 sm:p-8 rounded-xs shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 relative">
            {/* Header Stamp */}
            <div className="flex justify-between items-start border-b-2 border-[#151515] pb-4 mb-4">
              <div>
                <h4 className="font-['Barlow_Condensed'] text-3xl font-black uppercase text-[#111] leading-none">
                  Dilmurad
                </h4>
                <p className="font-mono text-[10px] text-[#8E0017] font-bold uppercase tracking-widest mt-1">
                  {personal.role}
                </p>
              </div>

              <div className="text-right text-[10px] font-mono text-[#555]">
                <p>{personal.email}</p>
                <p>{personal.phone}</p>
                <p>{personal.location}</p>
              </div>
            </div>

            {/* Education snippet */}
            <div className="mb-4">
              <h5 className="font-['Barlow_Condensed'] text-base font-bold uppercase text-[#8E0017] tracking-wider mb-1.5 border-b border-[#ddd]">
                Education & Training
              </h5>
              <div className="space-y-1 text-xs text-[#333]">
                <div className="flex justify-between">
                  <span className="font-semibold">ICS (Computer Science)</span>
                  <span className="font-mono text-[10px] text-[#666]">2021 — 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saylani Welfare — Web Development Course</span>
                  <span className="font-mono text-[10px] text-[#666]">2023 — 2024</span>
                </div>
              </div>
            </div>

            {/* Experience snippet */}
            <div className="mb-4">
              <h5 className="font-['Barlow_Condensed'] text-base font-bold uppercase text-[#8E0017] tracking-wider mb-1.5 border-b border-[#ddd]">
                Professional Experience
              </h5>
              <div className="text-xs text-[#333]">
                <div className="flex justify-between font-semibold">
                  <span>Freelance Web Developer</span>
                  <span className="font-mono text-[10px] text-[#666]">2024 — Present</span>
                </div>
                <p className="text-[11px] text-[#555] mt-0.5">
                  Building responsive, performant web applications using React, Tailwind CSS, and Firebase.
                </p>
              </div>
            </div>

            {/* Core Skills & Languages */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#ddd] text-xs">
              <div>
                <h6 className="font-['Barlow_Condensed'] font-bold text-[#8E0017] uppercase tracking-wider text-[11px] mb-1">
                  Core Technologies
                </h6>
                <p className="text-[10px] text-[#444] font-mono">
                  React • JavaScript • HTML5 • CSS3 • Node.js • Firebase • Git
                </p>
              </div>
              <div>
                <h6 className="font-['Barlow_Condensed'] font-bold text-[#8E0017] uppercase tracking-wider text-[11px] mb-1">
                  Languages
                </h6>
                <p className="text-[10px] text-[#444]">
                  English, Urdu, Pashto
                </p>
              </div>
            </div>

            {/* Corner Stamp */}
            <div className="absolute bottom-4 right-4 rotate-[-12deg] pointer-events-none opacity-85">
              <div className="px-2.5 py-1 border-2 border-[#8E0017] text-[#8E0017] font-mono text-[9px] font-bold tracking-widest uppercase">
                VERIFIED DOSSIER
              </div>
            </div>
          </div>

          {/* Right: Actions and Controls */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Download PDF */}
            <div
              onClick={handleDownload}
              className="p-5 bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924] transition-all cursor-pointer group backdrop-blur-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#050607] border border-[#24282C] group-hover:border-[#E50924]/60 text-[#E50924] transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white group-hover:text-[#E50924] transition-colors">
                    DOWNLOAD PDF
                  </h4>
                  <p className="font-mono text-[11px] text-[#A7ADB5]">
                    Get my resume in PDF format
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A7ADB5] group-hover:text-[#E50924] transition-colors" />
            </div>

            {/* Card 2: View Online */}
            <div
              onClick={() => setModalOpen(true)}
              className="p-5 bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924] transition-all cursor-pointer group backdrop-blur-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#050607] border border-[#24282C] group-hover:border-[#E50924]/60 text-[#E50924] transition-colors">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white group-hover:text-[#E50924] transition-colors">
                    VIEW ONLINE
                  </h4>
                  <p className="font-mono text-[11px] text-[#A7ADB5]">
                    See resume in full browser viewer
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A7ADB5] group-hover:text-[#E50924] transition-colors" />
            </div>

            {/* Card 3: Print Friendly */}
            <div
              onClick={handlePrint}
              className="p-5 bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924] transition-all cursor-pointer group backdrop-blur-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#050607] border border-[#24282C] group-hover:border-[#E50924]/60 text-[#E50924] transition-colors">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white group-hover:text-[#E50924] transition-colors">
                    PRINT RESUME
                  </h4>
                  <p className="font-mono text-[11px] text-[#A7ADB5]">
                    Print friendly standard version
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A7ADB5] group-hover:text-[#E50924] transition-colors" />
            </div>

            {/* Big Red CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-4 bg-[#E50924] hover:bg-[#ff1a35] text-white font-['Barlow_Condensed'] font-bold text-lg tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(229,9,36,0.4)] hover:shadow-[0_0_30px_rgba(229,9,36,0.7)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Online Resume Modal */}
      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
