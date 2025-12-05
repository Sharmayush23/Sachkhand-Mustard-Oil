import { type User, type InsertUser, type Product, type InsertProduct, type TimelineEvent, type InsertTimelineEvent, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

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
    id: "circular-knitting",
    name: "Circular Knitting Needles",
    category: "circular",
    description: "High-precision needles designed for high-speed circular knitting machines. Ensures uniform loop formation and extended service life.",
    features: ["Chrome Coating", "12G - 40G", "High Carbon Steel"],
    gaugeRange: "12G - 40G",
    material: "High Carbon Steel",
    coating: "Chrome / Titanium",
    application: "Single/Double Jersey",
    badge: "Best Seller",
    image: "/assets/products/3cfc0363cc030 (1).png",
  },
  {
    id: "hosiery-needles",
    name: "Hosiery Needles",
    category: "hosiery",
    description: "Premium hosiery needles engineered for durability and consistent performance in high-volume production environments.",
    features: ["Titanium Coating", "15G - 32G", "Precision Ground"],
    gaugeRange: "15G - 32G",
    material: "Premium Steel Alloy",
    coating: "Titanium",
    application: "Hosiery Production",
    badge: "Popular",
    image: "/assets/products/c51ae525a34e2.png",
  },
  {
    id: "flat-knitting",
    name: "Flat Knitting Needles",
    category: "flat",
    description: "Precision flat needles for power-flat and hand-flat knitting applications with superior stitch quality.",
    features: ["Multi-Gauge", "Hand & Power", "Long Life"],
    gaugeRange: "7G - 18G",
    material: "High Carbon Steel",
    coating: "Chrome",
    application: "Flat Knitting Machines",
    badge: null,
    image: "/assets/products/c789b5d6c6ff8.png",
  },
  {
    id: "transfer-needles",
    name: "Transfer Needles",
    category: "transfer",
    description: "Specialized transfer needles for complex pattern creation and efficient stitch transfer operations.",
    features: ["Precision Tips", "Smooth Transfer", "Durable"],
    gaugeRange: "10G - 24G",
    material: "Tool Steel",
    coating: "Chrome / Nickel",
    application: "Pattern Knitting",
    badge: null,
    image: "/assets/products/3cfc0363cc030 (1).png",
  },
  {
    id: "interlock-needles",
    name: "Interlock Needles",
    category: "circular",
    description: "Designed specifically for interlock knitting machines, producing smooth, reversible fabrics.",
    features: ["Double-Sided", "Interlock Ready", "Premium Finish"],
    gaugeRange: "14G - 28G",
    material: "High Carbon Steel",
    coating: "Chrome",
    application: "Interlock Fabrics",
    badge: "New",
    image: "/assets/products/c51ae525a34e2.png",
  },
  {
    id: "rib-needles",
    name: "Rib Needles",
    category: "circular",
    description: "Optimized for rib knitting applications with excellent elasticity and pattern definition.",
    features: ["Rib Optimized", "High Elasticity", "Pattern Ready"],
    gaugeRange: "12G - 24G",
    material: "High Carbon Steel",
    coating: "Titanium",
    application: "Rib Fabrics",
    badge: null,
    image: "/assets/products/c789b5d6c6ff8.png",
  },
];

const initialTimelineEvents: TimelineEvent[] = [
  {
    id: "1968-founding",
    year: 1968,
    title: "MEFA Needles Founded",
    description: "Mr. Prem Nath Ji established MEFA Needles in Ludhiana, Punjab, with a vision to serve the hosiery industry with high-quality knitting needles. The company began manufacturing Hand-Flat knitting needles.",
  },
  {
    id: "1975-expansion",
    year: 1975,
    title: "Product Line Expansion",
    description: "MEFA expanded its product range to include Power-Flat knitting needles, meeting the growing demands of the mechanized textile industry and establishing itself as a comprehensive needle supplier.",
  },
  {
    id: "1982-circular",
    year: 1982,
    title: "Circular Knitting Needles Launch",
    description: "Introduction of circular knitting needles marked a significant milestone, positioning MEFA as a complete solution provider for all types of knitting machinery in the hosiery sector.",
  },
  {
    id: "1990-quality",
    year: 1990,
    title: "Quality Standards Achievement",
    description: "MEFA achieved international quality certifications, reinforcing its commitment to precision manufacturing and establishing trust with customers across India and abroad.",
  },
  {
    id: "1998-anniversary",
    year: 1998,
    title: "30 Years of Excellence",
    description: "Celebrating three decades of service to the hosiery industry, MEFA had become synonymous with quality and reliability, serving thousands of customers across the nation.",
  },
  {
    id: "2008-global",
    year: 2008,
    title: "Global Expansion",
    description: "MEFA began exporting to international markets, bringing Indian needle manufacturing excellence to the global stage and serving customers across multiple continents.",
  },
  {
    id: "2015-modernization",
    year: 2015,
    title: "Modernization Initiative",
    description: "Major investment in state-of-the-art manufacturing equipment and quality control systems, ensuring the highest precision standards in every needle produced.",
  },
  {
    id: "2023-legacy",
    year: 2023,
    title: "55+ Years of Legacy",
    description: "Today, MEFA Needles stands as India's largest needle manufacturing group, serving 50+ nations with a complete range of knitting needles and continuing the founder's vision of excellence.",
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
