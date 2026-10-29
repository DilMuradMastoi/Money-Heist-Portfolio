import React from 'react';
import { X, ExternalLink, Github, Code, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#0B0D0F] border border-[#24282C] shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24282C] bg-[#050607]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50924] shadow-[0_0_8px_#E50924]" />
            <span className="font-mono text-xs text-[#A7ADB5] tracking-widest uppercase">
              MISSION DOSSIER // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A7ADB5] hover:text-white border border-[#24282C] hover:border-[#E50924] bg-[#0B0D0F] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Project Preview Image */}
          <div className="relative aspect-video w-full overflow-hidden border border-[#24282C] mb-6 bg-[#050607]">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent pointer-events-none" />
          </div>

          <span className="font-mono text-xs text-[#E50924] uppercase tracking-wider block mb-1">
            {project.subtitle}
          </span>
          <h3 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black uppercase text-white tracking-wide mb-4">
            {project.name}
          </h3>

          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#E50924]" />
              <span>STACK ARCHITECTURE</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#050607] border border-[#24282C] text-white font-mono text-xs tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#24282C]">
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="px-6 py-3 bg-[#E50924] hover:bg-[#ff1b37] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(229,9,36,0.4)]"
            >
              <span>DISCUSS THIS PROJECT</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#050607] hover:bg-[#15191E] border border-[#24282C] hover:border-[#E50924] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-[#E50924]" />
                <span>SOURCE REPOSITORY</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
