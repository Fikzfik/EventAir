export type Role = "participant" | "organizer" | "admin";

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl: string;
  prizePool: string;
  maxTeams: number;
  currentTeams: number;
  status: "open" | "ongoing" | "completed";
  organizerId: string;
}

export interface Team {
  id: string;
  name: string;
  logoUrl?: string;
  score?: number;
  isWinner?: boolean;
}

export interface Match {
  id: string;
  teams: [Team, Team];
  winnerId?: string;
  roundId: string;
  status: "scheduled" | "live" | "completed";
  startTime?: string;
}

export interface BracketNode {
  id: string;
  title: string;
  matches: Match[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
}
