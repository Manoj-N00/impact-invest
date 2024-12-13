import { useState } from 'react';
import { Project } from '@/lib/types/project';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UPIPaymentModal } from '@/components/payments/upi-payment-modal';

interface ProjectCardProps {
  project: Project;
  showInvestButton?: boolean;
}

export function ProjectCard({ project, showInvestButton = true }: ProjectCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const progress = (project.raised / project.goal) * 100;

  return (
    <>
      <Card className="overflow-hidden">
        <img 
          src={project.image.url} 
          alt={project.image.alt} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">
                <Link to={`/projects/${project.id}`} className="hover:underline">
                  {project.name}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <Badge className='bg-green-500' variant={project.status === 'active' ? 'default' : 'secondary'}>
              {project.status}
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Raised: ₹{project.raised.toLocaleString()}</span>
              <span>Goal: ₹{project.goal.toLocaleString()}</span>
            </div>
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Created by {project.creatorName}
              </span>
              {showInvestButton && project.status === 'active' && (
                <Button onClick={() => setShowPaymentModal(true)} variant="outline" size="sm">
                  Support Project
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>

      <UPIPaymentModal
        open={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        projectName={project.name}
        projectId={project.id}
      />
    </>
  );
}