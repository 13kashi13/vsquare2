import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/mockData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 relative group hover:border-primary/30 transition-all duration-300">
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "fill-primary text-primary"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        "{testimonial.comment}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-border"
        />
        <div>
          <p className="font-medium text-foreground">{testimonial.name}</p>
          <p className="text-xs text-primary">{testimonial.service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
