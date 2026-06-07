import { Link } from "react-router-dom";
import logo from "@/assets/logo/2507311620286908.webp";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle,
  PackageCheck,
  ShieldCheck,
  Ship,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Logo */}

          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="AkbariExim Logo"
              className="h-24 w-auto object-contain"

            />

            {/* <span className="text-xl font-bold">
              AKBARI <span className="text-green-600">EXIM</span>
            </span> */}
          </div>

          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
          Specializing in the export of high-quality agricultural commodities, serving international buyers with reliability and excellence.
          </p>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-secondary-foreground/70">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/about" className="hover:text-primary">About Us</Link>
              <Link to="/products" className="hover:text-primary">Our Products</Link>
              {/* <Link to="/certificates" className="hover:text-primary">Certificates</Link> */}
              <Link to="/contact" className="hover:text-primary">Contact Us</Link>
            </div>

          </div>

        </div>

        {/* OUR EXPERTISE */}
        <div>
          <h4 className="font-semibold mb-4">
            Core Capabilities
          </h4>

          <ul className="space-y-4 text-sm text-secondary-foreground/70">

            <li className="flex gap-3">
              <PackageCheck className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Premium Product Sourcing
                </p>
                <p className="text-xs opacity-70">
                  Carefully selected agricultural products from trusted suppliers
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <ShieldCheck className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Quality & Compliance
                </p>
                <p className="text-xs opacity-70">
                  International standards, certifications and export documentation
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <Ship className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Global Supply Chain
                </p>
                <p className="text-xs opacity-70">
                  Efficient logistics, shipping coordination and timely delivery
                </p>
              </div>
            </li>

          </ul>
        </div>

        {/* why  */}
         <div>
        <h4 className="font-semibold mb-4">Why Partner With Us</h4>

        <ul className="space-y-3 text-sm text-secondary-foreground/70">

          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1" />
            Trusted sourcing from verified suppliers
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1" />
            International quality standards & compliance
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1" />
            Competitive pricing with consistent quality
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1" />
            Reliable logistics and timely delivery
          </li>

        </ul>
      </div>

        {/* CONTACT */}
       <div>
  <h4 className="font-semibold mb-5">
    Contact Information
  </h4>

  <ul className="space-y-4 text-sm">

    <li>
      <a
        href="mailto:hexxonglobal@gmail.com"
        className="flex items-center gap-3 hover:text-primary transition"
      >
        <Mail className="w-4 h-4 text-primary" />
        hexxonglobal@gmail.com
      </a>
    </li>

    <li className="flex items-center gap-3">
      <Phone className="w-4 h-4 text-primary" />
      +91 81285 42365
    </li>

    <li className="flex items-start gap-3">
      <MapPin className="w-4 h-4 text-primary mt-1" />
      <span>
       21, Sukh vishwa Residency-1, Kholvad, Gujarat-394190 , India
      </span>
    </li>

  </ul>

  {/* Social Links */}
  <div className="mt-6">
    <p className="text-sm font-medium mb-3">
      Follow Us
    </p>

    <div className="flex gap-3">

      <a
        href="https://www.linkedin.com/in/akash-korat-949627405"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href="https://www.instagram.com/hexxon_global_exports/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
      >
        <Instagram className="w-4 h-4" />
      </a>

      <a
        href="https://www.facebook.com/people/Hexxon-Global-Exports/61585169729707/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
      >
        <Facebook className="w-4 h-4" />
      </a>

    </div>
  </div>
</div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-14 pt-6 text-center text-sm text-secondary-foreground/80">
        © {new Date().getFullYear()} Hexxonglobal. All rights reserved.
      </div>
      <div className="w-full text-center text-primary-foreground/80 text-sm">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/tirth-savaliya-115187252"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          Tirthsavaliya
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;