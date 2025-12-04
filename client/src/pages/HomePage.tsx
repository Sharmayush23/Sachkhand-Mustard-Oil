import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, CheckCircle, Factory, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "55+", label: "Years", description: "Legacy of Innovation" },
  { value: "50+", label: "Nations", description: "Global Reach" },
  { value: "100%", label: "Quality", description: "Guarantee" },
  { value: "#1", label: "Indian", description: "Origin Leader" },
];

const products = [
  {
    title: "Circular Knitting Needles",
    description: "High-precision needles for circular knitting machines ensuring uniform loop formation.",
    category: "Circular Knitting",
  },
  {
    title: "Hosiery Needles",
    description: "Premium hosiery needles designed for durability and consistent performance.",
    category: "Hosiery",
  },
  {
    title: "Flat Knitting Needles",
    description: "Precision flat needles for power-flat and hand-flat knitting applications.",
    category: "Flat Knitting",
  },
];

const values = [
  {
    icon: Zap,
    title: "Continuous Improvement",
    description: "Committed to innovation, we constantly enhance our processes and products to meet evolving customer needs.",
  },
  {
    icon: Users,
    title: "Expert Employees",
    description: "Our skilled team, led by experienced quality controllers, meticulously oversees production processes.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We prioritize quality at Mefa Needles, subjecting each product to rigorous quality checks.",
  },
  {
    icon: Factory,
    title: "State-of-Art Facilities",
    description: "Sophisticated machinery ensuring the precise manufacture of all machine parts to high accuracy standards.",
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
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1A1A1A] via-[#262626] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm" data-testid="badge-hero">
                <Award className="h-4 w-4 text-accent" />
                <span>India's Largest Needle Manufacturing Group</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight" data-testid="text-hero-title">
                Precision in Every{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stitch
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl" data-testid="text-hero-description">
                Building the future of knitting since 1968. Premium quality
                circular, flat, and hosiery knitting needles trusted by
                industries across 50+ nations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="gap-2" data-testid="button-explore-products">
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10" data-testid="button-our-story">
                    Our Story
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <img
                    src={founderImage}
                    alt="Mr. Prem Nath Ji - Founder of MEFA Needles"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-4">
                    <p className="font-heading font-semibold text-white">
                      Mr. Prem Nath Ji
                    </p>
                    <p className="text-sm text-white/70">Founder & Visionary</p>
                    <p className="text-xs text-accent mt-1 italic">
                      "Excellence through precision, quality through dedication"
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <Globe className="h-8 w-8 text-accent mb-2" />
                <p className="text-white font-semibold">50+</p>
                <p className="text-xs text-white/60">Countries Served</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <p className="text-white font-semibold">ISO Certified</p>
                <p className="text-xs text-white/60">Quality Standards</p>
              </motion.div>
            </motion.div>
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
              Our Products
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Premium Quality Needles
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Engineered with precision for optimal performance in textile
              manufacturing applications worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div key={product.title} variants={fadeInUp}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <Factory className="h-12 w-12 text-primary/60" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-heading text-xl font-semibold mb-3">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
              Committed to Excellence
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Five decades of industry leadership built on innovation, quality,
              and customer satisfaction.
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
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3">
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

      <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#262626] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Ready to Partner with India's{" "}
              <span className="text-accent">Leading</span> Needle Manufacturer?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Get in touch with our team to discuss your requirements and
              discover how MEFA Needles can elevate your textile production.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-contact-us-cta">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/facilities">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                  data-testid="button-view-facilities"
                >
                  View Facilities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
