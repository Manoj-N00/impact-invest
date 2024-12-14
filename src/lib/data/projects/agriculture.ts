import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const agricultureProjects: Project[] = [
  {
    id: '3',
    name: 'Smart Agriculture Initiative',
    description: 'Implementing IoT solutions for sustainable farming practices.',
    creatorId: '4',
    creatorName: 'Priya Sharma',
    category: 'Agriculture',
    goal: 75000,
    raised: 45000,
    status: 'active',
    createdAt: '2024-02-15',
    image: projectImages.agriculture,
    documents: [],
    expenses: [
      {
        id: 'e1',
        category: 'IoT Sensors',
        amount: 20000,
        date: '2024-02-20',
        description: 'Smart agriculture sensors'
      },
      {
        id: 'e2',
        category: 'Software',
        amount: 15000,
        date: '2024-02-25',
        description: 'Monitoring software'
      },
      {
        id: 'e3',
        category: 'Training',
        amount: 8000,
        date: '2024-03-01',
        description: 'Farmer training program'
      }
    ],
    investors: [
      {
        id: '109',
        name: 'Rahul Verma',
        amount: 20000,
        investedAt: '2024-02-16'
      },
      {
        id: '110',
        name: 'Deepa Iyer',
        amount: 15000,
        investedAt: '2024-08-18'
      },
      {
        id: '111',
        name: 'Kiran Shah',
        amount: 10000,
        investedAt: '2024-02-20'
      }
    ]
  }
];