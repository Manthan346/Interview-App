import React from "react";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import google from "../assets/google.png";
import {motion} from 'motion/react' 

function Heading() {
  return (
    <motion.div 
     initial={{ opacity: 0, y: 40 }} // start hidden and lower
      whileInView={{ opacity: 1, y: 0 }} // fade in and move up
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    className="mx-auto w-full mt-15 max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight leading-[1.1] text-foreground font-serif text-balance">
        Anonymous mock interviews with engineers from Amazon, Google, Meta, and
        other top companies
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-base sm:text-lg md:text-xl text-foreground font-serif">
        Get better at technical interviews (coding, system design, machine
        learning & many more), and get detailed feedback on exactly what you
        need to work on.
      </p>

      {/* Google Button */}
      <div className="flex justify-center">
        <Button
          variant="default"
          className="flex items-center gap-3 bg-primary mt-10 sm:mt-14 mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl cursor-pointer text-primary-foreground h-14 sm:h-16 md:h-20 px-6 sm:px-10 font-serif hover:opacity-90"
        >
          <img
            src={google}
            alt="Google"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
          />
          <Link to="/login">Continue with Google</Link>
        </Button>
      </div>

      {/* Sign up link */}
      <div className="flex flex-col items-center space-y-2">
        <NavLink
          to="/login"
          className="cursor-pointer font-serif text-base sm:text-lg md:text-xl"
        >
          or sign up with email
        </NavLink>
        <div className="w-24 sm:w-32 md:w-40 h-1 bg-primary hover:h-1.5 transition-all"></div>
      </div>
    </motion.div>
  );
}

export default Heading;
