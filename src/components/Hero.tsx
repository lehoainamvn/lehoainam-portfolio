import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Github, FileText, Code2, Terminal as TerminalIcon, Copy, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(PORTFOLIO_DATA.heroSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet = PORTFOLIO_DATA.heroSnippets.find((s) => s.id === activeTabId) || PORTFOLIO_DATA.heroSnippets[0];

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-zinc-800/80 bg-[#09090b]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Hero Editorial Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>{PORTFOLIO_DATA.personalInfo.location}</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
                {PORTFOLIO_DATA.personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-sky-400 mt-2 font-mono">
                {PORTFOLIO_DATA.personalInfo.title}
              </p>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed max-w-xl font-sans">
              {PORTFOLIO_DATA.personalInfo.bio}
            </p>

            {/* Tech metadata stack tag */}
            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">Technical Core</span>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed bg-zinc-900/60 p-3 rounded border border-zinc-800/80">
                Java · Spring Boot · Spring Security · Angular · React · PostgreSQL · Playwright E2E · Python Fast API
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-semibold bg-sky-500 hover:bg-sky-400 text-zinc-950 transition-colors"
              >
                <span>View Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="/LeHoaiNam_IT.pdf"
                download="LeHoaiNam_IT.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual Panel (Realistic Engineering Terminal) */}
          <div className="lg:col-span-6">
            <div className="bg-[#0c0c0e] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
              
              {/* Terminal Window Top Bar */}
              <div className="px-4 py-3 bg-[#121216] border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
                    <TerminalIcon className="w-3 h-3 text-sky-400" />
                    <span>nam@dev-station:~/{activeSnippet.filename}</span>
                  </span>
                </div>

                <button
                  onClick={handleCopySnippet}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex items-center border-b border-zinc-800 bg-[#0f0f13] overflow-x-auto">
                {PORTFOLIO_DATA.heroSnippets.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveTabId(snippet.id)}
                    className={`px-3.5 py-2 text-xs font-mono whitespace-nowrap transition-colors border-r border-zinc-800 flex items-center gap-1.5 ${
                      activeTabId === snippet.id
                        ? 'bg-[#0c0c0e] text-sky-400 border-b-2 border-b-sky-400 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>{snippet.filename}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 overflow-x-auto max-h-[340px] text-xs font-mono leading-relaxed text-zinc-300 bg-[#0c0c0e]">
                <pre className="whitespace-pre">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>

              {/* Footer status line */}
              <div className="px-4 py-2 bg-[#121216] border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Language: {activeSnippet.language.toUpperCase()}</span>
                <span>LN-PORTFOLIO // REAL CODE VERIFIED</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
