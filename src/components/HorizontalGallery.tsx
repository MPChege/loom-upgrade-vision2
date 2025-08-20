import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price?: string;
}

interface HorizontalGalleryProps {
  title: string;
  subtitle: string;
  items: GalleryItem[];
  showNavigation?: boolean;
  autoScroll?: boolean;
}

const HorizontalGallery = ({ 
  title, 
  subtitle, 
  items, 
  showNavigation = true, 
  autoScroll = false 
}: HorizontalGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          {showNavigation && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border shadow-soft hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 -ml-4"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border shadow-soft hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 -mr-4"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Horizontal Scroll Gallery */}
          <div 
            ref={scrollRef}
            className="horizontal-scroll flex gap-6 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item) => (
              <Card 
                key={item.id} 
                className="flex-shrink-0 w-80 md:w-96 overflow-hidden hover:shadow-3d transition-all duration-500 tilt-3d"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Price Badge */}
                  {item.price && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                        {item.price}
                      </span>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors duration-300">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {[...Array(Math.ceil(items.length / 3))].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted transition-all duration-300 hover:bg-primary cursor-pointer"
                  onClick={() => {
                    if (scrollRef.current) {
                      const scrollAmount = index * 400;
                      scrollRef.current.scrollTo({
                        left: scrollAmount,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
