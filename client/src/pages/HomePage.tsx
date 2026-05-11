import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, CheckCircle, Factory, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products as allProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { HeroCarousel } from "@/components/HeroCarousel";

const stats = [
  { value: "45+", label: "Years", description: "Legacy of Purity" },
  { value: "10k+", label: "Families", description: "Trusted Daily" },
  { value: "100%", label: "Pure", description: "Chemical Free" },
  { value: "#1", label: "Choice", description: "In Khanna" },
];

const landingProducts = allProducts.map(p => ({
  title: p.name,
  description: p.description,
  category: p.category === "oils" ? "Purity First" : "Nutritious Feed",
  queryCategory: p.category,
  image: p.image,
  id: p.id
}));

const values = [
  {
    icon: Zap,
    title: "Traditional Method",
    description: "We use the ancient cold-pressing (Kachi Ghani) method to extract oil, ensuring all nutrients stay intact.",
  },
  {
    icon: Users,
    title: "Trusted by Generations",
    description: "Over 45 years of experience in delivering quality that mothers trust for their families.",
  },
  {
    icon: Shield,
    title: "100% Quality",
    description: "Every drop of Sachkhand oil is guaranteed pure, manufactured to meet the highest health standards.",
  },
  {
    icon: Factory,
    title: "Farm to Kitchen",
    description: "Directly sourced from the finest mustard seeds, processed hygienically in our state-of-the-art facility.",
  },
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

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroCarousel />
      
      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Our Range
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Purity in Every Drop
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Expertly extracted to deliver the health and authentic taste that your family deserves.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Rooted in Tradition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Over four decades of commitment to health, honesty, and the authentic taste of Punjab.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center group">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Ready to Upgrade to{" "}
                <span className="text-accent">Authentic</span> Purity?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0">
                Switch to Sachkhand today and experience the health and tradition of world-class oil production.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" variant="cta" className="gap-2" data-testid="button-contact-us-cta">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/facilities">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white border-border text-foreground hover:bg-slate-50"
                    data-testid="button-view-facilities"
                  >
                    View Facilities
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[300px] sm:h-[350px] lg:h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-muted"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.6503205423073!2d76.22507217564969!3d30.687345574606137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910110880088143%3A0x4c9927b87939ef63!2sSACHKHAND%20MUSTARD%20OIL!5e1!3m2!1sen!2sin!4v1775569397290!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
