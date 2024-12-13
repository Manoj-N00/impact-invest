import { Project } from '@/lib/types/project';
import { projectImages } from './images';

export const infrastructureProjects: Project[] = [
  {
    id: '1',
    name: 'Clean Water Initiative',
    description: 'Providing clean water access to rural communities.',
    creatorId: '2',
    creatorName: 'Creator User',
    category: 'Infrastructure',
    goal: 100000,
    raised: 75000,
    status: 'active',
    createdAt: '2024-03-01',
    image: projectImages.infrastructure,
    documents: [
      {
        id: 'd1',
        name: 'Business Plan.pdf',
        type: 'business_plan',
        url: '#',
        uploadedAt: '2024-03-01'
      },
      {
        id: 'd2',
        name: 'Financial Projections.xlsx',
        type: 'financial_projection',
        url: '#',
        uploadedAt: '2024-03-01'
      }
    ],
    expenses: [
      {
        id: 'e1',
        category: 'Equipment',
        amount: 30000,
        date: '2024-03-15',
        description: 'Water purification systems'
      },
      {
        id: 'e2',
        category: 'Labor',
        amount: 20000,
        date: '2024-03-20',
        description: 'Installation team wages'
      }
    ],
    investors: [
      {
        id: '3',
        name: 'Investor User',
        amount: 50000,
        investedAt: '2024-03-10'
      },
      {
        id: '105',
        name: 'Vikram Malhotra',
        amount: 15000,
        investedAt: '2024-03-12'
      },
      {
        id: '106',
        name: 'Anita Desai',
        amount: 10000,
        investedAt: '2024-03-14'
      }
    ]
  }
];