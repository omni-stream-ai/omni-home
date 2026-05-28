export type Feature = {
  title: string;
  body: string;
  accent: string;
};

export type ProductStory = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  visual: "voice" | "approval" | "bridge";
  metricItems?: Array<{
    label: string;
    value: string;
  }>;
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
    label: "Speech input, spoken replies, and TTS are built into the product loop. Local recognition runs on-device."
  },
  {
    value: "AI approval",
    label: "Low-risk approvals can be automated with manual fallback when needed."
  },
  {
    value: "HTTP + SSE",
    label: "Bridge transport stays explicit, simple, and self-hostable."
  },
  {
    value: "Brief replies",
    label: "System-prompt compression can keep agent updates intentionally short."
  }
] as const;

export const features: Feature[] = [
  {
    title: "Resume the session away from the desk",
    body: "Inspect projects, continue conversations, and keep local agent work moving from mobile or desktop.",
    accent: "Remote Access"
  },
  {
    title: "Approve sensitive actions with AI help",
    body: "Let low-risk steps use AI-assisted approval first, then step in when the command actually matters.",
    accent: "Approval"
  },
  {
    title: "Run the loop by voice",
    body: "Speech input, reply playback, and text-to-speech keep the workflow usable without staring at a terminal. Local on-device recognition works offline and never leaves your machine.",
    accent: "Voice"
  },
  {
    title: "Use a bridge you control",
    body: "Point the client at your own bridge, token, and allowed clients instead of depending on a fixed SaaS backend.",
    accent: "Bridge"
  }
];

export const productStories: ProductStory[] = [
  {
    eyebrow: "Speak to the agent",
    title: "Voice becomes part of the default workflow.",
    body: "Speech input, reply playback, and text-to-speech keep the session usable away from the keyboard. Local recognition runs on-device so it works offline and stays private.",
    ctaLabel: "Voice workflow",
    ctaHref: "/products/omni-code/voice",
    visual: "voice"
  },
  {
    eyebrow: "Approve from anywhere",
    title: "Manual review stays available when the command matters.",
    body: "Let low-risk actions use AI-assisted approval first, then step in when the workflow needs a real yes or no.",
    ctaLabel: "AI approval",
    ctaHref: "/products/omni-code/ai-approval",
    visual: "approval"
  },
  {
    eyebrow: "Run it on your own bridge",
    title: "The transport stays simple enough to understand.",
    body: "Bridge URL, tokens, allowed clients, HTTP commands, and SSE updates stay in a model you can inspect and self-host.",
    ctaLabel: "Bridge model",
    ctaHref: "/products/omni-code/bridge",
    visual: "bridge",
    metricItems: [
      {
        label: "Transport",
        value: "HTTP + SSE"
      },
      {
        label: "Mode",
        value: "Self-hosted"
      },
      {
        label: "Replies",
        value: "Brief by prompt"
      }
    ]
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
    detail: "Speech-to-text, auto-play replies, and text-to-speech turn the client into a full voice surface for the agent loop. Local on-device recognition works offline, and interruption support lets you cut off a response mid-sentence.",
    checkpoints: ["Voice input", "Local ASR", "Interruption", "Auto-play replies"]
  }
];

export const faq: FaqItem[] = [
  {
    question: "Is Omni Code a hosted coding IDE?",
    answer: "No. Omni Code is a client around desktop agent sessions that still run on your own machine."
  },
  {
    question: "How does the approval model work?",
    answer: "Sensitive bridge requests can fall back to explicit approval, and the client also supports AI-assisted approval with a configurable maximum risk level."
  },
  {
    question: "Does Omni Code support voice-first use?",
    answer: "Yes. The client supports voice input, speech transcription, text-to-speech playback, and automatic spoken replies after the AI finishes. Local on-device recognition with sherpa-onnx works offline and keeps your voice data private."
  },
  {
    question: "Can I make replies shorter?",
    answer: "Yes. A brief-reply mode can ask the AI to compress what it did into a much shorter summary for new sessions."
  },
  {
    question: "Can I use my own bridge?",
    answer: "Yes. Omni Code is designed around a bridge you can point at infrastructure you control."
  }
];
