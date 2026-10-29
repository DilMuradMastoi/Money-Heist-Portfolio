import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';
import MaskIcon from './MaskIcon.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050607]/95 backdrop-blur-md border-b border-[#24282C] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050607]/80 backdrop-blur-sm border-b border-[#24282C]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative p-1 rounded-sm bg-[#0B0D0F] border border-[#E50924]/40 group-hover:border-[#E50924] transition-colors shadow-[0_0_15px_rgba(229,9,36,0.25)]">
            <MaskIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-['Barlow_Condensed'] text-2xl font-black tracking-wider text-white uppercase flex items-center">
            Dilmurad
            <span className="text-[#E50924] text-3xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {portfolioData.navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative px-3 py-2 text-xs uppercase font-mono tracking-widest font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#A7ADB5] hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E50924] shadow-[0_0_8px_#E50924]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/dilmurad-heist-portfolio.zip"
            download="dilmurad-heist-portfolio.zip"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-[#A7ADB5] hover:text-white border border-[#24282C] hover:border-[#E50924]/50 bg-[#0B0D0F] transition-all"
            title="Download Standalone React Source Code (ZIP)"
          >
            <Download className="w-3.5 h-3.5 text-[#E50924]" />
            <span>SOURCE.ZIP</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="relative group overflow-hidden px-5 py-2.5 bg-[#E50924] hover:bg-[#ff1a35] text-white text-xs font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,36,0.35)] hover:shadow-[0_0_25px_rgba(229,9,36,0.6)] flex items-center gap-1.5"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              HIRE ME
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A7ADB5] hover:text-white border border-[#24282C] bg-[#0B0D0F] focus:outline-none focus:border-[#E50924]"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50924]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D0F]/98 border-b border-[#24282C] px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                    isActive
                      ? 'border-[#E50924] text-white bg-[#E50924]/10'
                      : 'border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924]/40'
                  }`}
                >
                  <span className="text-[#E50924] mr-1.5">•</span>
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-[#24282C]">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 bg-[#E50924] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,36,0.4)]"
            >
              <span>HIRE ME NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="/dilmurad-heist-portfolio.zip"
              download
              className="w-full py-2.5 text-center border border-[#24282C] text-xs font-mono text-[#A7ADB5] flex items-center justify-center gap-2 hover:border-[#E50924]"
            >
              <Download className="w-3.5 h-3.5 text-[#E50924]" />
              DOWNLOAD SOURCE CODE (.ZIP)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
