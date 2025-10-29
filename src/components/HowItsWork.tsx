import React from "react";
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'

function HowItWorks() {
  return (
    <section className="bg-background text-foreground w-full">

      {/* Section 1 — Book Mock Interviews */}
      <div className="my-16 flex w-full border-b-2 border-gray-200 text-foreground">
        <div className="flex-1 my-auto pb-8">
          <div className="flex max-w-3xl flex-col px-6 lg:ml-auto lg:px-20">
            <h2 className="font-blender text-3xl leading-tight lg:text-6xl">
              Book mock interviews whenever you like
            </h2>

            {/* Mobile Image */}
            <div className="relative block aspect-auto min-h-[256px] py-8 lg:hidden">
              <img
                src={img1}
                alt="Book mock interviews"
                
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <p className="text-base font-light text-foreground/90 lg:pt-6 lg:text-2xl">
              Choose your mock interview slot and topic anytime — coding, system design,
              or machine learning — and prepare on your own schedule.
            </p>
          </div>
        </div>

        {/* Right Image (Desktop only) */}
        <div className="relative hidden aspect-auto min-h-[720px] flex-1 py-4 lg:block lg:py-0">
          <img
            src={img2}
            alt="Book mock interviews"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Section 2 — Meet with Interviewer */}
      <div className="my-16 flex w-full border-b-2 border-gray-200 text-foreground">
        <div className="hidden flex-1 lg:block lg:pl-6">
          <div className="relative aspect-auto min-h-[720px]">
            <img
              src="https://interviewingio-assets.s3.amazonaws.com/images/how-it-works-1a-alt.svg"
              alt="Meet with your interviewer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="my-auto flex-1 lg:pb-8">
          <div className="flex max-w-3xl flex-col px-6 lg:ml-auto lg:px-20">
            <h2 className="font-blender text-3xl leading-tight lg:text-6xl">
              Meet with your interviewer for virtual, fully anonymous sessions
            </h2>

            {/* Mobile Image */}
            <div className="relative block aspect-auto min-h-[256px] py-8 lg:hidden">
              <img
                src="https://interviewingio-assets.s3.amazonaws.com/images/how-it-works-1a-alt.svg"
                alt="Meet with your interviewer"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <p className="text-base font-light text-foreground/90 lg:pt-6 lg:text-2xl">
              Join your interviewer in a CoderPad™-like environment for a fully
              anonymous session with audio and chat (no video). You can unmask and
              connect later if you’d like.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 — Feedback from Experts */}
      <div className="my-16 flex w-full border-b-2 border-gray-200 text-foreground">
        <div className="my-auto flex-1 pb-8">
          <div className="ml-auto flex max-w-3xl flex-col px-6 lg:px-20">
            <h2 className="font-blender text-3xl leading-tight lg:text-6xl">
              Get detailed, actionable feedback from experts
            </h2>

            {/* Mobile Image */}
            <div className="relative block aspect-auto min-h-[256px] py-8 lg:hidden">
              <img
                src="https://interviewingio-assets.s3.amazonaws.com/images/feedback-annotations.svg"
                alt="Feedback from experts"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <p className="text-base font-light text-foreground/90 lg:pt-6 lg:text-2xl">
              Each session ends with a detailed review of what you did well and
              how to improve — directly from senior engineers who’ve made hiring
              decisions at top tech companies.
            </p>
          </div>
        </div>

        {/* Right Image (Desktop only) */}
        <div className="relative hidden aspect-auto min-h-[720px] flex-1 py-4 lg:block lg:py-0">
          <img
            src="https://interviewingio-assets.s3.amazonaws.com/images/feedback-annotations.svg"
            alt="Feedback from experts"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>

    </section>
  );
}

export default HowItWorks;
