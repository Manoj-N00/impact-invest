import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label
} from 'recharts';

interface PieChartProps {
  data: Array<{
    [key: string]: string | number;
  }>;
  dataKey: string;
  nameKey: string;
  colors?: string[];
  height?: number;
  formatter?: (value: number) => [string, string];
  labelFormatter?: (label: string) => string;
}

export function PieChart({
  data,
  dataKey,
  nameKey,
  colors = ["#8884d8", "#82ca9d", "#ffc658"],
  height = 300,
  formatter = (value: number) => [`₹${value.toLocaleString()}`, 'Amount'],
  labelFormatter = (label: string) => label
}: PieChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            label={(entry) => labelFormatter(entry[nameKey] as string)}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            <Label position="center" />
          </Pie>
          <Tooltip formatter={formatter} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
