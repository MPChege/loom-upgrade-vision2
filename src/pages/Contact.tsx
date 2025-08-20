import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Scroll animation hooks
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: infoRef, isVisible: isInfoVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: formRef, isVisible: isFormVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: noticeRef, isVisible: isNoticeVisible } = useScrollAnimation({ threshold: 0.5 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-secondary-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6 font-playfair">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your flower export journey? Get in touch with our team
            for quotes, product information, or any questions you may have.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button variant="hero" size="lg" className="group">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isInfoVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-playfair">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you with all your flower export needs.
                Whether you're a new customer or looking to expand your current orders,
                we're ready to serve you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  info: ["+254 123 456 789", "+254 987 654 321"],
                  bgColor: "bg-primary/10",
                  iconColor: "text-primary"
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: ["info@credibleblooms.co.ke", "sales@credibleblooms.co.ke"],
                  bgColor: "bg-secondary/10",
                  iconColor: "text-secondary"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: ["Naivasha, Kenya", "2050m above sea level"],
                  bgColor: "bg-primary/10",
                  iconColor: "text-primary"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  info: ["Monday - Friday: 6:00 AM - 6:00 PM", "Saturday: 6:00 AM - 2:00 PM"],
                  bgColor: "bg-accent/10",
                  iconColor: "text-accent-foreground"
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card
                    key={contact.title}
                    className={`border-0 shadow-soft card-gradient hover:shadow-elegant transition-shadow duration-300 ${
                      isInfoVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`${contact.bgColor} p-3 rounded-lg`}>
                          <Icon className={`h-6 w-6 ${contact.iconColor}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{contact.title}</h4>
                          {contact.info.map((line, i) => (
                            <p key={i} className="text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Contact Options */}
            <div className={`bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10 transition-all duration-700 delay-800 ${
              isInfoVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                Other Ways to Connect
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• WhatsApp: +254 123 456 789</p>
                <p>• Skype: credible.blooms</p>
                <p>• LinkedIn: Credible Blooms Kenya</p>
                <p>• Instagram: @credibleblooms</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 delay-400 ${
              isFormVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-12 scale-95'
            }`}
          >
            <Card className="border-0 shadow-elegant hover:shadow-3d transition-shadow duration-500">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-playfair">
                    Send Us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your flower export needs..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full group h-12 text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Notice */}
        <div
          ref={noticeRef}
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isNoticeVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft inline-block">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Response Time:</span> We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
