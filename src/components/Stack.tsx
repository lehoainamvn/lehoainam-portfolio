import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Server, Layout, Database, TestTube, Cpu, Bot } from 'lucide-react';

export const Stack: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-sky-400" />;
      case 1:
        return <Layout className="w-4 h-4 text-sky-400" />;
      case 2:
        return <Database className="w-4 h-4 text-sky-400" />;
      case 3:
        return <TestTube className="w-4 h-4 text-sky-400" />;
      case 4:
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 5:
        return <Bot className="w-4 h-4 text-sky-400" />;
      default:
        return <Server className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="stack" className="py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              03 // TECHNICAL COMPETENCIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Engineering Stack
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-2 md:mt-0">
            Organized strictly by software engineering responsibility
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-[#0c0c0e] border border-zinc-800/90 rounded-lg p-6 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-zinc-800">
                  {getCategoryIcon(idx)}
                  <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 font-sans mb-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-900 border-sky-500/40 text-sky-300 font-medium'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>RESPONSIBILITY #{idx + 1}</span>
                <span>VERIFIED SKILL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
