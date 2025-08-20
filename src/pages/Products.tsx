import { useState, useEffect } from 'react';
import { ArrowRight, Search, Filter, Star, ShoppingCart, Eye, Globe, Leaf, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [language, setLanguage] = useState('en');

  // Scroll animation hooks
  const { elementRef: heroRef, isVisible: isHeroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: catalogRef, isVisible: isCatalogVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: filtersRef, isVisible: isFiltersVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: productsRef, isVisible: isProductsVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: qualityRef, isVisible: isQualityVisible } = useScrollAnimation({ threshold: 0.6 });

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

  const languages = {
    en: 'English',
    ar: 'العربية',
    nl: 'Nederlands',
    fr: 'Français',
    es: 'Español'
  };

  const categories = [
    { id: 'all', name: { en: 'All', ar: 'الكل', nl: 'Alle', fr: 'Tous', es: 'Todos' } },
    { id: 'extra-premium', name: { en: 'Extra Premium Cut Flowers', ar: 'زهور مقطوفة فائقة الجودة', nl: 'Extra Premium Snijbloemen', fr: 'Fleurs Coupées Extra Premium', es: 'Flores Cortadas Extra Premium' } },
    { id: 'premium', name: { en: 'Premium Cut Flowers', ar: 'زهور مقطوفة عالية الجودة', nl: 'Premium Snijbloemen', fr: 'Fleurs Coupées Premium', es: 'Flores Cortadas Premium' } },
    { id: 'spray-roses', name: { en: 'Spray Roses', ar: 'ورود سبري', nl: 'Spray Rozen', fr: 'Roses Spray', es: 'Rosas Spray' } },
    { id: 'intermediates', name: { en: 'Intermediates Cut Flowers', ar: 'زهور مقطوفة متوسطة', nl: 'Intermediaire Snijbloemen', fr: 'Fleurs Coupées Intermédiaires', es: 'Flores Cortadas Intermedias' } },
    { id: 'julietta', name: { en: 'Julietta Series', ar: 'سلسلة جولييتا', nl: 'Julietta Serie', fr: 'Série Julietta', es: 'Serie Julietta' } },
    { id: 'summer', name: { en: 'Summer Flowers', ar: 'زهور الصيف', nl: 'Zomerbloemen', fr: 'Fleurs d\'Été', es: 'Flores de Verano' } }
  ];

  const colors = [
    'All', 'Red', 'Pink', 'White', 'Yellow', 'Orange', 'Purple', 'Lavender', 'Cream', 'Mixed'
  ];

  const products = [
    {
      id: 1,
      name: 'Red Naomi',
      category: 'extra-premium',
      color: 'Red',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Exceptional red roses with velvety texture and long vase life',
      headSize: 'Large',
      length: '70-80cm',
      rating: 5,
      price: 2.50,
      isAvailable: true
    },
    {
      id: 2,
      name: 'White O\'Hara',
      category: 'extra-premium',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Pure white roses symbolizing purity and elegance',
      headSize: 'Large',
      length: '70-80cm',
      rating: 5,
      price: 2.75,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Pink Avalanche',
      category: 'premium',
      color: 'Pink',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Beautiful pink roses perfect for romantic arrangements',
      headSize: 'Medium',
      length: '60-70cm',
      rating: 4,
      price: 2.00,
      isAvailable: true
    },
    {
      id: 4,
      name: 'Yellow Finesse',
      category: 'premium',
      color: 'Yellow',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Bright yellow roses bringing sunshine to any bouquet',
      headSize: 'Medium',
      length: '60-70cm',
      rating: 4,
      price: 1.75,
      isAvailable: true
    },
    {
      id: 5,
      name: 'Pink Sensation',
      category: 'intermediates',
      color: 'Pink',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Lovely pink roses with a soft, romantic appeal',
      headSize: 'Medium',
      length: '50-60cm',
      rating: 4,
      price: 1.50,
      isAvailable: true
    },
    {
      id: 6,
      name: 'Red Intermediates',
      category: 'intermediates',
      color: 'Red',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Classic red roses with good value and quality',
      headSize: 'Medium',
      length: '50-60cm',
      rating: 4,
      price: 1.50,
      isAvailable: true
    },
    {
      id: 7,
      name: 'Peach Spray Roses',
      category: 'spray-roses',
      color: 'Orange',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Multiple blooms per stem in beautiful peach tones',
      headSize: 'Small',
      length: '40-50cm',
      rating: 4,
      price: 1.25,
      isAvailable: true
    },
    {
      id: 8,
      name: 'White Spray Roses',
      category: 'spray-roses',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=400&h=300&fit=crop&crop=center',
      description: 'Elegant white spray roses perfect for arrangements',
      headSize: 'Small',
      length: '40-50cm',
      rating: 4,
      price: 1.25,
      isAvailable: true
    }
  ];

  const getLocalizedName = (nameObj: Record<string, string>) => {
    return nameObj[language] || nameObj.en;
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesColor = selectedColor === 'All' || product.color === selectedColor;
    
    return matchesSearch && matchesCategory && matchesColor;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/20 to-secondary-50/20 pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`py-20 text-center transition-all duration-1000 ${
          isHeroVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Our Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6 font-playfair">
              Our Flower Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our premium quality blooms grown with care in the Kenyan highlands. 
              From extra premium roses to beautiful spray varieties, we offer the finest 
              selection for your floral needs.
            </p>
          </div>

          <Button variant="hero" size="xl" className="group">
            <a href="#product-catalog" className="flex items-center gap-2">
              Browse Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      {/* Advanced Filtering System */}
      <section 
        id="product-catalog" 
        ref={catalogRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          isCatalogVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Product Catalog
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find the perfect flowers for your needs with our advanced filtering system
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              {Object.entries(languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === code
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div 
            ref={filtersRef}
            className={`mb-12 space-y-6 transition-all duration-1000 delay-200 ${
              isFiltersVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "hero" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {getLocalizedName(category.name)}
                </Button>
              ))}
            </div>

            {/* Color Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "hero" : "outline"}
                  onClick={() => setSelectedColor(color)}
                  className="transition-all duration-200"
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div 
            ref={productsRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
              isProductsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isProductsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Product Badges */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {product.headSize}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={product.isAvailable ? "default" : "destructive"}>
                      {product.isAvailable ? 'In Stock' : 'Out of Stock'}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground font-playfair">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Head Size:</span>
                      <span className="font-medium">{product.headSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Length:</span>
                      <span className="font-medium">{product.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Color:</span>
                      <span className="font-medium">{product.color}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      <a href="/quote-request" className="flex items-center">
                        Request Quote
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedColor('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section 
        ref={qualityRef}
        className={`py-20 bg-gradient-to-b from-white to-green-50 transition-all duration-1000 ${
          isQualityVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Our Product Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every flower meets our strict quality control measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Optimal Harvesting",
                description: "Flowers are harvested at the perfect stage for maximum vase life and beauty.",
                color: "text-primary"
              },
              {
                icon: Package,
                title: "Rapid Cooling",
                description: "Immediate post-harvest cooling preserves freshness and extends shelf life.",
                color: "text-secondary"
              },
              {
                icon: Globe,
                title: "Quality Grading",
                description: "Rigorous grading ensures only the finest flowers reach our customers.",
                color: "text-botanical"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isQualityVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <Icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
