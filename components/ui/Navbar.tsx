"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Button } from "./Button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/app/utils/cn";

const NAV_LINKS = [
  { label: "Discover", href: "/events" },
  { label: "Register", href: "/register" },
  { label: "Submissions", href: "/submission" },
  { label: "Organizer", href: "/organizer" },
  { label: "Docs", href: "/docs" },
  // optional advanced feature
  { label: "Bracket", href: "/bracket" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, { y: -30, opacity: 0, duration: 0.6, ease: "power3.out" });
      gsap.from(linksRef.current?.children ?? [], {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    }, navRef);

    // Scroll-aware background
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b-3 border-black",
          scrolled ? "bg-white shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="text-3xl font-black italic tracking-tighter uppercase select-none">
            Event<span className="text-neo-pink">Air</span>
          </Link>

          {/* Desktop Nav */}
          <div ref={linksRef} className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-black uppercase text-sm border-2 border-transparent hover:border-black hover:shadow-brutal-sm transition-all duration-150 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex gap-2">
              <Button variant="outline" size="sm">Login</Button>
              <Button variant="primary" size="sm" className="flex items-center gap-1">
                <Zap className="w-3 h-3 fill-black" />
                Register
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden border-3 border-black p-2 shadow-brutal-sm neo-btn-lift"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t-3 border-black bg-white">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 font-black uppercase text-sm border-b-2 border-black/20 hover:bg-neo-yellow transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4 flex gap-3">
              <Button variant="outline" size="sm" className="flex-1 justify-center">Login</Button>
              <Button variant="primary" size="sm" className="flex-1 justify-center">Register</Button>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[73px]" />
    </>
  );
};
