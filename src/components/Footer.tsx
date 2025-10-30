import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground font-serif">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-4 ">
          <h2 className="text-2xl font-semibold">Mockbuddy.io</h2>
          <p className="text-primary-foreground/80 text-base leading-relaxed">
            Empowering developers to ace their interviews with real mock sessions,
            honest feedback, and guidance from top engineers. Learn, improve, and
            boost your confidence with every session.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Connect */}
        <div>
          <h3 className="text-xl mb-3 font-semibold">Connect</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li>
              <Link to="/contact" className="hover:text-white transition">
                contact us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Twitter 
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Linkedin
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@mockbuddy.io"
                className="hover:text-white transition"
              >
                support@mockbuddy.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-primary-foreground/20 mt-8 py-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Mockbuddy.io. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
