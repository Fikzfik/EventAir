"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeroCharacter = () => {
  const rootRef      = useRef<SVGSVGElement>(null);
  const bodyRef      = useRef<SVGGElement>(null);
  const armRRef      = useRef<SVGGElement>(null);
  const armLRef      = useRef<SVGGElement>(null);
  const eye1Ref      = useRef<SVGRectElement>(null);
  const eye2Ref      = useRef<SVGRectElement>(null);
  const starRef      = useRef<SVGGElement>(null);
  const star2Ref     = useRef<SVGGElement>(null);
  const lightningRef = useRef<SVGGElement>(null);
  const shadowRef    = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Body float ──────────────────────────────────────────
      gsap.to(bodyRef.current, {
        y: -18,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Shadow shrinks as character rises
      gsap.to(shadowRef.current, {
        scaleX: 0.6,
        opacity: 0.3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── Right arm wave ───────────────────────────────────────
      gsap.to(armRRef.current, {
        rotate: 25,
        transformOrigin: "top center",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.3,
      });

      // ── Left arm subtle sway ─────────────────────────────────
      gsap.to(armLRef.current, {
        rotate: -12,
        transformOrigin: "top center",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── Blink ────────────────────────────────────────────────
      const blink = () => {
        const tl = gsap.timeline({ onComplete: () => gsap.delayedCall(gsap.utils.random(2, 5), blink) });
        tl.to([eye1Ref.current, eye2Ref.current], { scaleY: 0.05, duration: 0.08, transformOrigin: "center" })
          .to([eye1Ref.current, eye2Ref.current], { scaleY: 1, duration: 0.08 });
      };
      gsap.delayedCall(1.5, blink);

      // ── Spinning stars ───────────────────────────────────────
      gsap.to(starRef.current, { rotate: 360, transformOrigin: "center", duration: 3, repeat: -1, ease: "none" });
      gsap.to(star2Ref.current, { rotate: -360, transformOrigin: "center", duration: 5, repeat: -1, ease: "none" });

      // ── Lightning pulse ──────────────────────────────────────
      gsap.to(lightningRef.current, {
        scale: 1.25,
        opacity: 0.7,
        transformOrigin: "center",
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // ── Entrance ─────────────────────────────────────────────
      gsap.from(rootRef.current, { opacity: 0, scale: 0.7, duration: 0.9, ease: "back.out(1.4)" });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 360 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm select-none"
      aria-label="Neo-Brutalist Character"
    >
      {/* ── Shadow ─────────────────────────────────────────── */}
      <ellipse
        ref={shadowRef}
        cx="180"
        cy="445"
        rx="80"
        ry="12"
        fill="#000"
        opacity="0.5"
      />

      {/* ── ALL animated parts ─────────────────────────────── */}
      <g ref={bodyRef}>

        {/* ── Decorative star top-left ─────────────────────── */}
        <g ref={starRef}>
          <path
            d="M50 80 L55 67 L60 80 L73 75 L63 83 L67 97 L55 89 L43 97 L47 83 L37 75 Z"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2.5"
          />
        </g>

        {/* ── Decorative star top-right ─────────────────────── */}
        <g ref={star2Ref}>
          <path
            d="M295 55 L301 39 L307 55 L323 49 L311 59 L315 76 L301 66 L287 76 L291 59 L279 49 Z"
            fill="#ff60b5"
            stroke="#000"
            strokeWidth="2.5"
          />
        </g>

        {/* ── Lightning badge ──────────────────────────────── */}
        <g ref={lightningRef}>
          <rect x="53" y="280" width="46" height="46" fill="#facc15" stroke="#000" strokeWidth="3" rx="2" />
          <path d="M73 295 L65 315 L77 315 L70 333 L85 310 L73 310 Z" fill="#000" />
        </g>

        {/* ── Floating score tag ───────────────────────────── */}
        <rect x="240" y="130" width="90" height="40" fill="#00e5ff" stroke="#000" strokeWidth="3" rx="2" />
        <text x="255" y="155" fontFamily="monospace" fontWeight="900" fontSize="13" fill="#000">+2400 XP</text>

        {/* ── Trophy badge ─────────────────────────────────── */}
        <rect x="248" y="300" width="76" height="44" fill="#39ff14" stroke="#000" strokeWidth="3" rx="2" />
        <text x="259" y="318" fontFamily="monospace" fontWeight="900" fontSize="11" fill="#000">🏆 RANK</text>
        <text x="268" y="335" fontFamily="monospace" fontWeight="900" fontSize="13" fill="#000">#001</text>

        {/* ── Right arm (wave) ─────────────────────────────── */}
        <g ref={armRRef}>
          <rect x="238" y="200" width="24" height="80" rx="12" fill="#ff60b5" stroke="#000" strokeWidth="3" />
          {/* hand */}
          <circle cx="250" cy="288" r="14" fill="#ff60b5" stroke="#000" strokeWidth="3" />
          <text x="244" y="294" fontSize="14">✌️</text>
        </g>

        {/* ── Left arm (controller) ────────────────────────── */}
        <g ref={armLRef}>
          <rect x="98" y="200" width="24" height="75" rx="12" fill="#00e5ff" stroke="#000" strokeWidth="3" />
          {/* controller */}
          <rect x="72" y="270" width="54" height="32" rx="6" fill="#000" stroke="#000" strokeWidth="2" />
          <circle cx="86" cy="286" r="4" fill="#facc15" />
          <circle cx="100" cy="279" r="3" fill="#ff60b5" />
          <circle cx="109" cy="289" r="3" fill="#39ff14" />
          <circle cx="100" cy="298" r="3" fill="#00e5ff" />
        </g>

        {/* ── Legs ─────────────────────────────────────────── */}
        {/* left leg */}
        <rect x="140" y="355" width="30" height="65" rx="10" fill="#facc15" stroke="#000" strokeWidth="3" />
        <rect x="130" y="408" width="48" height="22" rx="8" fill="#000" />
        {/* right leg */}
        <rect x="190" y="355" width="30" height="65" rx="10" fill="#facc15" stroke="#000" strokeWidth="3" />
        <rect x="182" y="408" width="48" height="22" rx="8" fill="#000" />

        {/* ── Body ─────────────────────────────────────────── */}
        <rect x="110" y="185" width="140" height="175" rx="18" fill="#facc15" stroke="#000" strokeWidth="4" />
        {/* chest stripe */}
        <rect x="110" y="240" width="140" height="4" fill="#000" opacity="0.15" />
        {/* logo on chest */}
        <rect x="148" y="255" width="64" height="40" rx="4" fill="#000" />
        <text x="155" y="272" fontFamily="monospace" fontWeight="900" fontSize="9" fill="#facc15">EVENT</text>
        <text x="157" y="287" fontFamily="monospace" fontWeight="900" fontSize="12" fill="#ff60b5">AIR</text>

        {/* ── Head ─────────────────────────────────────────── */}
        <rect x="115" y="85" width="130" height="115" rx="20" fill="#facc15" stroke="#000" strokeWidth="4" />

        {/* headphone band */}
        <path d="M115 130 Q180 70 245 130" stroke="#000" strokeWidth="8" fill="none" strokeLinecap="round" />
        <rect x="103" y="118" width="22" height="30" rx="8" fill="#ff60b5" stroke="#000" strokeWidth="3" />
        <rect x="235" y="118" width="22" height="30" rx="8" fill="#ff60b5" stroke="#000" strokeWidth="3" />

        {/* ── Eyes ─────────────────────────────────────────── */}
        <rect ref={eye1Ref} x="138" y="128" width="24" height="24" rx="4" fill="#000" />
        <rect ref={eye2Ref} x="198" y="128" width="24" height="24" rx="4" fill="#000" />
        {/* eye shine */}
        <rect x="145" y="131" width="6" height="6" rx="2" fill="white" />
        <rect x="205" y="131" width="6" height="6" rx="2" fill="white" />

        {/* ── Mouth ────────────────────────────────────────── */}
        <path d="M155 170 Q180 188 205 170" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* ── Blush ────────────────────────────────────────── */}
        <ellipse cx="133" cy="165" rx="12" ry="7" fill="#ff60b5" opacity="0.5" />
        <ellipse cx="227" cy="165" rx="12" ry="7" fill="#ff60b5" opacity="0.5" />

        {/* ── Neo-brutal outline accent ─────────────────────── */}
        <rect x="110" y="185" width="140" height="175" rx="18" fill="none" stroke="#000" strokeWidth="4" />
      </g>
    </svg>
  );
};
