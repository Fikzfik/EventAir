"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Trophy, 
  Calendar, 
  Users, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Info,
  DollarSign,
  MapPin,
  Clock,
  Layout,
  FileText,
  Target
} from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";

const EVENT_TYPES = [
  { id: "tournament", label: "Tournament", icon: <Trophy />, color: "bg-neo-yellow" },
  { id: "competition", label: "Competition", icon: <Target />, color: "bg-neo-pink" },
  { id: "concert", label: "Concert/Event", icon: <Zap />, color: "bg-neo-cyan" },
  { id: "seminar", label: "Seminar/Docs", icon: <FileText />, color: "bg-neo-green" },
];

export default function CreateEventPage() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    feeType: "Free", // Free or Paid
    registrationFee: 0,
    hasEarlyBird: false,
    earlyBirdPrice: 0,
    earlyBirdQuota: 10,
    type: "Individual",
    maxTeams: 32,
    registrationDeadline: "",
    tmDate: "",
    prizes: [
      { id: "1", rank: "Juara 1", reward: "" },
      { id: "2", rank: "Juara 2", reward: "" },
      { id: "3", rank: "Juara 3", reward: "" },
    ],
    rundown: [
      { id: "1", label: "Day 1", date: "" }
    ]
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, [step, isSuccess]);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Create the event object
    const newEvent = {
      id: crypto.randomUUID(),
      slug: (form.title || "new-event").toLowerCase().replace(/ /g, "-"),
      ...form,
      category: eventType.charAt(0).toUpperCase() + eventType.slice(1),
      startDate: form.date,
      endDate: form.date, // Simplification
      imageUrl: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/450/800`,
      prizePool: form.prizes.map(p => p.reward).filter(Boolean).join(", "),
      currentTeams: 0,
      status: "open",
      organizerId: "current-user-id"
    };

    // Save to localStorage
    const existingEvents = JSON.parse(localStorage.getItem("custom_events") || "[]");
    localStorage.setItem("custom_events", JSON.stringify([...existingEvents, newEvent]));

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-neo-green/10 flex items-center justify-center p-6">
        <Card className="max-w-md w-full border-4 p-12 text-center bg-white anim-item relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-neo-green" />
          <div className="w-24 h-24 bg-neo-green border-4 border-black mx-auto mb-8 flex items-center justify-center rotate-12">
            <Zap className="w-12 h-12 fill-black" />
          </div>
          <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Event Launched!</h2>
          <p className="font-bold text-black/60 uppercase text-sm mb-8">
            Your event <span className="text-black underline">{form.title || "New Competition"}</span> is now live on EventAir.
          </p>
          <div className="space-y-4">
            <Link href="/organizer" className="block">
              <Button size="lg" className="w-full justify-center">Go to Organizer Hub</Button>
            </Link>
            <Link href="/events" className="block">
              <Button variant="outline" size="lg" className="w-full justify-center">View in Discovery</Button>
            </Link>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 pb-20 selection:bg-neo-pink selection:text-white">
      <Navbar />
      
      <div ref={containerRef} className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumbs / Progress */}
        <div className="flex items-center gap-4 mb-10 anim-item">
          <Link href="/organizer" className="p-2 border-2 border-black hover:bg-neo-yellow transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-grow flex gap-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-2 flex-grow border-2 border-black transition-all ${step >= s ? 'bg-black' : 'bg-black/10'}`} 
              />
            ))}
          </div>
          <span className="font-black uppercase text-xs">Step {step} of 3</span>
        </div>

        {step === 1 && (
          <div className="space-y-12">
            <header className="anim-item">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                What are you <span className="text-neo-pink underline decoration-8 decoration-black">Hosting?</span>
              </h1>
              <p className="text-xl font-bold text-black/60 uppercase tracking-wide">Choose the type of event to get started</p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 anim-item">
              {EVENT_TYPES.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => { setEventType(type.id); setStep(2); }}
                  className="group relative text-left"
                >
                  <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />
                  <Card className={`relative z-10 border-4 p-8 h-full flex flex-col items-center text-center transition-transform group-hover:-translate-y-1 ${eventType === type.id ? 'bg-neo-yellow' : 'bg-white'}`}>
                    <div className={`w-16 h-16 ${type.color} border-4 border-black mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase">{type.label}</h3>
                    <p className="text-[10px] font-bold mt-2 opacity-50 uppercase leading-tight">Brackets, scores, and rankings</p>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-12">
            <header className="anim-item">
               <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 border-2 border-black mb-4 font-black uppercase text-[10px]">
                 Type: {eventType}
               </div>
               <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
                 Basic <span className="text-neo-cyan underline decoration-8 decoration-black">Details</span>
               </h1>
            </header>

            <div className="grid lg:grid-cols-3 gap-12 anim-item">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-2">
                  <label className="font-black uppercase text-sm tracking-widest flex items-center gap-2">
                    <Layout className="w-4 h-4" /> Event Title
                  </label>
                  <input 
                    type="text" 
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. National Business Plan Competition 2026"
                    className="w-full bg-white border-4 border-black p-5 font-black text-xl shadow-brutal-sm focus:shadow-brutal focus:outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Start Date
                    </label>
                    <input 
                      type="date" 
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Location / Platform
                    </label>
                    <input 
                      type="text" 
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="Online / City Hall"
                      className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none"
                    />
                  </div>
                </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                      <Users className="w-4 h-4" /> {["concert", "seminar"].includes(eventType) ? "Max Capacity / Slots" : "Max Slots / Teams"}
                    </label>
                    <input 
                      type="number" 
                      value={form.maxTeams}
                      onChange={(e) => setForm({ ...form, maxTeams: parseInt(e.target.value) || 0 })}
                      placeholder="e.g. 32"
                      className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Reg. Deadline
                      </label>
                      <input 
                        type="date" 
                        value={form.registrationDeadline}
                        onChange={(e) => setForm({ ...form, registrationDeadline: e.target.value })}
                        className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none"
                      />
                    </div>
                    {eventType !== "concert" && (
                      <div className="space-y-2 anim-item">
                        <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                          <Clock className="w-4 h-4" /> TM Date (Optional)
                        </label>
                        <input 
                          type="date" 
                          value={form.tmDate}
                          onChange={(e) => setForm({ ...form, tmDate: e.target.value })}
                          className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="font-black uppercase text-xs tracking-widest flex items-center justify-between">
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Rundown / Event Days</span>
                      <button 
                        onClick={() => setForm({ ...form, rundown: [...form.rundown, { id: Date.now().toString(), label: `Day ${form.rundown.length + 1}`, date: "" }] })}
                        className="text-[10px] bg-black text-white px-2 py-1 hover:bg-neo-pink transition-colors"
                      >
                        + Add Day
                      </button>
                    </label>
                    <div className="space-y-3">
                      {form.rundown.map((item, idx) => (
                        <div key={item.id} className="flex gap-2">
                          <input 
                            type="text" 
                            value={item.label}
                            onChange={(e) => {
                              const newRundown = [...form.rundown];
                              newRundown[idx].label = e.target.value;
                              setForm({ ...form, rundown: newRundown });
                            }}
                            className="flex-1 bg-white border-2 border-black p-2 font-bold text-xs focus:outline-none"
                            placeholder="e.g. Day 1 / Final Round"
                          />
                          <input 
                            type="date" 
                            value={item.date}
                            onChange={(e) => {
                              const newRundown = [...form.rundown];
                              newRundown[idx].date = e.target.value;
                              setForm({ ...form, rundown: newRundown });
                            }}
                            className="flex-1 bg-white border-2 border-black p-2 font-bold text-xs focus:outline-none"
                          />
                          {form.rundown.length > 1 && (
                            <button 
                              onClick={() => setForm({ ...form, rundown: form.rundown.filter((_, i) => i !== idx) })}
                              className="px-3 border-2 border-black hover:bg-red-500 hover:text-white transition-colors"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                <div className="space-y-2">
                  <label className="font-black uppercase text-xs tracking-widest flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Description
                  </label>
                  <textarea 
                    rows={6}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder={
                      eventType === "concert" ? "Describe the lineup, genre, and what to expect..." :
                      eventType === "seminar" ? "What will be discussed? Who are the speakers?..." :
                      "Tell us more about your event, rules, and requirements..."
                    }
                    className="w-full bg-white border-3 border-black p-4 font-bold focus:outline-none resize-none"
                  />
                </div>
              </div>

              <aside className="space-y-8">
                <div className="border-4 border-black p-6 bg-neo-yellow/10">
                   <h3 className="font-black uppercase text-sm mb-4 flex items-center gap-2">
                     <Upload className="w-5 h-5" /> Poster Image
                   </h3>
                   <div className="aspect-[3/4] bg-white border-4 border-dashed border-black flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:bg-neutral-50 transition-colors">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Plus className="w-6 h-6" />
                      </div>
                      <p className="text-[10px] font-black uppercase">Upload Poster</p>
                      <p className="text-[10px] font-bold opacity-40 mt-1">PNG, JPG up to 10MB</p>
                   </div>
                </div>
              </aside>
            </div>

            <div className="flex gap-4 anim-item">
              <Button variant="outline" size="lg" onClick={() => setStep(1)} className="px-12">Back</Button>
              <Button 
                size="lg" 
                disabled={!form.title}
                onClick={() => setStep(3)} 
                className={`px-12 flex-grow justify-center gap-2 ${!form.title ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Continue to Requirements <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-12">
            <header className="anim-item">
               <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
                 Rules & <span className="text-neo-green underline decoration-8 decoration-black">Regs</span>
               </h1>
            </header>

            <Card className="border-4 p-8 md:p-12 bg-white anim-item">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-neo-green" /> Registration Fee
                    </h3>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setForm({ ...form, feeType: "Free" })}
                        className={`flex-1 p-4 border-3 border-black font-black uppercase text-xs transition-colors ${form.feeType === 'Free' ? 'bg-neo-green' : 'bg-white opacity-40'}`}
                      >
                        Free
                      </button>
                      <button 
                        onClick={() => setForm({ ...form, feeType: "Paid" })}
                        className={`flex-1 p-4 border-3 border-black font-black uppercase text-xs transition-colors ${form.feeType === 'Paid' ? 'bg-neo-green' : 'bg-white opacity-40'}`}
                      >
                        Paid
                      </button>
                    </div>

                    {form.feeType === "Paid" && (
                      <div className="space-y-4 anim-item">
                        <div className="space-y-2">
                          <label className="font-black uppercase text-[10px]">Registration Fee (IDR)</label>
                          <input 
                            type="number" 
                            value={form.registrationFee}
                            onChange={(e) => setForm({ ...form, registrationFee: parseInt(e.target.value) || 0 })}
                            className="w-full bg-white border-2 border-black p-3 font-bold focus:outline-none"
                            placeholder="e.g. 50000"
                          />
                        </div>

                        <div className="p-4 border-2 border-black bg-neo-yellow/10 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-black uppercase text-[10px]">Enable Early Bird?</span>
                            <button 
                              onClick={() => setForm({ ...form, hasEarlyBird: !form.hasEarlyBird })}
                              className={`w-12 h-6 border-2 border-black p-1 transition-colors ${form.hasEarlyBird ? 'bg-black' : 'bg-white'}`}
                            >
                              <div className={`w-3 h-3 transition-transform ${form.hasEarlyBird ? 'bg-neo-green translate-x-6' : 'bg-black'}`} />
                            </button>
                          </div>

                          {form.hasEarlyBird && (
                            <div className="grid grid-cols-2 gap-4 anim-item">
                              <div className="space-y-1">
                                <label className="font-black uppercase text-[8px]">Promo Price</label>
                                <input 
                                  type="number" 
                                  value={form.earlyBirdPrice}
                                  onChange={(e) => setForm({ ...form, earlyBirdPrice: parseInt(e.target.value) || 0 })}
                                  className="w-full bg-white border-2 border-black p-2 font-bold text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="font-black uppercase text-[8px]">Slots (First X)</label>
                                <input 
                                  type="number" 
                                  value={form.earlyBirdQuota}
                                  onChange={(e) => setForm({ ...form, earlyBirdQuota: parseInt(e.target.value) || 0 })}
                                  className="w-full bg-white border-2 border-black p-2 font-bold text-xs"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {["tournament", "competition"].includes(eventType) && (
                    <div className="space-y-4 anim-item">
                      <h3 className="text-xl font-black uppercase flex items-center gap-2">
                        <Users className="w-6 h-6 text-neo-cyan" /> Participation
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {["Individual", "Team-Based"].map(opt => (
                          <button 
                            key={opt} 
                            onClick={() => setForm({ ...form, type: opt })}
                            className={`p-4 border-3 border-black font-black uppercase text-xs transition-colors ${form.type === opt ? 'bg-black text-white' : 'bg-white text-black/40'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                   <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase flex items-center gap-2">
                      <Info className="w-6 h-6 text-neo-pink" /> Extra Details
                    </h3>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 border-2 border-black bg-neutral-50">
                          <span className="font-bold text-sm uppercase">Certificate Provided</span>
                          <div className="w-12 h-6 bg-black p-1 cursor-pointer">
                            <div className="w-4 h-4 bg-neo-green" />
                          </div>
                       </div>
                       <div className="flex items-center justify-between p-4 border-2 border-black bg-neutral-50">
                          <span className="font-bold text-sm uppercase">Merchandise Included</span>
                          <div className="w-12 h-6 bg-black/20 p-1 cursor-pointer">
                            <div className="w-4 h-4 bg-white" />
                          </div>
                       </div>
                    </div>
                  </div>

                  {["tournament", "competition"].includes(eventType) && (
                    <div className="space-y-4 anim-item">
                      <label className="font-black uppercase text-xs tracking-widest flex items-center justify-between">
                        <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Prize Structure</span>
                        <button 
                          onClick={() => setForm({ ...form, prizes: [...form.prizes, { id: Date.now().toString(), rank: `Juara ${form.prizes.length + 1}`, reward: "" }] })}
                          className="text-[10px] bg-black text-white px-2 py-1 hover:bg-neo-pink transition-colors"
                        >
                          + Add Prize
                        </button>
                      </label>
                      
                      <div className="space-y-3">
                        {form.prizes.map((prize, idx) => (
                          <div key={prize.id} className="flex gap-2">
                             <input 
                              type="text" 
                              value={prize.rank}
                              onChange={(e) => {
                                const newPrizes = [...form.prizes];
                                newPrizes[idx].rank = e.target.value;
                                setForm({ ...form, prizes: newPrizes });
                              }}
                              className="w-1/3 bg-white border-2 border-black p-2 font-bold text-xs focus:outline-none"
                              placeholder="Juara X"
                            />
                            <input 
                              type="text" 
                              value={prize.reward}
                              onChange={(e) => {
                                const newPrizes = [...form.prizes];
                                newPrizes[idx].reward = e.target.value;
                                setForm({ ...form, prizes: newPrizes });
                              }}
                              className="flex-1 bg-white border-2 border-black p-2 font-bold text-xs focus:outline-none"
                              placeholder="Reward (e.g. Rp 1.000.000)"
                            />
                            {form.prizes.length > 1 && (
                              <button 
                                onClick={() => setForm({ ...form, prizes: form.prizes.filter((_, i) => i !== idx) })}
                                className="px-3 border-2 border-black hover:bg-red-500 hover:text-white transition-colors"
                              >
                                ×
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            <div className="flex gap-4 anim-item">
              <Button variant="outline" size="lg" onClick={() => setStep(2)} className="px-12">Back</Button>
              <Button 
                size="lg" 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className={`flex-grow justify-center bg-neo-green border-4 ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? 'Launching...' : 'Launch Event to Public'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function Plus(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
