import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Factory, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";

const categories = [
  { value: "all", label: "All Products" },
  { value: "circular", label: "Circular Knitting" },
  { value: "hosiery", label: "Hosiery" },
  { value: "flat", label: "Flat Knitting" },
  { value: "transfer", label: "Transfer Needles" },
];

const gaugeRanges = [
  { value: "all", label: "All Gauges" },
  { value: "7-15", label: "7G - 15G" },
  { value: "16-24", label: "16G - 24G" },
  { value: "25-40", label: "25G - 40G" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGauge, setSelectedGauge] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const apiUrl = selectedCategory === "all" 
    ? "/api/products" 
    : `/api/products?category=${selectedCategory}`;
    
  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products", { category: selectedCategory }],
    queryFn: async () => {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  const parseGaugeRange = (gaugeStr: string): [number, number] | null => {
    const matches = gaugeStr.match(/(\d+).*?(\d+)/);
    if (matches) {
      return [parseInt(matches[1], 10), parseInt(matches[2], 10)];
    }
    return null;
  };

  const checkGaugeOverlap = (productGauge: string | undefined, filterGauge: string): boolean => {
    if (!productGauge || filterGauge === "all") return true;
    
    const productRange = parseGaugeRange(productGauge);
    const filterRange = parseGaugeRange(filterGauge);
    
    if (!productRange || !filterRange) return true;
    
    const [productMin, productMax] = productRange;
    const [filterMin, filterMax] = filterRange;
    
    return productMin <= filterMax && productMax >= filterMin;
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGauge = checkGaugeOverlap(product.gaugeRange, selectedGauge);
    
    return matchesSearch && matchesGauge;
  });

  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-[#1A1A1A] via-[#262626] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-products-subtitle">
              Our Products
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-products-title">
              Premium Quality Needles
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-products-description">
              Discover our comprehensive range of high-performance needles
              engineered for excellence in textile manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filters:</span>
            </div>

            <div className="flex flex-wrap gap-4 flex-1">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48" data-testid="select-category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value} data-testid={`option-category-${cat.value}`}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedGauge} onValueChange={setSelectedGauge}>
                <SelectTrigger className="w-40" data-testid="select-gauge">
                  <SelectValue placeholder="Gauge" />
                </SelectTrigger>
                <SelectContent>
                  {gaugeRanges.map((gauge) => (
                    <SelectItem key={gauge.value} value={gauge.value} data-testid={`option-gauge-${gauge.value}`}>
                      {gauge.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-20" data-testid="loading-products">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading products...</span>
            </div>
          ) : error ? (
            <div className="text-center py-16" data-testid="error-products">
              <p className="text-destructive text-lg mb-4">Failed to load products</p>
              <Button variant="outline" onClick={() => window.location.reload()} data-testid="button-retry">
                Try Again
              </Button>
            </div>
          ) : (
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <Card
                    className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden"
                    data-testid={`card-product-${product.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                        {product.badge && (
                          <Badge
                            className="absolute top-4 right-4 bg-primary text-white"
                            variant="default"
                            data-testid={`badge-product-${product.id}`}
                          >
                            {product.badge}
                          </Badge>
                        )}
                        <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Factory className="h-14 w-14 text-primary/60" />
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2" data-testid={`text-category-${product.id}`}>
                          {categories.find((c) => c.value === product.category)?.label}
                        </p>
                        <h3 className="font-heading text-xl font-semibold mb-3" data-testid={`text-name-${product.id}`}>
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`text-description-${product.id}`}>
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features?.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="pt-4 border-t">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Gauge Range</p>
                              <p className="font-medium" data-testid={`text-gauge-${product.id}`}>{product.gaugeRange}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Coating</p>
                              <p className="font-medium" data-testid={`text-coating-${product.id}`}>{product.coating}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!isLoading && !error && filteredProducts.length === 0 && (
            <div className="text-center py-16" data-testid="empty-products">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedGauge("all");
                  setSearchQuery("");
                }}
                data-testid="button-clear-filters"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl font-bold" data-testid="text-cta-title">
              Need Custom Specifications?
            </h2>
            <p className="text-muted-foreground" data-testid="text-cta-description">
              Our team can help you find the perfect needle solution for your
              specific requirements. Contact us for custom orders and bulk
              inquiries.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-request-quote">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
