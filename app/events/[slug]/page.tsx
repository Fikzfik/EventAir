"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bracket, Round } from "@/components/features/Bracket";
import { Calendar, Users, Trophy, MapPin, Share2, Info, ScrollText, CheckCircle } from "lucide-react";

const MOCK_BRACKET: Round[] = [
  {
    title: "Quarter-Finals",
    matches: [
      { id: "m1", status: "completed", teams: [{ id: "t1", name: "Cyber Knights", score: 2, isWinner: true }, { id: "t2", name: "Neon Strikers", score: 1 }] },
      { id: "m2", status: "completed", teams: [{ id: "t3", name: "Ghost Protocol", score: 0 }, { id: "t4", name: "Shadow Realm", score: 2, isWinner: true }] },
      { id: "m3", status: "live",      teams: [{ id: "t5", name: "Void Walkers",  score: 1 }, { id: "t6", name: "Zenith Squad",  score: 1 }] },
      { id: "m4", status: "scheduled", teams: [{ id: "t7", name: "Titan Legion",  score: 0 }, { id: "t8", name: "Apex Predators",score: 0 }] },
    ],
  },
  {
    title: "Semi-Finals",
    matches: [
      { id: "m5", status: "scheduled", teams: [{ id: "t1", name: "Cyber Knights", score: 0 }, { id: "t4", name: "Shadow Realm",  score: 0 }] },
      { id: "m6", status: "scheduled", teams: [{ id: "t?", name: "TBD",           score: 0 }, { id: "t?", name: "TBD",           score: 0 }] },
    ],
  },
  {
    title: "Grand Finals",
    matches: [
      { id: "m7", status: "scheduled", teams: [{ id: "t?", name: "TBD", score: 0 }, { id: "t?", name: "TBD", score: 0 }] },
    ],
  },
];

export default function EventDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Event Hero */}
      <section className="relative h-[400px] border-b-3 border-black overflow-hidden bg-black">
        <img 
          src="https://picsum.photos/seed/valorant/1200/600" 
          alt="Event Cover" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-white">
              <div className="inline-block bg-neo-pink text-black px-4 py-1 border-2 border-black font-black uppercase text-sm mb-4">
                Esports • FPS
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                Valorant Pro Series
              </h1>
              <div className="flex flex-wrap gap-6 font-bold">
                <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-neo-pink" /> Oct 24 - 26, 2026</span>
                <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-neo-pink" /> Jakarta, Indonesia (Offline)</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="shadow-[6px_6px_0px_0px_rgba(0,255,255,1)]">Register Now</Button>
              <Button variant="outline" className="bg-white"><Share2 className="w-5 h-5" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
        {/* Left Column: Info, Rules, Schedule */}
        <div className="lg:col-span-2 space-y-12">
          {/* Info Card */}
          <section>
            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <Info className="w-8 h-8 text-neo-cyan" strokeWidth={3} /> Description
            </h2>
            <Card variant="white" className="p-8 text-lg font-bold leading-relaxed border-2">
              The Valorant Pro Series is the biggest community tournament of the year. 
              Join 128 teams from across the region to compete for a massive $10,000 prize pool 
              and the title of the Ultimate Champion. This event features professional production, 
              live commentary, and high-stakes matches.
            </Card>
          </section>

          {/* Rules Card */}
          <section>
            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <ScrollText className="w-8 h-8 text-neo-pink" strokeWidth={3} /> Tournament Rules
            </h2>
            <Card variant="white" className="p-8 border-2">
              <ul className="space-y-4 font-bold">
                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-neo-green shrink-0" /> Single elimination bracket format.</li>
                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-neo-green shrink-0" /> All matches are Best of 3 (Bo3).</li>
                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-neo-green shrink-0" /> Grand Finals will be Best of 5 (Bo5).</li>
                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-neo-green shrink-0" /> Players must be at least 16 years old.</li>
                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-neo-green shrink-0" /> Fair play and anti-cheat measures are strictly enforced.</li>
              </ul>
            </Card>
          </section>

          {/* Bracket Section - DYNAMIC RENDERING */}
          <section id="bracket">
            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-neo-yellow" strokeWidth={3} /> Tournament Bracket
            </h2>
            <Card variant="white" className="p-0 overflow-hidden relative border-3">
              <div className="bg-black text-white px-4 py-1 text-xs font-black uppercase inline-block absolute top-4 left-4 z-10">
                Live Progress
              </div>
              <Bracket rounds={MOCK_BRACKET} />
            </Card>
          </section>
        </div>

        {/* Right Column: Prize Pool & Stats */}
        <aside className="space-y-8">
          {/* Prize Card */}
          <Card variant="yellow" className="p-8 text-center border-4">
            <Trophy className="w-16 h-16 mx-auto mb-4" strokeWidth={2} />
            <p className="text-sm font-black uppercase opacity-60">Total Prize Pool</p>
            <h3 className="text-5xl font-black uppercase tracking-tight">$10,000</h3>
            <div className="mt-8 space-y-2 text-left">
              <div className="flex justify-between font-black border-b-2 border-black/10 pb-2">
                <span>1ST PLACE</span>
                <span>$6,000</span>
              </div>
              <div className="flex justify-between font-black border-b-2 border-black/10 pb-2">
                <span>2ND PLACE</span>
                <span>$3,000</span>
              </div>
              <div className="flex justify-between font-black">
                <span>3RD PLACE</span>
                <span>$1,000</span>
              </div>
            </div>
          </Card>

          {/* Stats Card */}
          <Card variant="cyan" className="p-8 border-3">
            <h3 className="text-xl font-black uppercase mb-4">Registration Info</h3>
            <div className="space-y-4 font-bold">
              <div className="flex justify-between">
                <span className="opacity-60">Status:</span>
                <span className="bg-neo-green px-2 border-2 border-black">OPEN</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">Teams:</span>
                <span>42 / 128</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">End Date:</span>
                <span>Oct 20, 2026</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-black text-white">Join Tournament</Button>
          </Card>

          {/* Organizer Card */}
          <Card variant="white" className="p-6 border-2">
             <h3 className="text-sm font-black uppercase opacity-60 mb-3">Organizer</h3>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-neo-pink border-2 border-black flex items-center justify-center font-black">
                 EA
               </div>
               <div className="font-black">
                 <p className="text-lg">EventAir Pro</p>
                 <p className="text-xs text-neo-pink">Verified Organizer</p>
               </div>
             </div>
          </Card>
        </aside>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Tournament Excellence</p>
      </footer>
    </main>
  );
}
