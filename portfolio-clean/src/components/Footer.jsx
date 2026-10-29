import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Youtube, Download } from 'lucide-react';
import MaskIcon from './MaskIcon.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Footer({ onScrollTop }) {
  const { personal } = portfolioData;

  return (
    <footer className="relative bg-[#050607] border-t border-[#24282C] py-12 text-[#A7ADB5] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#24282C]/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-sm bg-[#0B0D0F] border border-[#E50924]/40">
              <MaskIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="font-['Barlow_Condensed'] text-2xl font-black tracking-wider text-white uppercase flex items-center">
                Dilmurad
                <span className="text-[#E50924] text-3xl leading-none">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#A7ADB5] block">
                Web Developer & UI Designer
              </span>
            </div>
          </div>

          {/* Money Heist Motto */}
          <div className="text-center">
            <span className="font-['Barlow_Condensed'] font-black text-xl tracking-[0.2em] uppercase text-white/90 block">
              DREAM <span className="text-[#E50924]">•</span> CODE <span className="text-[#E50924]">•</span> BUILD <span className="text-[#E50924]">•</span> REPEAT
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#E50924] mt-0.5 block">
              THE HEIST PORTFOLIO
            </span>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="/dilmurad-heist-portfolio.zip"
              download="dilmurad-heist-portfolio.zip"
              className="px-3.5 py-2 text-xs font-mono text-[#A7ADB5] hover:text-white border border-[#24282C] hover:border-[#E50924] bg-[#0B0D0F] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#E50924]" />
              <span>SOURCE.ZIP</span>
            </a>

            <button
              onClick={onScrollTop}
              className="p-2.5 bg-[#0B0D0F] hover:bg-[#E50924] border border-[#24282C] hover:border-[#E50924] text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
              aria-label="Back to top"
              title="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3 text-[#A7ADB5]/70">
          <p>© 2026 Dilmurad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS. Heist theme inspired by Money Heist.
          </p>
        </div>
      </div>
    </footer>
  );
}
