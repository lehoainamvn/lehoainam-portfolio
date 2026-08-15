import React from "react";
import { Award, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";

export interface AchievementItem {
  id: string;
  title: string;
  badge: string;
  period: string;
  description: string;
  highlights?: string[];
  link: string;
  icon: React.ReactNode;
}

const achievementsData: AchievementItem[] = [
  {
    id: "scholarship",
    title: "Academic Achievement Scholarship",
    badge: "Merit Scholarship (2x)",
    period: "2022–2023 & 2024–2025",
    description: "Awarded 2x Merit-Based Academic Scholarships by Thu Dau Mot University for maintaining top GPA (8.51 / 10) in Information Technology.",
    highlights: ["GPA: 8.51 / 10", "Top Academic Ranking"],
    link: "https://drive.google.com/drive/folders/14o9HR7QxgIntLZZa_Xz2qkJLAFXyViYt?usp=sharing",
    icon: <Award className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "research",
    title: "University Scientific Research Project",
    badge: "Scientific Research",
    period: "2024–2025 & 2025–2026",
    description: "Led university-level IT scientific research projects focusing on Computer Vision (YOLO26), Spaced Repetition algorithms, and full-stack system optimization.",
    highlights: ["AI Vision Models", "System Architecture Paper"],
    link: "https://drive.google.com/drive/folders/1oIDrwMb_xJg-mPQ_9PypiPM_A_YQ5we9?usp=sharing",
    icon: <BookOpen className="w-6 h-6 text-sky-400" />,
  },
  {
    id: "ept",
    title: "English Proficiency Certificate (EPT)",
    badge: "Language Qualification",
    period: "Verified Certification",
    description: "Official English proficiency certification demonstrating strong technical reading, writing, documentation, and international team communication abilities.",
    highlights: ["Technical English", "Documentation & Specs"],
    link: "https://drive.google.com/file/d/1q0Bz1t6IqgHCda75HXP4IvnAZHVzHDgw/view?usp=sharing",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          Achievements <span>&</span>
          <br /> Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-sky-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-sky-500/10"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-sky-400 border border-zinc-700/60 font-medium">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Period */}
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 block mt-1">
                  {item.period}
                </span>

                {/* Description */}
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights tags */}
                {item.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 border border-zinc-700/40"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* External Link Action Button */}
              <div className="pt-6 mt-4 border-t border-zinc-800/60">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold group/link"
                >
                  <span>Verify Credentials</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
