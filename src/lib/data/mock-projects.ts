import { Project } from '../types/project';
import { infrastructureProjects } from './projects/infrastructure';
import { energyProjects } from './projects/energy';
import { agricultureProjects } from './projects/agriculture';
import { educationProjects } from './projects/education';
import { environmentProjects } from './projects/environment';
import { healthcareProjects } from './projects/healthcare';
import { treeProjects } from './projects/trees';

export const mockProjects: Project[] = [
  ...infrastructureProjects,
  ...energyProjects,
  ...agricultureProjects,
  ...educationProjects,
  ...environmentProjects,
  ...healthcareProjects,
  ...treeProjects
];