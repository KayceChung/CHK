import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }: { projects: any[] }) {
  if (!projects.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
        No projects found.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
