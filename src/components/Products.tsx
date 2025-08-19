import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const categories = ["All", "Extra Premium", "Premium", "Intermediate", "Spray Roses"];
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      name: "Pink Torch",
      category: "Extra Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Pink-Thorn-1.jpg",
      description: "Beautiful pink roses with exceptional longevity",
      rating: 5
    },
    {
      name: "Patz",
      category: "Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Patz-1.jpg",
      description: "Classic red roses perfect for any occasion",
      rating: 5
    },
    {
      name: "Snow Flake",
      category: "Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Snow-Flake-1.jpg",
      description: "Pure white roses symbolizing elegance",
      rating: 4
    },
    {
      name: "Moon Walk",
      category: "Extra Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Moon-Walk-1.jpg",
      description: "Unique lavender-toned roses with silver edges",
      rating: 5
    },
    {
      name: "Jumilia",
      category: "Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Jumilia-1.jpg",
      description: "Deep red roses with velvety texture",
      rating: 4
    },
    {
      name: "Red Ribbon",
      category: "Extra Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Red-Ribbon.jpg",
      description: "Premium red roses with exceptional quality",
      rating: 5
    },
    {
      name: "Espana",
      category: "Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Espana-2.jpg",
      description: "Vibrant orange-red roses with strong stems",
      rating: 4
    },
    {
      name: "Athena",
      category: "Extra Premium",
      image: "https://credibleblooms.co.ke/index/wp-content/uploads/2023/06/Athena.jpg",
      description: "Elegant cream roses with subtle pink edges",
      rating: 5
    }
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-playfair">
            Premium Rose Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite selection of premium roses, carefully cultivated 
            in the perfect climate of Kenya for exceptional quality and beauty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.name} 
              className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground">
                    {product.category}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "fill-accent text-accent" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="rose" size="xl">
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;