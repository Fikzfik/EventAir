"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Lock, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function LoginPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      });

      // Floating background shapes
      gsap.to(".floating-shape", {
        x: "random(-150, 150)",
        y: "random(-150, 150)",
        rotate: "random(-360, 360)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 1.5,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-neo-yellow/10 selection:bg-neo-cyan selection:text-black relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0 opacity-15">
        <div className="floating-shape absolute top-10 left-[20%] w-24 h-24 border-4 border-black bg-neo-cyan rotate-45" />
        <div className="floating-shape absolute top-[50%] right-[10%] w-32 h-32 border-4 border-black bg-neo-pink rounded-full" />
        <div className="floating-shape absolute bottom-[20%] left-[10%] w-40 h-40 border-4 border-black bg-neo-green" />
        <div className="floating-shape absolute top-[30%] left-[45%] w-16 h-16 border-4 border-black bg-neo-orange -rotate-12" />
        <div className="floating-shape absolute bottom-[10%] right-[30%] w-20 h-20 border-4 border-black bg-neo-yellow rotate-6" />
        
        {/* Animated Moving Grid */}
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            opacity: 0.1
          }} 
        />
      </div>

      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center relative z-10">
        <header className="text-center mb-12 anim-item">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 border-2 border-black mb-4 font-black uppercase text-xs tracking-widest shadow-brutal-sm">
            <Zap className="w-3 h-3 fill-neo-yellow text-neo-yellow" />
            Welcome Back
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            User <span className="text-neo-cyan underline decoration-8 decoration-black">Login</span>
          </h1>
          <p className="font-bold text-black/60 uppercase tracking-widest text-sm">
            Enter your credentials to access the arena
          </p>
        </header>

        <div className="w-full max-w-md anim-item">
          <Card className="border-4 p-8 md:p-12 bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neo-yellow/20 rounded-full blur-3xl" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
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
                <div className="flex justify-between items-center">
                  <label className="font-black uppercase text-xs tracking-widest">Password</label>
                  <Link href="#" className="text-[10px] font-black uppercase text-black/40 hover:text-black transition-colors">Forgot?</Link>
                </div>
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
                  Login Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t-2 border-black/5 text-center relative z-10">
               <p className="font-bold text-sm text-black/40 uppercase">
                 Don't have an account? <Link href="/register" className="text-black hover:text-neo-cyan underline decoration-2">Register Now</Link>
               </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
