import { ProjectCard } from '@/components/projects/project-card';
import { mockProjects } from '@/lib/data/mock-projects';

export function ProjectsSection() {
  const activeProjects = mockProjects.filter(p => p.status === 'active');

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}