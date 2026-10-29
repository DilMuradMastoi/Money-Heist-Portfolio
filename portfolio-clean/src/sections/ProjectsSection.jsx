import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code } from 'lucide-react';
import projectsBg from '../assets/projects-background.webp';
import ProjectModal from '../components/ProjectModal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function ProjectsSection({ onNavigate }) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Background artwork: Heist Operative with Bank Architecture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 40%, rgba(5,6,7,0.65) 75%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${projectsBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 30%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-radial-[at_85%_45%] from-[#E50924]/18 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
            05 / SELECTED MISSIONS
          </span>
          <div className="h-[1px] w-12 bg-[#E50924]" />
        </div>

        <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          MY <span className="text-[#E50924]">PROJECTS</span>
        </h2>

        <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-12">
          SOME OF MY BEST WORK
        </h3>

        {/* 6 Projects Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative bg-[#0B0D0F]/90 border border-[#24282C] hover:border-[#E50924] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(229,9,36,0.25)]"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111317]">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-80" />

                  {/* Project Index Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#050607]/80 backdrop-blur-sm border border-[#24282C] text-white font-mono text-[10px] tracking-wider">
                    MISSION // 0{idx + 1}
                  </span>

                  {/* Quick Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 p-2 bg-[#E50924] text-white hover:bg-[#ff1a35] transition-colors shadow-[0_0_15px_rgba(229,9,36,0.5)] cursor-pointer"
                    aria-label={`View ${project.name} details`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6">
                  <span className="font-mono text-[10px] text-[#E50924] uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>

                  <h4 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white tracking-wide mb-2 group-hover:text-[#E50924] transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed line-clamp-2 mb-4">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#050607] border border-[#24282C] text-[#A7ADB5] font-mono text-[9px] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-3 border-t border-[#24282C]/60 bg-[#07080A] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-bold text-white hover:text-[#E50924] transition-colors flex items-center gap-1.5 cursor-pointer uppercase"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E50924]" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#A7ADB5] hover:text-white transition-colors flex items-center gap-1"
                    title="View Code Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#24282C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E50924] shadow-[0_0_8px_#E50924] animate-pulse" />
            <span className="font-mono text-xs text-[#A7ADB5] uppercase tracking-wider">
              MORE BUILDS & CLIENT ARCHITECTURES IN PROGRESS
            </span>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-[#0B0D0F] hover:bg-[#15191E] border border-[#24282C] hover:border-[#E50924] text-white font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>HAVE A PROJECT IN MIND?</span>
            <ArrowUpRight className="w-4 h-4 text-[#E50924]" />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContact={() => onNavigate('contact')}
        />
      )}
    </section>
  );
}
