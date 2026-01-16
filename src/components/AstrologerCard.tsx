import { Link } from "react-router-dom";
import { Star, MessageCircle, Phone, Clock, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Astrologer } from "@/data/mockData";

interface AstrologerCardProps {
  astrologer: Astrologer;
}

const AstrologerCard = ({ astrologer }: AstrologerCardProps) => {
  return (
    <div className="glass-card p-4 md:p-6 group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
      <div className="flex gap-4">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <img
            src={astrologer.photo}
            alt={astrologer.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-border group-hover:border-primary/50 transition-colors"
          />
          {/* Online Status */}
          <div
            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card flex items-center justify-center ${
              astrologer.isOnline ? "bg-green-500" : "bg-muted-foreground"
            }`}
          >
            {astrologer.isOnline && (
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Link 
                to={`/astrologer/${astrologer.id}`}
                className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
              >
                {astrologer.name}
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium text-foreground">{astrologer.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">
                  ({astrologer.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>
            <Badge 
              variant={astrologer.isOnline ? "default" : "secondary"}
              className={astrologer.isOnline ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
            >
              {astrologer.isOnline ? "Online" : "Offline"}
            </Badge>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {astrologer.expertise.map((exp) => (
              <span
                key={exp}
                className="px-2 py-0.5 text-xs rounded-full bg-secondary/30 text-secondary-foreground"
              >
                {exp}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{astrologer.experience} yrs</span>
            </div>
            <div className="flex items-center gap-1">
              <Languages className="w-4 h-4" />
              <span>{astrologer.languages.slice(0, 2).join(", ")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price & Actions */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div>
          <span className="text-primary font-bold text-lg">₹{astrologer.pricePerMinute}</span>
          <span className="text-muted-foreground text-sm">/min</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/chat?astrologer=${astrologer.id}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1.5"
              disabled={!astrologer.isOnline}
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>
          </Link>
          <Link to={`/booking?astrologer=${astrologer.id}`}>
            <Button variant="hero" size="sm" className="gap-1.5">
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
