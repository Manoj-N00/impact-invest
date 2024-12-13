import { Project } from '@/lib/types/project';

export type ProjectCategory = 
  | 'Infrastructure'
  | 'Energy'
  | 'Agriculture'
  | 'Education'
  | 'Environment'
  | 'Healthcare';

export interface ProjectImage {
  url: string;
  alt: string;
}