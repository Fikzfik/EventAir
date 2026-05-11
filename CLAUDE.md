# claude.md

## General Rules

- Do NOT overengineer simple features.
- Focus only on high-impact systems.
- Keep low-priority pages minimal.
- Avoid generating unnecessary boilerplate.
- Avoid repeating code explanations.
- Do not create excessive abstraction.

---

## Priorities

Main focus:
1. Tournament bracket system
2. Responsive architecture
3. Role-based rendering
4. Reusable components
5. Real-time readiness

Secondary features should stay simple.

---

## UI Rules

- Use neo-brutalism consistently.
- Avoid glassmorphism.
- Avoid excessive animations.
- Use GSAP only for hero sections and important transitions.
- Prefer clean layouts over decorative complexity.

---

## Code Rules

- Keep components modular.
- Avoid giant files.
- Avoid premature optimization.
- Avoid unnecessary custom hooks.
- Avoid complex state managers unless required.

Prefer:
- local state
- server actions
- lightweight architecture

---

## Token Efficiency

- Keep responses concise.
- Avoid long explanations.
- Return only relevant code.
- Do not rewrite unchanged files.
- Summarize repetitive tasks.

---

## Admin Pages

- Admin UI does not need aesthetic perfection.
- Prioritize functionality over visuals.
- Use simple tables/forms.

---

## Chat System

- Build minimal chat UI only.
- No advanced messaging features.
- No typing indicators.
- No message reactions.

---

## Bracket System

This is the highest priority feature.

Requirements:
- dynamic rendering
- reusable nodes
- responsive scrolling
- scalable architecture
- editable match progression

Avoid hardcoded tournament structures.