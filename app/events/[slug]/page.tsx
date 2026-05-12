"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bracket, Round } from "@/components/features/Bracket";
import { Calendar, Users, Trophy, MapPin, Share2, Info, ScrollText, CheckCircle, X } from "lucide-react";
import { useState } from "react";

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
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const charRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleJoin = () => {
    setIsJoined(true);
    setShowJoinModal(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (charRef.current) {
        gsap.to(charRef.current, {
          y: -10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />

      {/* Event Hero */}
      <section className="relative h-[450px] border-b-3 border-black overflow-hidden bg-black">
        <div className="relative w-full h-full">
          <img 
            src="https://picsum.photos/seed/student-hero/1200/600" 
            alt="Event Cover" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Character sits on the bottom edge */}
          <div className="absolute bottom-0 right-10 md:right-32 w-64 h-64 z-10 hidden md:block">
             <img 
                ref={charRef}
                src="https://api.dicebear.com/7.x/pixel-art/svg?seed=EventAir" 
                alt="Mascot" 
                className="w-full h-full drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]"
             />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-white max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-neo-pink text-black px-4 py-1 border-2 border-black font-black uppercase text-xs mb-4">
                <Trophy className="w-3 h-3" /> Esports • FPS
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                Valorant <span className="text-neo-cyan">Pro Series</span>
              </h1>
              <div className="flex flex-wrap gap-8 font-black uppercase text-xs tracking-widest opacity-80">
                <span className="flex items-center gap-2 border-b-2 border-neo-pink pb-1"><Calendar className="w-4 h-4" /> Oct 24 - 26, 2026</span>
                <span className="flex items-center gap-2 border-b-2 border-neo-cyan pb-1"><MapPin className="w-4 h-4" /> Jakarta Hub</span>
                <span className="flex items-center gap-2 border-b-2 border-neo-green pb-1"><Users className="w-4 h-4" /> 128 Teams Max</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <nav className="sticky top-[73px] z-40 bg-white border-b-3 border-black py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 whitespace-nowrap">
          {["Overview", "Bracket", "Schedule", "Rules", "Participants"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-black uppercase tracking-widest hover:text-neo-pink transition-colors">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-16">
        {/* Left Column: Info, Rules, Schedule */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* Info Card */}
          <section id="overview">
            <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-12 bg-neo-cyan border-3 border-black flex items-center justify-center italic text-xl">1</span>
              Description
            </h2>
            <Card variant="white" className="p-10 text-xl font-bold leading-relaxed border-3 shadow-brutal hover:shadow-none transition-all">
              The Valorant Pro Series is the biggest community tournament of the year. 
              Join 128 teams from across the region to compete for a massive $10,000 prize pool 
              and the title of the Ultimate Champion. This event features professional production, 
              live commentary, and high-stakes matches.
            </Card>
          </section>

          {/* Schedule Section */}
          <section id="schedule">
            <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-12 bg-neo-yellow border-3 border-black flex items-center justify-center italic text-xl">2</span>
              Match Schedule
            </h2>
            <div className="space-y-4">
               {[
                 { day: "Day 01", title: "Quarter Finals", time: "10:00 AM - 08:00 PM", status: "Completed" },
                 { day: "Day 02", title: "Semi Finals", time: "11:00 AM - 04:00 PM", status: "Live" },
                 { day: "Day 03", title: "Grand Finals", time: "01:00 PM - 06:00 PM", status: "Upcoming" },
               ].map((item, i) => (
                 <Card key={i} className={`p-6 border-3 flex flex-col md:flex-row justify-between items-center gap-4 ${item.status === 'Live' ? 'bg-neo-cyan/10 border-neo-cyan' : 'bg-white'}`}>
                    <div className="flex items-center gap-6">
                      <div className="bg-black text-white px-4 py-2 font-black uppercase text-xs">{item.day}</div>
                      <div>
                        <h4 className="font-black uppercase text-lg">{item.title}</h4>
                        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">{item.time}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-1 border-2 border-black text-[10px] font-black uppercase ${item.status === 'Live' ? 'bg-neo-cyan animate-pulse' : 'bg-neutral-100'}`}>
                      {item.status}
                    </span>
                 </Card>
               ))}
            </div>
          </section>

          {/* Bracket Section */}
          <section id="bracket">
            <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-12 bg-neo-pink border-3 border-black flex items-center justify-center italic text-xl">3</span>
              Live Brackets
            </h2>
            <Card variant="white" className="p-0 overflow-hidden relative border-3 shadow-brutal">
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
            <Button 
              onClick={() => !isJoined && setShowJoinModal(true)} 
              className={`w-full mt-6 text-white ${isJoined ? 'bg-neo-green text-black' : 'bg-black'}`}
              disabled={isJoined}
            >
              {isJoined ? 'Joined!' : 'Join Tournament'}
            </Button>
          </Card>

          {/* Join Modal */}
          {showJoinModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowJoinModal(false)} />
              <Card className="relative z-10 w-full max-w-md p-8 border-4 animate-in fade-in zoom-in duration-300">
                <button 
                  onClick={() => setShowJoinModal(false)}
                  className="absolute top-4 right-4 p-1 hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Team Registration</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleJoin(); }}>
                  <div>
                    <label className="block text-xs font-black uppercase mb-2">Team Name</label>
                    <input type="text" required placeholder="Enter team name" className="w-full border-3 border-black p-3 font-bold focus:outline-none focus:shadow-brutal transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase mb-2">Team Captain</label>
                    <input type="text" required placeholder="Full name" className="w-full border-3 border-black p-3 font-bold focus:outline-none focus:shadow-brutal transition-all" />
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <input type="checkbox" required className="w-5 h-5 border-3 border-black rounded-none appearance-none checked:bg-neo-pink transition-all cursor-pointer" />
                    <span className="text-xs font-bold uppercase">I agree to the tournament rules</span>
                  </div>
                  <Button type="submit" className="w-full bg-neo-pink text-black text-lg py-6">Confirm Registration</Button>
                </form>
              </Card>
            </div>
          )}

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
