export const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const calculateProgress = (raised: number, goal: number): number => {
  return (raised / goal) * 100;
};