import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, Shield, Globe, Package, MapPin, Droplets, Box, Star, CheckCircle, TrendingUp, Truck, Phone, Leaf, Heart, Award, Sparkles, Zap } from "lucide-react";
import { getCategory, getProduct } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

import ae from "@/assets/flags/ae.svg";
import sa from "@/assets/flags/sa.svg";
import gb from "@/assets/flags/gb.svg";
import us from "@/assets/flags/us.svg";
import de from "@/assets/flags/de.svg";
import jp from "@/assets/flags/jp.svg";
import kr from "@/assets/flags/kr.svg";
import my from "@/assets/flags/my.svg";
import sg from "@/assets/flags/sg.svg";
import qa from "@/assets/flags/qa.svg";
import om from "@/assets/flags/om.svg";

const flagMap: Record<string, string> = {
  "UAE": ae, "United Arab Emirates": ae,
  "Saudi Arabia": sa,
  "UK": gb, "United Kingdom": gb,
  "USA": us, "United States": us,
  "Germany": de, "Japan": jp,
  "South Korea": kr, "Malaysia": my,
  "Singapore": sg, "Qatar": qa, "Oman": om,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const getProductContent = (productName: string, categoryName: string) => {
  const name = productName;
  const cat = categoryName;
  return {
    description: `At HexxonGlobal, we offer premium quality ${name} sourced directly from India's finest farms and certified agricultural regions. Our ${name} is known for its exceptional freshness, superior grade, and consistent quality that meets international food safety standards. Whether you're a bulk importer, food distributor, or retail buyer, our ${name} guarantees a superior product experience every time.`,
    whyChoose: [
      `100% Pure & Natural — authentic ${name} with no artificial additives or preservatives`,
      `Sourced from India's prime ${cat.toLowerCase()} producing regions with verified farm traceability`,
      `Processed under strict quality control in FSSAI and ISO certified facilities`,
      `Available in customized packaging sizes for bulk and retail requirements`,
      `Hygienic processing ensures maximum freshness and shelf life during transit`,
    ],
    varieties: [
      { name: `Premium Grade ${name}`, desc: `Superior quality with extra-long shelf life, ideal for high-end retail and gourmet supply chains.` },
      { name: `Standard Grade ${name}`, desc: `Consistent quality for bulk orders, perfect for food processing and wholesale distribution.` },
      { name: `Organic ${name}`, desc: `Grown without chemicals or pesticides, offering a healthier and sustainable export option.` },
      { name: `Export Grade ${name}`, desc: `Specially graded and packed as per destination country import regulations and buyer specs.` },
    ],
    benefits: [
      { icon: Leaf, title: "Rich in Nutrients", desc: `${name} is packed with essential vitamins, minerals, and dietary fiber.` },
      { icon: Shield, title: "Quality Assured", desc: `Every batch undergoes multi-stage lab testing before dispatch.` },
      { icon: Heart, title: "Naturally Grown", desc: `Sourced from farms following Good Agricultural Practices (GAP).` },
      { icon: Award, title: "Premium Export Grade", desc: `Meets strict import requirements of Middle East, Europe, Asia & Americas.` },
    ],
    whyBuyFrom: [
      `Top-quality ${name} with no compromise on grade or freshness`,
      `Sourced from trusted, certified farms across India's prime agricultural belts`,
      `Competitive pricing for bulk orders with flexible MOQ and Incoterms`,
      `Reliable global shipping with temperature-controlled logistics`,
      `Hygienic packaging in various sizes — 1kg, 5kg, 25kg, 50kg bags`,
      `Dedicated export manager for smooth documentation and communication`,
    ],
  };
};

/* ── Floating particle component ── */
const FloatingParticle = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 pointer-events-none"
    style={{ width: size, height: size, left: x, bottom: -size }}
    animate={{ y: [-10, -300], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.3] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay, ease: "easeOut" }}
  />
);

