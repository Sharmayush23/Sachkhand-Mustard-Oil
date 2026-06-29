import { useParams, Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Separator } from "@/components/ui/separator";
import ProductImageViewer from "@/components/ProductImageViewer";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    const relatedProducts = products
        .filter((p) => p.category === product?.category && p.id !== product?.id)
        .slice(0, 3);

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Reset selected image when product changes (e.g. from related products)
    useEffect(() => {
        setSelectedImageIndex(0);
    }, [id]);

    if (!product) {
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

    const images = product.images && product.images.length > 0 ? product.images : [product.image];

    // Dynamically build theme styles if product has a theme
    const themeStyles = product.theme ? {
        '--primary': product.theme.primary,
        '--secondary': product.theme.secondary,
        '--accent': product.theme.accent,
        '--background': product.theme.bg,
        '--card': product.theme.surface,
        '--foreground': product.theme.textPrimary || '0 0% 10%',
        '--muted-foreground': product.theme.textSecondary || '0 0% 45%',
        '--border': product.theme.textPrimary ? `${product.theme.textPrimary.split(' ').slice(0, 2).join(' ')} 20%` : undefined,
    } as React.CSSProperties : {};

    return (
        <div className="pt-20 bg-background min-h-screen transition-colors duration-500" style={themeStyles}>
            {/* Breadcrumb / Back Navigation */}
            <div className="border-b border-foreground/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/products">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-foreground/70 hover:text-foreground">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Sticky Image */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-32">
                            <ProductImageViewer
                                images={images}
                                productName={product.name}
                                selectedIndex={selectedImageIndex}
                                onSelectIndex={setSelectedImageIndex}
                                badge={product.badge}
                            />
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="outline" className="uppercase tracking-widest text-xs font-semibold px-3 py-1 border-foreground/30 text-foreground">
                                    {product.category}
                                </Badge>
                                {product.gaugeRange && (
                                    <span className="text-sm font-medium text-foreground/60 px-2 border-l border-foreground/20">
                                        {product.gaugeRange}
                                    </span>
                                )}
                            </div>

                            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-lg text-foreground/80 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <Separator className="bg-foreground/10" />

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground/50 mb-4">{product.category === 'oils' ? 'Oil' : 'Product'} Specifications</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center py-2 border-b border-foreground/10">
                                        <span className="text-foreground/60 text-sm">Packaging</span>
                                        <span className="font-medium text-foreground">{product.gaugeRange}</span>
                                    </li>
                                    {product.material && (
                                        <li className="flex justify-between items-center py-2 border-b border-foreground/10">
                                            <span className="text-foreground/60 text-sm">Source</span>
                                            <span className="font-medium text-foreground">{product.material}</span>
                                        </li>
                                    )}
                                    {product.coating && (
                                        <li className="flex justify-between items-center py-2 border-b border-foreground/10">
                                            <span className="text-foreground/60 text-sm">Purity</span>
                                            <span className="font-medium text-foreground">{product.coating}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground/50 mb-4">Features</h3>
                                <div className="space-y-3">
                                    {product.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                            <span className="text-sm text-foreground/90">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-foreground/5 p-6 rounded-xl border border-foreground/10">
                            <h3 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                                <Shield className="h-4 w-4 text-primary" />
                                Application
                            </h3>
                            <p className="text-sm text-foreground/70">
                                {product.application}
                            </p>
                        </div>

                        <div className="pt-6 space-y-4">
                            <Link href="/contact">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all gap-2 bg-primary text-white hover:bg-primary/90">
                                    <Mail className="h-5 w-5" />
                                    Request Bulk Pricing
                                </Button>
                            </Link>
                            <p className="text-xs text-foreground/50 text-center sm:text-left pl-1">
                                Typical response time: Within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Related Products Section */}
            {
                relatedProducts.length > 0 && (
                    <section className="py-20 border-t border-foreground/10 mt-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold mb-8 font-heading text-foreground">Related Products</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedProducts.map((p) => (
                                    <motion.div key={p.id} variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                        <Link href={`/products/${p.id}`}>
                                            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border border-foreground/10 bg-background/50">
                                                <CardContent className="p-4 flex gap-4 items-center h-full">
                                                    <div className="h-20 w-20 bg-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                                                        {p.image ? (
                                                            <img src={p.image} className="w-full h-full object-contain p-2" alt={p.name} loading="lazy" />
                                                        ) : (
                                                            <CheckCircle className="h-8 w-8 text-foreground/20" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold line-clamp-1 text-foreground">{p.name}</h4>
                                                        <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{p.description}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }
        </div >
    );
}
