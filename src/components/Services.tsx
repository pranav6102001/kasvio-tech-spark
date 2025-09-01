import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Headphones, 
  Database, 
  Users, 
  BarChart3, 
  Clock, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 multilingual customer service with expert agents ensuring exceptional customer experiences.",
      features: ["Live Chat Support", "Email Management", "Phone Support", "Social Media Management"]
    },
    {
      icon: Database,
      title: "Data Entry & Processing",
      description: "Accurate and efficient data processing services with 99.9% accuracy rates and secure handling.",
      features: ["Document Digitization", "Data Validation", "CRM Data Entry", "Database Management"]
    },
    {
      icon: BarChart3,
      title: "Sales Services",
      description: "Professional sales support to drive revenue growth through lead generation, conversion, and customer acquisition.",
      features: ["Lead Generation", "Sales Calls", "CRM Management", "Sales Analytics & Reporting"]
    },
    {
      icon: Clock,
      title: "Technical Support",
      description: "Expert technical assistance and IT support services for your customers and internal teams.",
      features: ["Level 1-3 Support", "Software Troubleshooting", "Hardware Support", "System Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive BPO Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From customer support to technical assistance, we provide specialized business process outsourcing 
            solutions tailored to your specific needs and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight size={14} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Operations?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our BPO services can transform your business processes and drive growth.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;