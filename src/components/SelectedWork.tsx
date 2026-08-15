import React from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Github, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              01 // PROJECTS & SYSTEMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Selected Work
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-2 md:mt-0">
            Full-stack applications, AI computer vision pipelines & QA automation testing
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-lg border transition-all duration-200 ${
                project.isEnterprise
                  ? 'border-sky-500/30 bg-[#0d0f14] hover:border-sky-500/50'
                  : 'border-zinc-800 bg-[#0d0d10] hover:border-zinc-700'
              } p-6 sm:p-8`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Number, Title, Metadata */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">/</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.period}
                    </span>
                    {project.isEnterprise && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider">
                        Enterprise
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-sky-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="text-xs text-zinc-400 font-mono">
                    <span className="text-zinc-500 block">Role:</span>
                    <span>{project.role}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Links & Architecture Modal Trigger */}
                  <div className="flex items-center gap-3 pt-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-sky-400 font-medium transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Details</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        title="View Source Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Problem Solved, Personal Knowledge & Highlights */}
                <div className="lg:col-span-8 space-y-4">
                  {project.image && (
                    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 mb-4 max-h-64 flex items-center justify-center">
                      <img src={project.image} alt={project.name} className="w-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}

                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {project.problemSolved && (
                    <div className="bg-[#090b10] p-4 rounded border border-sky-900/40 space-y-1">
                      <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block font-semibold">
                        🎯 Bài toán giải quyết (Problem Solved):
                      </span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-sans">
                        {project.problemSolved}
                      </p>
                    </div>
                  )}

                  {project.personalKnowledge && (
                    <div className="bg-[#0b0910] p-4 rounded border border-purple-900/40 space-y-1">
                      <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                        🧠 Kiến thức bản thân & Vai trò (Role & Knowledge Applied):
                      </span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-sans">
                        {project.personalKnowledge}
                      </p>
                    </div>
                  )}

                  <div className="bg-[#09090c] p-4 rounded border border-zinc-800/80 space-y-2.5">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold mb-2">
                      Key Technical Highlights:
                    </span>
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
