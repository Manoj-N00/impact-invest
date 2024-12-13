import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Heart, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectsSection } from "@/components/home/projects-section";

export default function HomePage() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Make a Difference Through Impact Investing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Support meaningful projects and earn returns while creating positive social impact
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/register">Start Investing</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToProjects}
              className="text-white hover:text-white border-white hover:border-white"
            >
              Browse Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard
            icon={<Users className="w-8 h-8" />}
            title="Active Investors"
            value="5,000+"
          />
          <StatsCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Total Invested"
            value="₹10M+"
          />
          <StatsCard
            icon={<Heart className="w-8 h-8" />}
            title="Projects Funded"
            value="200+"
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}

function StatsCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-muted-foreground">{title}</p>
    </Card>
  );
}