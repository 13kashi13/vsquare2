import { useState, useRef, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Send, ArrowLeft, Phone, MoreVertical, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { astrologers } from "@/data/mockData";

interface Message {
  id: string;
  text: string;
  sender: "user" | "astrologer";
  timestamp: Date;
}

const Chat = () => {
  const [searchParams] = useSearchParams();
  const astrologerId = searchParams.get("astrologer");
  const astrologer = astrologers.find((a) => a.id === astrologerId) || astrologers[0];
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Namaste! I'm ${astrologer.name}. How may I assist you today? Feel free to share your birth details or ask any questions about your life journey.`,
      sender: "astrologer",
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionTime, setSessionTime] = useState(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate astrologer typing response
    setTimeout(() => {
      const responses = [
        "Thank you for sharing. Based on your planetary positions, I can see interesting patterns forming...",
        "The stars indicate a period of transformation. Let me analyze this further for you...",
        "I sense strong cosmic energy in your chart. This is very significant for your query...",
        "Your birth chart reveals fascinating insights. Let me explain what the planets are telling us...",
      ];
      
      const astrologerMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "astrologer",
        timestamp: new Date(),
      };
      
      setIsTyping(false);
      setMessages((prev) => [...prev, astrologerMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col cosmic-bg">
      {/* Header */}
      <header className="bg-card/90 backdrop-blur-xl border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link
                to="/astrologers"
                className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={astrologer.photo}
                    alt={astrologer.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-border"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-card" />
                </div>
                <div>
                  <p className="font-medium text-sm">{astrologer.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    {astrologer.rating} • {astrologer.expertise[0]}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right mr-2 hidden sm:block">
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-mono">{formatTime(sessionTime)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ₹{astrologer.pricePerMinute}/min
                </p>
              </div>
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          {/* Session Start Notice */}
          <div className="text-center mb-6">
            <span className="px-4 py-1 rounded-full bg-muted text-xs text-muted-foreground">
              Session started • {new Date().toLocaleDateString()}
            </span>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "glass-card rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass-card rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-card/90 backdrop-blur-xl border-t border-border sticky bottom-0">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-muted border-0"
            />
            <Button
              variant="hero"
              size="icon"
              onClick={handleSend}
              disabled={!inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Messages are encrypted end-to-end
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
