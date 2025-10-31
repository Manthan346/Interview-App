import React from "react";
import { useBooking } from "../Context/BookingContext";
import { Button } from "@/components/ui/button";

const Summary = () => {
  const { bookingData } = useBooking();

 

  return (
    <section className="min-h-screen flex justify-center items-center bg-background text-foreground p-6">
      <div className="bg-card border rounded-2xl shadow-md p-8 w-full max-w-md text-center space-y-10">
        <h2 className="text-3xl font-semibold mb-4">Summary</h2>

        <div className="text-left space-y-7 h-100">
          <p><strong>Name:</strong> Manthan</p>
          <p><strong>Email:</strong> examle@gmail.com</p>
          <p><strong>Phone no:</strong> 1234567890</p>

          <p><strong>Company:</strong> {bookingData.company === "Other" ? bookingData.customCompany : bookingData.company}</p>
          <p><strong>Role:</strong> {bookingData.role === "Other" ? bookingData.customRole : bookingData.role}</p>
          <p><strong>Experience:</strong> {bookingData.experience}</p>
          <p><strong>Skillset:</strong> {bookingData.skillset}</p>
         
         
        </div>

        <Button className="bg-primary text-primary-foreground w-full hover:opacity-90">
          Pay
        </Button>
      </div>
    </section>
  );
};

export default Summary;
