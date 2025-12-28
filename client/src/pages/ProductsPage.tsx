import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Factory, ArrowRight, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const categories = [
  { value: "all", label: "All Collections" },
  { value: "kachi-ghani", label: "Kachi Ghani" },
  { value: "cooking", label: "Daily Cooking" },
  { value: "hair-care", label: "Hair & Skin Care" },
  { value: "preservation", label: "Preservation" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function ProductsPage() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-20 min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Pure tradition in every drop. Healthy oils for every kitchen and wellness need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-transparent focus:bg-background focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={selectedCategory}
                variants={stagger}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div key={product.id} variants={fadeInUp} layout>
                    <Link href={`/products/${product.id}`}>
                      <Card className="group h-full overflow-hidden border-0 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-xl transform hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-zinc-800 flex items-center justify-center p-6">
                          {product.badge && (
                            <Badge className="absolute top-4 right-4 z-10 bg-primary text-white shadow-lg">
                              {product.badge}
                            </Badge>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <Factory className="h-16 w-16 text-muted-foreground/30" />
                          )}
                          <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <Button size="sm" className="w-full bg-white text-black hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 font-semibold shadow-lg border-0">
                              View Details
                            </Button>
                          </div>
                        </div>

                        <CardContent className="p-5">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                            {categories.find(c => c.value === product.category)?.label || product.category}
                          </p>
                          <h3 className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span className="bg-muted px-2 py-0.5 rounded text-xs font-medium">
                              {product.gaugeRange}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                            <span className="truncate max-w-[120px]">{product.material}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5 border-t">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 font-heading">Interested in Bulk Orders?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            We supply pure mustard oil for retail and commercial use. Contact our team for customized bulk pricing.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 h-12 text-lg">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
