import React from 'react';
import { Download, FileText, ArrowUpRight, Award, Flame, BrainCircuit } from 'lucide-react';
import aboutBg from '../assets/about-background.webp';
import signatureImg from '../assets/signature.jpg';
import { portfolioData } from '../data/portfolioData.js';

export default function AboutSection({ onNavigate, onOpenResume }) {
  const { personal, quotes } = portfolioData;

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: The Professor & subtle red mask */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.95) 36%, rgba(5,6,7,0.6) 72%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.15) 50%, rgba(5,6,7,0.85) 100%),
            url(${aboutBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 25%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      {/* Radial crimson vignette */}
      <div className="absolute inset-0 bg-radial-[at_75%_45%] from-[#8E0017]/15 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
              01 / THE DOSSIER
            </span>
            <div className="h-[1px] w-12 bg-[#E50924]" />
          </div>

          <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            ABOUT <span className="text-[#E50924]">ME</span>
          </h2>

          <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-8">
            MY STORY
          </h3>

          {/* Biography text */}
          <div className="space-y-4 text-base sm:text-lg text-[#A7ADB5] leading-relaxed mb-8">
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="text-[#A7ADB5]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative Signature & Professor Quote */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-[#24282C] my-8 bg-[#0B0D0F]/40 backdrop-blur-sm px-6">
            <div>
              <span className="block text-[10px] font-mono tracking-widest text-[#A7ADB5] uppercase mb-1">
                OPERATIVE SIGNATURE
              </span>
              <div className="flex items-center gap-3">
                <img
                  src={signatureImg}
                  alt="Dilmurad handwritten signature"
                  className="h-10 w-auto invert brightness-200 contrast-125 object-contain"
                />
                <span className="font-['Barlow_Condensed'] text-xl font-bold tracking-wider text-white">
                  Dilmurad
                </span>
              </div>
            </div>

            <div className="text-right border-l sm:border-l-0 border-[#24282C] pl-4 sm:pl-0">
              <span className="font-['Barlow_Condensed'] italic text-base sm:text-lg text-[#F5F5F5] block">
                “{quotes.about.text}”
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#E50924] uppercase block mt-1">
                — {quotes.about.author}
              </span>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {personal.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 bg-[#0B0D0F]/80 border border-[#24282C] relative overflow-hidden group hover:border-[#E50924]/60 transition-colors"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#E50924]/5 group-hover:bg-[#E50924]/10 transition-colors pointer-events-none" />
                <span className="block font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black text-white group-hover:text-[#E50924] transition-colors">
                  {stat.value}
                </span>
                <span className="block font-mono text-[10px] sm:text-xs text-[#A7ADB5] tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 bg-[#E50924] hover:bg-[#ff1b37] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,36,0.35)] hover:shadow-[0_0_30px_rgba(229,9,36,0.6)] flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <button
              onClick={() => onNavigate('experience')}
              className="px-6 py-3.5 bg-[#0B0D0F] hover:bg-[#15191E] border border-[#24282C] hover:border-[#E50924] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE EXPERIENCE</span>
              <ArrowUpRight className="w-4 h-4 text-[#E50924]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
