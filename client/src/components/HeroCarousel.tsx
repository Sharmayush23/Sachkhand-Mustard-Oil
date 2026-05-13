import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import img1 from "@/assets/sachkhand/1.png";
import img2 from "@/assets/sachkhand/2.png";
import img3 from "@/assets/sachkhand/3.png";
import img4 from "@/assets/sachkhand/4.png";
import img5 from "@/assets/sachkhand/5.png";

const slides = [
  { bg: img1, alt: "Sachkhand Slide 1" },
  { bg: img2, alt: "Sachkhand Slide 2" },
  { bg: img3, alt: "Sachkhand Slide 3" },
  { bg: img4, alt: "Sachkhand Slide 4" },
  { bg: img5, alt: "Sachkhand Slide 5" }
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Improved Auto-scroll logic
  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Slightly faster for better engagement

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFF8E1]">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-video md:aspect-[16/9] max-w-[1920px] mx-auto">
        <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-full w-full pl-0">
                <div className="relative w-full aspect-video md:aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <img
                    src={slide.bg}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators - Themed with Green */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 transition-all rounded-full ${
                current === i ? "w-10 bg-[#2E7D32]" : "w-3 bg-[#2E7D32]/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
