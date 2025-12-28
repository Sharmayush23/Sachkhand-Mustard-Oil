/// <reference types="vite/client" />
export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    features: string[];
    gaugeRange: string;
    material: string;
    coating: string;
    application: string;
    badge?: string;
    image: string;
    images?: string[];
}

// Helper to deduce category from name
function deduceCategory(name: string): string {
    const n = name.toLowerCase();
    if (n.includes("kachi") || n.includes("ghani") || n.includes("cold")) return "kachi-ghani";
    if (n.includes("hair") || n.includes("care")) return "hair-care";
    return "cooking-oil";
}

// Helper to deduce description
function deduceDescription(name: string): string {
    if (name.includes("Kachi") || name.includes("Ghani")) return "Traditionally cold-pressed mustard oil, high in natural antioxidants and sharp flavor.";
    if (name.includes("Hair")) return "Nutrient-rich mustard oil perfect for deep conditioning and scalp health.";
    return "100% pure mustard oil, ideal for daily Indian cooking and immunity boosting.";
}

// Automatically import all images from the assets/products directory
// Use absolute path from Vite root (client directory)
const productImages = import.meta.glob('/src/assets/products/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

// Hardcoded Sachkhand Mustard Oil Products
export const products: Product[] = [
    {
        id: "sachkhand-kachi-ghani-1",
        name: "Sachkhand Kachi Ghani Mustard Oil",
        category: "kachi-ghani",
        description: "Traditionally cold-pressed mustard oil, high in natural antioxidants and sharp flavor. Pure and chemical-free.",
        features: ["100% Pure", "Cold Pressed", "No Chemicals", "Sharp Aroma"],
        gaugeRange: "500ml, 1L, 2L, 5L",
        material: "Prime Mustard Seeds",
        coating: "None (Pure Oil)",
        application: "Cooking & Preservation",
        image: "/src/assets/products/new_product_1.png",
    },
    {
        id: "sachkhand-yellow-mustard-2",
        name: "Sachkhand Yellow Mustard Oil",
        category: "cooking-oil",
        description: "Mild and healthy yellow mustard oil, ideal for daily cooking and heart health.",
        features: ["Heart Healthy", "Low Absorption", "Zero Cholesterol", "Rich in Omega-3"],
        gaugeRange: "1L, 2L, 5L",
        material: "Yellow Mustard Seeds",
        coating: "None (Pure Oil)",
        application: "Daily Frying & Sautéing",
        image: "/src/assets/products/new_product_2.png",
    },
    {
        id: "sachkhand-pure-hair-oil-3",
        name: "Sachkhand Pure Hair Oil",
        category: "hair-care",
        description: "Traditional mustard oil for deep hair conditioning and scalp health. Promotes hair growth naturally.",
        features: ["Deep Conditioning", "Scalp Health", "Natural Shine", "Toxin Free"],
        gaugeRange: "200ml, 500ml",
        material: "Selected Seeds",
        coating: "None (Pure Oil)",
        application: "Hair & Body Massage",
        image: "/src/assets/products/new_product_3.png",
    }
];

// Explicit Transfer Needle fallback if needed, but only if not found in folders.
// User requested "start adding the images to the each product divs", suggesting folders are key.
// We'll trust the dynamic generation.
