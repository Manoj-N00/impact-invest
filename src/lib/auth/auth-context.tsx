import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState, LoginCredentials, User } from './types';
import { mockUsers } from './mock-data';
import { storage } from './storage';
import { getDashboardPath } from './utils';
import { toast } from 'sonner';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = storage.getUser();
    setState({
      user,
      loading: false
    });
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      toast.error('Invalid credentials');
      return;
    }

    storage.setUser(user);
    setState({ user, loading: false });
    navigate(getDashboardPath(user.role));
    toast.success('Successfully logged in!');
  };

  const logout = () => {
    storage.removeUser();
    setState({ user: null, loading: false });
    navigate('/login');
    toast.success('Successfully logged out!');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}