import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Building2, Globe, TrendingUp } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "TechSpark Software Solutions",
      industry: "Software Development",
      services: ["Customer Support", "Technical Support"],
      testimonial: "Kasvio Technology has transformed our customer support operations with their professional and efficient service delivery.",
      rating: 5,
      logo: "🚀"
    },
    {
      name: "Global Finance Corp",
      industry: "Financial Services", 
      services: ["Data Processing", "Back Office Operations"],
      testimonial: "Outstanding data processing capabilities and attention to detail. Highly recommended for financial operations.",
      rating: 5,
      logo: "💼"
    },
    {
      name: "RetailMax Solutions",
      industry: "E-commerce",
      services: ["Sales Support", "Customer Service"],
      testimonial: "Their sales support team helped us increase our conversion rates by 40%. Exceptional service quality.",
      rating: 5,
      logo: "🛒"
    },
    {
      name: "HealthCare Plus",
      industry: "Healthcare",
      services: ["Administrative Support", "Data Entry"],
      testimonial: "Reliable and accurate administrative support that allows us to focus on patient care.",
      rating: 5,
      logo: "🏥"
    },
    {
      name: "EduTech Innovations",
      industry: "Education Technology",
      services: ["Customer Support", "Technical Assistance"],
      testimonial: "Professional support team that understands our technical requirements perfectly.",
      rating: 5,
      logo: "📚"
    },
    {
      name: "Manufacturing Pro",
      industry: "Manufacturing",
      services: ["Supply Chain Support", "Data Management"],
      testimonial: "Streamlined our supply chain operations with their efficient data management services.",
      rating: 5,
      logo: "🏭"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Building2, value: "50+", label: "Industries" },
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

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{client.logo}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{client.name}</h3>
                      <p className="text-sm text-muted-foreground">{client.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{client.testimonial}"
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {client.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
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