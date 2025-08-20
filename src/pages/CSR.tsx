import { useEffect } from 'react';
import { ArrowRight, GraduationCap, Home, Heart, Users, Award, Star, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CSR = () => {
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

  const csrInitiatives = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Built and support two local schools',
      metric: '500+',
      detail: 'children educated annually',
      color: 'blue'
    },
    {
      icon: Home,
      title: 'Housing Improvements',
      description: 'Employee housing program',
      metric: '200+',
      detail: 'improved homes for employee families',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'On-site clinic and medical support',
      metric: '2,000+',
      detail: 'medical treatments provided yearly',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Women\'s Empowerment',
      description: 'Leadership development program',
      metric: '150+',
      detail: 'women in leadership positions',
      color: 'purple'
    }
  ];

  const impactStories = [
    {
      name: 'Mary Njeri',
      role: 'Former scholarship recipient, now Agricultural Engineer',
      story: 'Mary received a full scholarship through our education program and is now working as an agricultural engineer, helping to improve farming practices in the region.',
      image: '/src/assets/hero-flowers.jpg'
    },
    {
      name: 'Grace Wambui',
      role: 'Production Team Lead, single mother',
      story: 'Grace has risen through the ranks to become a team lead, benefiting from our childcare support and leadership development programs.',
      image: '/src/assets/rose-bouquet.jpg'
    },
    {
      name: 'Dr. James Kamau',
      role: 'Local Health Center Director',
      story: 'Our water system improvements have helped the local health center provide better care to over 5,000 community members.',
      image: '/src/assets/greenhouse.jpg'
    }
  ];

  const awards = [
    {
      title: 'Best Agricultural Employer Award',
      organization: 'Kenya Employers Federation',
      year: '2022',
      description: 'Recognized for outstanding employee welfare and development programs'
    },
    {
      title: 'Community Impact Award',
      organization: 'International Flower Association',
      year: '2021',
      description: 'Honored for exceptional contributions to local community development'
    }
  ];

  const focusAreas = [
    'Education', 'Healthcare', 'Housing', 'Women\'s Empowerment', 'Water & Sanitation', 'Local Economy'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sliding Images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Sliding background images */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-1"
               style={{ backgroundImage: 'url(/src/assets/hero-flowers.jpg)' }} />
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-2"
               style={{ backgroundImage: 'url(/src/assets/greenhouse.jpg)' }} />
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide-3"
               style={{ backgroundImage: 'url(/src/assets/rose-bouquet.jpg)' }} />
        </div>
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
              Corporate Social
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Responsibility
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Growing communities alongside our flowers
            </p>
            <Button variant="hero" size="xl" className="group">
              <a href="#csr-philosophy" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CSR Philosophy */}
      <section id="csr-philosophy" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              We Grow Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our CSR approach goes beyond traditional corporate giving. We believe in creating 
              lasting positive change by investing in the communities where we operate, focusing 
              on education, healthcare, housing, and economic empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground font-playfair">
                Holistic Community Development
              </h3>
              <p className="text-lg text-muted-foreground">
                We take a comprehensive approach to community development, addressing multiple 
                interconnected needs. Our programs are designed to create sustainable, long-term 
                positive impact that benefits both our employees and the wider community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/src/assets/greenhouse.jpg" alt="Community development" 
                   className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Key CSR Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Our Key CSR Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four major programs that are transforming lives and building stronger communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {csrInitiatives.map((initiative, index) => (
              <Card key={initiative.title} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${initiative.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-${initiative.color}-200 transition-colors`}>
                    <initiative.icon className={`h-8 w-8 text-${initiative.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {initiative.description}
                  </p>
                  <div className={`text-3xl font-bold text-${initiative.color}-600 mb-2`}>
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

      {/* Community Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Community Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real numbers that show the positive change we're creating
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2,000+</div>
              <div className="text-blue-100">Medical Treatments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Improved Homes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Female Employment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Impact Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real people, real stories of transformation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={story.name} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <img src={story.image} alt={story.name} 
                       className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{story.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{story.role}</p>
                  <p className="text-muted-foreground text-sm">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry recognition for our commitment to community development and social responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={award.title} className="p-8 hover:shadow-xl transition-shadow">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Award className="h-12 w-12 text-blue-600 flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{award.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{award.organization} • {award.year}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Partner With Us
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We invite businesses, NGOs, and community groups to collaborate with us in creating 
            lasting positive change. Together, we can build stronger, more resilient communities.
          </p>
          <Button variant="hero" size="xl" className="group">
            <a href="/contact" className="flex items-center gap-2">
              Get In Touch
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CSR;
