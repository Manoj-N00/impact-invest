import { ProjectExpense } from '@/lib/types/project';
import { Card } from '@/components/ui/card';
import { BarChart } from '@/components/charts/bar-chart';
import { useMemo } from 'react';

interface ExpenseChartProps {
  expenses: ProjectExpense[];
}

export function ExpenseChart({ expenses }: ExpenseChartProps) {
  const chartData = useMemo(() => {
    if (!expenses || expenses.length === 0) return [];
    
    return expenses.reduce((acc, expense) => {
      const existing = acc.find(item => item.category === expense.category);
      if (existing) {
        existing.amount += expense.amount;
      } else {
        acc.push({
          category: expense.category,
          amount: expense.amount,
        });
      }
      return acc;
    }, [] as Array<{ category: string; amount: number }>);
  }, [expenses]);

  if (!expenses || expenses.length === 0) {
    return (
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
        <p className="text-center text-muted-foreground">No expense data available</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
      <BarChart 
        data={chartData}
        dataKey="amount"
        xAxisKey="category"
      />
    </Card>
  );
}