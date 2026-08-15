import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const HowIBuild: React.FC = () => {
  return (
    <section id="approach" className="py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              04 // ENGINEERING METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              How I Build
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-2 md:mt-0">
            Technical principles guiding my software design and execution workflow
          </p>
        </div>

        {/* 3 Principles Documentation Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.engineeringPrinciples.map((item) => (
            <div
              key={item.number}
              className="bg-[#0c0c0e] border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <span className="text-xs font-mono font-bold text-sky-400">
                  SECTION {item.number}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  PRINCIPLE
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-sans tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {item.description}
              </p>

              <div className="pt-4 border-t border-zinc-800/60 font-mono text-[11px] text-zinc-500 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>DOC_REF // {item.title.toLowerCase().replace(/\s+/g, '_')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
