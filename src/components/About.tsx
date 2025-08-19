import { Leaf, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import greenhouse from "@/assets/greenhouse.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-playfair">
                Discover Our Beautiful Farm
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Welcome to our floral wonderland! We grow and export the freshest 
              and highest-quality cut flowers from Africa, Kenya. Explore our 
              website and discover your next trusted flower exporter.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sustainable Farming</h3>
                  <p className="text-muted-foreground">
                    Environmentally responsible cultivation practices that preserve our beautiful Kenyan landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Rigorous quality control ensures only the finest roses reach our global customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Fast air freight delivery to destinations worldwide, maintaining peak freshness.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Images */}
          <div className="relative animate-scale-in">
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

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-playfair">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-playfair">1000+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-playfair">50+</div>
            <div className="text-muted-foreground">Flower Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-playfair">25+</div>
            <div className="text-muted-foreground">Export Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;