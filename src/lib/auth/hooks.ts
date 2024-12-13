import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from './jwt';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    verifyToken(token).then(async (payload) => {
      if (payload?.sub) {
        const [dbUser] = await db.select().from(users).where(eq(users.id, payload.sub));
        setUser(dbUser);
      }
      setLoading(false);
    });
  }, []);

  const login = async (email: string, password: string) => {
    // Implementation will be added in the auth routes
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return { user, loading, login, logout };
}