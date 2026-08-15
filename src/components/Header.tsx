import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, FileText, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Approach', href: '#approach' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-sm'
          : 'bg-[#09090b] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left Branding & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-100 hover:text-sky-400 transition-colors"
          >
            <span className="font-mono text-xs text-sky-400 font-normal">[ln]</span>
            <span>{PORTFOLIO_DATA.personalInfo.name}</span>
          </a>
          <span className="hidden md:inline-block h-3.5 w-[1px] bg-zinc-800" />
          <div className="hidden md:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fresher SE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? 'text-sky-400'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="/LeHoaiNam_IT.pdf"
            download="LeHoaiNam_IT.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium bg-sky-500 hover:bg-sky-400 text-zinc-950 transition-colors font-mono"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d11] border-b border-zinc-800 px-6 py-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>{PORTFOLIO_DATA.personalInfo.status}</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-sky-400 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="/LeHoaiNam_IT.pdf"
              download="LeHoaiNam_IT.pdf"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-xs font-mono bg-sky-500 text-zinc-950 font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