/* ── Animated number counter ── */
const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.floor((frame / total) * end));
      if (frame >= total) { setCount(end); clearInterval(timer); }
    }, 20);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ProductDetail = () => {
  const { categoryId, productSlug } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const category = getCategory(categoryId || "");
  const product = getProduct(categoryId || "", productSlug || "");

  /* Auto-advance journey steps */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  if (!category || !product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Product Not Found</h2>
          <Link to="/products" className="text-primary mt-4 inline-block">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/918128542365?text=${encodeURIComponent(`Hello, I am interested in *${product.name}*. Please share more details.`)}`;
  const relatedProducts = category.products.filter(p => p.slug !== product.slug).slice(0, 4);
  const content = getProductContent(product.name, category.name);

  const journeySteps = [
    { icon: "🌾", label: "Farm", color: "#22c55e" },
    { icon: "🏭", label: "Process", color: "#f59e0b" },
    { icon: "📦", label: "Pack", color: "#3b82f6" },
    { icon: "🚢", label: "Ship", color: "#06b6d4" },
    { icon: "🌍", label: "Deliver", color: "#8b5cf6" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-muted" ref={containerRef}>

      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-16 left-0 h-0.5 bg-primary z-50 origin-left"
        style={{ width: progressWidth }}
      />

      <div className="container mx-auto px-4 py-10">

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <motion.span whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 400 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            Back to Products
          </Link>
        </motion.div>

        {/* ── Top Grid ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: Image + Journey */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

            {/* Image with floating badges */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating quality badge */}
              <motion.div
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              >
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                  ⭐
                </motion.div>
                <span className="text-xs font-bold text-gray-800">Premium Export</span>
              </motion.div>

              {/* Floating certified badge */}
              <motion.div
                className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
              >
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Certified
                </span>
              </motion.div>

              {/* Bottom product name overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <motion.h2
                  className="text-white text-xl font-extrabold drop-shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.name}
                </motion.h2>
                <motion.p
                  className="text-white/70 text-sm mt-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {category.name} · {product.origin}
                </motion.p>
              </div>
            </div>

            {/* Quick info badges */}
            <motion.div className="flex flex-wrap gap-3 mt-5" variants={stagger} initial="hidden" animate="visible">
              {product.origin && (
                <motion.div variants={fadeUp} custom={0} whileHover={{ scale: 1.05, borderColor: "var(--primary)" }} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm cursor-default transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Origin:</span>
                  <span className="font-semibold text-foreground">{product.origin}</span>
                </motion.div>
              )}
              {product.quality && (
                <motion.div variants={fadeUp} custom={1} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm cursor-default">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground">Quality:</span>
                  <span className="font-semibold text-foreground">{product.quality}</span>
                </motion.div>
              )}
              {product.moisture && (
                <motion.div variants={fadeUp} custom={2} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm cursor-default">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Moisture:</span>
                  <span className="font-semibold text-foreground">{product.moisture}</span>
                </motion.div>
              )}
              {product.packaging && (
                <motion.div variants={fadeUp} custom={3} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm cursor-default">
                  <Box className="w-4 h-4 text-orange-500" />
                  <span className="text-muted-foreground">Packaging:</span>
                  <span className="font-semibold text-foreground">{product.packaging}</span>
                </motion.div>
              )}
            </motion.div>

            {/* ── Export Journey Strip ── */}
            <motion.div
              className="mt-5 bg-background rounded-2xl border border-border px-5 py-5 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Floating particles */}
              {[10, 25, 40, 55, 70, 85].map((x, i) => (
                <FloatingParticle key={i} delay={i * 0.7} x={`${x}%`} size={6 + i * 2} />
              ))}

              <div className="flex items-center gap-2 mb-5">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Export Journey
                </p>
              </div>

              {/* Steps */}
              <div className="flex items-center justify-between relative mb-2">
                {/* Progress line */}
                <div className="absolute top-5 left-5 right-5 h-0.5 bg-border z-0">
                  <motion.div
                    className="h-full bg-primary origin-left"
                    animate={{ scaleX: (activeStep + 1) / 5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {journeySteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    className="flex flex-col items-center gap-2 z-10 cursor-pointer"
                    onClick={() => setActiveStep(i)}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg shadow-md"
                      animate={{
                        borderColor: i <= activeStep ? "#3B6D11" : "#e5e7eb",
                        backgroundColor: i === activeStep ? "#EAF3DE" : "#ffffff",
                        scale: i === activeStep ? 1.2 : 1,
                        boxShadow: i === activeStep ? "0 0 0 4px rgba(59,109,17,0.15)" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <AnimatePresence mode="wait">
                        {i === activeStep && (
                          <motion.span
                            key={`active-${i}`}
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 30 }}
                            transition={{ duration: 0.25 }}
                          >
                            {step.icon}
                          </motion.span>
                        )}
                        {i !== activeStep && (
                          <motion.span key={`inactive-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {step.icon}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.span
                      className="text-[10px] font-semibold"
                      animate={{ color: i <= activeStep ? "#3B6D11" : "#9ca3af" }}
                    >
                      {step.label}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Active step label */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStep}
                  className="text-xs text-center text-muted-foreground mt-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {["Farm-fresh sourcing from certified fields", "Processed in ISO certified units", "Export-grade hygienic packaging", "Temperature-controlled sea freight", "On-time delivery to your port"][activeStep]}
                </motion.p>
              </AnimatePresence>

              {/* Animated ship track */}
              <div className="relative h-10 mt-4 rounded-xl overflow-hidden bg-blue-50/50 border border-blue-100">
                {/* Ocean waves */}
                <motion.div
                  className="absolute bottom-0 left-0 h-full flex items-end"
                  animate={{ x: [0, -80] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ width: "200%" }}
                >
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-blue-300 text-base"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    >
                      〜
                    </motion.span>
                  ))}
                </motion.div>

                {/* Ship */}
                <motion.div
                  className="absolute text-2xl"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                  initial={{ x: -40 }}
                  animate={{ x: "calc(100vw)" }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                >
                  🚢
                </motion.div>

                {/* Port flag on right */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-lg">🏁</div>
              </div>

              {/* Mini stats with count up */}
              <div className="flex justify-between mt-4 pt-4 border-t border-border">
                {[
                  { end: 30, suffix: "+", label: "Countries" },
                  { end: 48, suffix: "hr", label: "Doc Ready" },
                  { end: 100, suffix: "%", label: "Insured" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-base font-extrabold text-primary">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT: Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">{category.name}</span>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-extrabold text-foreground"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {product.name}
              </motion.h1>

              <motion.p
                className="text-muted-foreground mt-3 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {content.description}
              </motion.p>
            </div>

            {/* Specs Table */}
            <motion.div
              className="bg-background rounded-2xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            >
              <div className="px-5 py-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                    <Package className="w-4 h-4 text-primary" />
                  </motion.div>
                  Product Specifications
                </h3>
              </div>
              <div className="p-5 space-y-0">
                {product.origin && <SpecRow icon={<MapPin className="w-4 h-4 text-primary" />} label="Origin" value={product.origin} index={0} />}
                {product.moisture && <SpecRow icon={<Droplets className="w-4 h-4 text-blue-500" />} label="Moisture" value={product.moisture} index={1} />}
                {product.packaging && <SpecRow icon={<Box className="w-4 h-4 text-orange-500" />} label="Packaging" value={product.packaging} index={2} />}
                {product.quality && <SpecRow icon={<Star className="w-4 h-4 text-amber-500" />} label="Quality" value={product.quality} index={3} />}
                {product.specifications && Object.entries(product.specifications).map(([k, v], idx) => (
                  <SpecRow key={k} icon={<CheckCircle className="w-4 h-4 text-primary" />} label={k} value={v} index={idx + 4} />
                ))}
              </div>
            </motion.div>

            {/* Export Countries */}
            {product.exportCountries && product.exportCountries.length > 0 && (
              <motion.div
                className="bg-background rounded-2xl border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="px-5 py-4 border-b border-border bg-muted/50">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" /> Export Destinations
                  </h3>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {product.exportCountries.map((c, i) => (
                    <motion.div
                      key={c}
                      className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.06, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.08, backgroundColor: "rgba(59,109,17,0.08)" }}
                    >
                      <img src={flagMap[c]} alt={c} className="w-5 h-4 object-cover rounded-sm border" />
                      <span>{c}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <motion.div
                className="bg-background rounded-2xl border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="px-5 py-4 border-b border-border bg-muted/50">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" /> Certifications
                  </h3>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {product.certifications.map((c, i) => (
                    <motion.span
                      key={c}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-semibold flex items-center gap-1.5"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.07, type: "spring" }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59,109,17,0.15)" }}
                    >
                      <CheckCircle className="w-3.5 h-3.5" /> {c}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full gradient-primary text-primary-foreground rounded-xl border-0 h-12 text-base relative overflow-hidden group" size="lg" onClick={() => setQuoteOpen(true)}>
                  <motion.div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  <Send className="w-5 h-5 mr-2" /> Request Quote
                </Button>
              </motion.div>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-primary text-primary hover:bg-primary/10 h-12 text-base font-medium transition-colors px-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />WhatsApp
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="tel:+918128542365" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border text-foreground hover:bg-muted h-12 text-base font-medium transition-colors px-4">
                <Phone className="w-5 h-5" /> Call Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Rich Content Sections ── */}
        <div className="mt-16 space-y-12">

          {/* 1. Why Choose + Why Buy */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-0 bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
                <motion.div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-3 h-3" /> Quality Promise
                </motion.div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">
                  Why Choose Our {product.name}?
                </h2>
                <ul className="space-y-3">
                  {content.whyChoose.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-foreground group"
                    >
                      <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      </motion.div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <motion.div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Globe className="w-3 h-3" /> Why Buy From Us
                </motion.div>
                <h3 className="text-xl font-extrabold text-foreground mb-4">
                  Why Buy from HexxonGlobal?
                </h3>
                <ul className="space-y-3">
                  {content.whyBuyFrom.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <motion.div
                        className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"
                        whileHover={{ scale: 1.3, backgroundColor: "rgba(59,109,17,0.2)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </motion.div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 2. Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">What We Offer</span>
              <h2 className="text-2xl font-extrabold text-foreground mt-1">
                Types of {product.name} We Export
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.varieties.map((v, i) => (
                <motion.div
                  key={v.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(59,109,17,0.12)" }}
                  className="bg-background rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 group cursor-default"
                >
                  <motion.div
                    className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Package className="w-4 h-4 text-primary" />
                  </motion.div>
                  <h3 className="font-bold text-foreground text-sm mb-2">{v.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 3. Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl border border-border p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Health & Value</span>
                <h2 className="text-2xl font-extrabold text-foreground mt-1 mb-8">
                  Benefits of {product.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.benefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        animate={{ boxShadow: ["0 0 0 0 rgba(59,109,17,0.3)", "0 0 0 8px rgba(59,109,17,0)", "0 0 0 0 rgba(59,109,17,0)"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      >
                        <b.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. Export Advantage */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-foreground">Our Export Advantage</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, title: "Quality Certified", desc: "Meets international food safety standards across all export markets.", color: "text-green-600", bg: "bg-green-50" },
                { icon: Truck, title: "Global Shipping", desc: "Temperature-controlled containers with on-time delivery guaranteed.", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: TrendingUp, title: "Competitive Pricing", desc: "Direct farm sourcing ensures best market prices with flexible MOQ.", color: "text-amber-600", bg: "bg-amber-50" },
                { icon: CheckCircle, title: "Consistent Supply", desc: "Year-round availability with a reliable and traceable supply chain.", color: "text-purple-600", bg: "bg-purple-50" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  className="bg-background rounded-2xl p-6 border border-border transition-all duration-300 group cursor-default"
                >
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.bg}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </motion.div>
                  <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            className="mt-16 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp, i) => (
                <motion.div
                  key={rp.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <Link to={`/products/${categoryId}/${rp.slug}`} className="flex items-center justify-between bg-background rounded-2xl px-5 py-4 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 flex-1">
                      <motion.div
                        className="w-3 h-3 mt-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{rp.name}</span>
                        {rp.origin && <p className="text-xs text-muted-foreground mt-1">{rp.origin}</p>}
                        {rp.quality && <p className="text-xs text-primary/70 font-medium mt-1">{rp.quality}</p>}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <motion.img
                        src={rp.image}
                        alt={rp.name}
                        className="w-20 h-16 object-cover rounded-lg shadow-sm"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

      </div>

      <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} productName={product.name} />
    </div>
  );
};

const SpecRow = ({ icon, label, value, index }: { icon: React.ReactNode; label: string; value: string; index: number }) => (
  <motion.div
    className="flex items-center justify-between py-3 border-b border-border last:border-0 group"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.45 + index * 0.05 }}
    whileHover={{ backgroundColor: "rgba(59,109,17,0.03)", paddingLeft: "4px", paddingRight: "4px", borderRadius: "8px" }}
  >
    <span className="flex items-center gap-2 text-muted-foreground text-sm">{icon} {label}</span>
    <motion.span
      className="font-semibold text-foreground text-sm"
      whileHover={{ color: "#3B6D11" }}
    >
      {value}
    </motion.span>
  </motion.div>
);

export default ProductDetail;