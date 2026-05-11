"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/app/utils/cn";
import { gsap } from "gsap";

interface Team {
  id: string;
  name: string;
  score?: number;
  isWinner?: boolean;
}

export interface Match {
  id: string;
  teams: [Team, Team];
  status: "scheduled" | "live" | "completed";
}

export interface Round {
  title: string;
  matches: Match[];
}

interface BracketProps {
  rounds: Round[];
}

/** Draws SVG connector lines between rounds */
const RoundConnectors = ({ matchCount }: { matchCount: number }) => {
  // Each match pair in the next round needs a connector from 2 matches
  const pairs = Math.ceil(matchCount / 2);
  return (
    <svg
      className="absolute -right-8 top-0 h-full w-8 overflow-visible"
      preserveAspectRatio="none"
    >
      {Array.from({ length: pairs }).map((_, i) => {
        const topPct = (2 * i + 0.5) / matchCount;
        const bottomPct = (2 * i + 1.5) / matchCount;
        const midPct = (topPct + bottomPct) / 2;
        return (
          <g key={i}>
            <line
              x1="0" y1={`${topPct * 100}%`}
              x2="16" y2={`${topPct * 100}%`}
              stroke="black" strokeWidth="3"
            />
            <line
              x1="0" y1={`${bottomPct * 100}%`}
              x2="16" y2={`${bottomPct * 100}%`}
              stroke="black" strokeWidth="3"
            />
            <line
              x1="16" y1={`${topPct * 100}%`}
              x2="16" y2={`${bottomPct * 100}%`}
              stroke="black" strokeWidth="3"
            />
            <line
              x1="16" y1={`${midPct * 100}%`}
              x2="32" y2={`${midPct * 100}%`}
              stroke="black" strokeWidth="3"
            />
          </g>
        );
      })}
    </svg>
  );
};

const MatchCard = ({ match }: { match: Match }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -3, duration: 0.15, ease: "power1.out" });
  };
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.2, ease: "power1.out" });
  };

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Live badge */}
      {match.status === "live" && (
        <div className="absolute -top-3 -right-2 z-10 flex items-center gap-1 bg-neo-pink text-black px-2 py-0.5 border-2 border-black shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-widest">LIVE</span>
        </div>
      )}

      <div
        className={cn(
          "border-3 shadow-brutal overflow-hidden min-w-[240px] bg-white",
          match.status === "live" ? "border-neo-pink" : "border-black",
          match.status === "scheduled" ? "opacity-70" : "opacity-100"
        )}
      >
        {match.teams.map((team, idx) => (
          <div
            key={idx}
            className={cn(
              "flex justify-between items-center px-4 py-3",
              idx === 0 ? "border-b-3 border-black" : "",
              team.isWinner ? "bg-neo-green/15" : ""
            )}
          >
            <span
              className={cn(
                "font-black text-sm uppercase tracking-wide truncate max-w-[140px]",
                team.isWinner ? "text-black" : "text-black/70"
              )}
            >
              {team.isWinner && <span className="text-neo-green mr-1">▶</span>}
              {team.name}
            </span>
            <span
              className={cn(
                "font-mono font-black text-sm px-2 py-0.5 border-2 border-black min-w-[32px] text-center",
                team.isWinner ? "bg-neo-green text-black" : "bg-black text-white"
              )}
            >
              {team.score ?? 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Bracket: React.FC<BracketProps> = ({ rounds }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cols = containerRef.current.querySelectorAll(".round-col");
    gsap.fromTo(
      cols,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.18, duration: 0.55, ease: "power3.out" }
    );
    // Animate match cards with slight delay after columns
    const cards = containerRef.current.querySelectorAll(".match-card");
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, stagger: 0.06, duration: 0.4, delay: 0.4, ease: "back.out(1.2)" }
    );
  }, [rounds]);

  return (
    <div
      ref={containerRef}
      className="flex gap-16 overflow-x-auto p-10 min-h-[560px] items-center scroll-smooth"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#000 #f5f5f5" }}
    >
      {rounds.map((round, roundIdx) => {
        const isLast = roundIdx === rounds.length - 1;
        return (
          <div key={roundIdx} className="round-col relative flex flex-col min-w-[260px]">
            {/* Round header */}
            <div className="mb-6 text-center bg-black text-white py-2 px-4 border-3 border-black shadow-brutal-sm">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-neo-yellow block">
                ROUND {roundIdx + 1}
              </span>
              <span className="text-lg font-black uppercase">{round.title}</span>
            </div>

            {/* Matches */}
            <div
              className="flex flex-col flex-grow relative"
              style={{ gap: `${Math.max(32, 256 / round.matches.length)}px` }}
            >
              {round.matches.map((match) => (
                <div key={match.id} className="match-card">
                  <MatchCard match={match} />
                </div>
              ))}

              {/* SVG connectors to next round */}
              {!isLast && round.matches.length > 1 && (
                <RoundConnectors matchCount={round.matches.length} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
