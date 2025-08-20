import { Link } from "react-router-dom";
import { 
  Flower, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Our Farm", href: "/our-farm" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "CSR", href: "/csr" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Premium Roses", href: "/products" },
        { name: "Spray Roses", href: "/products" },
        { name: "Seasonal Flowers", href: "/products" },
        { name: "Request Quote", href: "/quote-request" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Order Tracking", href: "/orders" },
        { name: "Newsletter", href: "/newsletter" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Flower className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-playfair">Credible Blooms</h3>
                  <p className="text-white/70 text-sm">Growing Excellence</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Leading flower farm in Kenya, delivering premium quality roses and cut flowers 
                to markets worldwide with sustainable practices and community focus.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center group"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300 text-sm group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Bottom */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-white/70">Naivasha, Kenya • 2050m above sea level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-white/70">+254 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-botanical" />
                  <span className="text-white/70">info@credibleblooms.co.ke</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Reach</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-primary">25+</div>
                  <div className="text-white/70">Countries</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-secondary">50+</div>
                  <div className="text-white/70">Varieties</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
              <span>© {currentYear} Credible Blooms. Made with</span>
              <Heart className="h-4 w-4 text-secondary fill-current" />
              <span>in Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;