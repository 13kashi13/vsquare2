import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { astrologers } from "@/data/mockData";
import { format } from "date-fns";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const astrologerId = searchParams.get("astrologer");
  const [selectedAstrologer, setSelectedAstrologer] = useState(
    astrologerId ? astrologers.find((a) => a.id === astrologerId) : null
  );
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed && selectedAstrologer && date && selectedSlot) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto glass-card p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-serif text-2xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Your consultation has been scheduled successfully
            </p>

            <div className="glass-card p-4 mb-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedAstrologer.photo}
                  alt={selectedAstrologer.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <p className="font-semibold">{selectedAstrologer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedAstrologer.expertise.join(", ")}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  <span>{format(date, "EEEE, MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{selectedSlot}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/">
                <Button variant="hero" className="w-full">
                  Back to Home
                </Button>
              </Link>
              <Link to="/astrologers">
                <Button variant="outline" className="w-full">
                  Browse More Astrologers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/astrologers"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Astrologers
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          Book a <span className="gradient-text">Consultation</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Select an astrologer, date, and time for your session
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1: Select Astrologer */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h2 className="font-serif text-xl font-semibold mb-4">
                1. Select Astrologer
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {astrologers.slice(0, 4).map((astrologer) => (
                  <Card
                    key={astrologer.id}
                    className={`cursor-pointer transition-all ${
                      selectedAstrologer?.id === astrologer.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedAstrologer(astrologer)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={astrologer.photo}
                          alt={astrologer.name}
                          className="w-14 h-14 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{astrologer.name}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {astrologer.expertise[0]}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            <span className="text-xs">{astrologer.rating}</span>
                            <span className="text-xs text-muted-foreground">
                              • ₹{astrologer.pricePerMinute}/min
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Step 2: Select Date */}
            <div className="glass-card p-6">
              <h2 className="font-serif text-xl font-semibold mb-4">
                2. Select Date
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                className="rounded-lg border border-border bg-card"
              />
            </div>

            {/* Step 3: Select Time */}
            <div className="glass-card p-6">
              <h2 className="font-serif text-xl font-semibold mb-4">
                3. Select Time Slot
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedSlot === slot
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-serif text-lg font-semibold mb-4">Booking Summary</h3>

              {selectedAstrologer ? (
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <img
                    src={selectedAstrologer.photo}
                    alt={selectedAstrologer.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-medium">{selectedAstrologer.name}</p>
                    <p className="text-sm text-primary">
                      ₹{selectedAstrologer.pricePerMinute}/min
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  Select an astrologer to continue
                </p>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {date ? format(date, "MMM d, yyyy") : "Not selected"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedSlot || "Not selected"}</span>
                </div>
              </div>

              <Button
                variant="hero"
                className="w-full"
                disabled={!selectedAstrologer || !date || !selectedSlot}
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                You can cancel or reschedule up to 2 hours before your session
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
