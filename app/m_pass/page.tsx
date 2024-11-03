"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar, CalendarDays, CalendarRange } from "lucide-react";

// Subscription option component
const SubscriptionOption = ({ icon: Icon, label, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all ${
      isSelected ? "bg-[#3D0000] text-white" : "bg-[#2A0000] text-gray-300 hover:bg-[#350000]"
    }`}
  >
    <Icon size={32} className="mb-2" />
    <span className="text-sm">{label}</span>
  </div>
);

// Modal component
const Modal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 text-center">
      <h2 className="text-lg font-bold text-[#3D0000]">Welcome to N-Pass!</h2>
      <p className="text-gray-700 mt-2">
        You can watch all movies free for the standard ticket; you may have to pay for a special seat, the price up to the seat.
      </p>
      <Button
        onClick={onClose}
        className="mt-4 bg-[#3D0000] hover:bg-[#4D0000]"
      >
        OK
      </Button>
    </div>
  </div>
);

export default function Mpass() {
  const [selected, setSelected] = useState(null);
  const [price, setPrice] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    switch (option) {
      case "weekly":
        setPrice("75 Baht");
        break;
      case "monthly":
        setPrice("220 Baht");
        break;
      case "yearly":
        setPrice("2000 Baht");
        break;
      default:
        setPrice("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowModal(true); // Show the modal when the form is submitted
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Redirect to another page (replace 'your-url-here' with your actual URL)
    window.location.href = '/';
  };

  return (
    <main className="main_gradient flex items-center justify-center min-h-screen w-full px-4 text-white">
      <Card className="w-full max-w-md bg-[#1A0000] text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center">N-Pass Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Subscription Type</Label>
              <div className="grid grid-cols-3 gap-4">
                <SubscriptionOption
                  icon={Calendar}
                  label="Weekly"
                  isSelected={selected === "weekly"}
                  onClick={() => handleSelect("weekly")}
                />
                <SubscriptionOption
                  icon={CalendarDays}
                  label="Monthly"
                  isSelected={selected === "monthly"}
                  onClick={() => handleSelect("monthly")}
                />
                <SubscriptionOption
                  icon={CalendarRange}
                  label="Yearly"
                  isSelected={selected === "yearly"}
                  onClick={() => handleSelect("yearly")}
                />
              </div>
            </div>
            {price && (
              <div className="text-center text-gray-300">
                Price: {price}
              </div>
            )}
            <Button type="submit" className="w-full bg-[#3D0000] hover:bg-[#4D0000]">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      {showModal && (
        <Modal onClose={handleCloseModal} />
      )}
    </main>
  );
}
