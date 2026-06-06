import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Globe,
  TrendingUp,
  ShieldCheck,
  Truck,
  Leaf,
  Building2,
  Calendar,
  Phone,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import founder from "@/assets/founder/IMG_4545.JPG.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <div className="relative bg-secondary text-secondary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          className="text-primary font-semibold uppercase tracking-widest text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Established 2024
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-primary">HexxonGlobal</span>
        </motion.h1>
        <motion.p
          className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Bringing India's finest agricultural products to international markets through quality, trust, and efficient export solutions.
        </motion.p>
      </div>
    </div>

    {/* Stats Bar */}
   {/* Counters */}
{/* <section className="py-10 bg-background border-y border-border">
  <div className="container mx-auto px-4"> */}

    {/* Pill strip */}
    {/* <div className="flex items-center justify-between bg-green-50 rounded-full px-10 py-5"> */}

      {/* 1 */}
      {/* <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-green-900 leading-none">
          <AnimatedCounter end={2} suffix="+" />
        </p>
        <p className="text-xs text-green-700 uppercase tracking-widest mt-1.5">
          Years Experience
        </p>
      </div> */}

      {/* Divider */}
      {/* <div className="w-px h-8 bg-green-300 shrink-0" /> */}

      {/* 2 */}
      {/* <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-green-900 leading-none">
          <AnimatedCounter end={30} suffix="+" />
        </p>
        <p className="text-xs text-green-700 uppercase tracking-widest mt-1.5">
          Export Countries
        </p>
      </div> */}

      {/* Divider */}
      {/* <div className="w-px h-8 bg-green-300 shrink-0" /> */}

      {/* 3 */}
      {/* <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-green-900 leading-none">
          <AnimatedCounter end={170} suffix="+" />
        </p>
        <p className="text-xs text-green-700 uppercase tracking-widest mt-1.5">
          Happy Clients
        </p>
      </div> */}

      {/* Divider */}
      {/* <div className="w-px h-8 bg-green-300 shrink-0" /> */}

      {/* 4 */}
      {/* <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-green-900 leading-none">
          <AnimatedCounter end={1000} suffix="MT+" />
        </p>
        <p className="text-xs text-green-700 uppercase tracking-widest mt-1.5">
          Annual Export
        </p>
      </div>

    </div> */}
{/* 
  </div>
</section> */}

    {/* Our Story */}
    <section className="py-20 bg-background">
  <div className="container mx-auto px-4">

    {/* Top: quote bar left + stat bars right */}
    <div className="grid md:grid-cols-2 gap-12 mb-12">

      {/* Left — bordered quote block */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-l-4 border-primary pl-6"
      >
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
          Who We Are
        </span>
        <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-6">
          Our Story
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Founded in 2024, HexxonGlobal was created with a vision to bring India's finest agricultural products to customers worldwide. We focus on quality sourcing, efficient logistics, and long-term partnerships.

        </p>
        <p className="text-muted-foreground leading-relaxed">
          By partnering with experienced producers and processing facilities, we ensure every product meets international quality standards before reaching global markets.
          
        </p>
      </motion.div>

      {/* Right — stat progress bars */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center gap-7"
      >
        {[
          { num: "2+", label: "Years Experience", pct: "45%" },
          { num: "30+", label: "Export Countries", pct: "75%" },
          { num: "170+", label: "Happy Clients", pct: "60%" },
          { num: "1000MT+", label: "Annual Export", pct: "90%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-5"
          >
            <span className="text-2xl font-extrabold text-primary min-w-[80px]">
              {stat.num}
            </span>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1.5">{stat.label}</p>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Divider */}
    <div className="border-t border-border mb-12" />

    {/* Bottom — four feature tiles */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {[
        {
          icon: Target,
          title: "Our Mission",
          desc: "Deliver premium Indian agricultural products to global markets with uncompromised quality and reliability.",
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
        },
        {
          icon: Eye,
          title: "Our Vision",
          desc: "To be the most trusted and preferred name in global agricultural trade by 2030.",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        },
        {
          icon: Users,
          title: "Our Team",
          desc: "50+ professionals dedicated to quality assurance, logistics, and client satisfaction across 5 offices.",
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
        },
        {
          icon: Award,
          title: "Our Standards",
          desc: "APEDA, FSSAI, ISO 22000, and GlobalGAP certified operations ensuring world-class quality.",
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-muted/30 hover:bg-muted transition-colors"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${item.iconBg}`}>
            <item.icon className={`w-4 h-4 ${item.iconColor}`} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>
    {/* Founder Section */}
    {/* <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center"> */}
          {/* Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={founder}
              alt="Founder"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div> */}

          {/* Content */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase text-sm">
              Founder Message
            </span>

            <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-4">
              Meet Our Founder
            </h2>

            <h3 className="text-xl font-bold text-primary">
              Mr.Harshil Akbari
            </h3>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              At AKBARI EXIM, our vision has always been to connect India's
              agricultural excellence with global markets. We believe in
              delivering quality, trust, and long-term partnerships to our
              clients worldwide.
            </p>

            <p className="text-muted-foreground mt-3 leading-relaxed">
              With years of experience in international trade, our goal is to
              ensure every product meets global standards while supporting
              farmers and sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section> */}

    {/* Timeline */}
 <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">
  <div className="container mx-auto px-6 lg:px-12">

    {/* Heading */}
    <motion.div
      className="text-center max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
        Our Journey
      </span>

      <h2 className="mt-5 text-5xl font-bold">
        Growth &
        <span className="text-primary"> Milestones</span>
      </h2>

      <p className="mt-4 text-muted-foreground text-lg">
        Building a trusted presence in global agricultural exports through
        continuous growth, quality, and innovation.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative">

      {/* Line */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-primary/15 rounded-full"></div>

      <div className="grid lg:grid-cols-4 gap-8">

        {[
          {
            year: "2024",
            title: "Company Established",
            desc: "Started operations with a vision to connect Indian agricultural products with global markets.",
          },
          {
            year: "2025",
            title: "Quality Certification",
            desc: "Implemented international quality standards and compliance processes.",
          },
          {
            year: "2025",
            title: "Processing Expansion",
            desc: "Enhanced sourcing, processing, and packaging capabilities for export operations.",
          },
          {
            year: "2026",
            title: "Global Market Reach",
            desc: "Expanded business relationships across multiple international markets.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Dot */}
            <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>

            {/* Card */}
            <div className="lg:mt-12 bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">
                  {item.year}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>

    {/* Bottom Stats */}
    <div className="grid md:grid-cols-3 gap-6 mt-16">

      <div className="bg-white rounded-3xl p-6 shadow-lg border text-center">
        <h3 className="text-4xl font-bold text-primary">30+</h3>
        <p className="text-muted-foreground mt-2">
          Countries Served
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg border text-center">
        <h3 className="text-4xl font-bold text-primary">100+</h3>
        <p className="text-muted-foreground mt-2">
          Business Partners
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg border text-center">
        <h3 className="text-4xl font-bold text-primary">50+</h3>
        <p className="text-muted-foreground mt-2">
          Successful Shipments
        </p>
      </div>

    </div>

  </div>
</section>
    {/* Why Choose Us */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Advantages
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Why Choose HexxonGlobal?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Quality Assurance",
              desc: "Every product undergoes rigorous quality checks with APEDA, FSSAI, and ISO certifications.",
            },
            {
              icon: Truck,
              title: "Reliable Logistics",
              desc: "End-to-end logistics support with temperature-controlled shipping and on-time delivery.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Established trade relationships in 30+ countries with local market expertise.",
            },
            {
              icon: TrendingUp,
              title: "Competitive Pricing",
              desc: "Direct sourcing from farmers ensures the most competitive prices without compromising quality.",
            },
            {
              icon: Leaf,
              title: "Sustainable Practices",
              desc: "We promote sustainable farming and eco-friendly packaging across our supply chain.",
            },
            {
              icon: Building2,
              title: "Modern Infrastructure",
              desc: "State-of-the-art processing, sorting, and packaging facilities meeting global standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-muted rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Trust & Compliance
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Our Certifications
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {[
            {
              name: "APEDA",
              desc: "Agricultural Products Export Development Authority",
            },
            {
              name: "FSSAI",
              desc: "Food Safety and Standards Authority of India",
            },
            { name: "ISO 22000", desc: "Food Safety Management Systems" },
            {
              name: "GlobalGAP",
              desc: "Good Agricultural Practices Certification",
            },
            {
              name: "Phytosanitary",
              desc: "Plant Health Compliance Certificate",
            },
            { name: "BIS", desc: "Bureau of Indian Standards" },
            { name: "Spice Board", desc: "Spice Board of India Certified" },
            { name: "HACCP", desc: "Hazard Analysis Critical Control Points" },
          ].map((cert, i) => (
            <motion.div
              key={cert.name}
              className="bg-background rounded-2xl p-5 text-center border border-border hover:border-primary/30 transition-colors"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-foreground text-sm">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Export Destinations */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Global Presence
          </span>

          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            We Export To <span className="text-primary">30+ Countries</span>
          </h2>
        </motion.div>

        {/* Countries Data */}
        {(() => {
          const countries = [
            { code: "ae", name: "UAE" },
            { code: "sa", name: "Saudi Arabia" },
            { code: "gb", name: "United Kingdom" },
            { code: "us", name: "United States" },
            { code: "de", name: "Germany" },
            { code: "jp", name: "Japan" },
            { code: "kr", name: "South Korea" },
            { code: "my", name: "Malaysia" },
            { code: "sg", name: "Singapore" },
            { code: "qa", name: "Qatar" },
            { code: "om", name: "Oman" },
            { code: "kw", name: "Kuwait" },
            { code: "bh", name: "Bahrain" },
            { code: "ca", name: "Canada" },
            { code: "au", name: "Australia" },
            { code: "nl", name: "Netherlands" },
            { code: "fr", name: "France" },
            { code: "iq", name: "Iraq" },
            { code: "ir", name: "Iran" },
          ];

          return (
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {countries.map((country, i) => (
                <motion.div
                  key={country.code}
                  className="flex items-center gap-2 px-4 py-2.5 bg-muted rounded-xl text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:scale-105 hover:bg-green-50 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  {/* Flag */}
                  <img
                    src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/32.png`}
                    alt={country.name}
                    className="w-6 h-4 object-cover rounded-sm border"
                  />

                  {/* Name */}
                  <span>{country.name}</span>
                </motion.div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-secondary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
            Whether you're an importer, distributor, or retailer, we'd love to
            explore how we can serve your needs with premium Indian agricultural
            products.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl border-primary/40 text-primary bg-green-800 text-white hover:bg-primary/10 h-12 text-base"
            asChild
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
