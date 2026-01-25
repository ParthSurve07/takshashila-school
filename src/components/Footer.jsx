import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Takshashila International</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing Minds, Shaping Futures. Empowering students to become
              lifelong learners and responsible global citizens.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Placeholders */}
              <Link href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:underline opacity-90 hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:underline opacity-90 hover:opacity-100"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#academics"
                  className="hover:underline opacity-90 hover:opacity-100"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="#admissions"
                  className="hover:underline opacity-90 hover:opacity-100"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="hover:underline opacity-90 hover:opacity-100"
                >
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Takshashila International School,
                  <br />
                  Kumbhar Mala, Nilji,
                  <br />
                  Behind Vijaynagar Court,
                  <br />
                  Sangli – 416416
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+917391015951" className="hover:underline">
                  +91 7391015951
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:sangli.tis@gmail.com"
                  className="hover:underline"
                >
                  sangli.tis@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden h-48 bg-white/10 border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.604797072688!2d74.600!3d16.850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzAwLjAiTiA3NMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
          <p>
            © {new Date().getFullYear()} Takshashila International School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
