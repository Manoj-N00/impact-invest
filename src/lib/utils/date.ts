export const formatInvestmentDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getMonthName = (date: string): string => {
  return new Date(date).toLocaleString('default', { month: 'short' });
};