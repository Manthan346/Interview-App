import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground font-blender ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">InterviewPro</h2>
          <p className="text-primary-foreground/80 text-base leading-relaxed">
            Empowering developers to ace their interviews with real mock sessions,
            honest feedback, and guidance from top engineers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl mb-3">Resources</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><a href="#" className="hover:text-background transition">Blog</a></li>
            <li><a href="#" className="hover:text-background transition">Guides</a></li>
            <li><a href="#" className="hover:text-background transition">FAQs</a></li>
            <li><a href="#" className="hover:text-background transition">Help Center</a></li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-xl mb-2">Ready to start?</h3>
          <Button
            variant="ghost"
            className="bg-background text-foreground font-blender hover:opacity-90 transition text-lg py-6 px-6"
          >
            <Link to="/login">Get Started</Link>
          </Button>
          <p className="text-sm text-primary-foreground/70">No signup fee. Cancel anytime.</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-primary-foreground/20 mt-8 py-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} InterviewPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
