import { Mail, ArrowRight, Flower, Sparkles, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Newsletter = () => {
  // Scroll animation hooks
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: formRef, isVisible: isFormVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: benefitsRef, isVisible: isBenefitsVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
            Stay in Bloom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to know about new flower varieties, 
            sustainability initiatives, farming insights, and exclusive offers from Credible Blooms.
          </p>
        </div>

        {/* Newsletter Form Section */}
        <div 
          ref={formRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isFormVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <Card className="overflow-hidden shadow-3d hover:shadow-strong transition-shadow duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">
                  Join Our Flower Community
                </h3>
                <p className="text-muted-foreground">
                  Get exclusive updates delivered to your inbox
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    What interests you most?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'flowers', label: 'New Flower Varieties', icon: Flower },
                      { id: 'sustainability', label: 'Sustainability Updates', icon: Globe },
                      { id: 'farming', label: 'Farming Insights', icon: Users },
                      { id: 'events', label: 'Events & Exhibitions', icon: Sparkles }
                    ].map((interest, index) => {
                      const Icon = interest.icon;
                      return (
                        <button
                          key={interest.id}
                          type="button"
                          className="p-4 rounded-xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-left group"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <span className="font-medium text-foreground">{interest.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold group"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div 
          ref={benefitsRef}
          className={`text-center transition-all duration-1000 delay-400 ${
            isBenefitsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 font-playfair">
            Why Subscribe?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Flower,
                title: "Exclusive Content",
                description: "Get first access to new flower varieties, farming techniques, and industry insights",
                bgColor: "bg-primary/10",
                iconColor: "text-primary"
              },
              {
                icon: Sparkles,
                title: "Special Offers",
                description: "Receive exclusive discounts and early access to seasonal flower collections",
                bgColor: "bg-secondary/10",
                iconColor: "text-secondary"
              },
              {
                icon: Globe,
                title: "Sustainability Updates",
                description: "Learn about our latest environmental initiatives and sustainable farming practices",
                bgColor: "bg-botanical/10",
                iconColor: "text-botanical"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={benefit.title}
                  className={`text-center hover:shadow-3d transition-shadow duration-300 ${
                    isBenefitsVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            By subscribing, you agree to receive our newsletter and marketing communications. 
            You can unsubscribe at any time. We respect your privacy and will never share your email address.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;