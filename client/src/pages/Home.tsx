import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  BookOpen,
  Twitter,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
import { useState, useEffect } from "react";

// Types for our links
interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  description?: string;
  featured?: boolean;
}

export default function Home() {
  // State for click tracking (simulated for now)
  const [clicks, setClicks] = useState<Record<string, number>>({});

  // Load clicks from local storage on mount (placeholder for real backend)
  useEffect(() => {
    const storedClicks = localStorage.getItem("linkClicks");
    if (storedClicks) {
      setClicks(JSON.parse(storedClicks));
    }
  }, []);

  const handleLinkClick = (id: string, url: string) => {
    // Update local state
    const newClicks = { ...clicks, [id]: (clicks[id] || 0) + 1 };
    setClicks(newClicks);
    
    // Save to local storage (placeholder)
    localStorage.setItem("linkClicks", JSON.stringify(newClicks));
    
    // In a real app, we would send an API request here
    // fetch('/api/track-click', { method: 'POST', body: JSON.stringify({ linkId: id }) });
    
    // Navigate to URL
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const links: LinkItem[] = [
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://linkedin.com/in/szoketamas", // Placeholder URL
      icon: <Linkedin className="w-6 h-6" />,
      description: "Connect professionally",
      featured: true
    },
    {
      id: "calendly",
      title: "Book a Meeting",
      url: "https://calendly.com/szoketamas", // Placeholder URL
      icon: <Calendar className="w-6 h-6" />,
      description: "Schedule a 1-on-1 consultation",
      featured: true
    },
    {
      id: "blog",
      title: "Read My Blog",
      url: "https://szoketamas.com/blog", // Placeholder URL
      icon: <BookOpen className="w-6 h-6" />,
      description: "Insights on investing & entrepreneurship"
    },
    {
      id: "youtube",
      title: "YouTube",
      url: "https://youtube.com/@szoketamas", // Placeholder URL
      icon: <Youtube className="w-6 h-6" />,
      description: "Watch my latest content"
    },
    {
      id: "instagram",
      title: "Instagram",
      url: "https://instagram.com/szoketamas", // Placeholder URL
      icon: <Instagram className="w-6 h-6" />,
      description: "Daily updates & lifestyle"
    },
    {
      id: "facebook",
      title: "Facebook",
      url: "https://facebook.com/szoketamas", // Placeholder URL
      icon: <Facebook className="w-6 h-6" />,
      description: "Join the community"
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      url: "https://x.com/szoketamas", // Placeholder URL
      icon: <Twitter className="w-6 h-6" />,
      description: "Quick thoughts & threads"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10 mix-blend-multiply">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center grayscale contrast-150"></div>
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 animate-in slide-in-from-bottom-10 duration-700 fade-in">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary rounded-none rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-primary bg-white overflow-hidden">
              <img 
                src="/images/avatar-placeholder.jpg" 
                alt="Szőke Tamás" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="text-center md:text-left flex-1">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-2">
              Szőke <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-600">Tamás</span>
            </h1>
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1 text-lg font-bold uppercase tracking-widest mb-4 transform -skew-x-12">
              Investoprenor
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-medium border-l-4 border-primary pl-4 ml-auto mr-auto md:ml-0">
              Building wealth through smart investments and entrepreneurial grit. 
              Speaker. Mentor. Visionary.
            </p>
          </div>
        </header>

        {/* Links Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <div 
              key={link.id}
              className={`
                group relative 
                ${link.featured ? 'md:col-span-2' : 'md:col-span-1'}
                animate-in slide-in-from-bottom-10 fade-in
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shadow Block */}
              <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              
              {/* Main Card */}
              <button
                onClick={() => handleLinkClick(link.id, link.url)}
                className="relative w-full text-left bg-card border-2 border-primary p-6 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 flex items-center justify-between group-active:translate-x-1 group-active:translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-primary-foreground border-2 border-primary group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:underline decoration-4 underline-offset-4 decoration-primary">
                      {link.title}
                    </h2>
                    {link.description && (
                      <p className="text-sm font-medium text-muted-foreground mt-1">
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-8 h-8 text-primary" />
                </div>

                {/* Click Counter (Visible for demo/admin purposes, usually hidden or admin-only) */}
                {clicks[link.id] > 0 && (
                  <div className="absolute top-2 right-2 text-xs font-mono bg-gray-100 border border-gray-300 px-1.5 py-0.5 text-gray-600">
                    {clicks[link.id]} clicks
                  </div>
                )}
              </button>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center border-t-4 border-primary pt-8">
          <p className="font-display font-bold text-xl uppercase tracking-widest">
            © {new Date().getFullYear()} Szőke Tamás
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-sm font-bold hover:bg-primary hover:text-primary-foreground px-2 transition-colors">Privacy</a>
            <a href="#" className="text-sm font-bold hover:bg-primary hover:text-primary-foreground px-2 transition-colors">Contact</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
