import { Link } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight, Users, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AstrologerCard from "@/components/AstrologerCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import HoroscopeCard from "@/components/HoroscopeCard";
import { astrologers, testimonials, services, horoscopes } from "@/data/mockData";

const Index = () => {
  const onlineAstrologers = astrologers.filter((a) => a.isOnline).slice(0, 3);

  const stats = [
    { icon: Users, value: "500K+", label: "Happy Users" },
    { icon: Star, value: "4.8/5", label: "Average Rating" },
    { icon: Shield, value: "100%", label: "Verified Experts" },
    { icon: Clock, value: "24/7", label: "Available" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: "-3s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-primary font-medium">India's #1 Astrology Platform</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Talk to India's{" "}
              <span className="gradient-text glow-text">Best Astrologers</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Get personalized guidance on life, love, career, and spirituality from 
              verified astrologers available 24/7
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/astrologers">
                <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat with Astrologer
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of astrological services designed to guide you through life's journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Horoscope Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Daily <span className="gradient-text">Horoscope</span>
            </h2>
            <p className="text-muted-foreground">
              Select your zodiac sign to read your daily horoscope
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4">
            {horoscopes.map((horoscope) => (
              <HoroscopeCard key={horoscope.sign} {...horoscope} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Astrologers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Top <span className="gradient-text">Astrologers</span> Online
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Connect with our verified experts for instant guidance
              </p>
            </div>
            <Link to="/astrologers">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineAstrologers.map((astrologer) => (
              <AstrologerCard key={astrologer.id} astrologer={astrologer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who found clarity and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Discover Your <span className="gradient-text">Destiny?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with a verified astrologer now and get answers to your most pressing questions
              </p>
              <Link to="/astrologers">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Your Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
