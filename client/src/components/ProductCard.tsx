import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  layout?: boolean | "position" | "size" | "preserve-aspect";
}

export function ProductCard({ product, className, layout }: ProductCardProps) {
  const { theme, name, description, image, id, category } = product;

  // Fallback colors if theme is missing
  const primaryColor = theme?.primary || "142 47% 33%";
  const secondaryColor = theme?.secondary || "142 47% 10%";
  const accentColor = theme?.accent || "45 100% 50%";

  // Determine category label
  const categoryLabel = category === "oils" ? "Purity First" : "Nutritious Feed";

  return (
    <motion.div
      layout={layout}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={cn("h-full", className)}
    >
      <Link href={`/products/${id}`}>
        <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl relative bg-white">
          {/* Dynamic Background Tint */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 opacity-[0.03] group-hover:opacity-[0.08]"
            style={{
              background: `linear-gradient(135deg, hsl(${primaryColor}) 0%, hsl(${secondaryColor}) 100%)`
            }}
          />

          <CardContent className="p-0 flex flex-col h-full relative z-10">
            {/* Image Section */}
            <div className="h-64 flex items-center justify-center p-8 relative overflow-hidden">
              {/* Subtle background glow matching product colors */}
              <div 
                className="absolute inset-0 opacity-20 blur-3xl transform scale-150 transition-transform duration-700 group-hover:scale-175"
                style={{
                  background: `radial-gradient(circle, hsl(${primaryColor} / 0.15) 0%, transparent 70%)`
                }}
              />
              
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                  loading="lazy"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                  <span className="text-primary/40 font-bold text-4xl">{name[0]}</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 pt-0 flex flex-col flex-grow text-center">
              <span 
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block transition-colors duration-300"
                style={{ color: `hsl(${accentColor})` }}
              >
                {categoryLabel}
              </span>
              
              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                {description}
              </p>

              <div className="mt-auto">
                <div 
                  className="h-1 w-12 mx-auto rounded-full opacity-30 transition-all duration-300 group-hover:w-24 group-hover:opacity-100"
                  style={{ backgroundColor: `hsl(${primaryColor})` }}
                />
              </div>
            </div>
          </CardContent>
          
          {/* Hover Border Glow */}
          <div 
            className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-colors duration-500 pointer-events-none"
            style={{ 
              borderColor: `hsl(${accentColor} / 0.1)` 
            }}
          />
        </Card>
      </Link>
    </motion.div>
  );
}
