import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Factory, Loader2, CheckCircle, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

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

export default function ProductDetailPage() {
    const { id } = useParams();

    const { data: product, isLoading, error } = useQuery<Product>({
        queryKey: [`/api/products/${id}`],
    });

    if (isLoading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Loading product details...</span>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <p className="text-muted-foreground mb-6">
                    The product you are looking for does not exist or has been removed.
                </p>
                <Link href="/products">
                    <Button>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Products
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <section className="bg-muted/30 py-12 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products">
                        <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-border/50 relative group">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                                        <Factory className="h-24 w-24 text-muted-foreground/30" />
                                    </div>
                                )}
                                {product.badge && (
                                    <Badge className="absolute top-4 right-4 text-sm py-1 px-3">
                                        {product.badge}
                                    </Badge>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <Badge variant="outline" className="mb-3 uppercase tracking-wider text-xs">
                                    {product.category}
                                </Badge>
                                <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 py-6 border-y">
                                <div>
                                    <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Specifications</h3>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between text-sm">
                                            <span>Gauge Range:</span>
                                            <span className="font-medium text-foreground">{product.gaugeRange}</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span>Material:</span>
                                            <span className="font-medium text-foreground">{product.material}</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span>Coating:</span>
                                            <span className="font-medium text-foreground">{product.coating}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Application</h3>
                                    <p className="text-sm font-medium text-foreground">{product.application}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {product.features.map((feature) => (
                                    <Badge key={feature} variant="secondary" className="px-3 py-1">
                                        <CheckCircle className="w-3 h-3 mr-1 text-primary" />
                                        {feature}
                                    </Badge>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="w-full sm:w-auto gap-2">
                                        Request Quote / Inquiry
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
                                    Contact us for bulk orders and custom specifications.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <Card className="h-full border-0 shadow-sm bg-muted/20">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Rigorous quality control ensures every needle meets international standards.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Card className="h-full border-0 shadow-sm bg-muted/20">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Zap className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">High Performance</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Engineered for durability and consistent performance in high-speed machines.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Card className="h-full border-0 shadow-sm bg-muted/20">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Factory className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Custom Solutions</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Available in various specifications to meet your specific manufacturing needs.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
