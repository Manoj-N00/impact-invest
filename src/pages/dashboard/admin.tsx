import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { useProjects } from '@/lib/hooks/use-projects';
import { PendingProjectCard } from '@/components/admin/pending-project-card';

export default function AdminDashboard() {
  const { getPendingProjects, updateProjectStatus } = useProjects();
  const pendingProjects = getPendingProjects();

  const handleApprove = (id: string) => {
    updateProjectStatus(id, 'active');
    toast.success('Project approved successfully!');
  };

  const handleReject = (id: string) => {
    updateProjectStatus(id, 'rejected');
    toast.success('Project rejected');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Pending Projects</h3>
        <div className="space-y-6">
          {pendingProjects.map((project) => (
            <PendingProjectCard
              key={project.id}
              project={project}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}

          {pendingProjects.length === 0 && (
            <p className="text-center text-muted-foreground">
              No pending projects to review
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}