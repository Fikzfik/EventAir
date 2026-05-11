"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Trophy, Medal, Star, Crown, Users, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

export default function HallOfFamePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".winner-card", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.4)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Premium Hero */}
      <section className="py-24 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black border-b-4 border-white/10 overflow-hidden relative">
        {/* Animated backdrop elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neo-pink/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-neo-yellow text-black px-6 py-2 border-3 border-black shadow-[4px_4px_0px_0px_white] font-black uppercase text-sm tracking-widest mb-8 rotate-[-2deg]">
            <Crown className="w-5 h-5 fill-black" />
            The Legends Gallery
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 italic">
            HALL OF <span className="text-neo-pink">FAME</span>
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto text-white/60 uppercase tracking-wide">
            Showcasing the absolute best from EventAir history. Champions are born here.
          </p>
        </div>
      </section>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["All Seasons", "Esports", "Hackathons", "Sports"].map((cat) => (
            <button 
              key={cat} 
              className="px-8 py-3 border-3 border-white font-black uppercase text-sm hover:bg-white hover:text-black transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Winners Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Cyber Knights", event: "Valorant Pro Series", rank: "1st", year: "2026", color: "bg-neo-yellow", icon: <Trophy className="w-10 h-10" /> },
            { name: "Neon Strikers", event: "Mobile Legends Cup", rank: "1st", year: "2026", color: "bg-neo-cyan", icon: <Medal className="w-10 h-10" /> },
            { name: "Void Walkers", event: "Global Dev Hackathon", rank: "1st", year: "2026", color: "bg-neo-pink", icon: <Star className="w-10 h-10" /> },
            { name: "Titan Legion", event: "FIFA Street Invitational", rank: "2nd", year: "2026", color: "bg-neo-green", icon: <Users className="w-10 h-10" /> },
            { name: "Apex Predators", event: "Valorant Pro Series", rank: "3rd", year: "2026", color: "bg-neutral-500", icon: <Trophy className="w-10 h-10" /> },
            { name: "Shadow Realm", event: "Tech Innovators", rank: "1st", year: "2025", color: "bg-white", icon: <Crown className="w-10 h-10" /> },
          ].map((winner, i) => (
            <div key={i} className="winner-card group cursor-default">
              <div className="relative">
                {/* Decorative border offset */}
                <div className="absolute inset-0 border-4 border-white translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />
                
                <Card variant="white" className="p-0 border-4 relative z-10 overflow-hidden text-black">
                  <div className={`h-40 ${winner.color} border-b-4 border-black flex items-center justify-center p-8 relative overflow-hidden`}>
                     <div className="absolute top-2 right-2 font-black text-6xl opacity-10 tracking-tighter italic">{winner.rank}</div>
                     <div className="relative z-10 group-hover:scale-125 transition-transform duration-500">
                        {winner.icon}
                     </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">{winner.name}</h3>
                      <ArrowUpRight className="w-6 h-6 text-black/20 group-hover:text-black transition-colors" />
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Achievement</p>
                      <p className="text-sm font-bold uppercase">{winner.event} Winner</p>
                    </div>

                    <div className="mt-8 pt-6 border-t-2 border-black/5 flex justify-between items-center">
                       <span className="text-xs font-black uppercase px-2 py-1 bg-black text-white">{winner.year} SEASON</span>
                       <span className="text-[10px] font-bold text-black/40 uppercase tracking-tighter">Verified Champion</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <section className="mt-40 text-center">
           <Card variant="yellow" className="p-16 border-4 max-w-4xl mx-auto text-black relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white border-4 border-black rotate-45 flex items-center justify-center">
                <Trophy className="w-10 h-10 -rotate-45" />
              </div>
              <h2 className="text-5xl font-black uppercase mb-6 mt-4">Will You Be Next?</h2>
              <p className="text-xl font-bold mb-10 max-w-lg mx-auto opacity-70 uppercase">Join the thousands of participants and carve your name in history.</p>
              <Link href="/events">
                 <Button size="lg" className="bg-black text-white px-12">Start Your Journey</Button>
              </Link>
           </Card>
        </section>
      </div>

      <footer className="bg-neutral-900 text-white p-12 text-center border-t-4 border-white/10 mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir Hall of Fame</p>
        <p className="text-xs font-bold opacity-30 uppercase tracking-widest">Built for the 1%</p>
      </footer>
    </main>
  );
}
