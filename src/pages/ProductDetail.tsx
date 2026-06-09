import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Shield, Globe, Package, MapPin, Droplets, Box, Star, CheckCircle, TrendingUp, Truck, Phone, Leaf, Heart, Award } from "lucide-react";
import { getCategory, getProduct } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } as const }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ── Dynamic content generator based on product name ── */
const getProductContent = (productName: string, categoryName: string) => {
  const name = productName;
  const cat = categoryName;
  return {
    description: `At HexxonGlobal, we offer premium quality ${name} sourced directly from India's finest farms and certified agricultural regions. Our ${name} is known for its exceptional freshness, superior grade, and consistent quality that meets international food safety standards. Whether you're a bulk importer, food distributor, or retail buyer, our ${name} guarantees a superior product experience every time. We ensure all our ${cat.toLowerCase()} are processed under strict hygiene and quality control protocols before export.`,

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
      { icon: Leaf, title: "Rich in Nutrients", desc: `${name} is packed with essential vitamins, minerals, and dietary fiber beneficial for health.` },
      { icon: Shield, title: "Quality Assured", desc: `Every batch undergoes multi-stage lab testing before dispatch ensuring safety compliance.` },
      { icon: Heart, title: "Naturally Grown", desc: `Sourced from farms following Good Agricultural Practices (GAP) for sustainable farming.` },
      { icon: Award, title: "Premium Export Grade", desc: `Meets the strict import requirements of the Middle East, Europe, Asia, and Americas.` },
    ],

    whyBuyFrom: [
      `Top-quality ${name} with no compromise on grade or freshness`,
      `Sourced from trusted, certified farms across India's prime agricultural belts`,
      `Competitive pricing for bulk orders with flexible MOQ and Incoterms`,
      `Reliable global shipping with temperature-controlled logistics and on-time delivery`,
      `Hygienic packaging in various sizes — 1kg, 5kg, 25kg, 50kg bags as per buyer requirement`,
      `Dedicated export manager assigned for each buyer for smooth documentation and communication`,
    ],
  };
};

