"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Users, Trophy, ShieldCheck, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Role = "participant" | "organizer";

export default function RegisterPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance for form items
      gsap.from(".anim-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      });

      // Floating background shapes
      gsap.to(".floating-shape", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        rotate: "random(-180, 180)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          each: 2,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-neo-cyan/10 selection:bg-neo-pink selection:text-white relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0 opacity-20">
        <div className="floating-shape absolute top-20 left-[10%] w-32 h-32 border-4 border-black bg-neo-yellow" />
        <div className="floating-shape absolute top-[60%] left-[5%] w-20 h-20 border-4 border-black bg-neo-pink rounded-full" />
        <div className="floating-shape absolute top-[10%] right-[15%] w-40 h-40 border-4 border-black bg-neo-cyan rotate-12" />
        <div className="floating-shape absolute top-[70%] right-[10%] w-24 h-24 border-4 border-black bg-neo-green rotate-45" />
        <div className="floating-shape absolute bottom-[15%] left-[30%] w-16 h-16 border-4 border-black bg-neo-orange" />
        
        {/* Animated Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center relative z-10">
        <header className="text-center mb-12 anim-item">
          <div className="inline-block bg-black text-white px-4 py-1 border-2 border-black mb-4 font-black uppercase text-xs tracking-widest shadow-brutal-sm">
            Join the Community
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Create <span className="text-neo-pink underline decoration-8 decoration-black">Account</span>
          </h1>
          <p className="font-bold text-black/60 uppercase tracking-widest text-sm">
            Start your journey in the elite event arena
          </p>
        </header>

        <div className="w-full max-w-lg anim-item">
          <Card className="border-4 p-8 md:p-12 bg-white relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-neo-pink/10 rounded-full blur-2xl" />
            
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-12 h-12 bg-neo-yellow border-3 border-black flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase leading-none">Sign Up</h2>
                <p className="font-bold uppercase text-xs text-black/40">Free forever for all users</p>
              </div>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-black uppercase text-xs tracking-widest">Full Name</label>
                <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                   <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-neutral-50 border-3 border-black p-4 pl-12 font-bold focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-black uppercase text-xs tracking-widest">Email Address</label>
                <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                   <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full bg-neutral-50 border-3 border-black p-4 pl-12 font-bold focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-black uppercase text-xs tracking-widest">Password</label>
                <div className="relative">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                   <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-neutral-50 border-3 border-black p-4 pl-12 font-bold focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full justify-center gap-2 group">
                  Create Account
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t-2 border-black/5 text-center relative z-10">
               <p className="font-bold text-sm text-black/40 uppercase">
                 Already have an account? <Link href="/login" className="text-black hover:text-neo-pink underline decoration-2">Login Here</Link>
               </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
