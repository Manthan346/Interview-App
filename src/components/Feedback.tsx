import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";

const CompaniesAndTestimonials = () => {
  const companies = [
    { name: "Facebook", logo: "https://cdn.worldvectorlogo.com/logos/facebook-2020-2-1.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg" },
    { name: "Uber", logo: "https://cdn.worldvectorlogo.com/logos/uber-2.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
    { name: "Airbnb", logo: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg" },
    { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  ];

  const testimonials = [
    {
      name: "Zafir Khan",
      company: "Software Engineer at Google (and later Meta)",
      image: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      text: `“Getting used to the pressure of an interview is the important part of preparation—and it's also the hardest to simulate. Interviewing.io took care of that for me! It's that friend I can always bug for help with running through questions.”`,
    },
    {
      name: "Aaron Farber",
      company: "Software Engineer at Meta",
      image: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      text: `“Interviewing.io gave me the comfort and confidence to treat interviews like fun conversations over shared interests, rather than terrifying psychological gauntlets.”`,
    },
    {
      name: "Luke Shillabeer",
      company: "Software Engineer at Mercedes-Benz",
      image: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      text: `“I just received my Google team-matching email! The mentoring sessions were super helpful—they made the difference between offer and no offer for me.”`,
    },
  ];

  return (
    <section className="my-20 flex flex-col items-center text-black">
      {/* Title */}
      <h3 className="text-center font-blender text-lg lg:text-2xl">
        Our interviewers and mentors have worked at:
      </h3>

      {/* Company Logos */}
      <div className="mt-10 grid w-full max-w-6xl grid-cols-3 gap-6 px-8 lg:grid-cols-4 lg:px-24">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center justify-center h-24">
            <img
              src={company.logo}
              alt={company.name}
              className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-24 flex w-full flex-col gap-8 lg:flex-row lg:px-24">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            className="flex flex-1 flex-col border-t-2 p-6 text-center shadow-sm hover:shadow-2xl transition"
          >
            <CardContent className="flex flex-col items-center">
             <Avatar>
              <AvatarImage src={t.image} className="w-10 h-10 rounded-2xl"/>
             </Avatar>
              <h4 className="text-base font-semibold">{t.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{t.company}</p>
              <p className="text-base font-light text-gray-700">{t.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-6 sm:px-10 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-blender max-w-7xl">
          Take the guesswork out of prepping for technical interviews.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-foreground/90 max-w-2xl">
          Start practicing with experts today.
        </p>
        <Button
          variant="default"
          className="flex items-center justify-center gap-3 bg-primary mt-5 lg:mt-8 sm:mt-14 mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl cursor-pointer text-primary-foreground h-14 sm:h-16 md:h-20 px-8 sm:px-12 font-blender hover:opacity-90"
        >
          <Link to="/login">Give it a try</Link>
        </Button>
      </div>
   
    </section>
  );
};

export default CompaniesAndTestimonials;
