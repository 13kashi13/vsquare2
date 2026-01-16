interface HoroscopeCardProps {
  sign: string;
  icon: string;
  element: string;
  dates: string;
}

const elementColors: Record<string, string> = {
  Fire: "from-red-500/20 to-orange-500/20 border-orange-500/30",
  Earth: "from-green-600/20 to-emerald-500/20 border-emerald-500/30",
  Air: "from-sky-500/20 to-cyan-500/20 border-cyan-500/30",
  Water: "from-blue-500/20 to-indigo-500/20 border-indigo-500/30",
};

const HoroscopeCard = ({ sign, icon, element, dates }: HoroscopeCardProps) => {
  return (
    <div
      className={`p-4 rounded-xl bg-gradient-to-br ${elementColors[element]} border cursor-pointer 
        hover:scale-105 transition-all duration-300 text-center group`}
    >
      <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">{icon}</span>
      <h4 className="font-serif font-semibold text-foreground">{sign}</h4>
      <p className="text-xs text-muted-foreground mt-1">{dates}</p>
    </div>
  );
};

export default HoroscopeCard;
