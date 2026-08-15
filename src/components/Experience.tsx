import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Building2, Calendar, MapPin, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              02 // INDUSTRY EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Work Experience
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-2 md:mt-0">
            Real-world enterprise development & software engineering experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0c0c0f] border border-zinc-800 rounded-lg p-6 sm:p-8 hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans mt-2">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-sky-400 font-mono mt-1">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 self-start">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Technical Contributions */}
              <div className="pt-6 space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                  Core Responsibilities & Technical Engineering Work:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#09090c] p-4 rounded border border-zinc-800/80 flex items-start gap-3"
                    >
                      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Environment:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
