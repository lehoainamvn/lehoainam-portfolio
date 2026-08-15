import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Layers, Database, Server, Layout, Github, ExternalLink, TestTube } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { architectureDetails } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0c0c0f] border border-zinc-800 rounded-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#111116] border-b border-zinc-800 p-6 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-sky-400 font-bold">{project.number}</span>
              <span className="text-xs font-mono text-zinc-500">/</span>
              <span className="text-xs font-mono text-zinc-400">{project.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-sans">{project.name}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {project.image && (
            <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 max-h-72 flex items-center justify-center">
              <img src={project.image} alt={project.name} className="w-full object-cover object-top" />
            </div>
          )}
          
          {/* Quick Info & Tech Stack */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
              Technologies Used:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

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

          {architectureDetails && (
            <div className="space-y-6 pt-4 border-t border-zinc-800">
              
              {/* System Overview */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
                  <Layers className="w-4 h-4" />
                  <span>System Architecture Overview</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-[#09090c] p-4 rounded border border-zinc-800">
                  {architectureDetails.systemOverview}
                </p>
              </div>

              {/* Backend Architecture */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
                  <Server className="w-4 h-4" />
                  <span>Backend Engineering & Security</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-[#09090c] p-4 rounded border border-zinc-800">
                  {architectureDetails.backendArchitecture}
                </p>
              </div>

              {/* Frontend Architecture */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
                  <Layout className="w-4 h-4" />
                  <span>Frontend Architecture & UI State</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-[#09090c] p-4 rounded border border-zinc-800">
                  {architectureDetails.frontendArchitecture}
                </p>
              </div>

              {/* Database Schema */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
                  <Database className="w-4 h-4" />
                  <span>Database Design & Schema Normalization</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-[#09090c] p-4 rounded border border-zinc-800">
                  {architectureDetails.databaseDesign}
                </p>
              </div>

              {/* QA & E2E Testing if available */}
              {architectureDetails.qaTesting && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
                    <TestTube className="w-4 h-4" />
                    <span>Automated E2E Testing Framework</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-[#09090c] p-4 rounded border border-zinc-800">
                    {architectureDetails.qaTesting}
                  </p>
                </div>
              )}

            </div>
          )}

          {/* Highlights */}
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
              Verified Technical Contributions:
            </span>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-xs text-zinc-300 font-sans flex items-start gap-2.5">
                  <span className="text-sky-400 font-mono mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#111116] border-t border-zinc-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-sky-500 text-zinc-950 font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Application</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded text-xs font-mono text-zinc-400 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
