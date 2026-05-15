import { type User, type InsertUser, type Product, type InsertProduct, type TimelineEvent, type InsertTimelineEvent, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "node:crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;

  getTimelineEvents(): Promise<TimelineEvent[]>;

  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

const initialProducts: Product[] = [
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    category: "oils",
    description: "Traditionally cold-pressed mustard oil with matches purity and health standards.",
    features: ["100% Pure", "Cold Pressed", "No Chemicals", "Sharp Aroma"],
    gaugeRange: "500ml, 1L, 2L, 5L",
    material: "Prime Mustard Seeds",
    coating: "None (Pure Oil)",
    application: "Cooking & Preservation",
    badge: "Pure",
    image: "/src/assets/products/final-images/mustard-oil.png",
  },
  {
    id: "cotton-refined-oil",
    name: "Cotton Refined Oil",
    category: "oils",
    description: "High-quality refined cotton oil, ideal for light cooking and crispy frying.",
    features: ["Light & Neutral", "High Smoke Point", "Healthy Frying", "Vitamin Fortified"],
    gaugeRange: "1L, 2L, 5L, 15L",
    material: "Refined Cottonseeds",
    coating: "Filtered",
    application: "Deep Frying & Frying",
    badge: "Premium",
    image: "/src/assets/products/final-images/cotton-seed-refined-oil.png",
  },
  {
    id: "mustard-cake",
    name: "Mustard Cake",
    category: "cattle-feed",
    description: "Nutritious mustard cake, a high-protein supplement for livestock health and milk production.",
    features: ["High Protein", "Energy Rich", "Natural Fiber", "Livestock Growth"],
    gaugeRange: "25kg, 50kg Bags",
    material: "Mustard Seeds",
    coating: "Pressed Cake",
    application: "Ideal for milking cows and cattle",
    badge: "Nutritious",
    image: "/src/assets/products/final-images/sunflower-oil.png",
  },
  {
    id: "cottonseed-cake",
    name: "Cottonseed Cake",
    category: "cattle-feed",
    description: "Nutritious cottonseed cake, a high-protein supplement for livestock health.",
    features: ["High Protein", "Energy Rich", "Natural Fiber", "Livestock Growth"],
    gaugeRange: "25kg, 50kg Bags",
    material: "Residual Cottonseeds",
    coating: "Pressed Cake",
    application: "Animal Nutrition",
    badge: "Nutritious",
    image: "/src/assets/products/final-images/cotton-seed-cake.jpeg",
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
    application: "Daily Cattle Nutrition",
    badge: "Premium Feed",
    image: "/src/assets/products/final-images/cattle-feed.png",
  }
];

const initialTimelineEvents: TimelineEvent[] = [
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
    description: "As the demand for our pure mustard oil grew, we expanded our facilities, integrating traditional Kachi Ghani extraction methods with modern quality standards.",
  },
  {
    id: "global-trust",
    year: 1998,
    title: "A Benchmark of Quality",
    description: "By the late 90s, Sachkhand became a trusted name across Punjab and expanded into neighboring states.",
  },
  {
    id: "modern-heritage",
    year: 2010,
    title: "Modernizing Purity Control",
    description: "While keeping our core traditional values, we integrated state-of-the-art filtration and automated quality testing.",
  },
  {
    id: "quality-certification",
    year: 2018,
    title: "Recognition of Purity",
    description: "Sachkhand reached new heights of excellence, receiving quality certifications that validated our commitment to 100% pure manufacturing.",
  },
  {
    id: "legacy-continues",
    year: 2024,
    title: "The Future of Pure Health",
    description: "Today, Sachkhand stands as Khanna's premier mustard oil company, continuing to serve with the same passion for purity.",
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private timelineEvents: Map<string, TimelineEvent>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.timelineEvents = new Map();
    this.contactInquiries = new Map();

    initialProducts.forEach(product => {
      this.products.set(product.id, product);
    });

    initialTimelineEvents.forEach(event => {
      this.timelineEvents.set(event.id, event);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async getTimelineEvents(): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).sort((a, b) => a.year - b.year);
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
