import { Stars, Sparkles, Hash, Moon, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Stars: Stars,
  Sparkles: Sparkles,
  Hash: Hash,
  Moon: Moon,
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = iconMap[icon] || Stars;

  return (
    <div className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
