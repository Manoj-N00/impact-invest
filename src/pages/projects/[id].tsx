import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UPIPaymentModal } from '@/components/payments/upi-payment-modal';
import { RecentDonors } from '@/components/projects/recent-donors';
import { ProjectStats } from '@/components/projects/project-stats';
import { ProjectTimeline } from '@/components/projects/project-timeline';
import { ExpenseChart } from '@/components/projects/expense-chart';
import { useProject } from '@/lib/hooks/use-project';
import { Navigate } from 'react-router-dom';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = useProject(id || '');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [donors, setDonors] = useState(project?.investors.map(i => ({
    id: i.id,
    name: i.name,
    amount: i.amount,
    donatedAt: i.investedAt
  })) || []);

  // Redirect if project not found
  if (!project) {
    return <Navigate to="/" />;
  }

  const progress = (project.raised / project.goal) * 100;

  const handleNewDonation = useCallback((newDonor: { name: string; amount: number; donatedAt: string }) => {
    setDonors(prevDonors => [{
      id: (prevDonors.length + 1).toString(),
      ...newDonor
    }, ...prevDonors]);
  }, []);

  return (
    <div className="container py-8 max-w-5xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2 p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">₹{project.raised.toLocaleString()} raised</p>
                  <p className="text-sm text-muted-foreground">of ₹{project.goal.toLocaleString()} goal</p>
                </div>
                {project.status === 'active' && (
                  <Button onClick={() => setShowPaymentModal(true)}>Support Project</Button>
                )}
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Project Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span>{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Creator</span>
                <span>{project.creatorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="capitalize">{project.status}</span>
              </div>
            </div>
          </Card>
        </div>

        <ProjectStats project={project} />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <ExpenseChart expenses={project.expenses} />
              </TabsContent>

              <TabsContent value="expenses">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Detailed Expenses</h3>
                  <div className="space-y-4">
                    {project.expenses.map((expense, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-2">
                        <span>{expense.category}</span>
                        <span className="font-semibold">₹{expense.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="timeline">
                <ProjectTimeline project={project} />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <RecentDonors donors={donors} />
          </div>
        </div>
      </div>

      <UPIPaymentModal
        open={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        projectName={project.name}
        projectId={project.id}
        onNewDonation={handleNewDonation}
      />
    </div>
  );
}