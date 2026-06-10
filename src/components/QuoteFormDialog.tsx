import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface QuoteFormDialogProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

const QuoteFormDialog = ({ open, onClose, productName }: QuoteFormDialogProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: productName || "",
    message: "",
  });

  // Sync product field whenever productName prop changes
  useEffect(() => {
    setForm((prev) => ({ ...prev, product: productName || "" }));
  }, [productName]);

  const clientNumber = "918128542365";

  const whatsappMessage = `📦 *New Inquiry*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📦 Product: ${form.product}

📝 Message:
${form.message}`;

  const whatsappUrl = `https://wa.me/${+918128542365}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill all required fields.");
      return;
    }

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");

    setForm({
      name: "",
      phone: "",
      email: "",
      product: productName || "",
      message: "",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-secondary/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md bg-background rounded-2xl shadow-xl border border-border p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            <h3 className="text-xl font-bold text-foreground mb-1">Request a Quote</h3>
            <p className="text-sm text-muted-foreground mb-5">Fill in your details and we'll respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl"
                required
                maxLength={100}
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl"
                maxLength={20}
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl"
                required
                maxLength={255}
              />
              <Input
                placeholder="Product of Interest"
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="rounded-xl"
                maxLength={100}
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl resize-none"
                rows={3}
                maxLength={1000}
              />
              <Button type="submit" className="w-full gradient-primary text-primary-foreground rounded-xl border-0">
                <Send className="w-4 h-4 mr-2" /> Send Inquiry
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteFormDialog;
