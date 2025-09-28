import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Building2, Globe, TrendingUp } from "lucide-react";

const Clients = () => {
  const stats = [
    { icon: Users, value: "1", label: "Happy Client" },
    { icon: Globe, value: "1", label: "Countries Served" },
    { icon: Building2, value: "2", label: "Industries Served" },
    { icon: TrendingUp, value: "99%", label: "Client Retention" }
  ];

  return (
    <section id="clients" className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Companies Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with businesses across industries to deliver exceptional BPO solutions 
            that drive growth and operational excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Growing List of Satisfied Clients
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience the difference our professional BPO services can make for your business. 
                Let's discuss how we can help you achieve your operational goals.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Become Our Next Success Story
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;