import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-[#070709] text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div>
          <span className="text-zinc-200 font-semibold">{PORTFOLIO_DATA.personalInfo.name}</span>
          <span className="mx-2 text-zinc-600">/</span>
          <span className="text-zinc-400">{PORTFOLIO_DATA.personalInfo.title}</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-sky-400 transition-colors">Work</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          <a href="#stack" className="hover:text-sky-400 transition-colors">Stack</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>

        <div className="text-zinc-400 text-[11px]">
          &copy; {new Date().getFullYear()} LE HOAI NAM. All engineering work verified.
        </div>
      </div>
    </footer>
  );
};
