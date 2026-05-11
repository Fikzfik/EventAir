"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, FileText, Settings, BarChart3, Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function OrganizerDashboard() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Organizer <span className="text-neo-pink">Hub</span></h1>
            <p className="font-bold text-black/60 uppercase text-xs tracking-widest mt-2">Managing EventAir Pro • Admin Access</p>
          </div>
          <Button size="lg" className="bg-neo-green flex items-center gap-2">
            <Plus className="w-6 h-6" strokeWidth={3} /> Create New Event
          </Button>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Events", val: "4", icon: <FileText className="w-6 h-6" />, color: "bg-neo-cyan" },
            { label: "Total Participants", val: "1,240", icon: <Users className="w-6 h-6" />, color: "bg-neo-yellow" },
            { label: "Submissions", val: "86", icon: <FileText className="w-6 h-6" />, color: "bg-neo-pink" },
            { label: "Revenue", val: "$12.4k", icon: <BarChart3 className="w-6 h-6" />, color: "bg-neo-green" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6 border-3 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-12 h-12 ${stat.color} border-l-3 border-b-3 border-black flex items-center justify-center -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-all`}>
                {stat.icon}
              </div>
              <p className="text-[10px] font-black uppercase opacity-60 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black">{stat.val}</h3>
            </Card>
          ))}
        </div>

        {/* Manage Events Table-like View */}
        <Card variant="white" className="p-0 border-4 overflow-hidden">
          <div className="p-6 border-b-3 border-black flex flex-col md:flex-row justify-between gap-4 bg-white">
            <h3 className="text-2xl font-black uppercase">Your Events</h3>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input type="text" placeholder="Search events..." className="pl-10 pr-4 py-2 border-3 border-black font-bold text-sm focus:outline-none" />
              </div>
              <Button variant="outline" size="sm"><Filter className="w-4 h-4" /></Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b-3 border-black">
                  <th className="text-left p-4 font-black uppercase text-xs">Event Name</th>
                  <th className="text-left p-4 font-black uppercase text-xs">Status</th>
                  <th className="text-left p-4 font-black uppercase text-xs">Participants</th>
                  <th className="text-left p-4 font-black uppercase text-xs">Date</th>
                  <th className="text-right p-4 font-black uppercase text-xs">Actions</th>
                </tr>
              </thead>
              <tbody className="font-bold text-sm">
                {[
                  { name: "Valorant Pro Series", status: "Active", p: 128, date: "Oct 24, 2026", color: "bg-neo-green" },
                  { name: "Mobile Legends Cup", status: "Draft", p: 0, date: "Nov 12, 2026", color: "bg-neo-yellow" },
                  { name: "Global Dev Hackathon", status: "Ended", p: 256, date: "Sep 05, 2026", color: "bg-neo-pink" },
                ].map((row, i) => (
                  <tr key={i} className="border-b-2 border-black/10 hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 uppercase">{row.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 border-2 border-black text-[10px] font-black uppercase ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4">{row.p} Players</td>
                    <td className="p-4 opacity-60 uppercase">{row.date}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 border-2 border-black hover:bg-neo-cyan transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button className="p-2 border-2 border-black hover:bg-neo-pink transition-colors"><Trash2 className="w-4 h-4" /></button>
                        <button className="p-2 border-2 border-black hover:bg-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir Organizer</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Management Simplified</p>
      </footer>
    </main>
  );
}
