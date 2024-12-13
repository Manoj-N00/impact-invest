import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const environmentProjects: Project[] = [
  {
    id: '5',
    name: 'Waste Management Solution',
    description: 'Innovative recycling program for urban areas.',
    creatorId: '6',
    creatorName: 'Anjali Patel',
    category: 'Environment',
    goal: 40000,
    raised: 15000,
    status: 'active',
    createdAt: '2024-03-01',
    image: projectImages.environment,
    documents: [],
    expenses: [
      {
        id: 'e1',
        category: 'Equipment',
        amount: 8000,
        date: '2024-03-05',
        description: 'Recycling equipment'
      },
      {
        id: 'e2',
        category: 'Collection',
        amount: 4000,
        date: '2024-03-10',
        description: 'Waste collection bins'
      },
      {
        id: 'e3',
        category: 'Awareness',
        amount: 2000,
        date: '2024-03-15',
        description: 'Community awareness program'
      }
    ],
    investors: [
      {
        id: '115',
        name: 'Nisha Mehta',
        amount: 8000,
        investedAt: '2024-03-02'
      },
      {
        id: '116',
        name: 'Arjun Singh',
        amount: 7000,
        investedAt: '2024-03-04'
      }
    ]
  }
];