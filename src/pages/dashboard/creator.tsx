import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { mockProjects } from '@/lib/data/mock-projects';
import { useAuth } from '@/lib/auth/auth-context';
import { ProjectCard } from '@/components/projects/project-card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function CreatorDashboard() {
  const { user } = useAuth();
  const myProjects = mockProjects.filter(p => p.creatorId === user?.id);
  const otherProjects = mockProjects.filter(p => p.creatorId !== user?.id && p.status === 'active');

  const stats = {
    total: myProjects.length,
    active: myProjects.filter(p => p.status === 'active').length,
    totalRaised: myProjects.reduce((sum, p) => sum + p.raised, 0),
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Creator Dashboard</h2>
        <Button asChild>
          <Link to="/projects/create">Create New Project</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Total Projects</h3>
          <p className="text-3xl font-bold">{stats.total}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Total Raised</h3>
          <p className="text-3xl font-bold">₹{stats.totalRaised.toLocaleString()}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Active Projects</h3>
          <p className="text-3xl font-bold">{stats.active}</p>
        </Card>
      </div>

      <Tabs defaultValue="my-projects">
        <TabsList>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="other-projects">Other Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {myProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                showInvestButton={false}
              />
            ))}
          </div>

          {myProjects.length === 0 && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                You haven't created any projects yet
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="other-projects" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
              />
            ))}
          </div>

          {otherProjects.length === 0 && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                No other active projects available
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}