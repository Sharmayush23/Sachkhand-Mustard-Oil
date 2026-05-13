import { motion } from "framer-motion";
import { Cpu, Cog, Target, TrendingUp, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Cpu,
    title: "Purity Testing Lab",
    description: "We use advanced testing methods to ensure every batch of mustard oil is 100% pure and free from any adulterants.",
  },
  {
    icon: Cog,
    title: "Natural Extraction",
    description: "We use our time-honored method to extract oil, ensuring all nutrients stay intact.",
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
      <section className="relative min-h-[60vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Subtle Brand Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-widest text-xs mb-2">
              Our Extraction Excellence
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Honoring <span className="text-primary italic">Purity</span>, <br />
              Preserving Tradition
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Step into our world of excellence. Where pure heritage wisdom meets modern hygiene to deliver 100% pure mustard oil for your home.
            </p>
            <div className="pt-8">
              <div className="inline-flex items-center gap-4 text-sm font-medium text-foreground/60 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
                <div className="flex items-center gap-2 border-r border-border pr-4">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Purity Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              The Science of Purity
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
            >
              Our Commitment to 100% Purity
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            >
              From rigorous seed analysis to the final natural extraction process, we ensure purity is never compromised at any stage of production.
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
                <Card className="h-full border border-border/50 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                      <facility.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute -right-20 bottom-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Real Experiences</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">Trusted by Home Cooks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Suman Rani", role: "Legacy Customer", quote: "Sachkhand oil has that authentic sharp pungency that we grew up with. It's the only oil I trust for my traditional pickles and curries." },
              { name: "Dr. Anil Verma", role: "Health Advocate", quote: "As someone who prioritizes natural nutrition, I recommend Sachkhand for its purity. It's essential for a healthy Indian heart." },
              { name: "Harish Kumar", role: "Restaurateur", quote: "We've tried many brands, but the consistency of Sachkhand is unmatched. It enhances the flavor of our signature snacks perfectly." }
            ].map((t) => (
              <Card key={t.name} className="border-0 shadow-xl bg-white dark:bg-zinc-900 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <CardContent className="p-10 italic text-muted-foreground relative">
                  <span className="text-8xl text-primary/5 absolute top-0 right-4 font-serif leading-none select-none">"</span>
                  <p className="relative z-10 mb-8 text-lg leading-relaxed">{t.quote}</p>
                  <div className="not-italic flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{t.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">{t.role}</p>
                    </div>
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
              { q: "What makes Sachkhand oil different?", a: "Our specialized natural extraction and rigorous purity testing ensure that Sachkhand oil is more flavorful and healthier than standard refined options." },
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">100%</div>
              <div className="text-muted-foreground mt-2">Pure Purity</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">45+</div>
              <div className="text-muted-foreground mt-2">Years of Legacy</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">Trusted</div>
              <div className="text-muted-foreground mt-2">By Thousands</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">Natural</div>
              <div className="text-muted-foreground mt-2">Nutrients Intact</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
