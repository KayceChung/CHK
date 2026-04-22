import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import projectsData from '../data/projects';
import { useProject, transformProjectForLanguage } from '../hooks/useSupabaseData';
import ProjectDetailContent from '../components/projects/ProjectDetailContent';
import { Button } from '../components/ui/button';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { project: supabaseProject, loading } = useProject(slug || '');
  
  const fallbackProject = projectsData.find((p: any) => p.slug === slug);
  const project = supabaseProject
    ? transformProjectForLanguage(supabaseProject)
    : fallbackProject;

  if (!project && loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Loading project...</h1>
          <p className="text-gray-600">Fetching the latest case study details.</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')} className="gap-2">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <Button 
          onClick={() => navigate('/projects')} 
          variant="ghost" 
          className="mb-8 gap-2"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Button>
        
        <ProjectDetailContent project={project} />
      </div>
    </div>
  );
}
