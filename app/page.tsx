"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Navbar } from "@/components/ui/Navbar";
import { Bracket, Round } from "@/components/features/Bracket";
import { EventCardSkeleton } from "@/components/ui/States";
import {
  Trophy,
  Calendar,
  Users,
  Zap,
  ArrowRight,
  Medal,
  MessageCircle,
} from "lucide-react";

/* ── Mock Data ─────────────────────────────────── */
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

const MOCK_EVENTS = [
  { id: 1, title: "Valorant Pro Series",  category: "Esports • FPS",   prize: "$10,000", teams: 128, status: "OPEN",    seed: 11 },
  { id: 2, title: "Mobile Legends Cup",   category: "Esports • MOBA",  prize: "$5,000",  teams: 64,  status: "ONGOING", seed: 12 },
  { id: 3, title: "FIFA Street Invitational", category: "Sports • Football", prize: "$2,500", teams: 32, status: "OPEN", seed: 13 },
];

const STATS = [
  { value: "2,400+", label: "Players Registered" },
  { value: "180+",   label: "Tournaments Held" },
  { value: "$120K",  label: "Prize Pool Distributed" },
  { value: "98%",    label: "Satisfaction Rate" },
];

/* ── Hero ───────────────────────────────────────── */
const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const badgeRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(badgeRef.current,   { y: -20, opacity: 0, duration: 0.5 })
      .from(headingRef.current?.children ?? [], { y: 60, opacity: 0, stagger: 0.12, duration: 0.7 }, "-=0.2")
      .from(subRef.current,     { x: -30, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(ctaRef.current?.children ?? [], { y: 20, opacity: 0, stagger: 0.1, duration: 0.4 }, "-=0.2")
      .from(cardRef.current,    { x: 60, opacity: 0, duration: 0.7, ease: "back.out(1.3)" }, "-=0.6");
  }, []);

  return (
    <section className="relative overflow-hidden border-b-3 border-black bg-neo-cyan min-h-[90vh] flex items-center">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 1px,transparent 40px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="relative z-20">
          <div ref={badgeRef} className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 border-2 border-black shadow-brutal-sm font-black uppercase text-xs tracking-widest mb-8">
            <Zap className="w-3 h-3 fill-neo-yellow text-neo-yellow" />
            Top Tier Tournament Platform
          </div>

          <h1 ref={headingRef} className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-tighter mb-8">
            <span className="block">Play.</span>
            <span className="block">Compete.</span>
            <span className="block bg-neo-yellow px-3 border-4 border-black shadow-brutal w-fit mt-1">Conquer.</span>
          </h1>

          <p ref={subRef} className="text-xl font-bold mb-10 max-w-md border-l-4 border-black pl-5 leading-relaxed">
            Manage tournaments with precision. Real-time brackets, role-based dashboards, and live chat — all in one platform.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button size="lg" className="flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link href="/events">
              <Button variant="outline" size="lg">Browse Events</Button>
            </Link>
          </div>
        </div>

        {/* Right — event card teaser */}
        <div ref={cardRef} className="relative hidden lg:block">
          <div className="absolute inset-0 bg-neo-pink border-3 border-black translate-x-3 translate-y-3 -z-10" />
          <Card className="bg-white p-8 border-4">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-neo-yellow border-3 border-black p-3 shadow-brutal-sm">
                <Trophy className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/50">Featured Event</p>
                <p className="text-xl font-black uppercase">Valorant Pro Series</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center bg-neo-green/10 px-4 py-3 border-3 border-black">
                <span className="font-bold flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" />OCT 24, 2026</span>
                <span className="bg-neo-green px-3 py-0.5 font-black text-xs border-2 border-black uppercase">Open</span>
              </div>
              <div className="flex justify-between items-center bg-neo-yellow/10 px-4 py-3 border-3 border-black">
                <span className="font-bold flex items-center gap-2 text-sm"><Users className="w-4 h-4" />128 Teams</span>
                <span className="font-black text-sm">$10,000 Pool</span>
              </div>
            </div>

            <Button className="w-full justify-center" variant="primary">Register Your Team</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

/* ── Stats Bar ──────────────────────────────────── */
const StatsBar = () => (
  <section className="border-b-3 border-black bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x-3 divide-white/20">
      {STATS.map((s) => (
        <div key={s.label} className="text-center py-4">
          <p className="text-3xl font-black text-neo-yellow">{s.value}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ── Bracket Showcase ───────────────────────────── */
const BracketShowcase = () => (
  <section id="brackets" className="py-24 border-b-3 border-black bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-black/40 block mb-3">// Feature</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Interactive<br /><span className="text-neo-pink underline decoration-4 decoration-black">Brackets</span>
          </h2>
          <p className="text-base font-bold max-w-lg mt-4 text-black/70 leading-relaxed">
            Dynamic rendering for any bracket size. Animated progression, live match indicators, and SVG tree connectors.
          </p>
        </div>
        <Link href="/events">
          <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <Card className="p-0 overflow-hidden relative bg-neutral-50">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black text-white px-3 py-1 border-2 border-black">
          <Zap className="w-4 h-4 fill-neo-yellow text-neo-yellow" />
          <span className="text-[11px] font-black uppercase tracking-wider">Live Feed</span>
        </div>
        <Bracket rounds={MOCK_BRACKET} />
      </Card>
    </div>
  </section>
);

/* ── Events Grid ────────────────────────────────── */
const EventsGrid = () => (
  <section className="py-24 border-b-3 border-black bg-neo-yellow">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-black/40 block mb-3">// Upcoming</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Hot<br /><span className="underline decoration-8 decoration-black">Events</span>
          </h2>
        </div>
        <Link href="/events">
          <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
            All Events <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {MOCK_EVENTS.map((ev) => (
          <Link href={`/events/${ev.id}`} key={ev.id} className="group block">
            <div className="border-3 border-black shadow-brutal bg-white group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_black] transition-all duration-200">
              {/* Image */}
              <div className="h-52 border-b-3 border-black overflow-hidden relative bg-black">
                <img
                  src={`https://picsum.photos/seed/${ev.seed}/600/400`}
                  alt={ev.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white text-black px-2 py-0.5 border-2 border-black font-black text-[10px] uppercase">
                    {ev.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/50 mb-2">{ev.category}</p>
                <h3 className="text-xl font-black uppercase mb-5 leading-tight">{ev.title}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-black/50 font-bold uppercase">Prize</p>
                    <p className="font-black text-lg">{ev.prize}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-black/50 font-bold uppercase">Teams</p>
                    <p className="font-black text-lg">{ev.teams}</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ── Feature Cards ─────────────────────────────── */
const FeatureCards = () => {
  const features = [
    { icon: <Trophy className="w-7 h-7" />,        color: "yellow", title: "Bracket System",    desc: "Dynamic tournament trees with live progression and SVG connectors." },
    { icon: <MessageCircle className="w-7 h-7" />, color: "cyan",   title: "Real-Time Chat",    desc: "WebSocket-ready messaging. Talk strategy, build community." },
    { icon: <Medal className="w-7 h-7" />,         color: "pink",   title: "Hall of Fame",      desc: "Showcase champions and teams with a stunning winner gallery." },
    { icon: <Users className="w-7 h-7" />,         color: "white",  title: "Role Dashboards",   desc: "Separate views for participants and organizers. No confusion." },
  ] as const;

  return (
    <section className="py-24 bg-white border-b-3 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-black/40 block mb-4">// Platform</span>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-14">Everything<br />You <span className="text-neo-cyan underline decoration-4 decoration-black">Need</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} variant={f.color} className="group hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_black] transition-all duration-200 cursor-default">
              <div className="bg-black text-white p-3 w-fit border-3 border-black shadow-brutal-sm mb-5">
                {f.icon}
              </div>
              <h3 className="text-lg font-black uppercase mb-2">{f.title}</h3>
              <p className="text-sm font-bold text-black/60 leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CTA Banner ─────────────────────────────────── */
const CTABanner = () => (
  <section className="py-24 bg-black text-white border-b-3 border-black">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <div>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
          Ready to <span className="text-neo-yellow">Compete?</span>
        </h2>
        <p className="text-lg font-bold text-white/60 max-w-md">
          Join thousands of players. Create or join a tournament today.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button size="lg" variant="primary" className="flex items-center gap-2">
          Create Tournament <ArrowRight className="w-5 h-5" />
        </Button>
        <Button size="lg" variant="secondary">Browse Events</Button>
      </div>
    </div>
  </section>
);

/* ── Footer ─────────────────────────────────────── */
const Footer = () => (
  <footer className="bg-black text-white px-6 py-14">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-12 border-b-2 border-white/10">
        <div>
          <p className="text-3xl font-black italic tracking-tighter uppercase mb-3">
            Event<span className="text-neo-pink">Air</span>
          </p>
          <p className="text-sm font-bold text-white/50 max-w-xs">
            Modern fullstack platform for event and tournament management.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {[
            { heading: "Platform", links: ["Events", "Brackets", "Dashboard"] },
            { heading: "Community", links: ["Discord", "Twitter", "Github"] },
            { heading: "Legal",    links: ["Privacy", "Terms", "Contact"] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="font-black uppercase tracking-widest text-xs text-white/30 mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-bold text-white/60 hover:text-white hover:text-neo-yellow transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-xs font-bold text-white/30 uppercase tracking-widest text-center">
        © 2026 EventAir. All rights reserved.
      </p>
    </div>
  </footer>
);

/* ── Page ───────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <StatsBar />
      <BracketShowcase />
      <EventsGrid />
      <FeatureCards />
      <CTABanner />
      <Footer />
    </main>
  );
}
