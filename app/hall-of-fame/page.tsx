"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Trophy, Medal, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const CHAMPIONS = [
  { id: 1, team: "Cyber Knights", event: "Valorant Pro Series 2025", date: "Dec 2025", image: "https://picsum.photos/seed/knight/600/400" },
  { id: 2, team: "Neon Strikers", event: "MLBB Championship", date: "Nov 2025", image: "https://picsum.photos/seed/neon/600/400" },
  { id: 3, team: "Void Walkers", event: "Apex Legends Invitational", date: "Oct 2025", image: "https://picsum.photos/seed/void/600/400" },
];

export default function HallOfFamePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white p-16 md:p-24 border-b-3 border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10">
          <Medal className="w-20 h-20 text-neo-yellow mx-auto mb-8 animate-bounce" strokeWidth={2.5} />
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            Hall Of <span className="text-neo-pink">Fame</span>
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto opacity-70">
            Celebrating the legends who conquered the arena. Their names are etched in the history of EventAir.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CHAMPIONS.map((champ) => (
            <div key={champ.id} className="group">
              <Card className="p-0 overflow-hidden relative group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_black] transition-all duration-500 bg-white">
                <div className="h-64 border-b-3 border-black overflow-hidden relative">
                  <img 
                    src={champ.image} 
                    alt={champ.team} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4 bg-neo-yellow text-black p-3 border-3 border-black shadow-brutal-sm">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase text-neo-pink tracking-widest mb-2">{champ.date}</p>
                  <h3 className="text-3xl font-black uppercase mb-4 leading-none">{champ.team}</h3>
                  <div className="flex flex-col gap-1 text-sm font-bold opacity-60 uppercase">
                    <p>Tournament: {champ.event}</p>
                    <p>Status: LEGENDARY</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neo-cyan border-3 border-black rotate-12 group-hover:rotate-0 transition-all duration-500 flex items-center justify-center">
                  <Star className="w-8 h-8 fill-black" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-24 text-center">
           <Card variant="cyan" className="p-12 md:p-20 border-4 inline-block max-w-4xl w-full">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
               Think You Can Make the <span className="underline">Cut?</span>
             </h2>
             <p className="text-xl font-bold mb-8 opacity-70">
               The next Hall of Fame induction is waiting for you. Join a tournament now.
             </p>
             <Link href="/events">
               <button className="bg-black text-white px-10 py-5 border-4 border-black shadow-brutal font-black uppercase text-xl hover:bg-neo-yellow hover:text-black transition-all hover:-translate-y-1">
                 Join the Arena <ArrowRight className="inline-block ml-2 w-6 h-6" />
               </button>
             </Link>
           </Card>
        </section>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Legends Never Die</p>
      </footer>
    </main>
  );
}
