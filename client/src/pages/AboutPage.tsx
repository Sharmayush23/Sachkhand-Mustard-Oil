import { motion } from "framer-motion";
import { Award, Users, Target, Eye, Shield, Zap, HeartHandshake, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sachkhandBottleHero from "@/assets/products/sachkhand_bottle_hero.png";

const stats = [
  { value: "45+", label: "Years", description: "Legacy of Purity" },
  { value: "Khanna", label: "Origin", description: "Purity Hub" },
  { value: "100%", label: "Pure", description: "No Chemicals" },
  { value: "#1", label: "Choice", description: "In Punjab" },
];

const values = [
  {
    icon: Zap,
    title: "Natural Extraction",
    description: "We use specialized extraction techniques to produce mustard oil with unmatched purity, ensuring natural nutrients and authentic taste.",
  },
  {
    icon: Shield,
    title: "100% Purity Assurance",
    description: "Every bottle undergoes rigorous multi-stage quality checks to ensure it meets the highest health and safety standards.",
  },
  {
    icon: HeartHandshake,
    title: "Widespread Trust",
    description: "We serve households across the region, providing a reliable source of healthy oil for every kitchen's needs.",
  },
  {
    icon: Target,
    title: "Health Excellence",
    description: "Our priority is your family's health. We aim to provide mustard oil that enhances your meals and supports a healthy lifestyle.",
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

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
                About <span className="text-primary">Sachkhand</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With a legacy of over 45 years, Sachkhand has been at the forefront of providing pure, high-quality mustard oil to families across the region. Our commitment to traditional methods combined with modern quality control ensures that every drop of our oil is as pure as nature intended.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] blur-3xl" />
              <img
                src={sachkhandBottleHero}
                alt="Sachkhand Mustard Oil"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
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
              Our Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold"
            >
              Mission & Vision
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to empower every kitchen through the production of high-purity, healthy mustard oil. We strive to maintain the highest standards of quality through continuous innovation while honoring our pure heritage.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where Sachkhand is synonymous with health and purity in every household. We aim to be the most trusted brand for mustard oil, driving food standards through quality leadership and unyielding honesty.
                  </p>
                </CardContent>
              </Card>
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
              Our Values
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Committed to Purity
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Every aspect of our business reflects our dedication to quality,
              technical innovation, and industrial excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gradient-green flex items-center justify-center flex-shrink-0 shadow-md">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground/70 mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
