import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA.personalInfo;

  return (
    <section id="education" className="py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              05 // ACADEMICS & RESEARCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Education & Activities
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-2 md:mt-0">
            Academic achievements, scholarships, research & competitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Block (Compact) */}
          <div className="lg:col-span-5 bg-[#0c0c0f] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400">{education.period}</span>
                <h3 className="text-lg font-bold text-white font-sans tracking-tight">
                  {education.university}
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-zinc-800/80">
                <span className="text-zinc-400">Degree Major:</span>
                <span className="text-zinc-200 font-semibold">{education.degree}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-zinc-800/80">
                <span className="text-zinc-400">Overall GPA:</span>
                <span className="text-sky-400 font-bold bg-sky-950/60 px-2.5 py-0.5 rounded border border-sky-800/50">
                  {education.gpa}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold mb-2">
                Scholarships:
              </span>
              <div className="space-y-2">
                {education.scholarships.map((sch, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-sans bg-[#09090c] p-2.5 rounded border border-zinc-800">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{sch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research & Activities Block */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold mb-2">
              Research Projects & Competitions:
            </span>

            <div className="grid grid-cols-1 gap-4">
              {PORTFOLIO_DATA.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0c0c0e] border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-all flex items-start gap-4"
                >
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-sky-400 shrink-0 mt-0.5">
                    {item.category === 'AI Research' ? (
                      <BookOpen className="w-4 h-4" />
                    ) : (
                      <Trophy className="w-4 h-4" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-sans">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
