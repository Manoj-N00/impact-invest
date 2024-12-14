import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Card } from '@/components/ui/card';
import { mockProjects } from '@/lib/data/mock-projects';
import { useAuth } from '@/lib/auth/auth-context';
import { ProjectCard } from '@/components/projects/project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function InvestorDashboard() {
  const { user } = useAuth();

  const myInvestments = mockProjects.filter(p =>
    p.investors.some(i => i.id === user?.id)
  );

  const availableProjects = mockProjects.filter(p =>
    p.status === 'active' && !p.investors.some(i => i.id === user?.id)
  );

  const completedProjects = myInvestments.filter(p => p.status === 'completed');

  const totalInvested = myInvestments.reduce((sum, p) =>
    sum + (p.investors.find(i => i.id === user?.id)?.amount || 0), 0
  );

  const getInvestorTier = (amount: number) => {
    if (amount >= 1000000) return 'Platinum';
    if (amount >= 500000) return 'Gold';
    if (amount >= 100000) return 'Silver';
    return 'Bronze';
  };

  const investorTier = getInvestorTier(totalInvested);

  const stats = {
    totalInvested,
    activeProjects: myInvestments.filter(p => p.status === 'active').length,
    completedProjects: completedProjects.length,
    tier: investorTier
  };

  useEffect(() => {
    if (completedProjects.length > 0) {
      toast.success('One or more projects have been completed!');
    }
  }, [completedProjects]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Investor Dashboard</h2>
          <p className="text-muted-foreground">{stats.tier} Tier Investor</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Total Invested</h3>
          <p className="text-3xl font-bold">₹{stats.totalInvested.toLocaleString()}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Active Investments</h3>
          <p className="text-3xl font-bold">{stats.activeProjects}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Completed Projects</h3>
          <p className="text-3xl font-bold">{stats.completedProjects}</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
          <h3 className="font-semibold text-lg">Investor Tier</h3>
          <p className="text-3xl font-bold">{stats.tier}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {stats.tier === 'Bronze' && 'Invest ₹100,000 for Silver'}
            {stats.tier === 'Silver' && 'Invest ₹500,000 for Gold'}
            {stats.tier === 'Gold' && 'Invest ₹1,000,000 for Platinum'}
            {stats.tier === 'Platinum' && 'Maximum tier achieved!'}
          </p>
        </Card>
      </div>

      <Tabs defaultValue="available">
        <TabsList>
          <TabsTrigger value="available">Available Projects</TabsTrigger>
          <TabsTrigger value="active">My Investments</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {availableProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
              />
            ))}
          </div>

          {availableProjects.length === 0 && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                No available projects at the moment
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {myInvestments
              .filter(p => p.status === 'active')
              .map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                />
              ))}
          </div>

          {myInvestments.filter(p => p.status === 'active').length === 0 && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                No active investments
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {completedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                showInvestButton={false}
              />
            ))}
          </div>

          {completedProjects.length === 0 && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                No completed investments
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
