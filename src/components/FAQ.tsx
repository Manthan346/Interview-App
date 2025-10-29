import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <section id="faq" className="bg-foreground text-primary-foreground py-16 px-6 sm:px-10 md:px-20 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Title */}
        <div className="flex flex-col justify-center">
          <h2 className="font-blender text-5xl sm:text-6xl font-semibold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-primary-foreground/80">
            Everything you need to know about our platform and services.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="bg-foreground text-background rounded-2xl shadow-lg p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium">
                How does the interview prep work?
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden data-[state=closed]:max-h-0 data-[state=open]:max-h-40">
                <p className="text-muted-foreground">
                  You’ll get structured practice sessions with mock interviews,
                  real-world questions, and instant feedback from mentors.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium">
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden data-[state=closed]:max-h-0 data-[state=open]:max-h-40">
                <p className="text-muted-foreground">
                  Yes, you can start for free and explore key features before
                  upgrading to a premium plan.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium">
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden data-[state=closed]:max-h-0 data-[state=open]:max-h-40">
                <p className="text-muted-foreground">
                  Absolutely. You can manage or cancel your subscription anytime
                  from your account settings.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium">
                Do you offer 1-on-1 mentorship?
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden data-[state=closed]:max-h-0 data-[state=open]:max-h-40">
                <p className="text-muted-foreground">
                  Yes! You can book one-on-one sessions with experienced mentors
                  for personalized guidance.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-muted">
              <AccordionTrigger className="text-lg font-medium">
                Why should I do this?
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden data-[state=closed]:max-h-0 data-[state=open]:max-h-40">
                <p className="text-muted-foreground">
                  First and foremost, if you're trying to get better at technical interviews, the best way to do that is to actually do it. Here, you can get a lens into the kinds of questions you'd encounter at top companies and get comfortable with answering them in a low-pressure, anonymous setting.
                   Beyond that, interviewing here can be a great way to get your foot in the door at top companies. When you do well in practice, you’ll get access to our jobs portal, and there you can get warm intros to hiring decision-makers.
                  In other words, you can get interviews at top companies without ever touching your resume, applying, haranguing your friends for referrals, or talking to recruiters.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
