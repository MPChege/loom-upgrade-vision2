import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Flower, Sparkles, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Scroll animation hooks
  const { elementRef: heroRef, isVisible: isHeroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: formRef, isVisible: isFormVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: benefitsRef, isVisible: isBenefitsVisible } = useScrollAnimation({ threshold: 0.4 });

  const interests = [
    { id: 'flowers', label: 'New Flower Varieties', icon: Flower },
    { id: 'sustainability', label: 'Sustainability Updates', icon: Globe },
    { id: 'farming', label: 'Farming Insights', icon: Users },
    { id: 'events', label: 'Events & Exhibitions', icon: Sparkles }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedInterests.length > 0) {
      setIsSubscribed(true);
      // Here you would typically send the data to your backend
      console.log('Subscribing:', { email, interests: selectedInterests });
    }
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair">
              Welcome to Our Community!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for subscribing to our newsletter. You'll now receive updates about {selectedInterests.join(', ')} and more exciting content from Credible Blooms.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What's Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">Check your inbox for a welcome message</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Flower className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">First Newsletter</h3>
                    <p className="text-sm text-muted-foreground">Coming to your inbox soon</p>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="xl" 
              className="mt-8 group"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`py-20 transition-all duration-1000 ${
          isHeroVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair">
            Stay Blooming with Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and be the first to know about new flower varieties, 
            sustainability initiatives, farming insights, and exclusive offers from Credible Blooms.
          </p>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section 
        ref={formRef}
        className={`py-20 transition-all duration-1000 delay-200 ${
          isFormVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-3d hover:shadow-strong transition-shadow duration-500">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubscribe} className="space-y-8">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-foreground mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 text-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                {/* Interests Selection */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-4">
                    What interests you most?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interests.map((interest, index) => {
                      const Icon = interest.icon;
                      const isSelected = selectedInterests.includes(interest.id);
                      
                      return (
                        <button
                          key={interest.id}
                          type="button"
                          onClick={() => toggleInterest(interest.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-primary/5'
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-6 w-6 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className="font-medium">{interest.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Select at least one interest to continue
                  </p>
                </div>

                {/* Subscribe Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={!email || selectedInterests.length === 0}
                  className="w-full h-14 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={benefitsRef}
        className={`py-20 transition-all duration-1000 delay-400 ${
          isBenefitsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Why Subscribe?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of flower enthusiasts and professionals who stay updated with our latest news
            </p>
          </div>

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
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            By subscribing, you agree to receive our newsletter and marketing communications. 
            You can unsubscribe at any time. We respect your privacy and will never share your email address.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
