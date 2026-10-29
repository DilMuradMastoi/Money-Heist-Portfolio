import React from 'react';
import {
  Code,
  Palette,
  RefreshCw,
  Zap,
  Gauge,
  Shield,
  ArrowUpRight,
  Target
} from 'lucide-react';
import servicesBg from '../assets/services-background.webp';
import MaskIcon from '../components/MaskIcon.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function ServicesSection({ onNavigate }) {
  const { services } = portfolioData;

  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'code':
        return <Code className="w-6 h-6 text-[#E50924]" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-[#E50924]" />;
      case 'layers':
        return <RefreshCw className="w-6 h-6 text-[#E50924]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#E50924]" />;
      case 'gauge':
        return <Gauge className="w-6 h-6 text-[#E50924]" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-[#E50924]" />;
      default:
        return <Code className="w-6 h-6 text-[#E50924]" />;
    }
  };

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: Masked heist operative in red hood */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 42%, rgba(5,6,7,0.65) 75%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${servicesBg})
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
        <div className="max-w-4xl">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
              04 / OPERATIONAL CAPABILITIES
            </span>
            <div className="h-[1px] w-12 bg-[#E50924]" />
          </div>

          <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            MY <span className="text-[#E50924]">SERVICES</span>
          </h2>

          <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-10">
            WHAT I OFFER
          </h3>

          {/* Service Cards Grid (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative p-6 bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm shadow-[0_4px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#050607] border border-[#24282C] group-hover:border-[#E50924]/60 transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#A7ADB5]/60 group-hover:text-[#E50924] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h4 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white tracking-wide mb-2.5 group-hover:text-[#E50924] transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#24282C]/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A7ADB5]">
                    READY TO DEPLOY
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="p-1.5 text-[#E50924] hover:text-white transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Banner */}
          <div className="p-6 sm:p-7 bg-gradient-to-r from-[#0B0D0F] via-[#111317] to-[#0B0D0F] border border-[#24282C] hover:border-[#E50924]/50 transition-colors flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-3 bg-[#050607] border border-[#E50924]/50 rounded-sm">
                <MaskIcon className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                  LET'S BUILD SOMETHING GREAT TOGETHER
                </h4>
                <p className="font-mono text-xs text-[#A7ADB5] uppercase tracking-wider">
                  BRING YOUR NEXT IDEA TO THE DRAWING BOARD
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#E50924] hover:bg-[#ff1b37] text-white font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,36,0.4)] hover:shadow-[0_0_30px_rgba(229,9,36,0.7)] flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
