"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpen, Book, Shield, Zap, Search, ChevronRight } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar Nav */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-xl font-black uppercase mb-4">Documentation</h3>
              <div className="space-y-1">
                {[
                  { label: "Introduction", active: true },
                  { label: "Getting Started", active: false },
                  { label: "Organizer Guide", active: false },
                  { label: "Participant Guide", active: false },
                  { label: "API Reference", active: false },
                  { label: "FAQs", active: false },
                ].map((item) => (
                  <button 
                    key={item.label}
                    className={`w-full text-left px-4 py-2 border-l-4 font-bold text-sm transition-all hover:bg-neutral-50 ${item.active ? 'border-neo-pink text-black' : 'border-transparent text-black/40'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <Card variant="yellow" className="p-6 border-3">
              <Zap className="w-8 h-8 mb-4" fill="black" />
              <p className="font-black text-sm uppercase">Need Quick Help?</p>
              <p className="text-xs font-bold mt-2 mb-4 opacity-70">Join our Discord community for real-time support.</p>
              <Button size="sm" className="w-full bg-black text-white border-2">Join Discord</Button>
            </Card>
          </aside>

          {/* Main Docs Content */}
          <section className="flex-grow max-w-3xl">
            <header className="mb-12">
              <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">Documentation</h1>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input type="text" placeholder="Search documentation..." className="w-full bg-neutral-50 border-3 border-black p-4 pl-12 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all" />
              </div>
            </header>

            <article className="space-y-12">
              <section>
                <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-2">
                   1. Introduction
                </h2>
                <p className="text-lg font-bold leading-relaxed text-black/80 mb-6">
                  EventAir is the ultimate platform for student-led competitions and events. 
                  Whether you are an organizer looking to manage a hackathon or a participant 
                  searching for your next challenge, EventAir provides the tools you need.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="p-6 border-2 hover:bg-neo-cyan/10 transition-colors cursor-pointer group">
                    <Book className="w-8 h-8 mb-4 text-neo-cyan" />
                    <h4 className="font-black uppercase mb-1 flex items-center">Core Features <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" /></h4>
                    <p className="text-xs font-bold opacity-60">Discovery, registration, and submission systems.</p>
                  </Card>
                  <Card className="p-6 border-2 hover:bg-neo-pink/10 transition-colors cursor-pointer group">
                    <Shield className="w-8 h-8 mb-4 text-neo-pink" />
                    <h4 className="font-black uppercase mb-1 flex items-center">Trust & Security <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" /></h4>
                    <p className="text-xs font-bold opacity-60">Verified organizers and secure data handling.</p>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-black uppercase mb-4">2. Quick Start</h2>
                <div className="bg-black text-white p-8 border-3 border-black font-mono text-sm space-y-2">
                  <p className="text-neo-green"># 1. Create an account</p>
                  <p>$ eventair auth register</p>
                  <p className="text-neo-green mt-4"># 2. Explore events</p>
                  <p>$ eventair explore --category hackathon</p>
                  <p className="text-neo-green mt-4"># 3. Join competition</p>
                  <p>$ eventair join valorant-pro-series</p>
                </div>
              </section>

              <section>
                <Card variant="cyan" className="p-8 border-4">
                  <h3 className="text-2xl font-black uppercase mb-2">Platform Rules</h3>
                  <p className="font-bold mb-6 opacity-70">To maintain a healthy competition environment, all users must follow these rules:</p>
                  <ul className="space-y-3 font-bold">
                    <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-neo-pink shrink-0" /> No cheating or use of prohibited tools.</li>
                    <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-neo-pink shrink-0" /> Respectful communication in all channels.</li>
                    <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-neo-pink shrink-0" /> Accurate information in registration forms.</li>
                  </ul>
                </Card>
              </section>
            </article>

            <div className="mt-20 pt-12 border-t-3 border-black flex justify-between items-center font-black uppercase text-xs">
              <span className="opacity-40">Last updated: Oct 2026</span>
              <button className="flex items-center gap-2 hover:text-neo-pink transition-colors">Next: Getting Started <ChevronRight className="w-4 h-4" /></button>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir Docs</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Knowledge is Power</p>
      </footer>
    </main>
  );
}