const ProductDetail = () => {
  const { categoryId, productSlug } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const category = getCategory(categoryId || "");
  const product = getProduct(categoryId || "", productSlug || "");

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

  return (
    <div className="min-h-screen pt-16 bg-muted">
      <div className="container mx-auto px-4 py-10">

        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        {/* ── Top: Image + Specs ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <motion.div className="flex flex-wrap gap-3 mt-5" variants={stagger} initial="hidden" animate="visible">
              {product.origin && (
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Origin:</span>
                  <span className="font-semibold text-foreground">{product.origin}</span>
                </motion.div>
              )}
              {product.quality && (
                <motion.div variants={fadeUp} custom={1} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground">Quality:</span>
                  <span className="font-semibold text-foreground">{product.quality}</span>
                </motion.div>
              )}
              {product.moisture && (
                <motion.div variants={fadeUp} custom={2} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Moisture:</span>
                  <span className="font-semibold text-foreground">{product.moisture}</span>
                </motion.div>
              )}
              {product.packaging && (
                <motion.div variants={fadeUp} custom={3} className="flex items-center gap-2 bg-background rounded-xl px-4 py-2.5 border border-border text-sm">
                  <Box className="w-4 h-4 text-orange-500" />
                  <span className="text-muted-foreground">Packaging:</span>
                  <span className="font-semibold text-foreground">{product.packaging}</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
            <div>
              <motion.p className="text-sm text-primary font-semibold uppercase tracking-widest" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {category.name}
              </motion.p>
              <motion.h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                {product.name}
              </motion.h1>
              <motion.p className="text-muted-foreground mt-3 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                {content.description}
              </motion.p>
            </div>

            {/* Specs Table */}
            <motion.div className="bg-background rounded-2xl border border-border overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="px-5 py-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" /> Product Specifications
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
              <motion.div className="bg-background rounded-2xl border border-border overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <div className="px-5 py-4 border-b border-border bg-muted/50">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" /> Export Destinations
                  </h3>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {product.exportCountries.map((c) => (
                    <div key={c} className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl text-sm font-medium">
                      <img src={flagMap[c]} alt={c} className="w-5 h-4 object-cover rounded-sm border" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <motion.div className="bg-background rounded-2xl border border-border overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <div className="px-5 py-4 border-b border-border bg-muted/50">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" /> Certifications
                  </h3>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {product.certifications.map((c, i) => (
                    <motion.span key={c} className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-semibold flex items-center gap-1.5" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.05 }}>
                      <CheckCircle className="w-3.5 h-3.5" /> {c}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-3 pt-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Button className="py-3 flex-1 gradient-primary text-primary-foreground rounded-xl border-0 h-12 text-base" size="lg" onClick={() => setQuoteOpen(true)}>
                <Send className="w-5 h-5 mr-2" /> Request Quote
              </Button>
              
                {/* href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-primary text-primary hover:bg-primary/10 h-12 text-base font-medium transition-colors px-4"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                WhatsApp Inquiry
              </a>
              
                href="tel:+918128542365"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border text-foreground hover:bg-muted h-12 text-base font-medium transition-colors px-4"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a> */}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Rich Content Sections ── */}
        <div className="mt-16 space-y-12">

          {/* 1. Why Choose Our [Product] */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid lg:grid-cols-2 gap-8 items-start bg-background rounded-2xl border border-border overflow-hidden">
              <div className="p-8 border-r border-border">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Quality Promise</span>
                <h2 className="text-2xl font-extrabold text-foreground mt-2 mb-4">
                  Why Choose Our {product.name}?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  We take pride in delivering only the finest quality {product.name.toLowerCase()} that meets and exceeds international import standards. Every shipment is carefully inspected, graded, and packed to ensure maximum quality at destination.
                </p>
                <ul className="space-y-3">
                  {content.whyChoose.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Why Buy From Us</span>
                <h3 className="text-xl font-extrabold text-foreground mt-2 mb-4">
                  Why Buy {product.name} from HexxonGlobal?
                </h3>
                <ul className="space-y-3">
                  {content.whyBuyFrom.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 2. Types / Varieties */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">What We Offer</span>
            <h2 className="text-2xl font-extrabold text-foreground mt-2 mb-6">
              Types of {product.name} We Export
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.varieties.map((v, i) => (
                <motion.div
                  key={v.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2">{v.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 3. Benefits */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-muted/60 rounded-2xl border border-border p-8">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Health & Value</span>
              <h2 className="text-2xl font-extrabold text-foreground mt-2 mb-8">
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
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* 4. Why Choose Us (generic cards) */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Our Export Advantage
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, title: "Quality Certified", desc: "Meets international food safety and quality standards across all export markets." },
                { icon: Truck, title: "Global Shipping", desc: "Reliable logistics with temperature-controlled containers and on-time delivery." },
                { icon: TrendingUp, title: "Competitive Pricing", desc: "Direct farm sourcing ensures the best market prices with flexible MOQ." },
                { icon: CheckCircle, title: "Consistent Supply", desc: "Year-round availability with a reliable and traceable supply chain." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section className="mt-16 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp, i) => (
                <motion.div key={rp.slug} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link
                    to={`/products/${categoryId}/${rp.slug}`}
                    className="flex items-center justify-between bg-background rounded-2xl px-5 py-4 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-3 h-3 mt-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{rp.name}</span>
                        {rp.origin && <p className="text-xs text-muted-foreground mt-1">{rp.origin}</p>}
                        {rp.quality && <p className="text-xs text-primary/70 font-medium mt-1">{rp.quality}</p>}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <img src={rp.image} alt={rp.name} className="w-20 h-16 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300" />
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
    className="flex items-center justify-between py-3 border-b border-border last:border-0"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.45 + index * 0.05 }}
  >
    <span className="flex items-center gap-2 text-muted-foreground text-sm">{icon} {label}</span>
    <span className="font-semibold text-foreground text-sm">{value}</span>
  </motion.div>
);

export default ProductDetail;