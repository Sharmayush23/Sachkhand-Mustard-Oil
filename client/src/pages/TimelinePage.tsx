import { motion } from "framer-motion";

import { Calendar, Award, Globe, Factory, CheckCircle, Zap, Users, Building } from "lucide-react";
import { timelineEvents } from "@/data/timeline";

const iconMap: Record<number, typeof Building> = {
  1968: Building,
  1975: Zap,
  1982: Factory,
  1990: Award,
  1998: CheckCircle,
  2008: Globe,
  2015: Zap,
  2023: Users,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function TimelinePage() {
  const isLoading = false;
  const error = null;

  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-timeline-subtitle">
                Our Purity Journey
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-timeline-title">
                Sachkhand Heritage
              </h1>
              <p className="text-white/70 text-lg mb-8" data-testid="text-timeline-description">
                Over 45 years of unyielding purity. Explore the milestones that made Sachkhand the most trusted name for high-quality, pure mustard oil.
              </p>
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-accent" />
                <span className="text-white/80" data-testid="text-timeline-dates">1968 - Present</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
                <img
                  src="/src/assets/products/new_product_1.png"
                  alt="Pure Purity at Sachkhand"
                  className="relative w-full max-w-md mx-auto rounded-xl shadow-2xl"
                  data-testid="img-founder-timeline"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-lg p-4">
                  <p className="font-heading font-semibold text-white text-lg" data-testid="text-founder-name-timeline">
                    Tradition of Purity
                  </p>
                  <p className="text-white/70" data-testid="text-founder-title-timeline">Established in 1968</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4" data-testid="text-story-subtitle">
              The Sachkhand Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold" data-testid="text-story-title">
              Timeline of Purity
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary" />

            {timelineEvents.map((event: any, index: number) => {
              const Icon = iconMap[event.year] || Building;
              const color = index % 2 === 0 ? "primary" : "accent";

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  data-testid={`timeline-event-${event.year}`}
                >
                  <div
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 ${color === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                  />

                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                  >
                    <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                            }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`font-heading font-bold text-xl ${color === "primary"
                            ? "text-primary"
                            : "text-accent"
                            }`}
                          data-testid={`text-year-${event.year}`}
                        >
                          {event.year}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-title-${event.year}`}>
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-desc-${event.year}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white" data-testid="text-legacy-title">
              Continuing the Purity
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" data-testid="text-legacy-description">
              Today, Sachkhand Mustard Oil continues to honor its roots by delivering the same high-purity quality that families have trusted for decades.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-years">45+</div>
                <div className="text-sm text-white/60 mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-families">10k+</div>
                <div className="text-sm text-white/60 mt-1">Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-purity">100%</div>
                <div className="text-sm text-white/60 mt-1">Pure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-quality">Top</div>
                <div className="text-sm text-white/60 mt-1">Choice</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
