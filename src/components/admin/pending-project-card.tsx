import { Project } from '@/lib/types/project';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectDocuments } from '@/components/projects/project-documents';
import { formatCurrency } from '@/lib/utils/currency';

interface PendingProjectCardProps {
  project: Project;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export function PendingProjectCard({ project, onApprove, onReject }: PendingProjectCardProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Creator:</span>
              <span>{project.creatorName}</span>
            </div>
            <div className="flex justify-between">
              <span>Category:</span>
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Goal:</span>
              <span>{formatCurrency(project.goal)}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <ProjectDocuments documents={project.documents} />
          <div className="flex gap-4 justify-end">
            <Button className='bg-red-500'
              variant="outline"
              onClick={() => onReject(project.id)}
            >
              Reject
            </Button>
            <Button className='bg-green-500'
              onClick={() => onApprove(project.id)}
            >
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}