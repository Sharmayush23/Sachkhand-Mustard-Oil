import { motion } from "framer-motion";
import { Cpu, Cog, Users, Target, TrendingUp, Clock, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "Sophisticated knitting machines and hosiery machines used to produce individual articles to an advanced degree of product completion. Our technology ensures precision at every step.",
  },
  {
    icon: Cog,
    title: "Precision Manufacturing",
    description: "Our facilities boast sophisticated machining equipment, ensuring the precise manufacture of all machine parts to consistently high accuracy standards that exceed industry benchmarks.",
  },
  {
    icon: Users,
    title: "Skilled Assembly",
    description: "Highly skilled technicians meticulously assemble machines. Each undergoes rigorous quality control inspections throughout manufacturing and final testing before delivery.",
  },
  {
    icon: Target,
    title: "Strategy & Planning",
    description: "A strategic plan focused on business mid- to long-term goals, explaining the basic strategy for achieving them through innovation, quality, and customer satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Business growth is a function of the business lifecycle, industry growth trend, and owner's desire for equity value creation. We continuously invest in expanding our capabilities.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on our ability to fulfill transactions within the promised time period, ensuring client satisfaction and maintaining long-term business relationships.",
  },
];

const capabilities = [
  {
    icon: CheckCircle,
    title: "ISO Certified Manufacturing",
    description: "Our manufacturing processes are ISO certified, ensuring consistent quality and adherence to international standards.",
  },
  {
    icon: Shield,
    title: "Quality Control Lab",
    description: "State-of-the-art quality control laboratory with advanced testing equipment for comprehensive product evaluation.",
  },
  {
    icon: Cog,
    title: "R&D Center",
    description: "Dedicated research and development center for continuous product innovation and process improvement.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Over 200 trained professionals with expertise in needle manufacturing and quality assurance.",
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
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#1A1A1A] via-[#262626] to-[#1A1A1A] overflow-hidden">
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
              Our Infrastructure
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-facilities-title">
              State-of-the-Art Facilities
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-facilities-description">
              Where precision meets innovation. Our manufacturing plant is
              equipped with cutting-edge machinery ensuring the highest quality
              standards in every needle produced.
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
              Manufacturing Excellence
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Our Capabilities
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From advanced machinery to skilled workforce, our facilities are
              designed to deliver excellence at every stage of production.
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
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
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
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold"
            >
              Key Strengths
            </motion.h2>
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

      <section className="py-16 bg-gradient-to-br from-[#1A1A1A] to-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">50,000+</div>
              <div className="text-white/60 mt-2">Sq. Ft. Facility</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">200+</div>
              <div className="text-white/60 mt-2">Skilled Workers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">50+</div>
              <div className="text-white/60 mt-2">Machines</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent">24/7</div>
              <div className="text-white/60 mt-2">Production</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
