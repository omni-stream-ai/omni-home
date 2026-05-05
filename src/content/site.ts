export type Feature = {
  title: string;
  body: string;
  accent: string;
};

export type WorkflowStep = {
  title: string;
  label: string;
  description: string;
  detail: string;
  checkpoints: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const stats = [
  {
    value: "Voice-first",
    label: "Speak to the agent, hear replies back, and stay in flow hands-free."
  },
  {
    value: "AI approval",
    label: "Low-risk actions can be assisted automatically before escalating to you."
  },
  {
    value: "Brief replies",
    label: "Use a session prompt mode that asks the AI to keep summaries short."
  },
  {
    value: "Self-hosted",
    label: "Bring your own bridge URL, token, and client identity."
  }
] as const;

export const features: Feature[] = [
  {
    title: "Keep the session alive away from the desk",
    body: "Inspect projects, resume conversations, and keep agent work moving from mobile or desktop.",
    accent: "Session Continuity"
  },
  {
    title: "Use manual or AI-assisted approval",
    body: "Sensitive actions can wait for you, while low-risk decisions can use AI-assisted approval with a configurable risk ceiling.",
    accent: "Approval Control"
  },
  {
    title: "Run the workflow as full voice interaction",
    body: "Voice input, transcription, auto-play replies, and text-to-speech make the loop usable without staring at a terminal.",
    accent: "Ergonomics"
  },
  {
    title: "Point the client at a bridge you control",
    body: "Bridge URL, access token, and allowed client IDs are configurable for your laptop, LAN, or self-hosted setup.",
    accent: "Bridge Ownership"
  },
  {
    title: "Compress long AI replies on purpose",
    body: "A brief-reply mode can inject a system-level instruction so new sessions ask the AI to summarize what it did in a much shorter form.",
    accent: "Reply Shaping"
  },
  {
    title: "Ship updates through auditable release paths",
    body: "The client can read official GitHub releases or a bridge-served manifest when you want a fully self-hosted distribution path.",
    accent: "Distribution"
  }
];

export const workflow: WorkflowStep[] = [
  {
    label: "01",
    title: "Attach the client to your bridge",
    description: "Point Omni Code at the desktop bridge running on your machine or LAN.",
    detail: "Use the current bridge URL or override it in settings, then pair with the token and client ID expected by the bridge.",
    checkpoints: ["Bridge URL", "Bridge token", "Client ID allowlist"]
  },
  {
    label: "02",
    title: "Open, resume, or inspect a project session",
    description: "Jump into active agent work without recreating context from scratch.",
    detail: "The client can surface project state and existing conversations so you can pick up the thread from mobile or desktop.",
    checkpoints: ["Project state", "Session history", "Live replies"]
  },
  {
    label: "03",
    title: "Approve with human review or AI help",
    description: "Let the bridge pause on risky operations or let AI handle low-risk requests first.",
    detail: "High-risk commands, failed calls, and hard-blocked rules can still fall back to explicit approval on your device.",
    checkpoints: ["Risk ceiling", "AI-assisted approval", "Manual fallback"]
  },
  {
    label: "04",
    title: "Reply by text or voice",
    description: "Stay responsive even when your hands are busy or you are away from the keyboard.",
    detail: "Speech-to-text, auto-play replies, and text-to-speech turn the client into a full voice surface for the agent loop.",
    checkpoints: ["Voice input", "Auto-play replies", "Speech synthesis"]
  }
];

export const faq: FaqItem[] = [
  {
    question: "Is Omni Code a hosted coding IDE?",
    answer: "No. Omni Code is a client for desktop agent sessions. The core workflow assumes your coding environment stays on your own machine while the client connects through a bridge."
  },
  {
    question: "What agent workflows is it designed for?",
    answer: "The current positioning is Codex or similar command-line agent workflows that already run well on a desktop machine and need better remote supervision."
  },
  {
    question: "How does the approval model work?",
    answer: "Sensitive bridge requests can fall back to explicit approval, and the client also supports AI-assisted approval with a configurable maximum risk level."
  },
  {
    question: "Does it support voice-first use?",
    answer: "Yes. The client supports voice input, speech transcription, text-to-speech playback, and automatic spoken replies after the AI finishes."
  },
  {
    question: "Can I make replies shorter?",
    answer: "Yes. A brief-reply mode can ask the AI to compress what it did into a much shorter summary for new sessions."
  }
];
