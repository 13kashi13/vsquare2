export interface Astrologer {
  id: string;
  name: string;
  photo: string;
  expertise: string[];
  experience: number;
  rating: number;
  reviews: number;
  pricePerMinute: number;
  isOnline: boolean;
  languages: string[];
  bio: string;
  specializations: string[];
  totalConsultations: number;
  availability: {
    day: string;
    slots: string[];
  }[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  service: string;
}

export const astrologers: Astrologer[] = [
  {
    id: "1",
    name: "Pandit Rajesh Sharma",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: ["Vedic Astrology", "Kundli Reading"],
    experience: 15,
    rating: 4.9,
    reviews: 2547,
    pricePerMinute: 25,
    isOnline: true,
    languages: ["Hindi", "English", "Sanskrit"],
    bio: "With over 15 years of experience in Vedic Astrology, I have helped thousands of individuals find clarity in their lives. My approach combines ancient wisdom with modern understanding to provide practical guidance for your life journey.",
    specializations: ["Career Guidance", "Marriage Compatibility", "Health Predictions", "Wealth & Finance"],
    totalConsultations: 12500,
    availability: [
      { day: "Monday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Tuesday", slots: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
      { day: "Thursday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    ]
  },
  {
    id: "2",
    name: "Acharya Meera Devi",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    expertise: ["Tarot Reading", "Numerology"],
    experience: 12,
    rating: 4.8,
    reviews: 1892,
    pricePerMinute: 30,
    isOnline: true,
    languages: ["Hindi", "English", "Punjabi"],
    bio: "I am a certified Tarot reader and Numerologist with a deep connection to the spiritual realm. My readings are known for their accuracy and the practical advice I provide to help you navigate life's challenges.",
    specializations: ["Love & Relationships", "Career Decisions", "Spiritual Growth", "Life Path Analysis"],
    totalConsultations: 8900,
    availability: [
      { day: "Monday", slots: ["10:00 AM", "12:00 PM", "3:00 PM"] },
      { day: "Tuesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"] },
      { day: "Thursday", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Saturday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    ]
  },
  {
    id: "3",
    name: "Dr. Vikram Joshi",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: ["Vedic Astrology", "Vastu Shastra"],
    experience: 20,
    rating: 4.95,
    reviews: 3245,
    pricePerMinute: 40,
    isOnline: false,
    languages: ["Hindi", "English", "Marathi", "Gujarati"],
    bio: "A PhD in Jyotish Shastra, I bring academic rigor to ancient astrological practices. I specialize in complex birth chart analysis and Vastu consultations for homes and businesses.",
    specializations: ["Birth Chart Analysis", "Vastu Consultation", "Muhurat Selection", "Gemstone Recommendation"],
    totalConsultations: 15600,
    availability: [
      { day: "Tuesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
      { day: "Saturday", slots: ["10:00 AM", "2:00 PM"] },
    ]
  },
  {
    id: "4",
    name: "Swami Anand Prakash",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    expertise: ["Spiritual Healing", "Meditation"],
    experience: 25,
    rating: 4.85,
    reviews: 1567,
    pricePerMinute: 35,
    isOnline: true,
    languages: ["Hindi", "English", "Bengali"],
    bio: "I am a spiritual healer and meditation guru who has spent decades studying ancient healing techniques. My sessions focus on energy balancing and spiritual awakening.",
    specializations: ["Chakra Healing", "Past Life Regression", "Meditation Guidance", "Spiritual Counseling"],
    totalConsultations: 7800,
    availability: [
      { day: "Monday", slots: ["6:00 AM", "8:00 AM", "5:00 PM", "7:00 PM"] },
      { day: "Wednesday", slots: ["6:00 AM", "9:00 AM", "6:00 PM"] },
      { day: "Friday", slots: ["6:00 AM", "8:00 AM", "5:00 PM"] },
      { day: "Sunday", slots: ["6:00 AM", "8:00 AM", "10:00 AM"] },
    ]
  },
  {
    id: "5",
    name: "Jyotishi Priya Kapoor",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    expertise: ["Palmistry", "Face Reading"],
    experience: 10,
    rating: 4.7,
    reviews: 1234,
    pricePerMinute: 20,
    isOnline: true,
    languages: ["Hindi", "English"],
    bio: "I am a palmist and face reader with a unique ability to read the subtle signs of your body. My readings provide insights into your personality, potential, and life path.",
    specializations: ["Palm Analysis", "Face Reading", "Personality Assessment", "Future Predictions"],
    totalConsultations: 5600,
    availability: [
      { day: "Monday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Tuesday", slots: ["11:00 AM", "3:00 PM", "5:00 PM"] },
      { day: "Thursday", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
    ]
  },
  {
    id: "6",
    name: "Guru Arjun Singh",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    expertise: ["Vedic Astrology", "Gemology"],
    experience: 18,
    rating: 4.88,
    reviews: 2890,
    pricePerMinute: 35,
    isOnline: false,
    languages: ["Hindi", "English", "Punjabi"],
    bio: "With nearly two decades of experience, I combine Vedic astrology with gemology to provide holistic solutions. My recommendations are known for bringing positive changes in clients' lives.",
    specializations: ["Gemstone Analysis", "Planetary Remedies", "Kundli Matching", "Business Astrology"],
    totalConsultations: 11200,
    availability: [
      { day: "Monday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
      { day: "Thursday", slots: ["9:00 AM", "12:00 PM", "4:00 PM"] },
      { day: "Saturday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Mehta",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Pandit Rajesh's predictions about my career change were spot on! I was skeptical at first, but his guidance helped me make the right decision. Highly recommend!",
    service: "Career Consultation"
  },
  {
    id: "2",
    name: "Rahul Verma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The Kundli matching service was excellent. Acharya Meera explained everything in detail and gave us confidence in our decision. Thank you!",
    service: "Kundli Matching"
  },
  {
    id: "3",
    name: "Sneha Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "I've been consulting with CelestialGuide for 2 years now. The accuracy of the readings and the warmth of the astrologers keep me coming back.",
    service: "Monthly Horoscope"
  },
  {
    id: "4",
    name: "Amit Kumar",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Dr. Vikram's Vastu consultation transformed our home energy. We noticed positive changes within weeks. Truly grateful!",
    service: "Vastu Consultation"
  },
];

export const horoscopes = [
  { sign: "Aries", icon: "♈", element: "Fire", dates: "Mar 21 - Apr 19" },
  { sign: "Taurus", icon: "♉", element: "Earth", dates: "Apr 20 - May 20" },
  { sign: "Gemini", icon: "♊", element: "Air", dates: "May 21 - Jun 20" },
  { sign: "Cancer", icon: "♋", element: "Water", dates: "Jun 21 - Jul 22" },
  { sign: "Leo", icon: "♌", element: "Fire", dates: "Jul 23 - Aug 22" },
  { sign: "Virgo", icon: "♍", element: "Earth", dates: "Aug 23 - Sep 22" },
  { sign: "Libra", icon: "♎", element: "Air", dates: "Sep 23 - Oct 22" },
  { sign: "Scorpio", icon: "♏", element: "Water", dates: "Oct 23 - Nov 21" },
  { sign: "Sagittarius", icon: "♐", element: "Fire", dates: "Nov 22 - Dec 21" },
  { sign: "Capricorn", icon: "♑", element: "Earth", dates: "Dec 22 - Jan 19" },
  { sign: "Aquarius", icon: "♒", element: "Air", dates: "Jan 20 - Feb 18" },
  { sign: "Pisces", icon: "♓", element: "Water", dates: "Feb 19 - Mar 20" },
];

export const services = [
  {
    id: "horoscope",
    title: "Daily Horoscope",
    description: "Get personalized daily predictions based on your zodiac sign",
    icon: "Stars",
  },
  {
    id: "tarot",
    title: "Tarot Reading",
    description: "Unlock insights from the mystical tarot cards",
    icon: "Sparkles",
  },
  {
    id: "numerology",
    title: "Numerology",
    description: "Discover the hidden meaning in your numbers",
    icon: "Hash",
  },
  {
    id: "kundli",
    title: "Kundli Analysis",
    description: "Comprehensive birth chart analysis for life guidance",
    icon: "Moon",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    userName: "Anita Sharma",
    rating: 5,
    comment: "Excellent guidance for my career decisions. Very accurate predictions!",
    date: "2024-01-10"
  },
  {
    id: "2",
    userName: "Vikash Gupta",
    rating: 5,
    comment: "The remedies suggested worked wonders. Thank you so much!",
    date: "2024-01-08"
  },
  {
    id: "3",
    userName: "Meera Jain",
    rating: 4,
    comment: "Good consultation but wish the session was a bit longer.",
    date: "2024-01-05"
  },
  {
    id: "4",
    userName: "Rajesh Kumar",
    rating: 5,
    comment: "Best astrologer I've consulted. His knowledge is phenomenal!",
    date: "2024-01-03"
  },
];
