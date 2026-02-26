import { Copyright, Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-white/10 pb-12">

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Contact Us
            </h3>

            <h4 className="font-semibold text-xl mb-2">
              Reybon Pvt. Ltd.
            </h4>

            <p className="text-sm text-white/70 leading-relaxed mb-3">
              1563, Aram Bagh, Right Outside RK Ashram Marg - 2,
              Main Bazar Road, Paharganj, New Delhi, 110055
            </p>

            <p className="text-sm text-white/70">Mail: support@reybon.com</p>
            <p className="text-sm text-white/70">Tel: +91 7042033361</p>
            <p className="text-sm text-white/70 mt-2">
              Monday to Saturday <br />
              10AM – 6PM
            </p>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Customer Services
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <NavLink className="hover:text-white transition" to="/login">Login</NavLink>
              <NavLink className="hover:text-white transition" to="/return">Return / Exchange</NavLink>
              <NavLink className="hover:text-white transition" to="/about">About Us</NavLink>
              <NavLink className="hover:text-white transition" to="/trackorder">Track your order</NavLink>
              <NavLink className="hover:text-white transition" to="/careers">Careers</NavLink>
              <NavLink className="hover:text-white transition" to="/bulk-purchases">Bulk Purchases</NavLink>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Our Collections
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <NavLink className="hover:text-white transition" to="/">Home</NavLink>
              <NavLink className="hover:text-white transition" to="/newarrivals">Best Sellers</NavLink>
              <NavLink className="hover:text-white transition" to="/newarrivals">Sports</NavLink>
              <NavLink className="hover:text-white transition" to="/newarrivals">Formals</NavLink>
              <NavLink className="hover:text-white transition" to="/newarrivals">All Categories</NavLink>
              <NavLink className="hover:text-white transition" to="/faqs">FAQs</NavLink>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <X className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Copyright className="h-4 w-4" />
            <p>2026 Reybon. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;