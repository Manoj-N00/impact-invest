import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const energyProjects: Project[] = [
  {
    id: '2',
    name: 'Solar Energy Project',
    description: 'Installing solar panels in rural schools.',
    creatorId: '2',
    creatorName: 'Creator User',
    category: 'Energy',
    goal: 50000,
    raised: 25000,
    status: 'pending',
    createdAt: '2024-03-05',
    image: projectImages.energy,
    documents: [
      {
        id: 'd3',
        name: 'Project Proposal.pdf',
        type: 'business_plan',
        url: '#',
        uploadedAt: '2024-03-05'
      }
    ],
    expenses: [
      {
        id: 'e1',
        category: 'Solar Panels',
        amount: 15000,
        date: '2024-03-10',
        description: 'Purchase of solar panels'
      },
      {
        id: 'e2',
        category: 'Installation',
        amount: 5000,
        date: '2024-03-15',
        description: 'Installation costs'
      },
      {
        id: 'e3',
        category: 'Wiring',
        amount: 3000,
        date: '2024-03-20',
        description: 'Electrical wiring materials'
      }
    ],
    investors: [
      {
        id: '107',
        name: 'Sanjay Gupta',
        amount: 15000,
        investedAt: '2024-03-06'
      },
      {
        id: '108',
        name: 'Neha Reddy',
        amount: 10000,
        investedAt: '2024-03-07'
      }
    ]
  }
];