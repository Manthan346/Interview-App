import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-background text-foreground py-10 px-4 sm:px-10 lg:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
        
        {/* Left: Contact Form */}
        <div className="bg-card border rounded-2xl shadow-md p-8 sm:p-10 flex flex-col justify-center mx-auto w-full max-w-lg xl:max-w-full">
          <h2 className="text-3xl font-semibold font-blender mb-2 xl:text-left text-center">
            How do we get in touch?
          </h2>
          <p className="text-muted-foreground mb-8 xl:text-left text-center">
            Leave us your details and we'll reach out within 24 hours!
          </p>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Leave us a message..." rows={4} />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-4">
              <NavLink to="/">
                <Button variant="outline">Go back</Button>
              </NavLink>
              <Button className="bg-primary text-primary-foreground hover:opacity-90">
                Continue
              </Button>
            </div>
          </form>
        </div>

        {/* Right: Image (only visible on xl and above, equal height & width) */}
        <div className="hidden xl:flex justify-center items-center bg-card border rounded-2xl shadow-md overflow-hidden h-full">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Customer support illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
