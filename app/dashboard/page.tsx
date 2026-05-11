"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Settings, LayoutDashboard, Calendar, History, ShieldCheck, LogOut, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-73px)] border-l-3 border-r-3 border-black bg-white">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-r-3 border-black p-6 flex flex-col gap-8 bg-white">
          <div className="flex items-center gap-3 pb-8 border-b-2 border-black/10">
            <div className="w-12 h-12 bg-neo-cyan border-3 border-black flex items-center justify-center font-black text-xl">
              FP
            </div>
            <div>
              <p className="font-black uppercase text-sm leading-none">Fikz Player</p>
              <p className="text-[10px] font-bold text-neo-pink uppercase">Participant</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-2">
            {[
              { icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview", active: true },
              { icon: <Calendar className="w-5 h-5" />, label: "My Tournaments", active: false },
              { icon: <History className="w-5 h-5" />, label: "Match History", active: false },
              { icon: <ShieldCheck className="w-5 h-5" />, label: "Organizer Panel", active: false },
              { icon: <Settings className="w-5 h-5" />, label: "Settings", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 border-3 border-black font-black uppercase text-xs transition-all hover:-translate-y-0.5 hover:shadow-brutal-sm ${item.active ? 'bg-neo-yellow' : 'bg-white'}`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>

          <button className="mt-auto flex items-center gap-3 px-4 py-3 border-3 border-black font-black uppercase text-xs bg-black text-white hover:bg-neo-pink hover:text-black transition-all">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </aside>

        {/* Content */}
        <section className="flex-grow p-8 md:p-12 overflow-y-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-black uppercase tracking-tighter">Player <span className="text-neo-cyan">Dashboard</span></h1>
            <p className="font-bold text-black/60">Welcome back, champ. Ready for the next match?</p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card variant="yellow" className="p-6 border-3">
              <p className="text-xs font-black uppercase opacity-60">Joined Events</p>
              <h3 className="text-4xl font-black">12</h3>
            </Card>
            <Card variant="cyan" className="p-6 border-3">
              <p className="text-xs font-black uppercase opacity-60">Total Wins</p>
              <h3 className="text-4xl font-black">4</h3>
            </Card>
            <Card variant="pink" className="p-6 border-3">
              <p className="text-xs font-black uppercase opacity-60">Global Rank</p>
              <h3 className="text-4xl font-black">#242</h3>
            </Card>
          </div>

          {/* Active Tournaments */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase mb-6">Active Tournaments</h2>
            <div className="space-y-4">
              {[
                { name: "Valorant Pro Series", round: "Quarter-Finals", time: "Starts in 2h", status: "Live" },
                { name: "MLBB Cup Jakarta", round: "Group Stage", time: "Oct 25, 14:00", status: "Upcoming" },
              ].map((t) => (
                <Card key={t.name} className="p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-2 group hover:border-black transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black flex items-center justify-center text-neo-yellow border-2 border-black">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black uppercase">{t.name}</p>
                      <p className="text-xs font-bold text-black/50 uppercase">{t.round} • {t.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 border-2 border-black font-black text-[10px] uppercase ${t.status === 'Live' ? 'bg-neo-pink' : 'bg-neo-green'}`}>
                      {t.status}
                    </span>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      Go to Match <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-2xl font-black uppercase mb-6">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/events" className="flex-grow">
                <Button className="w-full justify-center bg-neo-cyan text-black py-8 text-xl">Find New Event</Button>
              </Link>
              <Link href="/chat" className="flex-grow">
                <Button className="w-full justify-center bg-neo-yellow text-black py-8 text-xl">Open Live Chat</Button>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
