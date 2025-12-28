import { motion } from "framer-motion";
import { Award, Users, Target, Eye, Shield, Zap, HeartHandshake, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "45+", label: "Years", description: "Legacy of Purity" },
  { value: "Khanna", label: "Origin", description: "Purity Hub" },
  { value: "100%", label: "Pure", description: "No Chemicals" },
  { value: "#1", label: "Choice", description: "In Punjab" },
];

const values = [
  {
    icon: Zap,
    title: "Pure Extraction",
    description: "We use traditional Kachi Ghani techniques to produce mustard oil with unmatched purity, ensuring natural nutrients and authentic taste.",
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
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-about-subtitle">
              Our Purity Heritage
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-about-title">
              Purity Excellence Since 1968
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-about-description">
              Born from a vision to provide pure, chemical-free mustard oil to every home. Our legacy is built on honesty, quality, and the relentless pursuit of traditional perfection.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-primary font-semibold uppercase tracking-wider text-sm" data-testid="text-story-subtitle">
                The Sachkhand Story
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold" data-testid="text-story-title">
                Pure Heart, Traditional Standards
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started in 1968 in the heart of Khanna, Sachkhand began with a simple mission: to provide the pure, unadulterated mustard oil that every healthy kitchen demanded.
                </p>
                <p>
                  Our journey started with a single extraction unit, driven by a commitment to quality and health. We believed then, as we do now, that purity is the foundation of a healthy life.
                </p>
                <p>
                  Over the decades, we have evolved into a trusted brand, adopting modern hygienic controls while preserving traditional methods. Every bottle of Sachkhand oil carries the legacy of over five decades of honesty.
                </p>
                <p>
                  Today, we are proud to be a trusted partner for families across Punjab, providing not just oil, but a promise of health and reliable quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="relative">
                <img
                  src="/src/assets/products/new_product_1.png"
                  alt="Pure Oil Extraction at Sachkhand"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-lg p-4">
                  <p className="font-heading font-semibold text-white text-lg">
                    Hygienic Extraction
                  </p>
                  <p className="text-white/70">Our Traditional Method</p>
                </div>
              </div>
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
                    Our mission is to empower every kitchen through the production of high-purity, healthy mustard oil. We strive to maintain the highest standards of quality through continuous innovation while honoring traditional extraction methods.
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
                    We envision a future where Sachkhand Mustard Oil is synonymous with health and purity in every household. We aim to be the most trusted brand for mustard oil, driving food standards through quality leadership and unyielding honesty.
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
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
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

      <section className="py-16 bg-[#1A1A1A]">
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
                <div className="text-xs text-white/50 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
                <div className="text-sm text-white/30 mt-1">
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
