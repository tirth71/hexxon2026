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
<div className="relative bg-secondary text-secondary-foreground py-12 overflow-hidden">

  {/* Background blobs */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-6 items-center">

      {/* Left: original text — untouched */}
      <div>
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-primary">Products</span>
        </motion.h1>
        <motion.p
          className="text-secondary-foreground/70 mt-2 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Explore our comprehensive range of premium agricultural products sourced from India's finest regions.
        </motion.p>

        {/* Category pills */}
        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          
        </motion.div>
      </div>

      {/* Right: Floating produce + crate animation */}
      <motion.div
        className="hidden md:block relative h-28"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <svg
          viewBox="0 0 440 112"
          className="w-full max-w-md ml-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Conveyor belt base */}
          {/* <rect x="10" y="82" width="420" height="12" fill="#1e3a1e" rx="6" opacity="0.6" /> */}
          {/* Belt lines moving */}
          {/* <motion.g
            animate={{ x: [0, -40] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((x) => (
              <rect key={x} x={x + 4} y="84" width="28" height="8" fill="#2a5a2a" rx="2" opacity="0.5" />
            ))}
          </motion.g> */}

          {/* Crate 1 — Vegetables */}
          {/* <motion.g
            animate={{ x: [360, -80] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
          >
            <rect x="0" y="60" width="52" height="24" fill="#5a3a1a" rx="4" />
            <line x1="0"  y1="72" x2="52" y2="72" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="17" y1="60" x2="17" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="35" y1="60" x2="35" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <text x="26" y="75" textAnchor="middle" fontSize="11" fill="#d4a96a">🥦</text>
          </motion.g> */}

          {/* Crate 2 — Fruits (offset) */}
          {/* <motion.g
            animate={{ x: [500, -80] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2.3 }}
          >
            <rect x="0" y="60" width="52" height="24" fill="#5a3a1a" rx="4" />
            <line x1="0"  y1="72" x2="52" y2="72" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="17" y1="60" x2="17" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="35" y1="60" x2="35" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <text x="26" y="75" textAnchor="middle" fontSize="11" fill="#d4a96a">🌶️</text>
          </motion.g> */}

          {/* Crate 3 — Grains */}
          {/* <motion.g
            animate={{ x: [640, -80] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4.6 }}
          >
            <rect x="0" y="60" width="52" height="24" fill="#5a3a1a" rx="4" />
            <line x1="0"  y1="72" x2="52" y2="72" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="17" y1="60" x2="17" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <line x1="35" y1="60" x2="35" y2="84" stroke="#7a5a3a" strokeWidth="1" />
            <text x="26" y="75" textAnchor="middle" fontSize="11" fill="#d4a96a">🌾</text>
          </motion.g> */}

          {/* Floating produce items above belt */}
          {/* {[
            { emoji: "🍅", x: 60,  delay: 0,    dur: 2.2 },
            { emoji: "🧅", x: 130, delay: 0.4,  dur: 2.6 },
            { emoji: "🥕", x: 200, delay: 0.8,  dur: 2.0 },
            { emoji: "🌿", x: 270, delay: 0.3,  dur: 2.8 },
            { emoji: "🍋", x: 340, delay: 0.6,  dur: 2.4 },
            { emoji: "🫚", x: 400, delay: 1.0,  dur: 2.1 },
          ].map((item) => (
            <motion.text
              key={item.x}
              x={item.x}
              y="46"
              textAnchor="middle"
              fontSize="20"
              animate={{ y: [46, 38, 46] }}
              transition={{ duration: item.dur, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              {item.emoji}
            </motion.text>
          ))} */}

          {/* Certified badge on right */}
          {/* <rect x="350" y="4" width="82" height="24" fill="#3B6D11" rx="12" opacity="0.9" />
          <text x="391" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="600">✅ Certified</text> */}

          {/* Export tag on left */}
          {/* <rect x="8" y="4" width="76" height="24" fill="white" fillOpacity="0.1" rx="12" />
          <text x="46" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="600">🚢 Export</text> */}
        </svg>
      </motion.div>

    </div>
  </div>

  {/* Wave divider into products section */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: "40px" }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        fill="hsl(var(--muted))"
        animate={{
          d: [
            "M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z",
            "M0,28 C360,8  720,38 1080,15 C1260,5  1380,35 1440,12 L1440,40 L0,40 Z",
            "M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
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

  );
};

export default Products;
