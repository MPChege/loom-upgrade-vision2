import { useState } from "react";
import { 
  ShoppingCart, 
  Package, 
  Truck, 
  CreditCard, 
  User, 
  MapPin, 
  Phone, 
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Flower,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Orders = () => {
  const { toast } = useToast();
  const [orderStep, setOrderStep] = useState(1);
  const [orderData, setOrderData] = useState({
    // Product details
    flowerType: "",
    variety: "",
    quantity: "",
    deliveryDate: "",
    
    // Customer details
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    
    // Shipping details
    country: "",
    city: "",
    address: "",
    specialRequirements: ""
  });

  const flowerCategories = [
    { 
      id: "extra-premium", 
      name: "Extra Premium Roses", 
      description: "Our finest quality roses with exceptional bloom size and stem length",
      icon: Flower,
      color: "text-primary"
    },
    { 
      id: "premium", 
      name: "Premium Roses", 
      description: "High-quality roses perfect for special occasions and luxury markets",
      icon: Flower,
      color: "text-secondary"
    },
    { 
      id: "intermediate", 
      name: "Intermediate Roses", 
      description: "Great value roses with excellent quality for everyday use",
      icon: Flower,
      color: "text-botanical"
    },
    { 
      id: "spray", 
      name: "Spray Roses", 
      description: "Multiple blooms per stem, perfect for arrangements and bouquets",
      icon: Flower,
      color: "text-accent-foreground"
    }
  ];

  const roseVarieties = [
    "Pink Torch", "Patz", "Snow Flake", "Moon Walk", "Jumilia", 
    "Red Ribbon", "Espana", "Athena", "Tororoso", "Sombrero", 
    "Furiosa", "Sweet Revival", "Mirabelle", "Nightgale", "Ice Breaker"
  ];

  const countries = [
    "United Kingdom", "Germany", "Netherlands", "France", "Spain", 
    "Italy", "Russia", "UAE", "Saudi Arabia", "Japan", "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (orderStep < 3) {
      setOrderStep(orderStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (orderStep > 1) {
      setOrderStep(orderStep - 1);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "Order request submitted!",
      description: "Thank you for your order request. Our team will contact you within 24 hours with a detailed quote and confirmation.",
    });

    // Reset form
    setOrderData({
      flowerType: "", variety: "", quantity: "", deliveryDate: "",
      companyName: "", contactName: "", email: "", phone: "",
      country: "", city: "", address: "", specialRequirements: ""
    });
    setOrderStep(1);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return orderData.flowerType && orderData.variety && orderData.quantity && orderData.deliveryDate;
      case 2:
        return orderData.companyName && orderData.contactName && orderData.email && orderData.phone;
      case 3:
        return orderData.country && orderData.city && orderData.address;
      default:
        return false;
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return Package;
      case 2: return User;
      case 3: return Truck;
      default: return Package;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Product Details";
      case 2: return "Customer Information";
      case 3: return "Shipping & Requirements";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/20 to-secondary-50/20 py-12 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair">
            Place Your Order
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to import premium Kenyan roses? Fill out our comprehensive order form and we'll 
            prepare a customized quote for your flower import needs. Experience the finest quality 
            with our sustainable farming practices.
          </p>
        </div>

        {/* Enhanced Progress Steps */}
        <div className="mb-16">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => {
                const Icon = getStepIcon(step);
                const isActive = orderStep >= step;
                const isCompleted = orderStep > step;
                
                return (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-500 ${
                          isCompleted 
                            ? 'bg-green-500 text-white shadow-lg' 
                            : isActive 
                              ? 'bg-primary text-white shadow-lg scale-110' 
                              : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="h-8 w-8" /> : <Icon className="h-8 w-8" />}
                      </div>
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {getStepTitle(step)}
                      </span>
                    </div>
                    {step < 3 && (
                      <div 
                        className={`w-24 h-1 mx-8 transition-all duration-500 rounded-full ${
                          isCompleted ? 'bg-green-500' : isActive ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Order Form */}
        <Card className="shadow-3d hover:shadow-strong transition-shadow duration-500 animate-scale-in overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border/50">
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                orderStep === 1 ? 'bg-primary/20' : 
                orderStep === 2 ? 'bg-secondary/20' : 'bg-botanical/20'
              }`}>
                {(() => {
                  const Icon = getStepIcon(orderStep);
                  return <Icon className={`h-6 w-6 ${
                    orderStep === 1 ? 'text-primary' : 
                    orderStep === 2 ? 'text-secondary' : 'text-botanical'
                  }`} />;
                })()}
              </div>
              <span className="font-playfair">
                Step {orderStep}: {getStepTitle(orderStep)}
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmitOrder}>
              {/* Step 1: Product Details */}
              {orderStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Flower Category *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {flowerCategories.map((category) => {
                        const Icon = category.icon;
                        const isSelected = orderData.flowerType === category.id;
                        
                        return (
                          <div
                            key={category.id}
                            onClick={() => handleInputChange('flowerType', category.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-elegant'
                                : 'border-border hover:border-primary/50 hover:bg-primary/5'
                            }`}
                          >
                            <div className="flex items-start space-x-4">
                              <Icon className={`h-8 w-8 ${category.color} mt-1`} />
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">{category.name}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Rose Variety *
                      </label>
                      <Select value={orderData.variety} onValueChange={(value) => handleInputChange('variety', value)}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select rose variety" />
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

                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Quantity (stems) *
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 10,000"
                        value={orderData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Preferred Delivery Date *
                    </label>
                    <Input
                      type="date"
                      value={orderData.deliveryDate}
                      onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                      className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Customer Information */}
              {orderStep === 2 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Company Name *
                      </label>
                      <Input
                        placeholder="Your company name"
                        value={orderData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Contact Person *
                      </label>
                      <Input
                        placeholder="Full name"
                        value={orderData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={orderData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Phone Number *
                      </label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={orderData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Shipping & Requirements */}
              {orderStep === 3 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Destination Country *
                      </label>
                      <Select value={orderData.country} onValueChange={(value) => handleInputChange('country', value)}>
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
                        value={orderData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="h-12 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Delivery Address *
                    </label>
                    <Textarea
                      placeholder="Complete delivery address including postal code"
                      value={orderData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="text-base focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Special Requirements (Optional)
                    </label>
                    <Textarea
                      placeholder="Any special packaging, handling, or delivery requirements..."
                      value={orderData.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                      rows={4}
                      className="text-base focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Enhanced Action Buttons */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={orderStep === 1}
                  className="h-12 px-8 text-base group"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Previous Step
                </Button>

                {orderStep < 3 ? (
                  <Button
                    type="button"
                    variant="hero"
                    onClick={handleNextStep}
                    disabled={!isStepValid(orderStep)}
                    className="h-12 px-8 text-base group"
                  >
                    Next Step
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="hero"
                    disabled={!isStepValid(orderStep)}
                    className="h-12 px-8 text-base group"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Submit Order Request
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <Card className="shadow-soft card-gradient hover:shadow-elegant transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                We'll respond to your order request within 24 hours with a detailed quote.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft card-gradient hover:shadow-elegant transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Payment</h3>
              <p className="text-muted-foreground text-sm">
                Multiple payment options available including bank transfer and credit terms.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft card-gradient hover:shadow-elegant transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-botanical/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-botanical" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Air freight delivery ensures your flowers arrive fresh at their destination.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft card-gradient hover:shadow-elegant transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                Premium quality flowers with freshness guarantee and quality assurance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-3xl font-bold text-foreground mb-6 font-playfair">
              Why Choose Credible Blooms?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Global Export Expertise</h4>
                <p className="text-muted-foreground">25+ years of experience in international flower exports</p>
              </div>
              <div className="text-center">
                <Flower className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Premium Quality</h4>
                <p className="text-muted-foreground">Highest quality standards with sustainable farming practices</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-botanical mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Reliable Service</h4>
                <p className="text-muted-foreground">Consistent delivery and exceptional customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;