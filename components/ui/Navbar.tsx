"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Button } from "./Button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/app/utils/cn";

const NAV_LINKS = [
  { label: "Discover", href: "/events" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Create Event", href: "/organizer" },
  { label: "Hall of Fame", href: "/hall-of-fame" },
  { label: "Docs", href: "/docs" },
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
      gsap.from(navRef.current, { 
        y: -100, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      });
    }, navRef);

    // Scroll-aware background
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b-3 border-black text-black",
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
              <Link href="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" className="flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-black" />
                  Register
                </Button>
              </Link>
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
              <Link href="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full justify-center">Login</Button>
              </Link>
              <Link href="/register" className="flex-1">
                <Button variant="primary" size="sm" className="w-full justify-center">Register</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[73px]" />
    </>
  );
};
