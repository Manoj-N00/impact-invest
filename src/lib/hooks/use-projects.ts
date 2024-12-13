import { useState, useCallback } from 'react';
import { Project, ProjectStatus } from '@/lib/types/project';
import { mockProjects } from '@/lib/data/mock-projects';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const updateProjectStatus = useCallback((projectId: string, status: ProjectStatus) => {
    setProjects(currentProjects => 
      currentProjects.map(project => 
        project.id === projectId 
          ? { ...project, status } 
          : project
      )
    );
  }, []);

  const getPendingProjects = useCallback(() => 
    projects.filter(p => p.status === 'pending'),
    [projects]
  );

  const getActiveProjects = useCallback(() => 
    projects.filter(p => p.status === 'active'),
    [projects]
  );

  return {
    projects,
    updateProjectStatus,
    getPendingProjects,
    getActiveProjects
  };
}