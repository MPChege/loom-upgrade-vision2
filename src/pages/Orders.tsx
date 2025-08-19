import { useState } from "react";
import { ShoppingCart, Package, Truck, CreditCard, User, MapPin, Phone, Calendar } from "lucide-react";
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
    { id: "extra-premium", name: "Extra Premium Roses", description: "Our finest quality roses" },
    { id: "premium", name: "Premium Roses", description: "High-quality roses for special occasions" },
    { id: "intermediate", name: "Intermediate Roses", description: "Great value roses" },
    { id: "spray", name: "Spray Roses", description: "Perfect for arrangements" }
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

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Place Your Order
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to import premium Kenyan roses? Fill out our order form and we'll 
            prepare a customized quote for your flower import needs.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                    orderStep >= step 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div 
                    className={`w-16 h-1 mx-2 transition-smooth ${
                      orderStep > step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Form */}
        <Card className="shadow-elegant animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {orderStep === 1 && <Package className="h-6 w-6 text-primary" />}
              {orderStep === 2 && <User className="h-6 w-6 text-primary" />}
              {orderStep === 3 && <Truck className="h-6 w-6 text-primary" />}
              <span>
                {orderStep === 1 && "Step 1: Product Details"}
                {orderStep === 2 && "Step 2: Customer Information"}
                {orderStep === 3 && "Step 3: Shipping & Special Requirements"}
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmitOrder}>
              {/* Step 1: Product Details */}
              {orderStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Flower Category
                    </label>
                    <Select value={orderData.flowerType} onValueChange={(value) => handleInputChange('flowerType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select flower category" />
                      </SelectTrigger>
                      <SelectContent>
                        {flowerCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-sm text-muted-foreground">{category.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Rose Variety
                    </label>
                    <Select value={orderData.variety} onValueChange={(value) => handleInputChange('variety', value)}>
                      <SelectTrigger>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Quantity (stems)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 10000"
                        value={orderData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Delivery Date
                      </label>
                      <Input
                        type="date"
                        value={orderData.deliveryDate}
                        onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Customer Information */}
              {orderStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Your company name"
                        value={orderData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contact Person
                      </label>
                      <Input
                        placeholder="Full name"
                        value={orderData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={orderData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={orderData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Shipping & Requirements */}
              {orderStep === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Destination Country
                      </label>
                      <Select value={orderData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
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
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City
                      </label>
                      <Input
                        placeholder="Destination city"
                        value={orderData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Delivery Address
                    </label>
                    <Textarea
                      placeholder="Complete delivery address including postal code"
                      value={orderData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requirements (Optional)
                    </label>
                    <Textarea
                      placeholder="Any special packaging, handling, or delivery requirements..."
                      value={orderData.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={orderStep === 1}
                >
                  Previous
                </Button>

                {orderStep < 3 ? (
                  <Button
                    type="button"
                    variant="hero"
                    onClick={handleNextStep}
                    disabled={!isStepValid(orderStep)}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="hero"
                    disabled={!isStepValid(orderStep)}
                    className="group"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Submit Order Request
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="shadow-soft card-gradient">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                We'll respond to your order request within 24 hours with a detailed quote.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft card-gradient">
            <CardContent className="p-6 text-center">
              <CreditCard className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Flexible Payment</h3>
              <p className="text-muted-foreground text-sm">
                Multiple payment options available including bank transfer and credit terms.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft card-gradient">
            <CardContent className="p-6 text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Air freight delivery ensures your flowers arrive fresh at their destination.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Orders;