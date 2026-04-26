import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LazyImage } from '../LazyImage';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    slug: string;
    image: string;
    tags: string[];
    content: {
      en: { title: string; problem: string; solution: string; };
      vi: { title: string; problem: string; solution: string; };
      zh: { title: string; problem: string; solution: string; };
    };
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const content = project.content[language as keyof typeof project.content];

  const toPreview = (text: string, limit = 140) => {
    const cleaned = text.replace(/\s+/g, ' ').replace(/•/g, '').trim();
    return cleaned.length > limit ? `${cleaned.slice(0, limit).trim()}...` : cleaned;
  };

  const summary = `${toPreview(content.problem, 110)} ${toPreview(content.solution, 110)}`;

  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <article className="rounded-3xl border border-slate-200 bg-white/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">
        <div className="relative h-56 bg-[linear-gradient(135deg,#f1f5f9_0%,#ecfeff_100%)] p-2 overflow-hidden">
          <LazyImage 
            src={project.image} 
            alt={`${content.title} project thumbnail`}
            className="h-full w-full rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow"
            imgClassName="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 backdrop-blur-sm">
            Case Study
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold text-slate-900 leading-snug">{content.title}</h3>
            <ArrowUpRight className="size-5 text-slate-400 group-hover:text-cyan-600 transition-colors shrink-0" />
          </div>
          <p className="text-slate-600 mb-4 leading-relaxed">{summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
