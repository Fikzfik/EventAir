"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle, ArrowRight, User, Mail, Users, FileText } from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    teamSize: "1",
  });

  const nextStep = () => setStep(step + 1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Event <span className="text-neo-pink underline">Registration</span>
          </h1>
          <p className="font-bold text-black/60 uppercase tracking-widest text-sm">
            Join the competition in 3 easy steps
          </p>
        </header>

        {/* Step Progress */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 -z-10" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-12 h-12 border-3 border-black flex items-center justify-center font-black text-xl transition-all ${step >= s ? 'bg-neo-yellow' : 'bg-white'}`}
            >
              {step > s ? <CheckCircle className="w-6 h-6" /> : s}
            </div>
          ))}
        </div>

        <Card className="p-8 md:p-12 border-4 bg-white relative overflow-hidden">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-3xl font-black uppercase flex items-center gap-3">
                <User className="w-8 h-8 text-neo-cyan" /> Personal Info
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-black uppercase text-xs tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border-3 border-black p-4 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-black uppercase text-xs tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border-3 border-black p-4 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  />
                </div>
              </div>
              <Button onClick={nextStep} size="lg" className="w-full justify-center gap-2">
                Continue <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-3xl font-black uppercase flex items-center gap-3">
                <Users className="w-8 h-8 text-neo-pink" /> Competition Details
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-black uppercase text-xs tracking-widest">Select Event</label>
                  <select className="w-full bg-white border-3 border-black p-4 font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all appearance-none cursor-pointer">
                    <option>Valorant Pro Series</option>
                    <option>Mobile Legends Cup</option>
                    <option>Global Dev Hackathon</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-black uppercase text-xs tracking-widest">Team Size</label>
                  <div className="grid grid-cols-3 gap-4">
                    {["Solo", "Duo", "Squad"].map((size) => (
                      <button 
                        key={size}
                        className="p-4 border-3 border-black font-black uppercase text-xs hover:bg-neo-yellow transition-all shadow-brutal-sm active:translate-y-1 active:shadow-none"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} size="lg" className="flex-1 justify-center">Back</Button>
                <Button onClick={nextStep} size="lg" className="flex-2 justify-center gap-2">
                  Continue <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="w-20 h-20 bg-neo-green border-4 border-black mx-auto flex items-center justify-center">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-4xl font-black uppercase mb-2">Ready to Roll!</h2>
                <p className="font-bold text-black/60">Please review your information before submitting.</p>
              </div>
              
              <Card variant="white" className="text-left p-6 border-2 space-y-2 font-bold">
                <div className="flex justify-between border-b-2 border-black/10 pb-2">
                  <span className="opacity-50">Event:</span>
                  <span>Valorant Pro Series</span>
                </div>
                <div className="flex justify-between border-b-2 border-black/10 pb-2">
                  <span className="opacity-50">Participant:</span>
                  <span>John Doe</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-50">Type:</span>
                  <span>Squad (5 Players)</span>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(2)} size="lg" className="flex-1 justify-center">Back</Button>
                <Button onClick={() => window.location.href = '/dashboard'} size="lg" className="flex-2 justify-center bg-neo-green">
                  Confirm & Register
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}
