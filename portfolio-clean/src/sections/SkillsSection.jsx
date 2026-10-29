import React from 'react';
import {
  Code,
  Globe,
  Layers,
  Database,
  Flame,
  GitBranch,
  Terminal,
  Smartphone,
  Cpu,
  Server,
  Zap,
  Atom
} from 'lucide-react';
import skillsBg from '../assets/skills-background.webp';
import { portfolioData } from '../data/portfolioData.js';

export default function SkillsSection() {
  const { skills, skillBars, quotes } = portfolioData;

  const renderIcon = (iconType, color) => {
    switch (iconType) {
      case 'atom':
        return <Atom className="w-6 h-6" style={{ color }} />;
      case 'js':
        return (
          <span className="font-['Barlow_Condensed'] font-black text-xl px-1.5 py-0.5 rounded-sm bg-[#F7DF1E]/10 border border-[#F7DF1E]/40" style={{ color }}>
            JS
          </span>
        );
      case 'html5':
        return (
          <span className="font-['Barlow_Condensed'] font-black text-xl px-1.5 py-0.5 rounded-sm bg-[#E34F26]/10 border border-[#E34F26]/40" style={{ color }}>
            HTML
          </span>
        );
      case 'css3':
        return (
          <span className="font-['Barlow_Condensed'] font-black text-xl px-1.5 py-0.5 rounded-sm bg-[#1572B6]/10 border border-[#1572B6]/40" style={{ color }}>
            CSS
          </span>
        );
      case 'tailwind':
        return <Layers className="w-6 h-6" style={{ color }} />;
      case 'node':
        return <Server className="w-6 h-6" style={{ color }} />;
      case 'express':
        return (
          <span className="font-mono font-bold text-base px-1.5 py-0.5 rounded-sm bg-white/5 border border-white/20 text-white">
            ex
          </span>
        );
      case 'mongo':
        return <Database className="w-6 h-6" style={{ color }} />;
      case 'firebase':
        return <Flame className="w-6 h-6" style={{ color }} />;
      case 'git':
        return <GitBranch className="w-6 h-6" style={{ color }} />;
      case 'vscode':
        return <Terminal className="w-6 h-6" style={{ color }} />;
      case 'responsive':
        return <Smartphone className="w-6 h-6" style={{ color }} />;
      default:
        return <Code className="w-6 h-6 text-[#E50924]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: Large Dali Mask with "GOOD CODE BUILDS FREEDOM" */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 42%, rgba(5,6,7,0.65) 75%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${skillsBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 30%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-radial-[at_85%_50%] from-[#E50924]/18 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
              03 / THE ARSENAL
            </span>
            <div className="h-[1px] w-12 bg-[#E50924]" />
          </div>

          <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            MY <span className="text-[#E50924]">SKILLS</span>
          </h2>

          <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-10">
            TECHNOLOGIES I WORK WITH
          </h3>

          {/* Grid of Technology Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-3.5 sm:p-4 bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924]/70 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_25px_rgba(229,9,36,0.2)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="transition-transform group-hover:scale-110 duration-200">
                    {renderIcon(skill.icon, skill.color)}
                  </div>
                  <span className="font-mono text-[9px] text-[#A7ADB5]/60 group-hover:text-[#E50924] transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h4 className="font-['Barlow_Condensed'] text-lg font-bold text-white uppercase tracking-wider mb-0.5">
                  {skill.name}
                </h4>

                <span className="font-mono text-[9px] text-[#A7ADB5] uppercase tracking-wider block">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>

          {/* Skill Proficiency Progress Bars */}
          <div className="p-5 sm:p-6 bg-[#0B0D0F]/80 border border-[#24282C] backdrop-blur-sm mb-8">
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4 flex items-center justify-between">
              <span>PROFICIENCY GAUGES</span>
              <span className="text-[10px] text-[#E50924] font-normal">• ACTIVE MONITOR</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skillBars.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#A7ADB5]">{bar.label}</span>
                    <span className="text-white font-bold">{bar.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#24282C] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#8E0017] to-[#E50924] shadow-[0_0_8px_#E50924]"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Heist Motto */}
          <div className="inline-block border-l-2 border-[#E50924] pl-4 py-1">
            <p className="font-['Barlow_Condensed'] font-black tracking-widest text-xl sm:text-2xl uppercase text-[#E50924] drop-shadow-[0_0_15px_rgba(229,9,36,0.4)]">
              "{quotes.skills}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
