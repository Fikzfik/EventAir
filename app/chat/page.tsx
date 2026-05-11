"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Send, Users, Hash, Plus, MessageSquare } from "lucide-react";

export default function ChatPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto flex h-[calc(100vh-73px)] border-l-3 border-r-3 border-black">
        {/* Channel Sidebar */}
        <aside className="w-64 border-r-3 border-black hidden md:flex flex-col bg-neutral-50">
          <div className="p-6 border-b-2 border-black/10">
            <h2 className="text-xl font-black uppercase flex items-center gap-2">
              <Users className="w-5 h-5 text-neo-pink" /> Channels
            </h2>
          </div>
          <div className="flex-grow p-4 space-y-2 overflow-y-auto">
            {["General", "Valorant-Pro-Series", "Team-Recruitment", "Announcements"].map(channel => (
              <button key={channel} className={`w-full text-left px-4 py-2 border-2 border-black font-black text-xs uppercase flex items-center gap-2 transition-all hover:bg-neo-yellow ${channel === 'General' ? 'bg-neo-yellow' : 'bg-white'}`}>
                <Hash className="w-4 h-4" /> {channel}
              </button>
            ))}
            <button className="w-full text-left px-4 py-2 border-2 border-dashed border-black/40 font-black text-xs uppercase flex items-center gap-2 text-black/40 hover:bg-white hover:text-black">
              <Plus className="w-4 h-4" /> Join Channel
            </button>
          </div>
          <div className="p-4 border-t-2 border-black/10 bg-white">
             <Card className="p-3 border-2 text-[10px] font-black uppercase bg-neo-cyan/10">
               <p>Connected to WS-01</p>
               <p className="text-neo-green">Status: Online</p>
             </Card>
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-grow flex flex-col bg-white">
          {/* Header */}
          <header className="p-4 border-b-3 border-black flex justify-between items-center bg-white">
             <div className="flex items-center gap-3">
               <div className="bg-neo-pink border-2 border-black p-2">
                 <MessageSquare className="w-5 h-5" />
               </div>
               <div>
                 <h3 className="font-black uppercase text-sm"># General Chat</h3>
                 <p className="text-[10px] font-bold text-black/50 uppercase">Public community discussion</p>
               </div>
             </div>
          </header>

          {/* Messages */}
          <div className="flex-grow p-6 overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] space-y-6">
            {[
              { sender: "Admin", text: "Welcome to EventAir chat! Be nice.", color: "bg-neo-yellow", time: "10:00" },
              { sender: "Fikz", text: "Anyone for Valorant tonight?", color: "bg-neo-cyan", time: "10:05" },
              { sender: "ProGamer", text: "I'm in! What's the lobby code?", color: "bg-neo-green", time: "10:06" },
              { sender: "Ghost", text: "Good luck with the tournament guys!", color: "bg-neo-pink", time: "10:10" },
            ].map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.sender === 'Fikz' ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase">{msg.sender}</span>
                  <span className="text-[9px] font-bold opacity-40">{msg.time}</span>
                </div>
                <div className={`px-4 py-2 border-3 border-black shadow-brutal-sm max-w-md font-bold ${msg.color}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <footer className="p-4 border-t-3 border-black bg-neutral-50">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..." 
                className="flex-grow bg-white border-3 border-black p-4 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
              />
              <Button size="lg" className="aspect-square p-4 bg-neo-pink">
                <Send className="w-6 h-6" />
              </Button>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
