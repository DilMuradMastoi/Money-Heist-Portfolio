import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronRight, Github, Linkedin, Twitter, Youtube, ShieldAlert } from 'lucide-react';
import homeBg from '../assets/home-background.webp';
import { portfolioData } from '../data/portfolioData.js';

export default function HomeSection({ onNavigate }) {
  const { personal, quotes } = portfolioData;
  const roles = ['Deep Learning Engineer', 'Mobile App Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!deleting && displayedRole === currentRole) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && displayedRole === '') {
      setDeleting(false);
      setRoleIndex((previous) => (previous + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedRole((previous) => deleting
          ? currentRole.slice(0, Math.max(0, previous.length - 1))
          : currentRole.slice(0, previous.length + 1));
      }, deleting ? 45 : 85);
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050607] isolation-auto"
    >
      {/* Cinematic Heist Background Artwork */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.94) 38%, rgba(5,6,7,0.55) 72%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.7) 100%),
            url(${homeBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 35%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.92,
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Crimson Glow & Vignette */}
      <div className="absolute inset-0 bg-radial-[at_85%_35%] from-[#E50924]/15 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-28 right-8 hidden lg:flex flex-col items-center gap-2 pointer-events-none z-10 opacity-70">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 [writing-mode:vertical-rl]">
          THE PLAN • THE CODE • THE HEIST
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#E50924] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#0B0D0F]/90 border border-[#24282C] rounded-sm mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#E50924] animate-pulse shadow-[0_0_8px_#E50924]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A7ADB5]">
              AVAILABLE FOR NEW MISSIONS & PROJECTS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#A7ADB5] mb-2">
            HELLO, I'M
          </h2>

          <h1 className="font-['Barlow_Condensed'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white mb-3">
            DIL<span className="text-[#E50924] drop-shadow-[0_0_35px_rgba(229,9,36,0.6)]">MURAD</span>
          </h1>

          {/* Animated role title: types, pauses, deletes, then changes role */}
          <h2 className="min-h-[1.2em] font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#E50924] mb-3">
            {displayedRole}<span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] bg-[#E50924] animate-pulse" aria-hidden="true" />
          </h2>

          {/* Professional introduction directly beneath the name */}
          <p className="font-mono text-xs sm:text-sm tracking-[0.12em] uppercase text-[#F5F5F5]/80 mb-3">
            React Developer <span className="text-[#E50924]">/</span> UI Designer <span className="text-[#E50924]">/</span> Creative Problem Solver
          </p>
          <p className="text-base sm:text-lg text-[#A7ADB5] leading-relaxed max-w-xl mb-3 font-normal">
            I build modern, responsive websites that combine clean code with bold, user-focused design.
          </p>
          <p className="text-sm sm:text-base text-[#A7ADB5]/90 leading-relaxed max-w-xl mb-8 font-normal">
            From polished interfaces to practical web applications, I turn ideas into fast, accessible, and engaging digital experiences using React and modern web technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('projects')}
              className="px-7 py-3.5 bg-[#E50924] hover:bg-[#ff1b37] text-white font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(229,9,36,0.45)] hover:shadow-[0_0_35px_rgba(229,9,36,0.7)] flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW MY PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 bg-[#0B0D0F]/80 hover:bg-[#15191E] border border-[#24282C] hover:border-[#E50924] text-white font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase transition-all duration-300 backdrop-blur-sm flex items-center gap-2 cursor-pointer"
            >
              <span>CONTACT ME</span>
              <ChevronRight className="w-4 h-4 text-[#E50924]" />
            </button>
          </div>

          {/* Bottom Left Quote */}
          <div className="relative pl-5 border-l-2 border-[#E50924] mb-10 max-w-lg bg-gradient-to-r from-[#050607]/80 to-transparent py-2">
            <p className="font-['Barlow_Condensed'] italic text-lg sm:text-xl text-[#F5F5F5] leading-snug">
              “{quotes.home.text}”
            </p>
            <span className="block mt-1 font-mono text-[10px] tracking-widest uppercase text-[#E50924]">
              — {quotes.home.author}
            </span>
          </div>

          {/* Socials & Key Stats */}
          <div className="pt-6 border-t border-[#24282C]/80 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#A7ADB5] mr-1">
                INTEL CHANNELS:
              </span>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                aria-label="X / Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={personal.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="block font-['Barlow_Condensed'] font-black text-2xl text-white">
                  12<span className="text-[#E50924]">+</span>
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[#A7ADB5] uppercase">
                  Tech Tools
                </span>
              </div>
              <div className="w-[1px] h-8 bg-[#24282C]" />
              <div>
                <span className="block font-['Barlow_Condensed'] font-black text-2xl text-white">
                  06
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[#A7ADB5] uppercase">
                  Featured Builds
                </span>
              </div>
              <div className="w-[1px] h-8 bg-[#24282C]" />
              <div>
                <span className="block font-['Barlow_Condensed'] font-black text-2xl text-[#E50924]">
                  100%
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[#A7ADB5] uppercase">
                  Commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
