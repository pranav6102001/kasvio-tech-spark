import { Mail, Phone, MapPin, Globe } from "lucide-react";
import kasvioLogo from "@/assets/kasvio-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={kasvioLogo} 
                alt="Kasvio Technology" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Kasvio Technology</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Leading business process outsourcing company delivering innovative solutions 
              that drive operational efficiency and business growth worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-blue-100">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <span className="text-sm">kasviotechnology@gmail.com</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <span className="text-sm">+91-8830013733</span>
              </div>
              <div className="flex items-center text-blue-100">
                <MapPin size={16} className="mr-3 flex-shrink-0" />
                <span className="text-sm">Nashik, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Customer Support</li>
              <li>Sales Services</li>
              <li>Data Entry & Processing</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-blue-100">
              <p>© {currentYear} Kasvio Technology. All rights reserved.</p>
              <p className="mt-1">
                Founder & CEO: <span className="font-medium">Pranav Kasture</span>
              </p>
              <p className="mt-1">
                Udyam Registration: <span className="font-medium">UDYAM-MH-23-0327987</span>
              </p>
            </div>
            <div className="text-sm text-blue-100 md:text-right">
              <p>Client Partner:</p>
              <p><span className="font-medium">TECHSPARK SOFTWARE SOLUTIONS PVT LTD</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;