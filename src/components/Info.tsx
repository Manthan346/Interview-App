import React from "react";
import { Button } from "./ui/button";
import google from '../assets/google.png'
import { NavLink } from "react-router-dom";
import interview from '../assets/interview.png'
const Info = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Text Section */}
        <div className="max-w-2xl">
          <h2 className="font-blender text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-left">
            We know exactly what to do and say to get the company, title, and salary you want.
          </h2>

          <p className="mt-6 text-left text-lg sm:text-xl font-light text-primary-foreground/90">
            Interview prep and job hunting are chaos and pain. We can help. Really.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <NavLink to='/login'>
            <Button
              variant="secondary"
              className="flex items-center gap-3 bg-background  cursor-pointer  text-foreground font-blender text-lg sm:text-xl py-6 px-8 "
            >
              <img
                src={google}
                alt="Google Icon"
                className="h-6 w-6"
              />
              <span>Get started for free</span>
            </Button>
            </NavLink>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="bg-background p-3 rounded-2xl ring-1 ring-background shadow-lg">
            <img
              src={interview}
              alt="App Screenshot"
              className="w-[40rem] rounded-lg ring-1 ring-background/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;
