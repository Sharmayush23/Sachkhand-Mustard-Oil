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
    id: "sachkhand-kachi-ghani-1",
    name: "Sachkhand Kachi Ghani Mustard Oil",
    category: "kachi-ghani",
    description: "Traditionally cold-pressed mustard oil, high in natural antioxidants and sharp flavor. Pure and chemical-free.",
    features: ["100% Pure", "Cold Pressed", "No Chemicals", "Sharp Aroma"],
    gaugeRange: "500ml, 1L, 2L, 5L",
    material: "Prime Mustard Seeds",
    coating: "None (Pure Oil)",
    application: "Cooking & Preservation",
    badge: "Best Seller",
    image: "/assets/products/new_product_1.png",
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
    badge: "Healthy Choice",
    image: "/assets/products/new_product_2.png",
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
    badge: "Pure Natural",
    image: "/assets/products/new_product_3.png",
  }
];

const initialTimelineEvents: TimelineEvent[] = [
  {
    id: "1968-founding",
    year: 1968,
    title: "Sachkhand Founded",
    description: "Mr. Prem Nath Ji established Sachkhand in Khanna, Punjab, with a vision to serve families with 100% pure and healthy mustard oil. The company began with its first traditional Kachi Ghani unit.",
  },
  {
    id: "1980-purity",
    year: 1980,
    title: "Legacy of Purity",
    description: "Sachkhand became a household name in Punjab, known for its uncompromising commitment to quality and traditional extraction methods that preserved the oil's natural nutrients.",
  },
  {
    id: "1995-modernization",
    year: 1995,
    title: "Hygienic Expansion",
    description: "While keeping traditional methods at the core, we upgraded to modern hygienic bottling systems to ensure the purity of our oil reaches every kitchen without any contamination.",
  },
  {
    id: "2010-trust",
    year: 2010,
    title: "Over 40 Years of Trust",
    description: "Celebrating four decades of service, Sachkhand Mustard Oil expanded its range to include specialized yellow mustard and wellness oils, catering to the evolving health needs of our customers.",
  },
  {
    id: "2023-heritage",
    year: 2023,
    title: "Global Purity Standards",
    description: "Today, Sachkhand continues to lead with honesty and quality, ensuring every drop of oil is a promise of health, carrying forward a legacy of over 55 years of traditional excellence.",
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
