import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Ali",
      company: "Premium Florals Ltd",
      content: "For the years I've done business with Credible Blooms, what has stood out for us is their level of customer service and efficiency in terms of timely order confirmations and delivery, and of course the good quality and freshness of their roses.",
      rating: 5,
      location: "Dubai, UAE"
    },
    {
      name: "Maria Rodriguez",
      company: "European Flower Markets",
      content: "Credible Blooms has been our trusted partner for over 5 years. Their roses arrive fresh and beautiful every time, and their team is incredibly responsive to our needs.",
      rating: 5,
      location: "Madrid, Spain"
    },
    {
      name: "James Mitchell",
      company: "Mitchell & Co Wholesalers",
      content: "The quality consistency and reliable delivery schedules make Credible Blooms our go-to supplier. Their premium roses are truly exceptional.",
      rating: 5,
      location: "London, UK"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-playfair">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by florists and distributors worldwide for our commitment 
            to quality, freshness, and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="border-0 shadow-soft hover:shadow-elegant transition-smooth card-gradient animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground font-playfair">
                    {testimonial.name}
                  </div>
                  <div className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 font-playfair">1000+</div>
              <div className="text-muted-foreground text-sm">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2 font-playfair">99.8%</div>
              <div className="text-muted-foreground text-sm">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 font-playfair">25+</div>
              <div className="text-muted-foreground text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2 font-playfair">15+</div>
              <div className="text-muted-foreground text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;