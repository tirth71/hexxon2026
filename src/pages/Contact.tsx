import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, FileText, Package, Clock } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";



const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    inquiry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_vklbdlr",
        "template_qwzb8h3",
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product: form.product,
          inquiry: form.inquiry,
          message: form.message,
        },
        "i-xxdlnyTIQRcVjyU"
      )
      .then(() => {
        toast.success("Inquiry sent successfully!");

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          product: "",
          inquiry: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send email");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const [quoteOpen, setQuoteOpen] = useState(false);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
    {/* Page Header */}
<div className="relative bg-secondary text-secondary-foreground py-16 overflow-hidden">

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
          Contact <span className="text-primary">Us</span>
        </motion.h1>
        <motion.p
          className="text-secondary-foreground/70 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          We'd love to hear from you. Get in touch for inquiries and quotes.
        </motion.p>

        {/* Contact channel pills */}
        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { emoji: "📧", label: "Email" },
            { emoji: "📞", label: "Call" },
            { emoji: "💬", label: "WhatsApp" },
            { emoji: "📍", label: "Visit Us" },
          ].map((pill, i) => (
            <motion.span
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-secondary-foreground/80 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 300 }}
            >
              {pill.emoji} {pill.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Right: Globe + signal animation */}
      <motion.div
        className="hidden md:flex items-center justify-center relative h-32"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <svg
          viewBox="0 0 440 128"
          className="w-full max-w-md ml-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Globe ── */}
          {/* Outer ring */}
          <motion.circle
            cx="220" cy="64" r="50"
            fill="none" stroke="#3B6D11" strokeWidth="1.5" opacity="0.4"
            animate={{ rotate: 360 }}
            style={{ originX: "220px", originY: "64px" }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          {/* Globe body */}
          <circle cx="220" cy="64" r="42" fill="#0f2a47" opacity="0.7" />
          <circle cx="220" cy="64" r="42" fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6" />

          {/* Latitude lines */}
          {[-20, 0, 20].map((dy, i) => (
            <ellipse key={i} cx="220" cy={64 + dy} rx="42" ry="10" fill="none" stroke="#3B6D11" strokeWidth="0.6" opacity="0.3" />
          ))}

          {/* Longitude lines (vertical curves) */}
          <path d="M220,22 Q242,64 220,106" fill="none" stroke="#3B6D11" strokeWidth="0.6" opacity="0.3" />
          <path d="M220,22 Q198,64 220,106" fill="none" stroke="#3B6D11" strokeWidth="0.6" opacity="0.3" />
          <line x1="220" y1="22" x2="220" y2="106" stroke="#3B6D11" strokeWidth="0.6" opacity="0.3" />

          {/* Continents (simple blobs) */}
          <ellipse cx="208" cy="52" rx="12" ry="8"  fill="#3B6D11" opacity="0.5" />
          <ellipse cx="228" cy="60" rx="9"  ry="6"  fill="#3B6D11" opacity="0.45" />
          <ellipse cx="212" cy="72" rx="7"  ry="5"  fill="#3B6D11" opacity="0.4" />
          <ellipse cx="234" cy="50" rx="5"  ry="4"  fill="#3B6D11" opacity="0.35" />

          {/* ── Ping rings from globe ── */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="220" cy="64" r="42"
              fill="none" stroke="#3B6D11" strokeWidth="1.5" opacity="0"
              animate={{ r: [42, 80], opacity: [0.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: i * 0.85 }}
            />
          ))}

          {/* ── Floating message nodes ── */}
          {/* Node 1 — Email */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <rect x="18" y="20" width="68" height="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" rx="8" />
            <text x="52" y="38" textAnchor="middle" fontSize="11" fill="white" opacity="0.85">📧 Email</text>
            {/* Dashed line to globe */}
            <line x1="86" y1="34" x2="178" y2="54" stroke="white" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3" />
            {/* Moving dot along line */}
            <motion.circle
              r="3" fill="#3B6D11" opacity="0.8"
              animate={{ cx: [86, 178], cy: [34, 54] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.2 }}
            />
          </motion.g>

          {/* Node 2 — Call */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <rect x="18" y="76" width="68" height="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" rx="8" />
            <text x="52" y="94" textAnchor="middle" fontSize="11" fill="white" opacity="0.85">📞 Call</text>
            <line x1="86" y1="90" x2="178" y2="72" stroke="white" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3" />
            <motion.circle
              r="3" fill="#3B6D11" opacity="0.8"
              animate={{ cx: [86, 178], cy: [90, 72] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1.1 }}
            />
          </motion.g>

          {/* Node 3 — WhatsApp */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
          >
            <rect x="354" y="20" width="78" height="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" rx="8" />
            <text x="393" y="38" textAnchor="middle" fontSize="11" fill="white" opacity="0.85">💬 Chat</text>
            <line x1="354" y1="34" x2="262" y2="54" stroke="white" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3" />
            <motion.circle
              r="3" fill="#3B6D11" opacity="0.8"
              animate={{ cx: [354, 262], cy: [34, 54] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.7 }}
            />
          </motion.g>

          {/* Node 4 — Visit */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <rect x="354" y="76" width="78" height="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" rx="8" />
            <text x="393" y="94" textAnchor="middle" fontSize="11" fill="white" opacity="0.85">📍 Visit</text>
            <line x1="354" y1="90" x2="262" y2="72" stroke="white" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3" />
            <motion.circle
              r="3" fill="#3B6D11" opacity="0.8"
              animate={{ cx: [354, 262], cy: [90, 72] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1.6 }}
            />
          </motion.g>

          {/* Response time badge */}
          <rect x="176" y="4" width="88" height="20" fill="#3B6D11" rx="10" opacity="0.9" />
          <text x="220" y="17" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">⚡ Reply in 24hrs</text>
        </svg>
      </motion.div>

    </div>
  </div>

  {/* Animated wave divider */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: "40px" }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        fill="hsl(var(--background))"
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

   <motion.section
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* General Inquiries */}
          <motion.div
            whileHover={{ y: -8, boxShadow: "0px 12px 40px rgba(22, 100, 51, 0.08)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-card border border-border/60 rounded-3xl p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#166433]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-6 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#166433]/10 flex items-center justify-center text-[#166433] group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7" />
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  General Inquiries
                </h3>

                <ul className="text-muted-foreground space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Product information and specifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    General questions about our services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Partnership opportunities
                  </li>
                </ul>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hexxonglobal@gmail.com"
                className="inline-flex items-center gap-2 text-[#166433] font-medium text-sm group/link mt-4"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#166433] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
                  Send us an email
                </span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Request Quote (BUTTON FIXED HERE) */}
          <motion.div
            whileHover={{ y: -8, boxShadow: "0px 12px 40px rgba(22, 100, 51, 0.08)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-card border border-border/60 rounded-3xl p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#166433]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-6 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#166433]/10 flex items-center justify-center text-[#166433] group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7" />
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Request Quote
                </h3>

                <ul className="text-muted-foreground space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Detailed product quotations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Custom packaging requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Shipping and logistics planning
                  </li>
                </ul>
              </div>

              {/* onClick is active again */}
              <button
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center gap-2 text-[#166433] font-medium text-sm group/link mt-4 text-left"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#166433] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
                  Fill the form
                </span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>

          {/* Track Shipment */}
          <motion.div
            whileHover={{ y: -8, boxShadow: "0px 12px 40px rgba(22, 100, 51, 0.08)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-card border border-border/60 rounded-3xl p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#166433]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-6 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#166433]/10 flex items-center justify-center text-[#166433] group-hover:scale-110 transition-transform duration-300">
                <Package className="w-7 h-7" />
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Track Shipment
                </h3>

                <ul className="text-muted-foreground space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Real-time shipment tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Documentation status updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166433]/40 mt-1.5 flex-shrink-0" />
                    Delivery confirmations
                  </li>
                </ul>
              </div>

              <a
                href="tel:+918128542365"
                className="inline-flex items-center gap-2 text-[#166433] font-medium text-sm group/link mt-4"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#166433] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
                  Call manager
                </span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Dialog component is active again */}
      <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </motion.section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">


            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-muted rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Get a Detailed Quote
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Provide us with your requirements and we'll prepare a comprehensive quote with specifications, documentation, and logistics details.
                </p>

              </div>

              {/* Grid Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  placeholder="Company Name *"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />

                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <Input
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <Input
                  placeholder="Country *"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                />

                {/* Product */}
                <Select
                  value={form.product}
                  onValueChange={(value) =>
                    setForm({ ...form, product: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Fresh Vegetables">Fresh Vegetables</SelectItem>
                    <SelectItem value="Premium Fruits">Premium Fruits</SelectItem>
                    <SelectItem value="Premium Spices">Premium Spices</SelectItem>
                    <SelectItem value="Basmati Rice">Basmati Rice</SelectItem>
                    <SelectItem value="Oil Seeds">Oil Seeds</SelectItem>
                    <SelectItem value="Grains & Pulses">Grains & Pulses</SelectItem>
                    <SelectItem value="Edible Oils">Edible Oils</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Inquiry Type */}
              <Select
                value={form.inquiry}
                onValueChange={(value) =>
                  setForm({ ...form, inquiry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="What can we help you with?" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Request Quote">Request Quote</SelectItem>
                  <SelectItem value="Samples">Request Samples</SelectItem>
                  <SelectItem value="Partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="Supplier">Become a Supplier</SelectItem>
                  <SelectItem value="Product Information">Product Information</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* Message */}
              <div className="space-y-2">

                <label className="text-sm font-semibold text-foreground">
                  Detailed Requirements *
                </label>

                <Textarea
                  className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm leading-6 resize-none h-[250px]"

                  placeholder={`Please provide details about:

                      • Product specifications and grades
                      • Quantity required (MT/containers)
                      • Packaging preferences
                      • Destination port
                      • Timeline and frequency
                      • Quality certifications needed
                      • Any special requirements`}

                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>


              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-primary text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Send Request for Quote"}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 ml-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">Reach out to us for product inquiries, pricing, or bulk orders. Our team responds within 24 hours.</p>
              </div>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "21, Sukh vishwa Residency-1, Kholvad, Surat, Gujarat-394190 , India" },
                  { icon: Phone, label: "Phone", value: "+91 81285 42365" },
                  { icon: Mail, label: "Email", value: "hexxonglobal@gmail.com" },
                  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM – 6:00 PM IST" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white" asChild>
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
          </div>




          {/* Google Map Section */}
          <div className="w-full px-4 mt-10">
            <div className="max-w-7xl mx-auto">

              {/* Heading */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
                <p className="text-muted-foreground">Visit us or connect globally</p>
              </div>

              {/* Map */}
             <div className="rounded-2xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.859669744329!2d72.9440625!3d21.2770217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0470007ab8e57%3A0xe16f3a5d1a5393a6!2sVishva%20Residency!5e0!3m2!1sen!2sin!4v1780979830112!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full"
  />
</div>

            </div>
          </div>
        </div>
      </section>
    </div>

  );

};

export default Contact;
