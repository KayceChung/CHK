import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }: { projects: any[] }) {
  if (!projects.length) return <div>No projects found.</div>;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
