import { Card } from '@/components/ui/card';
import { Project } from '@/lib/types/project';
import { BarChart } from '@/components/charts/bar-chart';
import { useMemo } from 'react';

interface ProjectTimelineProps {
  project: Project;
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  const monthlyData = useMemo(() => {
    return project.expenses.reduce((acc, expense) => {
      const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
      const existingMonth = acc.find(d => d.month === month);
      if (existingMonth) {
        existingMonth.amount += expense.amount;
      } else {
        acc.push({ month, amount: expense.amount });
      }
      return acc;
    }, [] as Array<{ month: string; amount: number }>);
  }, [project.expenses]);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Project Timeline</h3>
      <BarChart 
        data={monthlyData}
        dataKey="amount"
        xAxisKey="month"
      />
    </Card>
  );
}