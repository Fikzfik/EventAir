"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Bell, 
  Settings, 
  LogOut, 
  Award, 
  Star,
  Gamepad2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ParticipantDashboard() {
  const joinedEvents = [
    { id: 1, title: "Valorant Pro Series", status: "Active", nextMatch: "Oct 24 - 14:00", progress: 65, color: "bg-neo-cyan" },
    { id: 3, title: "Global Dev Hackathon", status: "Pending", nextMatch: "TBD", progress: 0, color: "bg-neo-pink" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Profil */}
          <aside className="lg:col-span-1 space-y-6">
            <Card className="p-8 border-4 text-center bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-20 bg-neo-yellow border-b-4 border-black -z-0" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white border-4 border-black mx-auto mb-4 flex items-center justify-center overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Fikz" alt="Avatar" className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Fikzfik</h3>
                <p className="text-xs font-bold text-black/50 uppercase tracking-widest mb-6">Elite Participant</p>
                
                <div className="flex justify-center gap-2 mb-8">
                  <div className="px-3 py-1 bg-black text-neo-yellow border-2 border-black text-[10px] font-black uppercase">LVL 42</div>
                  <div className="px-3 py-1 bg-neo-green text-black border-2 border-black text-[10px] font-black uppercase">PRO</div>
                </div>

                <nav className="space-y-2 text-left">
                  <button className="w-full flex items-center gap-3 p-3 font-black uppercase text-xs border-2 border-black bg-neo-yellow shadow-brutal-sm transition-all hover:translate-x-1">
                    <Gamepad2 className="w-4 h-4" /> My Events
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 font-black uppercase text-xs border-2 border-transparent hover:border-black hover:bg-neutral-50 transition-all">
                    <Award className="w-4 h-4" /> Achievements
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 font-black uppercase text-xs border-2 border-transparent hover:border-black hover:bg-neutral-50 transition-all">
                    <Bell className="w-4 h-4" /> Notifications
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 font-black uppercase text-xs border-2 border-transparent hover:border-black hover:bg-neutral-50 transition-all">
                    <Settings className="w-4 h-4" /> Settings
                  </button>
                </nav>
              </div>
            </Card>

            <Card variant="pink" className="p-6 border-4">
              <h4 className="font-black uppercase text-sm mb-4">Daily Quest</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-neo-yellow fill-neo-yellow" />
                  </div>
                  <p className="text-[10px] font-bold leading-tight uppercase">Win 1 match in any tournament</p>
                </div>
                <div className="w-full h-4 bg-black/10 border-2 border-black overflow-hidden">
                  <div className="h-full bg-neo-green border-r-2 border-black" style={{ width: '0%' }} />
                </div>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Welcome Banner */}
            <div className="bg-neo-cyan border-4 border-black p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Welcome Back, Champ!</h2>
                <p className="font-bold text-black/70 max-w-lg mb-6">You have 2 upcoming matches this week. Don't forget to check the rules and schedules.</p>
                <Link href="/events">
                   <Button className="bg-black text-white hover:bg-black/90">Browse More Events</Button>
                </Link>
              </div>
              <Trophy className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
            </div>

            {/* Joined Events Grid */}
            <section>
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                 <Gamepad2 className="w-8 h-8 text-neo-pink" /> My Joined Events
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {joinedEvents.map((event) => (
                  <Card key={event.id} className="p-6 border-4 bg-white hover:shadow-brutal transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`${event.color} border-3 border-black p-3`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 border-2 border-black text-[10px] font-black uppercase ${event.status === 'Active' ? 'bg-neo-green' : 'bg-neo-yellow'}`}>
                        {event.status}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-black uppercase mb-2">{event.title}</h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-black/60 uppercase">
                        <Clock className="w-4 h-4" /> {event.nextMatch}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-black/60 uppercase">
                        <Users className="w-4 h-4" /> Team: Cyber Knights
                      </div>
                    </div>

                    <div className="space-y-1 mb-6">
                      <div className="flex justify-between text-[10px] font-black uppercase">
                        <span>Tournament Progress</span>
                        <span>{event.progress}%</span>
                      </div>
                      <div className="w-full h-6 bg-black border-3 border-black overflow-hidden p-0.5">
                        <div className="h-full bg-neo-yellow border-r-2 border-black" style={{ width: `${event.progress}%` }} />
                      </div>
                    </div>

                    <Link href={`/events/${event.id}`}>
                      <Button variant="outline" className="w-full justify-center group uppercase">
                        Match Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>

            {/* Achievement Teaser */}
            <section>
               <h3 className="text-2xl font-black uppercase mb-6">Recent Achievements</h3>
               <Card variant="white" className="p-0 border-4 overflow-hidden">
                 <div className="grid md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
                   {[
                     { title: "First Blood", desc: "Win your first match", icon: "🔥", date: "Oct 12" },
                     { title: "Top Scout", desc: "Join 5 competitions", icon: "🔭", date: "Oct 15" },
                     { title: "Team Player", desc: "Form a squad of 5", icon: "🤝", date: "Oct 20" },
                   ].map((ach, i) => (
                     <div key={i} className="p-6 flex items-center gap-4 hover:bg-neutral-50 transition-colors">
                        <div className="text-3xl">{ach.icon}</div>
                        <div>
                          <p className="font-black text-xs uppercase">{ach.title}</p>
                          <p className="text-[10px] font-bold text-black/40 uppercase">{ach.date}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               </Card>
            </section>

          </div>
        </div>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir Dashboard</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Level Up Your Game</p>
      </footer>
    </main>
  );
}
