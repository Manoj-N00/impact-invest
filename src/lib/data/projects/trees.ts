import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const treeProjects: Project[] = [
  {
    id: '7',
    name: 'Plant a Tree',
    description: 'Help us plant trees in urban areas to increase green cover.',
    creatorId: '2',
    creatorName: 'Creator User',
    category: 'Environment',
    goal: 20000,
    raised: 19980,
    status: 'active',
    createdAt: '2024-03-15',
    image: projectImages.trees,
    documents: [],
    expenses: [
      {
        id: 'e1',
        category: 'Saplings',
        amount: 5000,
        date: '2024-03-20',
        description: 'Tree saplings'
      },
      {
        id: 'e2',
        category: 'Tools',
        amount: 2000,
        date: '2024-03-25',
        description: 'Planting tools'
      },
      {
        id: 'e3',
        category: 'Labor',
        amount: 3000,
        date: '2024-03-30',
        description: 'Planting labor'
      }
    ],
    investors: [
      {
        id: '101',
        name: 'Arun Kumar',
        amount: 5000,
        investedAt: '2024-03-16'
      },
      {
        id: '102',
        name: 'Priya Patel',
        amount: 7500,
        investedAt: '2024-03-17'
      },
      {
        id: '103',
        name: 'Raj Sharma',
        amount: 4980,
        investedAt: '2024-03-18'
      },
      {
        id: '104',
        name: 'Meera Singh',
        amount: 2500,
        investedAt: '2024-03-19'
      }
    ]
  }
];