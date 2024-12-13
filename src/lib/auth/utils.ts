import { UserRole } from './types';

export const getDashboardPath = (role: UserRole): string => {
  return `/dashboard/${role}`;
};

export const formatRole = (role: UserRole): string => {
  return role.charAt(0).toUpperCase() + role.slice(1);
};