import { useMemo } from 'react';
import { mockProjects } from '@/lib/data/mock-projects';
import { Project } from '@/lib/types/project';

export function useProject(projectId: string): Project | null {
  return useMemo(() => {
    return mockProjects.find(p => p.id === projectId) || null;
  }, [projectId]);
}