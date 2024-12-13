import { Card } from '@/components/ui/card';
import { Project } from '@/lib/types/project';

interface ProjectStatsProps {
  project: Project;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  const totalInvestors = project.investors.length;
  const averageInvestment = project.investors.length > 0
    ? project.raised / project.investors.length
    : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6">
        <h3 className="font-semibold text-lg">Total Raised</h3>
        <p className="text-3xl font-bold">₹{project.raised.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mt-2">
          of ₹{project.goal.toLocaleString()} goal
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold text-lg">Total Investors</h3>
        <p className="text-3xl font-bold">{totalInvestors}</p>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold text-lg">Average Investment</h3>
        <p className="text-3xl font-bold">₹{Math.round(averageInvestment).toLocaleString()}</p>
      </Card>
    </div>
  );
}