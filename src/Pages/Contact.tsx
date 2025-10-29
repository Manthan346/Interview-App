import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-background text-foreground py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Contact Form */}
        <div className="bg-card border rounded-2xl shadow-md p-8 sm:p-10">
          <h2 className="text-3xl font-semibold font-blender mb-2">
            How do we get in touch?
          </h2>
          <p className="text-muted-foreground mb-8">
            Leave us your details and we'll reach out within 24 hours!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div>
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Leave us a message..." rows={4} />
            </div>

            <div className="flex justify-between items-center pt-4">
                <NavLink to='/'>
              <Button variant="outline" >Go back</Button>
              </NavLink>
              <Button className="bg-primary text-primary-foreground hover:opacity-90">
                Continue
              </Button>
            </div>
          </form>
        </div>

        {/* Right: Image (hidden on mobile) */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Dashboard Preview"
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </div>

      {/* Logos or Trusted Companies */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
        {[
          "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",
          "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
          "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
          "https://cdn.worldvectorlogo.com/logos/ghost-7.svg",
          "https://cdn.worldvectorlogo.com/logos/launchdarkly.svg",
        ].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="Partner logo"
            className="h-8 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}

export default Contact;
