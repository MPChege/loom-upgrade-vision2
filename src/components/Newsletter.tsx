import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription success
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about our latest flowers and offers.",
    });

    // Reset after 3 seconds for demo purposes
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-playfair">
            Stay in Bloom
          </h2>
          
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new flower varieties, 
            seasonal offers, and expert tips from our Kenyan flower farms.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
                />
                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="bg-primary-foreground/10 rounded-lg p-6 border border-primary-foreground/20">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  Welcome to our community!
                </h3>
                <p className="text-primary-foreground/80">
                  You're now subscribed to receive our latest updates.
                </p>
              </div>
            </div>
          )}

          <p className="text-primary-foreground/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;