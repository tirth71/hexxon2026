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
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.h1 className="text-3xl md:text-4xl font-extrabold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 mt-2">We'd love to hear from you. Get in touch for inquiries and quotes.</p>
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
                  { icon: MapPin, label: "Address", value: "21, Sukh vishwa Residency-1, Kholvad, Gujarat-394190 , India" },
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


          {/* <motion.section
            className="py-16 bg-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          > */}
            {/* <div className="container mx-auto px-4">

              <div className="bg-background rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm"> */}

                {/* Title */}
                {/* <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Need Immediate Assistance?
                </h2> */}

                {/* Description */}
                {/* <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  For urgent inquiries or time-sensitive requirements, our team is available
                  24/7 to provide immediate support and guidance.
                </p> */}

                {/* Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8"> */}

                  {/* Call Button */}
                  {/* <a
                    href="tel:+918128542365"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: +91 93164 90925
                  </a> */}

                  {/* Email Button */}
                  {/* <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition"
                  >
                    <Mail className="w-5 h-5" />
                    Urgent Email
                  </a>

                </div>

              </div>

            </div>
          </motion.section> */}



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
                    src="https://maps.google.com/maps?q=Sukh%20Vishwa%20Residency%202,%20Kamrej,%20Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-[500px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
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
