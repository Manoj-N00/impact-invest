import { Project, ProjectStatus } from '@/lib/types/project';

export const getProjectStatusColor = (status: ProjectStatus): string => {
  switch (status) {
    case 'active':
      return 'bg-green-500';
    case 'completed':
      return 'bg-blue-500';
    case 'pending':
      return 'bg-yellow-500';
    case 'rejected':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const calculateTotalRaised = (projects: Project[]): number => {
  return projects.reduce((total, project) => total + project.raised, 0);
};

export const filterProjectsByStatus = (projects: Project[], status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};