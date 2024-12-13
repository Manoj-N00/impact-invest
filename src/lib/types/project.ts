export type ProjectStatus = 'pending' | 'active' | 'completed' | 'rejected';

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectExpense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

export interface ProjectDocument {
  id: string;
  name: string;
  type: 'business_plan' | 'financial_projection' | 'legal_document' | 'other';
  url: string;
  uploadedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  creatorName: string;
  category: string;
  goal: number;
  raised: number;
  status: ProjectStatus;
  createdAt: string;
  image: ProjectImage;
  documents: ProjectDocument[];
  expenses: ProjectExpense[];
  investors: Array<{
    id: string;
    name: string;
    amount: number;
    investedAt: string;
  }>;
}