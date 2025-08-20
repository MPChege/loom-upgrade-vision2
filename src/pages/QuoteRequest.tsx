import { useState } from 'react';
import { Flower, ArrowRight, CheckCircle, Package, Truck, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    flowerType: '',
    variety: '',
    quantity: '',
    deliveryDate: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    specialRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll animation hooks
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: formRef, isVisible: isFormVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: sidebarRef, isVisible: isSidebarVisible } = useScrollAnimation({ threshold: 0.4 });

  const flowerTypes = [
    { id: 'extra-premium', name: 'Extra Premium Cut Flowers', description: 'Highest quality roses with exceptional bloom size' },
    { id: 'premium', name: 'Premium Cut Flowers', description: 'High-quality roses for special occasions' },
    { id: 'spray-roses', name: 'Spray Roses', description: 'Multiple blooms per stem, perfect for arrangements' },
    { id: 'intermediates', name: 'Intermediates Cut Flowers', description: 'Great value roses with excellent quality' },
    { id: 'julietta', name: 'Julietta Series', description: 'Exclusive garden-style roses' },
    { id: 'summer', name: 'Summer Flowers', description: 'Seasonal varieties and fillers' }
  ];

  const roseVarieties = [
    'Red Naomi', 'White O\'Hara', 'Pink Avalanche', 'Yellow Finesse', 'Pink Sensation', 
    'Red Ribbon', 'Espana', 'Athena', 'Tororoso', 'Sombrero', 'Furiosa', 'Sweet Revival'
  ];

  const countries = [
    'United Kingdom', 'Germany', 'Netherlands', 'France', 'Spain', 
    'Italy', 'Russia', 'UAE', 'Saudi Arabia', 'Japan', 'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Quote request submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair">
              Quote Request Submitted!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for your quote request. Our team will review your requirements and contact you within 24 hours with a detailed quote and availability information.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Package className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Quote Preparation</h3>
                    <p className="text-sm text-muted-foreground">We'll prepare a detailed quote based on your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Delivery Options</h3>
                    <p className="text-sm text-muted-foreground">We'll provide shipping and delivery timeframes</p>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="xl" 
              className="mt-8 group"
              onClick={() => setIsSubmitted(false)}
            >
              Request Another Quote
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/20 to-secondary-50/20 pt-20">
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
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Flower className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair">
            Request a Quote
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a personalized quote for your flower import needs. Our team will provide you with 
            competitive pricing, availability, and delivery options for premium Kenyan flowers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div 
            ref={formRef}
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isFormVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <Card className="shadow-3d hover:shadow-strong transition-shadow duration-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6 font-playfair">
                  Flower Requirements
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Flower Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Flower Type *
                      </label>
                      <Select value={formData.flowerType} onValueChange={(value) => handleInputChange('flowerType', value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select flower type" />
                        </SelectTrigger>
                        <SelectContent>
                          {flowerTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              <div>
                                <div className="font-medium">{type.name}</div>
                                <div className="text-sm text-muted-foreground">{type.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Rose Variety
                      </label>
                      <Select value={formData.variety} onValueChange={(value) => handleInputChange('variety', value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select variety" />
                        </SelectTrigger>
                        <SelectContent>
                          {roseVarieties.map((variety) => (
                            <SelectItem key={variety} value={variety}>
                              {variety}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Quantity (stems) *
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 10,000"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        required
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Preferred Delivery Date *
                      </label>
                      <Input
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                        required
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Company Name *
                        </label>
                        <Input
                          placeholder="Your company name"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          required
                          className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Contact Person *
                        </label>
                        <Input
                          placeholder="Full name"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          required
                          className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Phone Number
                        </label>
                        <Input
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Information */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Shipping Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Destination Country *
                        </label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          City *
                        </label>
                        <Input
                          placeholder="Destination city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                          className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Special Requirements
                      </label>
                      <Textarea
                        placeholder="Any special packaging, handling, or delivery requirements..."
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                        rows={4}
                        className="text-base focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold group"
                  >
                    <Flower className="h-5 w-5 mr-2" />
                    Submit Quote Request
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div 
            ref={sidebarRef}
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isSidebarVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-95'
            }`}
          >
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Quality Guaranteed",
                      description: "Premium flowers with freshness guarantee",
                      color: "text-primary"
                    },
                    {
                      icon: Globe,
                      title: "Global Export",
                      description: "Fast delivery to 25+ countries",
                      color: "text-secondary"
                    },
                    {
                      icon: Package,
                      title: "Custom Packaging",
                      description: "Tailored to your requirements",
                      color: "text-botanical"
                    }
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div 
                        key={benefit.title}
                        className={`flex items-start space-x-3 transition-all duration-500 delay-${index * 200} ${
                          isSidebarVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${benefit.color} mt-1`} />
                        <div>
                          <h4 className="font-medium text-foreground">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to quote requests within 24 hours during business days. 
                  For urgent requests, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
