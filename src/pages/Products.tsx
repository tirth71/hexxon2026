import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Carrot, Apple, Flame, Wheat, CircleDot, Grip, Droplets, ChevronRight } from "lucide-react";
import { categories } from "@/data/products";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Carrot, Apple, Flame, Wheat, CircleDot, Grip, Droplets,
};

const Products = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [activeId, setActiveId] = useState(() => categoryId && categories.some((c) => c.id === categoryId) ? categoryId : categories[0].id);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const active = categories.find((c) => c.id === activeId)!;

  useEffect(() => {
    if (categoryId && categories.some((c) => c.id === categoryId)) {
      setActiveId(categoryId);
    }
  }, [categoryId]);

  return (
    <div className="min-h-screen pt-16 bg-muted">
      {/* Page Header */}
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-primary">Products</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 mt-2 max-w-xl">
            Explore our comprehensive range of premium agricultural products sourced from India's finest regions.
          </p>
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDEBAR */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Categories</h3>
              {/* Mobile: horizontal scroll, Desktop: vertical */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon] || Carrot;
                  const isActive = cat.id === activeId;
                  return (
                    <motion.button
                      key={cat.id}
                      onClick={() => setActiveId(cat.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all whitespace-nowrap flex-shrink-0 ${
                        isActive
                          ? "bg-secondary text-secondary-foreground shadow-lg"
                          : "bg-background hover:bg-background/80 text-foreground"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isActive ? "gradient-primary" : "bg-green-50"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <div className="hidden lg:block">
                        <div className={`text-sm font-semibold ${isActive ? "" : ""}`}>{cat.name}</div>
                        <div className={`text-xs ${isActive ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
                          {cat.products.length} items
                        </div>
                      </div>
                      <span className="lg:hidden text-sm font-medium">{cat.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl font-bold text-secondary-foreground">{active.name}</h2>
                    <p className="text-sm text-secondary-foreground/80 mt-1">{active.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PRODUCT LIST */}
          <div className="lg:w-80 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold text-foreground">{active.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Premium quality sourced from top regions</p>

                <div className="grid grid-cols-2 gap-2">
                  {active.products.map((product, idx) => (
                    <motion.div
                      key={product.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={`/products/${active.id}/${product.slug}`}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-background border border-border hover:shadow-md hover:border-primary/30 transition-all group"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {product.name}
                        </span>
                        <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={() => setQuoteOpen(true)}
                  className="w-full mt-6 gradient-primary text-primary-foreground rounded-xl border-0"
                  size="lg"
                >
                  Get Quote for {active.name}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>


      <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} productName={active.name} />
    </div>





/////

  );
};

export default Products;
