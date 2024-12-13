import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const healthcareProjects: Project[] = [
  {
    id: '6',
    name: 'Healthcare Mobile App',
    description: 'Developing a telemedicine platform for rural areas.',
    creatorId: '2',
    creatorName: 'Creator User',
    category: 'Healthcare',
    goal: 80000,
    raised: 0,
    status: 'pending',
    createdAt: '2024-03-10',
    image: projectImages.healthcare,
    documents: [],
    expenses: [
      {
        id: 'e1',
        category: 'Development',
        amount: 30000,
        date: '2024-03-15',
        description: 'App development'
      },
      {
        id: 'e2',
        category: 'Testing',
        amount: 10000,
        date: '2024-03-20',
        description: 'Quality assurance'
      },
      {
        id: 'e3',
        category: 'Infrastructure',
        amount: 15000,
        date: '2024-03-25',
        description: 'Server infrastructure'
      }
    ],
    investors: []
  }
];