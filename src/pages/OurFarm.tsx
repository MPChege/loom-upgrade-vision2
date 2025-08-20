import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Droplets, Sun, Mountain, Leaf, Package, Clock, Play, Calendar, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OurFarm = () => {
  const [activeTab, setActiveTab] = useState('flower-farm');

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const flowerAdvantages = [
    {
      icon: Mountain,
      title: '2050 Meters Above Sea Level',
      description: 'Our high-altitude location provides optimal growing conditions with cooler temperatures and intense sunlight.'
    },
    {
      icon: Sun,
      title: 'Perfect Climate',
      description: 'With over 12 hours of daylight year-round and consistent temperatures, our flowers develop rich colors and strong stems.'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Our advanced drip irrigation and rainwater harvesting systems conserve this precious resource.'
    },
    {
      icon: Leaf,
      title: 'Rich Volcanic Soil',
      description: 'The naturally fertile soil of the Kenyan highlands provides ideal nutrition for our flowers.'
    },
    {
      icon: Package,
      title: 'Modern Technology',
      description: 'Climate-controlled greenhouses and monitoring systems ensure optimal growing conditions.'
    },
    {
      icon: Leaf,
      title: 'Low Carbon Footprint',
      description: 'Solar power and sustainable practices reduce our environmental impact.'
    }
  ];

  const flowerSpecialties = [
    {
      name: 'Premium Roses',
      varieties: '15+ varieties',
      description: 'Our signature product with over 15 varieties in different colors and sizes.',
      image: '/src/assets/rose-bouquet.jpg'
    },
    {
      name: 'Spray Roses',
      varieties: 'Multi-headed blooms',
      description: 'Multi-headed roses perfect for bouquets and arrangements.',
      image: '/src/assets/hero-flowers.jpg'
    },
    {
      name: 'Carnations',
      varieties: 'Standard and spray',
      description: 'Available in standard and spray varieties with excellent vase life.',
      image: '/src/assets/greenhouse.jpg'
    },
    {
      name: 'Hypericum',
      varieties: 'Berries for texture',
      description: 'Beautiful berries that add texture and interest to arrangements.',
      image: '/src/assets/hero-flowers.jpg'
    },
    {
      name: 'Lisianthus',
      varieties: 'Elegant ruffled petals',
      description: 'Elegant blooms resembling roses with delicate ruffled petals.',
      image: '/src/assets/rose-bouquet.jpg'
    },
    {
      name: 'Seasonal Specialties',
      varieties: 'Rotating selection',
      description: 'Rotating selection of seasonal flowers to complement our core offerings.',
      image: '/src/assets/greenhouse.jpg'
    }
  ];

  const farmGallery = [
    {
      image: '/src/assets/greenhouse.jpg',
      title: 'State-of-the-art Greenhouses',
      description: 'Our modern greenhouses with rows of premium flowers'
    },
    {
      image: '/src/assets/hero-flowers.jpg',
      title: 'Expert Harvesting',
      description: 'Our skilled team carefully harvesting roses'
    },
    {
      image: '/src/assets/rose-bouquet.jpg',
      title: 'Farm Operations',
      description: 'Watch our behind-the-scenes video tour'
    },
    {
      image: '/src/assets/greenhouse.jpg',
      title: 'Premium Quality',
      description: 'Close-up of our premium quality blooms'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sliding Images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Sliding background images */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-1"
               style={{ backgroundImage: 'url(/src/assets/greenhouse.jpg)' }} />
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-2"
               style={{ backgroundImage: 'url(/src/assets/hero-flowers.jpg)' }} />
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-3"
               style={{ backgroundImage: 'url(/src/assets/rose-bouquet.jpg)' }} />
        </div>
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
              Our Farm
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Explore our state-of-the-art flower farms in Kenya
            </p>
            <Button variant="hero" size="xl" className="group">
              <a href="#farm-overview" className="flex items-center gap-2">
                Explore Farms
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Farm Overview */}
      <section id="farm-overview" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Dual Farm System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our operations span two specialized farms, each designed for optimal production 
              and sustainability
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="flower-farm" className="text-lg font-semibold">
                🌸 Flower Farm (CB1)
              </TabsTrigger>
              <TabsTrigger value="crops-farm" className="text-lg font-semibold">
                🌾 Crops Farm (CB2)
              </TabsTrigger>
            </TabsList>

            {/* Flower Farm Tab */}
            <TabsContent value="flower-farm" className="space-y-16">
              {/* Farm Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground font-playfair">
                    Flower Farm (CB1) - Primary Production
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span><strong>Location:</strong> Naivasha, Kenya • 2050m above sea level</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-green-600" />
                      <span><strong>Products:</strong> Premium roses, spray roses, carnations, hypericum, and seasonal specialties</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-green-600" />
                      <span><strong>Water Source:</strong> Advanced drip irrigation and rainwater harvesting systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span><strong>Growing Method:</strong> Climate-controlled greenhouses spanning 35 hectares</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span><strong>Shipping Time:</strong> 24-48 hours to Europe, Middle East, and Asia</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/src/assets/greenhouse.jpg" alt="Flower Farm CB1" 
                       className="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* Prime Location */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-4 font-playfair">Prime Location</h4>
                <h5 className="text-xl font-semibold mb-4">The Perfect Growing Environment</h5>
                <p className="text-green-100 mb-6">
                  Located in Naivasha, Kenya at an altitude of 2050 meters above sea level, our farm benefits from ideal growing conditions that are unmatched by many other regions.
                </p>
                <p className="text-green-100 mb-6">
                  The combination of rich volcanic soil, abundant sunshine, and cool temperatures creates the perfect environment for growing vibrant, long-lasting flowers with exceptional stem length, bloom size, and color intensity.
                </p>
                <p className="text-green-100 mb-6">
                  Our farm spans over 35 hectares of land with state-of-the-art greenhouses that provide controlled growing environments while implementing sustainable water management systems and solar energy to minimize our environmental impact.
                </p>
                <p className="text-green-100">
                  Kenya's central location also provides logistical advantages, allowing us to ship fresh-cut flowers to Europe, the Middle East, and Asia within 24-48 hours of harvesting.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule a Farm Visit
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Farm Gallery */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8 font-playfair text-center">
                  Visual Experience
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Farm Gallery
                </h4>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  Take a visual tour of our facilities, fields, and operations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {farmGallery.map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={item.image} alt={item.title} 
                           className="w-full h-48 object-cover" />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Video Tour Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-2xl text-center">
                <Play className="h-16 w-16 mx-auto mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4 font-playfair">Virtual Farm Tour</h3>
                <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                  Can't visit us in person? Experience our farm from anywhere with our immersive virtual tour. 
                  Explore our greenhouses, packing facilities, and learn about our sustainable practices from the comfort of your device.
                </p>
                <Button variant="hero" size="xl" className="group">
                  <a href="/virtual-tour" className="flex items-center gap-2">
                    Start Virtual Tour
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Flower Farm Advantages */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8 font-playfair text-center">
                  Our Advantages
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                  What Makes Our Farm Special
                </h4>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  Our unique combination of location, climate, and technology creates the perfect environment for growing exceptional flowers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {flowerAdvantages.map((advantage, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <advantage.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">{advantage.title}</h4>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Flower Specialties */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8 font-playfair text-center">
                  Our Specialties
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                  What We Grow
                </h4>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  We specialize in a variety of premium flowers, each grown with attention to detail and quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {flowerSpecialties.map((specialty, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img src={specialty.image} alt={specialty.name} 
                           className="w-full h-32 object-cover" />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{specialty.name}</h4>
                        <p className="text-sm text-green-600 font-medium mb-2">{specialty.varieties}</p>
                        <p className="text-sm text-muted-foreground">{specialty.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="hero" size="lg" className="group">
                    <a href="/products" className="flex items-center gap-2">
                      View Our Products
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Crops Farm Tab */}
            <TabsContent value="crops-farm" className="space-y-16">
              {/* Farm Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground font-playfair">
                    Crops Farm (CB2) - Sustainable Agriculture
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span><strong>Location:</strong> Nakuru Region, Kenya</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-green-600" />
                      <span><strong>Products:</strong> Seedlings, fruits, vegetables, maize, tomatoes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-green-600" />
                      <span><strong>Water Source:</strong> Drip irrigation and rainwater collection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span><strong>Growing Method:</strong> Organic farming and permaculture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span><strong>Established:</strong> 2015</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/src/assets/hero-flowers.jpg" alt="Crops Farm CB2" 
                       className="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* Sustainable Agriculture */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-4 font-playfair">Sustainable Agriculture</h4>
                <h5 className="text-xl font-semibold mb-4">Our Crop Production</h5>
                <p className="text-green-100 mb-6">
                  At our Crops Farm (CB2), we focus on sustainable farming practices that prioritize environmental stewardship and food security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold mb-2">Diversified Crop Production</h6>
                    <p className="text-green-100 text-sm">
                      Our Crops Farm operates on principles of organic farming and permaculture, growing a diverse range of crops including vegetables, fruits, maize, and tomatoes.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2">Integrated Pest Management</h6>
                    <p className="text-green-100 text-sm">
                      We use integrated pest management techniques that minimize chemical inputs while maintaining high yields and quality standards.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2">Seedling Production</h6>
                    <p className="text-green-100 text-sm">
                      Our seedling production facility provides healthy starts for both our farm and local farmers, contributing to food security in the region.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2">Community Support</h6>
                    <p className="text-green-100 text-sm">
                      We support local communities with eco-friendly farming practices and contribute to regional food security.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule a Farm Visit
                  </Button>
                </div>
              </div>

              {/* Video Tour Section for CB2 */}
              <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white p-8 rounded-2xl text-center">
                <Play className="h-16 w-16 mx-auto mb-6 text-orange-200" />
                <h3 className="text-3xl font-bold mb-4 font-playfair">Virtual Crops Farm Tour</h3>
                <p className="text-xl text-orange-100 mb-6 max-w-3xl mx-auto">
                  Experience our sustainable agriculture practices and see how we grow healthy, organic crops 
                  while supporting local communities and maintaining environmental stewardship.
                </p>
                <Button variant="hero" size="xl" className="group">
                  <a href="/virtual-tour" className="flex items-center gap-2">
                    Start Virtual Tour
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour Integration */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Play className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience our farms from anywhere in the world with our immersive virtual tours. 
            See our operations, meet our team, and understand our commitment to quality and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <a href="/virtual-tour" className="flex items-center gap-2">
                Flower Farm Tour (CB1)
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="group border-white text-white hover:bg-white hover:text-green-600">
              <a href="/virtual-tour" className="flex items-center gap-2">
                Crops Farm Tour (CB2)
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFarm;
