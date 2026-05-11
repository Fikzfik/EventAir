"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, Filter, Calendar, Users, Trophy } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Esports", "Sports", "Music", "Tech"];

const MOCK_EVENTS = [
  { id: "1", title: "Valorant Pro Series", category: "Esports", prize: "$10,000", date: "Oct 24, 2026", teams: 128, image: "https://picsum.photos/seed/11/600/400" },
  { id: "2", title: "Mobile Legends Cup", category: "Esports", prize: "$5,000", date: "Nov 12, 2026", teams: 64, image: "https://picsum.photos/seed/12/600/400" },
  { id: "3", title: "FIFA Street Invitational", category: "Sports", prize: "$2,500", date: "Dec 05, 2026", teams: 32, image: "https://picsum.photos/seed/13/600/400" },
  { id: "4", title: "Rock Blast Festival", category: "Music", prize: "N/A", date: "Jan 15, 2027", teams: 0, image: "https://picsum.photos/seed/14/600/400" },
  { id: "5", title: "Global Dev Hackathon", category: "Tech", prize: "$50,000", date: "Feb 20, 2027", teams: 256, image: "https://picsum.photos/seed/15/600/400" },
  { id: "6", title: "Street Basketball 3x3", category: "Sports", prize: "$1,000", date: "Mar 10, 2027", teams: 16, image: "https://picsum.photos/seed/16/600/400" },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <header className="bg-neo-yellow border-b-3 border-black p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Event <span className="underline decoration-black">Discovery</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black/50" />
              <input 
                type="text" 
                placeholder="Search events, games, or organizers..." 
                className="w-full bg-white border-3 border-black p-4 pl-12 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filter
            </Button>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-black uppercase mb-4">Categories</h3>
            <div className="flex flex-wrap md:flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-2 border-3 border-black font-black uppercase text-sm shadow-brutal-sm transition-all hover:-translate-y-0.5 ${activeCategory === cat ? 'bg-neo-pink text-black' : 'bg-white text-black/60 hover:text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <Card variant="white" className="p-4 border-2">
            <h3 className="font-black uppercase mb-2">Featured Partner</h3>
            <div className="h-20 bg-neo-cyan border-2 border-black mb-2 flex items-center justify-center font-black">
              SPONSOR LOGO
            </div>
            <p className="text-xs font-bold text-black/60">Supporting local communities since 2024.</p>
          </Card>
        </aside>

        {/* Event Grid */}
        <div className="flex-grow">
          <div className="grid sm:grid-cols-2 gap-8">
            {MOCK_EVENTS.map(ev => (
              <Link href={`/events/${ev.id}`} key={ev.id} className="group">
                <Card className="p-0 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_black] transition-all duration-300">
                  <div className="h-48 border-b-3 border-black overflow-hidden relative">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 border-2 border-black font-black text-xs uppercase">
                      {ev.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase mb-4 leading-none">{ev.title}</h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Calendar className="w-4 h-4 text-neo-pink" /> {ev.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Trophy className="w-4 h-4 text-neo-yellow" /> {ev.prize}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Users className="w-4 h-4 text-neo-cyan" /> {ev.teams} Teams
                      </div>
                    </div>
                    <Button className="w-full justify-center">View Details</Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" size="sm" disabled>Prev</Button>
            <Button size="sm" className="bg-neo-pink">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-4">EventAir Discovery</p>
        <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Finding your next challenge</p>
      </footer>
    </main>
  );
}
