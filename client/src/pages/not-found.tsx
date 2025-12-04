import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-products">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-contact-404">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
