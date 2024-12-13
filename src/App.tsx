import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/lib/auth/auth-context';
import { ProtectedRoute } from '@/components/protected-route';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import InvestorDashboard from '@/pages/dashboard/investor';
import CreatorDashboard from '@/pages/dashboard/creator';
import AdminDashboard from '@/pages/dashboard/admin';
import ProjectDetails from '@/pages/projects/[id]';
import CreateProject from '@/pages/projects/create';



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="investor" element={
                <ProtectedRoute allowedRoles={['investor']}>
                  <InvestorDashboard />
                </ProtectedRoute>
              } />
              <Route path="creator" element={
                <ProtectedRoute allowedRoles={['creator']}>
                  <CreatorDashboard />
                </ProtectedRoute>
              } />
              <Route path="admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Route>

            <Route path="/projects/create" element={
              <ProtectedRoute allowedRoles={['creator']}>
                <CreateProject />
              </ProtectedRoute>
            } />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;