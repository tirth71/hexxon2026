import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Truck, Award, Star, ChevronLeft, ChevronRight, Leaf, Users, Package, MapPin, Phone, MessageCircle, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { categories } from "@/data/products";
import heroBg from "@/assets/ChatGPT Image Jun 5, 2026, 04_00_11 PM.png";
import globalTrade from "@/assets/global-trade-D7MRtin6.jpg";
import processImage from "@/assets/quality-control-CSJAzth2.jpg";
import { ShieldCheck, Ship, Globe, CheckCircle } from "lucide-react";
import global2 from "@/assets/ChatGPT Image Jun 5, 2026, 04_03_50 PM.png";
import iso from "@/assets/ISO.png";
import fssai from "@/assets/FSSAI_logo.png";
import apeda from "@/assets/apeda.png";
import usda from "@/assets/USDA_logo.png";
import msme from "@/assets/msme.png";
import spiceBoard from "@/assets/Spices_Board_of_India_Logo.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const exportRegions = [
  {
    name: "Middle East",
    labelColor: "text-blue-700 dark:text-blue-300",
    dividerColor: "bg-blue-200 dark:bg-blue-800",
    chipBg: "bg-blue-50 dark:bg-blue-950",
    chipBorder: "border-blue-200 dark:border-blue-800",
    chipText: "text-blue-800 dark:text-blue-200",
    countries: [
      { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
      { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
      { name: "Qatar", flag: "https://flagcdn.com/w40/qa.png" },
      { name: "Kuwait", flag: "https://flagcdn.com/w40/kw.png" },
      { name: "Oman", flag: "https://flagcdn.com/w40/om.png" },
      { name: "Bahrain", flag: "https://flagcdn.com/w40/bh.png" },
      { name: "Jordan", flag: "https://flagcdn.com/w40/jo.png" },
      { name: "Iraq", flag: "https://flagcdn.com/w40/iq.png" },
    ],
  },
  {
    name: "Europe",
    labelColor: "text-green-700 dark:text-green-300",
    dividerColor: "bg-green-200 dark:bg-green-800",
    chipBg: "bg-green-50 dark:bg-green-950",
    chipBorder: "border-green-200 dark:border-green-800",
    chipText: "text-green-800 dark:text-green-200",
    countries: [
      { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
      { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
      { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
      { name: "Netherlands", flag: "https://flagcdn.com/w40/nl.png" },
      { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
      { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
      { name: "Belgium", flag: "https://flagcdn.com/w40/be.png" },
      { name: "Poland", flag: "https://flagcdn.com/w40/pl.png" },
    ],
  },
  {
    name: "Asia",
    labelColor: "text-orange-700 dark:text-orange-300",
    dividerColor: "bg-orange-200 dark:bg-orange-800",
    chipBg: "bg-orange-50 dark:bg-orange-950",
    chipBorder: "border-orange-200 dark:border-orange-800",
    chipText: "text-orange-800 dark:text-orange-200",
    countries: [
      { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
      { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
      { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
      { name: "India", flag: "https://flagcdn.com/w40/in.png" },
      { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
      { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
      { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
    ],
  },
  {
    name: "Americas & Africa",
    labelColor: "text-amber-700 dark:text-amber-300",
    dividerColor: "bg-amber-200 dark:bg-amber-800",
    chipBg: "bg-amber-50 dark:bg-amber-950",
    chipBorder: "border-amber-200 dark:border-amber-800",
    chipText: "text-amber-800 dark:text-amber-200",
    countries: [
      { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
      { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
      { name: "Brazil", flag: "https://flagcdn.com/w40/br.png" },
      { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
      { name: "Nigeria", flag: "https://flagcdn.com/w40/ng.png" },
      { name: "Kenya", flag: "https://flagcdn.com/w40/ke.png" },
    ],
  },
];

const certificates = [iso, fssai, apeda, usda, msme, spiceBoard];

const testimonials = [
  {
    rating: 5,
    text: "Seamless onboarding and a product that just works.",
    name: "Alex Morgan",
    company: "Horizon Inc.",
    avatarBg: "#7F77DD",
    ghost1: "#CECBF6",
    ghost2: "#AFA9EC",
  },
  {
    rating: 5,
    text: "Best investment our company made this year.",
    name: "Priya Sharma",
    company: "NovaTech",
    avatarBg: "#0F6E56",
    ghost1: "#9FE1CB",
    ghost2: "#5DCAA5",
  },
  {
    rating: 4,
    text: "The support team is incredible. Every question answered within minutes.",
    name: "Carlos Rivera",
    company: "BluePeak",
    avatarBg: "#993C1D",
    ghost1: "#F5C4B3",
    ghost2: "#F0997B",
  },
  {
    rating: 5,
    text: "Switched from a competitor and haven't looked back.",
    name: "Emma Chen",
    company: "FlowStack",
    avatarBg: "#185FA5",
    ghost1: "#B5D4F4",
    ghost2: "#85B7EB",
  },
];

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const heroImages = [heroBg, global2];
  const [heroIndex, setHeroIndex] = useState(0);

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const current = testimonials[testimonialIdx];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">

      {/* ── HERO: Centered minimal with stats row ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        {/* Background image crossfade */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="absolute w-full h-full object-cover"
              animate={{ opacity: heroIndex === i ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          ))}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center py-24">

          {/* Eyebrow rule */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-8 h-px bg-white/30" />
            <span className="text-white/60 text-xs uppercase tracking-[0.14em] font-medium">
              Trusted global export partner since 2024
            </span>
            <span className="w-8 h-px bg-white/30" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Exporting India's Finest
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Agricultural Products
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hexxon Global Exports specializes in sourcing and delivering premium
            agricultural products, ensuring quality assurance, efficient logistics,
            and customer satisfaction across international markets.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground rounded-xl border-0 text-base h-12 px-6"
              asChild
            >
              <Link to="/products">
                <Leaf className="w-4 h-4 mr-2" /> Explore Products
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12"
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote
            </Button>
            <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12"
                  asChild
                >
                  <a
                    href="https://wa.me/918128542365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    WhatsApp Us
                  </a>
                </Button>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {["APEDA Certified", "ISO 22000", "FSSAI Approved", "GlobalGAP"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-white/50 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> {badge}
              </span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="w-full max-w-2xl border-t border-white/15 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
          >
            {[
              { value: "30+", label: "Countries" },
              { value: "500+", label: "Products" },
              { value: "100%", label: "Quality Assured" },
              { value: "4", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Counters */}
      {/* <section className="py-14 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={30} suffix="+" label="Countries Served" />
            <AnimatedCounter end={170} suffix="+" label="Products Exported" />
            <AnimatedCounter end={2} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Happy Clients" />
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Why Choose <span className="text-primary">HexxonGlobal</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              We combine quality, reliability, and global reach to deliver the best agricultural products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Certified Quality", desc: "APEDA, FSSAI, ISO certified products meeting international food safety standards.", num: "01" },
              { icon: Truck, title: "Global Logistics", desc: "Seamless shipping to 30+ countries with temperature-controlled delivery.", num: "02" },
              { icon: Award, title: "Premium Grade", desc: "Only the finest grade products from India's top agricultural regions.", num: "03" },
              { icon: Globe, title: "Worldwide Reach", desc: "Serving importers, distributors, and retailers across 5 continents.", num: "04" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-5 bg-muted/40 border border-border rounded-2xl p-6 hover:border-primary/40 hover:bg-muted transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-4xl font-extrabold text-primary/15 leading-none select-none pt-1 min-w-[3rem]">
                  {item.num}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Trade Leader */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Global Trade Leader
                </span>
                <h2 className="mt-5 text-5xl font-bold leading-tight">
                  Delivering Excellence
                  <span className="block text-primary">Across Borders</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Trusted by international buyers worldwide, we ensure premium quality products,
                  seamless logistics, and reliable global partnerships.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/70 backdrop-blur-lg border border-white shadow-xl rounded-3xl p-6 hover:-translate-y-1 transition">
                  <h3 className="text-5xl font-extrabold text-primary">30+</h3>
                  <p className="mt-2 text-muted-foreground">Countries Served</p>
                </div>
                <div className="bg-gradient-to-br from-[#CF8B39] to-[#E5A14C] text-white rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition">
                  <h3 className="text-5xl font-extrabold">100+</h3>
                  <p className="mt-2 opacity-90">Active Partners</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["APEDA Certified", "ISO 9001:2015", "FSSAI Licensed"].map((item) => (
                  <div key={item} className="px-4 py-2 rounded-full bg-white shadow-md border">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src={globalTrade}
                  alt="Global Trade"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 left-8 bg-white shadow-2xl rounded-2xl p-5 flex items-center gap-4 border">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">50+</h4>
                  <p className="text-muted-foreground text-sm">Successful Shipments Worldwide</p>
                </div>
              </div>

              <div className="absolute top-8 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 border">
                <p className="text-sm text-muted-foreground">Trusted by</p>
                <h4 className="text-2xl font-bold text-primary">100+ Buyers</h4>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6-Step Quality Process */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b15,transparent_40%)]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Global Export Workflow
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-foreground">
              Our 6-Step <span className="text-primary"> Quality Process</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every order follows a strict quality-controlled process to ensure compliance, safety,
              and seamless global delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              {[
                { title: "Source & Verify", desc: "Carefully selecting trusted suppliers and certified producers.", icon: Globe },
                { title: "Inspect & Grade", desc: "Comprehensive quality checks and grading procedures.", icon: CheckCircle },
                { title: "Process & Package", desc: "Custom packaging and preparation according to buyer requirements.", icon: ShieldCheck },
                { title: "Document & Certify", desc: "Export documentation, certificates, and compliance approvals.", icon: CheckCircle },
                { title: "Ship & Track", desc: "Reliable logistics management with shipment tracking.", icon: Ship },
                { title: "Deliver & Support", desc: "On-time delivery with dedicated post-shipment assistance.", icon: ShieldCheck },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-5 rounded-3xl bg-white p-6 shadow-lg border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-bold">0{index + 1}</span>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src={processImage}
                  alt="Global Export Process"
                  className="w-full h-[720px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 backdrop-blur-md p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center">
                    <ShieldCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ISO 9001:2015 Certified</h4>
                    <p className="text-sm text-muted-foreground">
                      International quality management standards followed at every stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-3xl shadow-xl p-5 border">
                <h4 className="text-3xl font-bold text-primary">30+</h4>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>

              <div className="absolute top-10 -right-6 bg-primary text-white rounded-3xl shadow-xl p-5">
                <h4 className="text-3xl font-bold">100%</h4>
                <p className="text-sm opacity-90">Quality Checked</p>
              </div>

              <div className="absolute bottom-40 -right-6 bg-white rounded-3xl shadow-xl p-5 border">
                <h4 className="text-3xl font-bold text-primary">50+</h4>
                <p className="text-sm text-muted-foreground">Shipments Delivered</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Categories */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">

    {/* Header */}
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-primary font-semibold uppercase tracking-wider text-sm">
        What We Export
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
        Our Product <span className="text-primary">Categories</span>
      </h2>
      <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
        Premium agricultural products sourced directly from India's finest farms.
      </p>
    </motion.div>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {categories.slice(0, 4).map((cat, i) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <Link
            to={`/products/${cat.id}`}
            className="group block rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            {/* Image + tag */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Green export tag */}
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Export
              </span>
            </div>

            {/* Body */}
            <div className="px-4 py-3">
              <h3 className="text-sm font-bold text-foreground">
                {cat.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {cat.products.length} products available
              </p>
              <div className="flex items-center gap-1 text-xs text-primary font-medium mt-3">
                View all <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      className="text-center mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Link
        to="/products"
        className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-xl px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
      >
        View All Products <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>

  </div>
</section>

      {/* Export Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Global Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Exporting To <span className="text-primary">30+ Countries</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Our products reach customers across the Middle East, Europe, Asia, and the Americas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {exportRegions.map((region, regionIndex) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: regionIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${region.labelColor}`}>
                    {region.name}
                  </span>
                  <div className={`flex-1 h-px ${region.dividerColor}`} />
                  <span className={`text-xs font-medium ${region.labelColor} opacity-60`}>
                    {region.countries.length}+ countries
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country, i) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: regionIndex * 0.1 + i * 0.04 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium
                                  transition-all hover:scale-105 hover:shadow-sm cursor-default
                                  ${region.chipBg} ${region.chipBorder} ${region.chipText}`}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-3.5 object-cover rounded-sm border border-black/10"
                      />
                      {country.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-16 bg-background overflow-hidden px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase text-sm tracking-wider">
            Certification Approval
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Compliance Logos
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...certificates, ...certificates].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-muted border border-border rounded-xl shadow-sm px-8 py-6 min-w-[160px]"
              >
                <img src={logo} alt="certificate" className="h-10 md:h-12 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </motion.div>

          <div
            className="max-w-xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="absolute inset-x-4 top-4 bottom-0 rounded-2xl transition-colors duration-500"
              style={{ background: current?.ghost2 }}
            />
            <div
              className="absolute inset-x-2 top-2 bottom-0 rounded-2xl transition-colors duration-500"
              style={{ background: current?.ghost1 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                className="relative bg-background border border-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: current?.rating || 0 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-foreground text-base italic leading-relaxed mb-6">
                  &ldquo;{current?.text}&rdquo;
                </p>

                <div className="border-t border-border mb-5" />

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-base flex-shrink-0"
                    style={{ background: current?.avatarBg }}
                  >
                    {current?.name?.[0]}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm leading-none mb-1">
                      {current?.name}
                    </p>
                    <p className="text-muted-foreground text-sm">{current?.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() =>
                  setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)
                }
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? "w-6 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setTestimonialIdx((p) => (p + 1) % testimonials.length)
                }
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-3">
              {testimonialIdx + 1} / {testimonials.length}
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-foreground">
              Ready to Source <span className="text-primary">Premium Products?</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-4 max-w-lg mx-auto text-lg">
              Get in touch with our team for competitive pricing, reliable supply, and world-class quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground rounded-xl border-0 h-12 text-base"
                onClick={() => setQuoteOpen(true)}
              >
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12 text-base"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12 text-base"
                asChild
              >
                <a href="tel:+918128542365" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
};

export default Index;