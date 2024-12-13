import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{
    [key: string]: string | number;
  }>;
  dataKey: string;
  xAxisKey: string;
  height?: number;
  formatter?: (value: number) => [string, string];
}

export function BarChart({ 
  data, 
  dataKey, 
  xAxisKey,
  height = 300,
  formatter = (value: number) => [`₹${value.toLocaleString()}`, 'Amount']
}: BarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={xAxisKey} 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={formatter}
          />
          <Bar dataKey={dataKey} fill="hsl(var(--primary))" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}