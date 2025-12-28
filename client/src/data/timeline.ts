export interface TimelineEvent {
    id: string;
    year: number;
    title: string;
    description: string;
}

export const timelineEvents: TimelineEvent[] = [
    {
        id: "founding-legacy",
        year: 1968,
        title: "The Vision of Purity",
        description: "The journey of Sachkhand began in Khanna, Punjab, with a commitment to pure Mustard Oil. Our founder envisioned providing high-quality, chemical-free oil to local families, setting a new standard for purity and health.",
    },
    {
        id: "expansion",
        year: 1982,
        title: "Scaling Tradition",
        description: "As the demand for our pure mustard oil grew, we expanded our facilities, integrating traditional Kachi Ghani extraction methods with modern quality standards. This ensured that every drop of Sachkhand oil met the highest purity benchmarks.",
    },
    {
        id: "global-trust",
        year: 1998,
        title: "A Benchmark of Quality",
        description: "By the late 90s, Sachkhand Mustard Oil became a trusted name across Punjab and expanded into neighboring states. Our commitment to quality and health earned us the loyalty of thousands of households.",
    },
    {
        id: "modern-heritage",
        year: 2010,
        title: "Modernizing Purity Control",
        description: "While keeping our core traditional values, we integrated state-of-the-art filtration and automated quality testing to ensure unmatched purity in every single bottle produced.",
    },
    {
        id: "quality-certification",
        year: 2018,
        title: "Recognition of Purity",
        description: "Sachkhand reached new heights of excellence, receiving quality certifications that validated our commitment to 100% pure manufacturing. We became the preferred choice for health-conscious families.",
    },
    {
        id: "legacy-continues",
        year: 2024,
        title: "The Future of Pure Health",
        description: "Today, Sachkhand stands as Khanna's premier mustard oil company. We continue to serve with the same passion for purity and quality that we started with over five decades ago.",
    },
];
