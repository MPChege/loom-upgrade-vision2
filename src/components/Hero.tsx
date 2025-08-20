import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plane, MapPin, Flower, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: subtitleRef, isVisible: isSubtitleVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: ctaRef, isVisible: isCtaVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: statsRef, isVisible: isStatsVisible } = useScrollAnimation({ threshold: 0.6 });

  const heroImages = [
    '/src/assets/hero-flowers.jpg',
    '/src/assets/rose-bouquet.jpg', 
    '/src/assets/greenhouse.jpg'
  ];

  useEffect(() => {
    // Auto-switch images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40" />
          </div>
        ))}
      </div>

      {/* Parallax Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        {/* Floating Flower Petals */}
        <div className="absolute top-20 left-10 animate-float animate-float-delay-1">
          <Flower className="h-8 w-8 text-white/40" />
        </div>
        <div className="absolute top-40 right-20 animate-float animate-float-delay-2">
          <Flower className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float animate-float-delay-3">
          <Flower className="h-10 w-10 text-white/25" />
        </div>
        <div className="absolute top-60 left-1/4 animate-float">
          <Flower className="h-5 w-5 text-white/35" />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float animate-float-delay-1">
          <Flower className="h-7 w-7 text-white/30" />
        </div>

        {/* Sparkle Elements */}
        <div className="absolute top-32 right-1/3 animate-pulse">
          <Sparkles className="h-4 w-4 text-white/60" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse animate-float-delay-2">
          <Sparkles className="h-3 w-3 text-white/50" />
        </div>
      </div>
        
      {/* Content with Enhanced Scroll Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location Badge with Slide Animation */}
        <div 
          ref={titleRef}
          className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
            isTitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 shadow-soft">
            <MapPin className="h-5 w-5 text-white" />
            <span className="text-white text-sm font-medium">From Kenya to the World</span>
          </div>
        </div>

        {/* Main Heading with Text Reveal */}
        <h1 
          ref={subtitleRef}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair transition-all duration-1000 ${
            isSubtitleVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          Premium Fresh
          <br />
          <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-pulse-glow">
            Cut Flowers
          </span>
        </h1>

        {/* Subtitle with Slide Animation */}
        <p 
          ref={ctaRef}
          className={`text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-300 ${
            isCtaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          Direct from our beautiful Kenyan farms to destinations worldwide via air freight. 
          Discover the freshest, highest-quality roses and cut flowers.
        </p>

        {/* Enhanced CTA Buttons with Staggered Animation */}
        <div 
          ref={statsRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
            isStatsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Button variant="hero" size="xl" className="group btn-hover animate-pulse-glow">
            <Link to="/products" className="flex items-center gap-3">
              <Flower className="h-6 w-6 group-hover:animate-sway" />
              Explore Our Products
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button variant="elegant" size="xl" className="group btn-hover">
            <Link to="/orders" className="flex items-center gap-3">
              <Plane className="h-5 w-5 group-hover:animate-bounce" />
              Place Order
            </Link>
          </Button>
        </div>

        {/* Enhanced Statistics Grid with Staggered Animation */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
          isStatsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {[
            { number: "50+", label: "Rose Varieties" },
            { number: "25+", label: "Countries Served" },
            { number: "99%", label: "Freshness Guaranteed" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center group transition-all duration-700 delay-${index * 200} ${
                isStatsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Switch to image ${index + 1}`}
            title={`Switch to image ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-20 bg-gradient-to-b from-white/50 via-white to-transparent rounded-full">
          <div className="w-1 h-10 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('FFFFFF')}' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50zm0 0c0 27.614-22.386 50-50 50V0c27.614 0 50 22.386 50 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};

export default Hero;