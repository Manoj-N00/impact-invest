import { User } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@admin.com',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'creator@creator.com',
    role: 'creator',
    name: 'Creator User'
  },
  {
    id: '3',
    email: 'investor@investor.com',
    role: 'investor',
    name: 'Investor User'
  }
];