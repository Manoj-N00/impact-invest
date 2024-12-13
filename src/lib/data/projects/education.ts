import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const educationProjects: Project[] = [
  {
    id: '4',
    name: 'Rural Education Tech',
    description: 'Bringing digital education tools to remote villages.',
    creatorId: '5',
    creatorName: 'Rahul Verma',
    category: 'Education',
    goal: 60000,
    raised: 30000,
    status: 'active',
    createdAt: '2024-02-20',
    image: projectImages.education,
    documents: [],
    expenses: [
      {
        id: 'e1',
        category: 'Tablets',
        amount: 15000,
        date: '2024-02-25',
        description: 'Educational tablets'
      },
      {
        id: 'e2',
        category: 'Internet',
        amount: 8000,
        date: '2024-03-01',
        description: 'Internet connectivity'
      },
      {
        id: 'e3',
        category: 'Content',
        amount: 5000,
        date: '2024-03-05',
        description: 'Educational content'
      }
    ],
    investors: [
      {
        id: '112',
        name: 'Amit Kapoor',
        amount: 12000,
        investedAt: '2024-02-21'
      },
      {
        id: '113',
        name: 'Ritu Sharma',
        amount: 10000,
        investedAt: '2024-02-23'
      },
      {
        id: '114',
        name: 'Suresh Kumar',
        amount: 8000,
        investedAt: '2024-02-25'
      }
    ]
  }
];