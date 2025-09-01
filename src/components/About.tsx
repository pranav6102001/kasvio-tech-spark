import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Target, TrendingUp, CheckCircle, Users } from "lucide-react";
const About = () => {
  const achievements = [{
    icon: TrendingUp,
    label: "Client Retention",
    value: "95%"
  }, {
    icon: Award,
    label: "Service Excellence",
    value: "ISO Certified"
  }];
  const certifications = ["ISO 27001 Certified", "GDPR Compliant", "SOC 2 Type II", "HIPAA Compliant"];
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Kasvio Technology
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted BPO Partner for 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded and led by <strong>Pranav Kasture</strong>, Kasvio Technology has emerged as a leading 
              business process outsourcing company, delivering innovative solutions that drive operational 
              efficiency and business growth.
            </p>

            <p className="text-muted-foreground mb-8">
              We specialize in providing comprehensive BPO services to businesses worldwide, combining 
              cutting-edge technology with human expertise to deliver exceptional results. Our commitment 
              to quality and innovation has made us a trusted partner for companies across various industries.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To empower businesses with world-class BPO solutions that enhance efficiency and accelerate growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be the global leader in innovative business process outsourcing solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => {})}
              </div>
            </div>
          </div>

          {/* Right Content - Achievements & CEO Info */}
          <div className="space-y-8">
            {/* CEO Card */}
            <Card className="border-0 bg-gradient-card shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  PK
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Pranav Kasture</h3>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Visionary leader with extensive experience in business process optimization 
                  and digital transformation, driving Kasvio Technology's mission to deliver 
                  exceptional BPO solutions globally.
                </p>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => <Card key={index} className="border-0 bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Company Registration */}
            <Card className="border-0 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Company Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company:</span>
                    <span className="text-foreground font-medium">Kasvio Technology</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Udyam Registration:</span>
                    <span className="text-foreground font-medium">UDYAM-MH-23-0327987</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client Partner:</span>
                    <span className="text-foreground font-medium">TECHSPARK SOFTWARE SOLUTIONS PVT LTD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;