import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bpo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={16} className="mr-2" />
              Leading BPO Solutions Provider
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Business </span>
              Operations
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Kasvio Technology delivers world-class business process outsourcing solutions 
              that streamline operations, reduce costs, and accelerate growth for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Efficiency Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional BPO Services" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-card">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Operations</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-card">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">ISO 27001</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;