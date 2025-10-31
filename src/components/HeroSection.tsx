import React from "react";
import { Button } from "@/components/ui/button";
import mainImg from '../assets/mainImg.jpeg'
import { NavLink } from "react-router-dom";
import {motion} from 'motion/react'

function HeroSection() {
  return (
    <motion.section
   initial={{ opacity: 0, y: 10 }}   
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }}
     className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={mainImg}
        alt="Cleaning Service"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] "
      />

      {/* Overlay with light blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b213f]/90 via-[#0b213f]/70 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-20">
        <div className="max-w-xl text-background space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Mockbuddy <br /> "Ace Your Next Interview — Book Mock Sessions Tailored for You"
          </h1>
          <p className="text-lg text-foreground-200 max-w-md">
            "Choose from real-world interview simulations, get feedback, and prepare to impress. Your interview success starts here."
          </p>
          <Button className="bg-primary text-background h-12 w-40  transition-all px-6 py-3 text-lg font-semibold rounded-">
            <NavLink to='/signup'>
            Get Started
            </NavLink>
          </Button>
        </div>
      </div>

      {/* Decorative foreground bubbles at bottom */}
   
    </motion.section>
  );
}

export default HeroSection;
