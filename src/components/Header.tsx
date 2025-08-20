import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/#about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/#about" },
        { name: "Our Farm", href: "/our-farm" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "CSR", href: "/csr" }
      ]
    },
    { name: "Products", href: "/products" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contact", href: "/contact" }
  ];

  const quickActions = [
    { name: "Orders", href: "/orders" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Credible Blooms Logo" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm group">
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      {/* Hover Underline Effect */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isAboutOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-strong py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 text-sm"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm group"
                  >
                    {item.name}
                    {/* Hover Underline Effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Quick Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Quick Actions */}
            <div className="flex items-center space-x-3">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors duration-300 text-sm font-medium"
                >
                  {action.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                }`}>
                  <Menu className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                </span>
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}>
                  <X className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-background/95 backdrop-blur-md border-t border-border rounded-b-2xl shadow-strong">
              {/* Main Navigation */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-4 py-3 text-muted-foreground font-medium text-lg border-b border-border">
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Quick Actions */}
              <div className="pt-4 border-t border-border">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="block px-4 py-3 bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-colors duration-300 font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {action.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;