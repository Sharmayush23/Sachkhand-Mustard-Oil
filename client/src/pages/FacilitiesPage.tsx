import { motion } from "framer-motion";
import { Cpu, Cog, Users, Target, TrendingUp, Clock, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Cpu,
    title: "Purity Testing Lab",
    description: "We use advanced testing methods to ensure every batch of mustard oil is 100% pure and free from any adulterants.",
  },
  {
    icon: Cog,
    title: "Kachi Ghani Extraction",
    description: "Our traditional cold-pressing units are optimized for purity and nutrient retention, producing liters of healthy oil every hour.",
  },
  {
    icon: Shield,
    title: "Natural Filtration",
    description: "Our proprietary natural filtration process removes impurities while keeping the essential vitamins and pungent aroma intact.",
  },
  {
    icon: Target,
    title: "Seed Analysis",
    description: "Every batch of raw mustard seeds undergoes rigorous analysis to ensure only the finest quality seeds are used for extraction.",
  },
  {
    icon: TrendingUp,
    title: "Automated Hygienic Control",
    description: "We integrated automated bottling and sealing systems to maintain the highest levels of hygiene and prevent contamination.",
  },
  {
    icon: Clock,
    title: "Efficient Supply Chain",
    description: "Our facility is equipped with a modern warehouse and distribution system to ensure fresh oil reaches every household promptly.",
  },
];

const capabilities = [
  {
    icon: CheckCircle,
    title: "Quality Certified",
    description: "Our extraction unit operates under strict quality management systems, ensuring national food safety standards are met consistently.",
  },
  {
    icon: Shield,
    title: "Purity Guarantee",
    description: "We provide a 100% purity guarantee on every bottle, ensuring our oil is free from any chemicals or preservatives.",
  },
  {
    icon: Cog,
    title: "Traditional Methods",
    description: "We stick to the ancient Kachi Ghani method to preserve the authentic pungent taste and health benefits of mustard oil.",
  },
  {
    icon: Users,
    title: "Trusted Regionally",
    description: "With a strong presence across Punjab, we are a leading provider of pure mustard oil to healthy Indian kitchens.",
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

export default function FacilitiesPage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-center bg-[#1A1A1A] overflow-hidden">
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
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-facilities-subtitle">
              Our Production Process
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-facilities-title">
              State-of-the-Art Purity
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-facilities-description">
              Step into the world of traditional excellence. Where ancient wisdom meets modern hygiene to deliver 100% pure mustard oil for your home.
            </p>
          </motion.div>
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
              Pure Oil Production
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Our Commitment to Purity
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From seed analysis to traditional Kachi Ghani extraction, we ensure purity at every stage of oil production.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {facilities.map((facility) => (
              <motion.div key={facility.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                      <facility.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Why Choose Sachkhand
            </motion.p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Key Technical Strengths</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability) => (
              <motion.div key={capability.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <capability.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Trusted by Manufacturers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Suman Rani", role: "Homemaker", quote: "Sachkhand oil has the perfect pungent aroma that makes our traditional dishes taste authentic. My family loves it!" },
              { name: "Anil Verma", role: "Health Enthusiast", quote: "We've been using Sachkhand for over a decade. The purity and consistent quality help us maintain a healthy lifestyle." },
              { name: "Harish Kumar", role: "Local Restrauteur", quote: "Reliable partner for all our oil needs. Their oil enhances the flavor of our pickles and curries perfectly." }
            ].map((t) => (
              <Card key={t.name} className="border-0 shadow-lg bg-muted/50">
                <CardContent className="p-8 italic text-muted-foreground relative">
                  <span className="text-6xl text-primary/10 absolute top-4 left-4 font-serif">"</span>
                  <p className="relative z-10 mb-6">{t.quote}</p>
                  <div className="not-italic">
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">FAQ</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "What makes Sachkhand oil different?", a: "Our traditional Kachi Ghani extraction and rigorous purity testing ensure that Sachkhand oil is more flavorful and healthier than standard refined options." },
              { q: "Is your oil chemical-free?", a: "Yes, we guarantee that our mustard oil is 100% pure and free from any added chemicals or preservatives." },
              { q: "How do you ensure quality control?", a: "We use laboratory testing and automated hygienic bottling to ensure every single bottle meets our zero-adulteration policy." }
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6 shadow-sm border">
                <h3 className="font-heading font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">100%</div>
              <div className="text-white/60 mt-2">Pure Purity</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">45+</div>
              <div className="text-white/60 mt-2">Years of Legacy</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">Trusted</div>
              <div className="text-white/60 mt-2">By Thousands</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">Natural</div>
              <div className="text-white/60 mt-2">Nutrients Intact</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
