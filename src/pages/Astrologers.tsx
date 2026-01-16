import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Layout from "@/components/layout/Layout";
import AstrologerCard from "@/components/AstrologerCard";
import { astrologers } from "@/data/mockData";

const expertiseOptions = [
  "Vedic Astrology",
  "Tarot Reading",
  "Numerology",
  "Kundli Reading",
  "Vastu Shastra",
  "Palmistry",
  "Face Reading",
  "Spiritual Healing",
  "Meditation",
  "Gemology",
];

const Astrologers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [onlineOnly, setOnlineOnly] = useState(false);

  const filteredAstrologers = useMemo(() => {
    return astrologers.filter((astrologer) => {
      // Search filter
      if (
        searchQuery &&
        !astrologer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !astrologer.expertise.some((e) =>
          e.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        return false;
      }

      // Expertise filter
      if (
        selectedExpertise.length > 0 &&
        !selectedExpertise.some((e) => astrologer.expertise.includes(e))
      ) {
        return false;
      }

      // Price filter
      if (
        astrologer.pricePerMinute < priceRange[0] ||
        astrologer.pricePerMinute > priceRange[1]
      ) {
        return false;
      }

      // Online filter
      if (onlineOnly && !astrologer.isOnline) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedExpertise, priceRange, onlineOnly]);

  const handleExpertiseToggle = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedExpertise([]);
    setPriceRange([0, 100]);
    setOnlineOnly(false);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Online Only */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="online"
          checked={onlineOnly}
          onCheckedChange={(checked) => setOnlineOnly(checked as boolean)}
        />
        <Label htmlFor="online" className="text-sm font-medium cursor-pointer">
          Online Only
        </Label>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-4 block">
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}/min
        </Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          min={0}
          step={5}
          className="mt-2"
        />
      </div>

      {/* Expertise */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Expertise</Label>
        <div className="space-y-2">
          {expertiseOptions.map((expertise) => (
            <div key={expertise} className="flex items-center space-x-2">
              <Checkbox
                id={expertise}
                checked={selectedExpertise.includes(expertise)}
                onCheckedChange={() => handleExpertiseToggle(expertise)}
              />
              <Label
                htmlFor={expertise}
                className="text-sm cursor-pointer text-muted-foreground hover:text-foreground"
              >
                {expertise}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedExpertise.length > 0 || onlineOnly || priceRange[0] > 0 || priceRange[1] < 100) && (
        <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
            Our <span className="gradient-text">Astrologers</span>
          </h1>
          <p className="text-muted-foreground">
            Connect with verified experts for personalized guidance
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {(selectedExpertise.length > 0 || onlineOnly) && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {selectedExpertise.length + (onlineOnly ? 1 : 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-semibold mb-6">Filters</h3>
              <FilterContent />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredAstrologers.length} of {astrologers.length} astrologers
            </p>

            {/* Grid */}
            {filteredAstrologers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAstrologers.map((astrologer) => (
                  <AstrologerCard key={astrologer.id} astrologer={astrologer} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <p className="text-muted-foreground">
                  No astrologers found matching your criteria.
                </p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Astrologers;
