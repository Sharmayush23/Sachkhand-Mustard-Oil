import { motion } from "framer-motion";
import { Award, Users, Target, Eye, Shield, Zap, HeartHandshake, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "55+", label: "Years", description: "Legacy of Innovation" },
  { value: "50+", label: "Nations", description: "Global Reach" },
  { value: "100%", label: "Quality", description: "Guarantee" },
  { value: "#1", label: "Indian", description: "Origin Leader" },
];

const values = [
  {
    icon: Zap,
    title: "Continuous Improvement",
    description: "Committed to innovation, we constantly enhance our processes and products to meet evolving customer needs. Through ongoing research and development, we stay ahead in technological advancements.",
  },
  {
    icon: Users,
    title: "Expert Employees",
    description: "Our skilled team, led by experienced quality controllers, meticulously oversees production processes. With their keen eye for detail and dedication, they ensure every product meets our exacting standards.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Support",
    description: "Our dedicated customer service team provides comprehensive assistance, guiding you to maximize product cost-effectiveness and usage. We're committed to ensuring your needs are met promptly.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We prioritize quality at Mefa Needles, subjecting each product to rigorous checks. From raw material selection to final inspection, our stringent processes guarantee reliability and satisfaction.",
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
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-about-subtitle">
              Our Heritage
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-about-title">
              An Industry Legacy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-about-description">
              Building the future of knitting since 1968 through innovation,
              precision, and an unwavering commitment to quality.
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
                Our Story
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold" data-testid="text-story-title">
                Five Decades of Excellence
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started in early 1968, Our Trademark Mefa has served the
                  community of hosiery industry for more than 50 years by
                  providing a vast variety of Hand-Flat, Power-Flat and circular
                  knitting needles.
                </p>
                <p>
                  Started from the mind of a brilliant engineer and a very
                  futuristic visionary,{" "}
                  <strong className="text-foreground">Mr. Prem Nath Ji</strong>,
                  Mefa Needles is undoubtedly the biggest needle making group of
                  Indian Origin.
                </p>
                <p>
                  Having handpicked the best engineers and craftsmen from all
                  around the country, the precision, consistency and a constant
                  learning has made this oldest manufacturing unit in the country
                  thrive in the pursuit to provide better for customers with a
                  high-end product that guarantees satisfaction.
                </p>
                <p>
                  The state of the art facility comes with a constant promise of
                  a better tomorrow.
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Mr. Prem Nath Ji - Founder of MEFA Needles"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-lg p-4">
                  <p className="font-heading font-semibold text-white text-lg">
                    Mr. Prem Nath Ji
                  </p>
                  <p className="text-white/70">Founder & Visionary</p>
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to strengthen the business growth of our
                    customers with innovative market leading technologies to
                    deliver high-quality solutions that create value and reliable
                    competitive advantage for our clients around the world.
                    Founded by Mr. Prem Nath Ji, we continue his vision of
                    excellence and innovation.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where businesses prioritize consumer
                    demands, empowering individuals to make well-informed choices.
                    We are committed to sustainable practices that minimize our
                    environmental impact and promote transparency throughout our
                    operations. Embracing innovation, we aim to drive positive
                    change in the industry.
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
              Committed to Excellence
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Every aspect of our business reflects our dedication to quality,
              innovation, and customer satisfaction.
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
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

      <section className="py-16 bg-gradient-to-br from-[#1A1A1A] to-[#262626]">
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
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
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
