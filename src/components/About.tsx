import { Leaf, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import greenhouse from "@/assets/greenhouse.jpg";

const About = () => {
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: contentRef, isVisible: isContentVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: imageRef, isVisible: isImageVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: statsRef, isVisible: isStatsVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${
              isContentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div 
              ref={headerRef}
              className={`mb-6 transition-all duration-1000 delay-200 ${
                isHeaderVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-secondary font-medium uppercase tracking-wider text-sm bg-secondary/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 font-playfair">
                Discover Our Beautiful Farm
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Welcome to our floral wonderland! We grow and export the freshest 
              and highest-quality cut flowers from Africa, Kenya. Explore our 
              website and discover your next trusted flower exporter.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Leaf,
                  title: "Sustainable Farming",
                  description: "Environmentally responsible cultivation practices that preserve our beautiful Kenyan landscape.",
                  color: "text-primary",
                  bgColor: "bg-primary/10"
                },
                {
                  icon: Award,
                  title: "Premium Quality",
                  description: "Rigorous quality control ensures only the finest roses reach our global customers.",
                  color: "text-secondary",
                  bgColor: "bg-secondary/10"
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Fast air freight delivery to destinations worldwide, maintaining peak freshness.",
                  color: "text-accent-foreground",
                  bgColor: "bg-accent/10"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className={`flex items-start space-x-4 transition-all duration-700 delay-${index * 200} ${
                      isContentVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <div className={`${feature.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              isContentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <Button variant="hero" size="lg" className="group">
                <Link to="/our-farm" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Link to="/sustainability" className="flex items-center gap-2">
                  Our Sustainability
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              isImageVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-95'
            }`}
          >
            <div className="relative">
              <img
                src={roseBouquet}
                alt="Premium rose bouquet"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32">
                <img
                  src={greenhouse}
                  alt="Modern greenhouse"
                  className="rounded-xl shadow-strong w-full h-full object-cover border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats with Staggered Animation */}
        <div 
          ref={statsRef}
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
            isStatsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "1000+", label: "Happy Clients" },
            { number: "50+", label: "Flower Varieties" },
            { number: "25+", label: "Export Countries" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 delay-${index * 200} ${
                isStatsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-playfair">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;