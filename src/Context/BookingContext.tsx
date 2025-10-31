import React, { createContext, useState, useContext } from "react";

type BookingData = {
  company: string;
  customCompany?: string;
  role: string;
  customRole?: string;
  experience: string;
  skillset: string;
};

type BookingContextType = {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    company: "",
    customCompany: "",
    role: "",
    customRole: "",
    experience: "",
    skillset: "",
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};
