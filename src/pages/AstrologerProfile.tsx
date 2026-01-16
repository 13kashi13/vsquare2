import { useParams, Link } from "react-router-dom";
import { Star, MessageCircle, Phone, Clock, Languages, Award, Users, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import { astrologers, reviews } from "@/data/mockData";

const AstrologerProfile = () => {
  const { id } = useParams();
  const astrologer = astrologers.find((a) => a.id === id);

  if (!astrologer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Astrologer not found</h1>
          <Link to="/astrologers">
            <Button variant="outline">Back to Astrologers</Button>
          </Link>
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src={astrologer.photo}
                    alt={astrologer.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-border"
                  />
                  <div
                    className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-card ${
                      astrologer.isOnline ? "bg-green-500" : "bg-muted-foreground"
                    }`}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                        {astrologer.name}
                      </h1>
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-primary text-primary" />
                          <span className="font-semibold">{astrologer.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          ({astrologer.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={astrologer.isOnline ? "default" : "secondary"}
                      className={`${
                        astrologer.isOnline
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : ""
                      }`}
                    >
                      {astrologer.isOnline ? "Online" : "Offline"}
                    </Badge>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {astrologer.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="px-3 py-1 text-sm rounded-full bg-secondary/30 text-secondary-foreground"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{astrologer.experience} years experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-primary" />
                      <span>{astrologer.languages.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{astrologer.totalConsultations.toLocaleString()} consultations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {astrologer.bio}
                </p>

                <h3 className="font-semibold mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {astrologer.specializations.map((spec) => (
                    <Badge key={spec} variant="outline" className="px-3 py-1">
                      <Award className="w-3 h-3 mr-1" />
                      {spec}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold mb-6">User Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.userName}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.comment}</p>
                      <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="availability" className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold mb-6">Weekly Schedule</h2>
                <div className="grid gap-4">
                  {astrologer.availability.map((day) => (
                    <div key={day.day} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-medium w-24">{day.day}</span>
                      <div className="flex flex-wrap gap-2">
                        {day.slots.map((slot) => (
                          <span
                            key={slot}
                            className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  ₹{astrologer.pricePerMinute}
                  <span className="text-lg font-normal text-muted-foreground">/min</span>
                </div>
                <p className="text-sm text-muted-foreground">Consultation fee</p>
              </div>

              <div className="space-y-3">
                <Link to={`/chat?astrologer=${astrologer.id}`} className="block">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full gap-2"
                    disabled={!astrologer.isOnline}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat Now
                  </Button>
                </Link>
                <Link to={`/booking?astrologer=${astrologer.id}`} className="block">
                  <Button variant="heroOutline" size="lg" className="w-full gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              {!astrologer.isOnline && (
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Chat is available only when astrologer is online
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-3 text-sm">Why Choose {astrologer.name.split(" ")[0]}?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    {astrologer.rating} rating from {astrologer.reviews}+ users
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    {astrologer.experience}+ years of experience
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    {astrologer.totalConsultations.toLocaleString()}+ consultations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AstrologerProfile;
