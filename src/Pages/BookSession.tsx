import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../Context/BookingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Netflix",
  "Apple",
  "Adobe",
  "Uber",
  "Airbnb",
  "Stripe",
  "LinkedIn",
  "PayPal",
  "Salesforce",
  "Intel",
  "Oracle",
  "Cisco",
  "IBM",
  "Spotify",
  "Dropbox",
  "Other",
];

const roles = [
  "Frontend Engineer",
  "Backend Engineer",
  "Fullstack Engineer",
  "DevOps Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "Software Engineer",
  "System Design Specialist",
  "SDET (Test Engineer)",
  "Other",
];

const BookSession = () => {
  const { bookingData, setBookingData } = useBooking();
  const [showCustomCompany, setShowCustomCompany] = useState(false);
  const [showCustomRole, setShowCustomRole] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/summary");
  };

  return (
    <section className="min-h-screen bg-background text-foreground flex justify-center items-center p-6 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-card border rounded-2xl p-8 sm:p-10 shadow-md w-full max-w-lg space-y-8 my-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Book Your Mock Interview
        </h2>

        {/* Company */}
        <div>
          <Label>Company</Label>
          <Select
            onValueChange={(value) => {
              setBookingData((prev) => ({ ...prev, company: value }));
              setShowCustomCompany(value === "Other");
            }}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select Company" />
            </SelectTrigger>
            <SelectContent className="max-h-70 overflow-y-auto">
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showCustomCompany && (
            <Input
              placeholder="Specify company"
              className="mt-2"
              value={bookingData.customCompany}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  customCompany: e.target.value,
                }))
              }
            />
          )}
        </div>

        {/* Role */}
        <div>
          <Label className="mt-1">Role</Label>
          <Select
            onValueChange={(value) => {
              setBookingData((prev) => ({ ...prev, role: value }));
              setShowCustomRole(value === "Other");
            }}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showCustomRole && (
            <Input
              placeholder="Specify role"
              className="mt-2"
              value={bookingData.customRole}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  customRole: e.target.value,
                }))
              }
            />
          )}
        </div>

        {/* Experience */}
        <div>
          <Label>Experience</Label>
          <Select className="mt-1"
            onValueChange={(value) =>
              setBookingData((prev) => ({
                ...prev,
                experience: value,
              }))
            }
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select Experience Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fresher (less than 1 year)">
                Fresher (Less than 1 year)
              </SelectItem>
              <SelectItem value="Experience (more than 1 year)">
                Experience (More than 1 year)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Skillset */}
        <div>
          <Label>Skillset (max 100 chars)</Label>
          <Textarea
            maxLength={100}
            placeholder="E.g., React, Node.js, System Design..."
            value={bookingData.skillset}
            onChange={(e) =>
              setBookingData((prev) => ({
                ...prev,
                skillset: e.target.value,
              }))
            }
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:opacity-90"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default BookSession;
