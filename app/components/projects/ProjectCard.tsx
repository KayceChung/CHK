import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LazyImage } from '../LazyImage';

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

  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <div className="rounded-2xl bg-white shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-cyan-500 transition p-0 overflow-hidden">
        <div className="h-48 bg-slate-200 flex items-center justify-center overflow-hidden">
          <LazyImage 
            src={project.image} 
            alt={`${content.title} project thumbnail`}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{content.title}</h3>
          <p className="text-slate-700 mb-3">{content.problem} <span className="font-semibold text-cyan-700">→</span> {content.solution}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
