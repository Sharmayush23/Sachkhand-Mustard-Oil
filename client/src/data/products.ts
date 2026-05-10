/// <reference types="vite/client" />
export interface ProductTheme {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    surface: string;
    textPrimary?: string;
    textSecondary?: string;
}

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
    theme?: ProductTheme;
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
import mustardOilImg from "@/assets/products/final-images/mustard-oil.png";
import cottonOilImg from "@/assets/products/final-images/cotton-seed-refined-oil.png";
import sunflowerOilImg from "@/assets/products/final-images/sunflower-oil.png";
import cottonseedCakeImg from "@/assets/products/final-images/cotton-seed-cake.jpeg";
import cattleFeedImg from "@/assets/products/final-images/cattle-feed.png";

// Hardcoded Sachkhand Products
export const products: Product[] = [
    {
        id: "mustard-oil",
        name: "Mustard Oil",
        category: "oils",
        description: "Traditionally cold-pressed mustard oil that matches strict purity and health standards.",
        features: ["100% Pure", "Cold Pressed", "No Chemicals", "Sharp Aroma"],
        gaugeRange: "500ml, 1L, 2L, 5L",
        material: "Prime Mustard Seeds",
        coating: "None (Pure Oil)",
        application: "Cooking & Preservation",
        image: mustardOilImg,
        theme: {
            primary: "45 100% 50%",       // Golden Button #FFB300 (High contrast on Red)
            secondary: "48 100% 45%",     // Mustard Yellow
            accent: "42 100% 50%",        // Golden Accent
            bg: "0 72% 35%",             // Rich Red BG #9c1a1a
            surface: "0 0% 100%",
            textPrimary: "0 0% 100%",      // White Text
            textSecondary: "0 0% 90%"     // Light Gray
        }
    },
    {
        id: "cotton-refined-oil",
        name: "Cotton Refined Oil",
        category: "oils",
        description: "High-quality refined cotton oil, ideal for light cooking and crispy frying.",
        features: ["Light & Neutral", "High Smoke Point", "Healthy Frying"],
        gaugeRange: "13kg, 15kg",
        material: "",
        coating: "",
        application: "Salad Dressing",
        image: cottonOilImg,
        theme: {
            primary: "0 84% 50%",         // Red Button #E51C23
            secondary: "0 66% 47%",       // Primary Red
            accent: "0 0% 98%",           // Accent
            bg: "220 60% 20%",            // Deep Blue BG #14213d
            surface: "0 0% 100%",
            textPrimary: "0 0% 100%",      // White Text
            textSecondary: "0 0% 90%"     // Light Gray
        }
    },
    {
        id: "sunflower-oil",
        name: "Sunflower Oil",
        category: "oils",
        description: "Light and healthy sunflower oil, perfect for everyday cooking and keeping your heart healthy.",
        features: ["Heart Healthy", "Light & Neutral", "Zero Cholesterol", "Rich in Vitamin E"],
        gaugeRange: "1L, 2L, 5L",
        material: "Sunflower Seeds",
        coating: "Refined",
        application: "Daily Cooking & Frying",
        image: sunflowerOilImg,
        theme: {
            primary: "123 46% 34%",       // Green for health
            secondary: "45 100% 50%",     // Bright Yellow
            accent: "55 100% 60%",        // Light Accent
            bg: "45 40% 96%",             // Cream BG #fcf7e9
            surface: "0 0% 100%",
            textPrimary: "0 0% 15%",      // Darkened Text
            textSecondary: "0 0% 40%"     // Muted Text
        }
    },
    {
        id: "cottonseed-cake",
        name: "Cottonseed Cake",
        category: "cattle-feed",
        description: "Nutritious cottonseed cake, a high-protein supplement for livestock health.",
        features: ["High Protein", "Energy Rich", "Natural Fiber", "Livestock Growth"],
        gaugeRange: "25kg, 50kg Bags",
        material: "Cottonseeds",
        coating: "Pressed Cake",
        application: "Ideal for milking cows",
        image: cottonseedCakeImg,
        theme: {
            primary: "0 84% 50%",         // Vibrant Red (from bag)
            secondary: "215 80% 30%",     // Deep Blue (from Sachkhand logo)
            accent: "142 45% 45%",        // Grass Green (from background)
            bg: "120 20% 97%",            // Very Light Green Tint
            surface: "0 0% 100%",
            textPrimary: "215 80% 25%",   // Dark Blue
            textSecondary: "215 40% 40%"   // Muted Blue
        }
    },
    {
        id: "cattle-feed",
        name: "Cattle Feed",
        category: "cattle-feed",
        description: "Premium balanced cattle feed for optimal health and milk production.",
        features: ["Balanced Diet", "Mineral Fortified", "Milk Yield Plus", "Healthy Choice"],
        gaugeRange: "50kg Bags",
        material: "Multigrain Mix",
        coating: "Pelletized",
        application: "For milking cattle and buffaloes",
        image: cattleFeedImg,
        theme: {
            primary: "0 84% 50%",         // Red Button #E51C23
            secondary: "0 66% 47%",       // Strong Red
            accent: "45 89% 57%",         // Accent Yellow
            bg: "45 40% 96%",             // Cream/Light BG
            surface: "0 0% 100%",
            textPrimary: "215 80% 30%",   // Blue Text #0f3d7a
            textSecondary: "215 40% 45%"  // Muted Blue
        }
    }
];
