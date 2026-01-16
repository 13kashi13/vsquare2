import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Calendar,
  Settings,
  BarChart3,
  Plus,
  Edit2,
  Trash2,
  Eye,
  ToggleLeft,
  ToggleRight,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { astrologers } from "@/data/mockData";

const Admin = () => {
  const [astrologerList, setAstrologerList] = useState(astrologers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast } = useToast();

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      user: "Priya Mehta",
      astrologer: "Pandit Rajesh Sharma",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: "2",
      user: "Rahul Verma",
      astrologer: "Acharya Meera Devi",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "pending",
    },
    {
      id: "3",
      user: "Sneha Patel",
      astrologer: "Dr. Vikram Joshi",
      date: "2024-01-16",
      time: "11:00 AM",
      status: "completed",
    },
    {
      id: "4",
      user: "Amit Kumar",
      astrologer: "Swami Anand Prakash",
      date: "2024-01-16",
      time: "4:00 PM",
      status: "cancelled",
    },
  ];

  const stats = [
    { label: "Total Users", value: "12,458", icon: Users, change: "+12%" },
    { label: "Active Astrologers", value: "24", icon: Star, change: "+3" },
    { label: "Bookings Today", value: "89", icon: Calendar, change: "+18%" },
    { label: "Revenue (MTD)", value: "₹4.2L", icon: BarChart3, change: "+24%" },
  ];

  const toggleAstrologerStatus = (id: string) => {
    setAstrologerList((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isOnline: !a.isOnline } : a))
    );
    toast({
      title: "Status Updated",
      description: "Astrologer availability has been updated.",
    });
  };

  const handleAddAstrologer = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    toast({
      title: "Astrologer Added",
      description: "New astrologer profile has been created successfully.",
    });
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen cosmic-bg">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-xl border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="font-serif text-xl font-bold">Admin Dashboard</h1>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-4 md:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-xs text-green-400 mt-2">{stat.change} from last month</p>
            </div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="astrologers" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="astrologers" className="gap-2">
              <Users className="w-4 h-4" />
              Astrologers
            </TabsTrigger>
            <TabsTrigger value="bookings" className="gap-2">
              <Calendar className="w-4 h-4" />
              Bookings
            </TabsTrigger>
          </TabsList>

          {/* Astrologers Tab */}
          <TabsContent value="astrologers" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold">
                Manage Astrologers
              </h2>
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Astrologer
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Astrologer</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddAstrologer} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input placeholder="Enter name" className="mt-1.5" />
                      </div>
                      <div>
                        <Label>Experience (years)</Label>
                        <Input type="number" placeholder="0" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <Label>Photo URL</Label>
                      <Input placeholder="https://..." className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Expertise (comma separated)</Label>
                      <Input
                        placeholder="Vedic Astrology, Tarot..."
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Languages (comma separated)</Label>
                      <Input placeholder="Hindi, English..." className="mt-1.5" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Price per minute (₹)</Label>
                        <Input type="number" placeholder="25" className="mt-1.5" />
                      </div>
                      <div>
                        <Label>Rating</Label>
                        <Input
                          type="number"
                          step="0.1"
                          max="5"
                          placeholder="4.5"
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Bio</Label>
                      <Textarea
                        placeholder="Enter astrologer bio..."
                        className="mt-1.5"
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsAddModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="hero">
                        Add Astrologer
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="glass-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Astrologer</TableHead>
                    <TableHead className="hidden md:table-cell">Expertise</TableHead>
                    <TableHead className="hidden sm:table-cell">Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {astrologerList.map((astrologer) => (
                    <TableRow key={astrologer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={astrologer.photo}
                            alt={astrologer.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{astrologer.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {astrologer.experience} yrs • ₹{astrologer.pricePerMinute}/min
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {astrologer.expertise.slice(0, 2).map((exp) => (
                            <span
                              key={exp}
                              className="px-2 py-0.5 text-xs rounded-full bg-secondary/30"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          {astrologer.rating}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={astrologer.isOnline}
                            onCheckedChange={() => toggleAstrologerStatus(astrologer.id)}
                          />
                          <span
                            className={`text-xs ${
                              astrologer.isOnline ? "text-green-400" : "text-muted-foreground"
                            }`}
                          >
                            {astrologer.isOnline ? "Online" : "Offline"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-4">
            <h2 className="font-serif text-xl font-semibold">Recent Bookings</h2>

            <div className="glass-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead className="hidden md:table-cell">Astrologer</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.user}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {booking.astrologer}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm">{booking.date}</p>
                          <p className="text-xs text-muted-foreground">{booking.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
