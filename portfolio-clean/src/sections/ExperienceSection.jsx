import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import expBg from '../assets/experience-background.webp';
import { portfolioData } from '../data/portfolioData.js';

export default function ExperienceSection() {
  const { experience, quotes } = portfolioData;

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: Hooded operative facing Banco de España */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 38%, rgba(5,6,7,0.6) 72%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${expBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 30%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-radial-[at_80%_40%] from-[#8E0017]/20 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
              02 / THE CHRONOLOGY
            </span>
            <div className="h-[1px] w-12 bg-[#E50924]" />
          </div>

          <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            MY <span className="text-[#E50924]">EXPERIENCE</span>
          </h2>

          <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-12">
            MY JOURNEY SO FAR
          </h3>

          {/* Red Vertical Timeline */}
          <div className="relative pl-8 sm:pl-10 space-y-12 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#E50924] before:via-[#8E0017] before:to-[#24282C]">
            {experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[30px] sm:-left-[34px] top-1.5 w-4 h-4 rounded-full bg-[#050607] border-2 border-[#E50924] shadow-[0_0_12px_#E50924] group-hover:bg-[#E50924] transition-colors" />

                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B0D0F] border border-[#24282C] text-[#E50924] font-mono text-[11px] tracking-wider uppercase mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </div>

                {/* Title & Institution */}
                <h4 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-[#A7ADB5] uppercase tracking-wider mb-3">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed max-w-xl mb-4">
                  {item.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 bg-[#0B0D0F]/90 border border-[#24282C] text-[#F5F5F5] font-mono text-[10px] tracking-wider uppercase hover:border-[#E50924]/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Quote Callout */}
          <div className="mt-14 pt-6 border-t border-[#24282C] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#0B0D0F] border border-[#24282C] text-[#E50924]">
                <Terminal className="w-4 h-4" />
              </div>
              <p className="font-['Barlow_Condensed'] italic text-lg sm:text-xl text-[#F5F5F5]">
                “{quotes.experience.text}”
              </p>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#E50924] uppercase">
              — {quotes.experience.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
