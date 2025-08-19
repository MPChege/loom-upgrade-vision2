import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4 font-playfair">
              Credible Blooms
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Premium fresh cut flowers exported directly from Kenya to 
              destinations worldwide. Quality, freshness, and reliability guaranteed.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Extra Premium Roses</li>
              <li className="text-primary-foreground/80">Premium Roses</li>
              <li className="text-primary-foreground/80">Intermediate Roses</li>
              <li className="text-primary-foreground/80">Spray Roses</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+254 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">info@credibleblooms.co.ke</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <span className="text-primary-foreground/80">
                  Naivasha, Kenya<br />
                  East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Credible Blooms. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Export Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;