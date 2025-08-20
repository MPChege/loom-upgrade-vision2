import { useEffect } from 'react';
import { ArrowRight, Leaf, Droplets, Recycle, Sun, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Sustainability = () => {
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

  const initiatives = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Closed-loop water recycling system',
      metric: '80%',
      detail: 'water reduction through recycling and efficient irrigation'
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: '100% organic waste composting and plastic recycling',
      metric: '100%',
      detail: 'organic waste composted and recycled'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar panels providing clean energy',
      metric: '70%',
      detail: 'of energy needs met by solar power'
    },
    {
      icon: Leaf,
      title: 'Integrated Pest Management',
      description: 'Biological controls and natural predators',
      metric: '90%',
      detail: 'reduction in chemical use through IPM techniques'
    },
    {
      icon: Users,
      title: 'Fair Labor Practices',
      description: 'Fair wages, healthcare, career development',
      metric: '100%',
      detail: 'of employees receive fair wages and benefits'
    },
    {
      icon: Award,
      title: 'Community Support',
      description: 'Investment in local schools, healthcare, infrastructure',
      metric: '500+',
      detail: 'community members directly supported'
    }
  ];

  const certifications = [
    'Fairtrade', 'Kenya Flower Council', 'SEDEX', 'Global G.A.P', 'MPS-ABC', 'Rainforest Alliance'
  ];

  const roadmap = [
    {
      year: '2024',
      goals: ['Carbon neutrality', 'Expand rainwater harvesting', 'Biodiversity enhancement']
    },
    {
      year: '2025',
      goals: ['100% renewable energy', 'Zero-waste packaging', 'Employee development programs']
    },
    {
      year: '2026',
      goals: ['Net positive water impact', 'Regenerative agriculture', 'Supplier standards implementation']
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
              Our Commitment to
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Sustainability
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Growing flowers in harmony with nature and communities
            </p>
            <Button variant="hero" size="xl" className="group">
              <a href="#sustainability-approach" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Approach */}
      <section id="sustainability-approach" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Sustainable By Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sustainability isn't just a goal—it's built into every aspect of our operations. 
              From water conservation to community development, we're creating a model for 
              responsible flower farming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground font-playfair">
                Built for the Future
              </h3>
              <p className="text-lg text-muted-foreground">
                Our sustainability approach integrates environmental stewardship, social responsibility, 
                and economic viability. We believe that the best flowers come from farms that 
                respect and enhance their environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Climate-smart agriculture practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Circular economy principles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Biodiversity conservation</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/src/assets/greenhouse.jpg" alt="Greenhouse with solar panels" 
                     className="rounded-lg shadow-lg" />
                <img src="/src/assets/hero-flowers.jpg" alt="Water conservation system" 
                     className="rounded-lg shadow-lg mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Our Sustainability Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six key areas where we're making a real difference for our planet and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={initiative.title} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <initiative.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {initiative.description}
                  </p>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {initiative.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {initiative.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Measurable Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our commitment to sustainability delivers real, measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-green-100">Water Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-green-100">Solar Powered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-green-100">Waste Composted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">90%</div>
              <div className="text-green-100">Chemical Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              International Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six international standards that validate our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {certifications.map((cert) => (
              <Card key={cert} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certification Process</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <span className="ml-3">Rigorous Assessment</span>
              </div>
              <ArrowRight className="h-6 w-6 text-green-600" />
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <span className="ml-3">Continuous Monitoring</span>
              </div>
              <ArrowRight className="h-6 w-6 text-green-600" />
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <span className="ml-3">Transparent Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Roadmap */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Our Sustainability Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A clear path forward to an even more sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((year) => (
              <Card key={year.year} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-green-600 mb-6">{year.year}</div>
                  <ul className="space-y-3 text-left">
                    {year.goals.map((goal, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
