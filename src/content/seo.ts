export type TopicPage = {
  slug: "voice" | "ai-approval" | "bridge" | "download" | "web";
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  points: Array<{
    title: string;
    body: string;
  }>;
  ctaLabel: string;
  ctaHref: string;
};

export const topicPages: TopicPage[] = [
  {
    slug: "voice",
    title: "Omni Code Voice Control | Omni Stream AI",
    description:
      "Explore the voice-control surface inside Omni Code for remote supervision of desktop coding-agent sessions.",
    eyebrow: "Voice Control",
    headline: "A full voice loop for desktop coding agents.",
    intro:
      "Use speech input, transcription, and spoken replies without staying pinned to the terminal. Voice is one of the core surfaces inside Omni Code — now with local speech recognition and interruption support.",
    points: [
      {
        title: "Voice input when your hands are busy",
        body: "Send instructions through speech recognition instead of typing every message into the session."
      },
      {
        title: "Local speech recognition that works offline",
        body: "Run speech-to-text on-device with sherpa-onnx so voice input stays available without a network connection and never leaves your machine."
      },
      {
        title: "Interrupt the AI mid-reply",
        body: "Cut off a long or off-track response in call mode and redirect the conversation without waiting for it to finish."
      },
      {
        title: "Auto-play AI replies",
        body: "Have the client start playback automatically after the reply finishes so you can keep moving."
      }
    ],
    ctaLabel: "Explore the client",
    ctaHref: "https://github.com/omni-stream-ai/omni-code"
  },
  {
    slug: "ai-approval",
    title: "Omni Code AI Approval | Omni Stream AI",
    description:
      "Explore the AI-assisted approval model inside Omni Code for supervised desktop coding-agent workflows.",
    eyebrow: "AI Approval",
    headline: "AI-assisted approval with manual fallback.",
    intro:
      "Omni Code keeps a human in the loop for sensitive actions while allowing low-risk requests to use AI-assisted approval first. High-risk operations still fall back to explicit review.",
    points: [
      {
        title: "Manual approval for sensitive requests",
        body: "Pause risky bridge actions until someone explicitly approves or rejects them."
      },
      {
        title: "AI help for low-risk decisions",
        body: "Use AI-assisted approval with a configurable maximum risk level to avoid unnecessary approval friction."
      },
      {
        title: "Safe fallback behavior",
        body: "High-risk commands, failed calls, and hard-blocked rules still escalate back to a person."
      }
    ],
    ctaLabel: "View the bridge",
    ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
  },
  {
    slug: "bridge",
    title: "Omni Code Bridge | Omni Stream AI",
    description:
      "Explore the bridge model behind Omni Code for remote supervision of desktop coding-agent sessions.",
    eyebrow: "Bridge",
    headline: "A self-hosted bridge you point at your own machine.",
    intro:
      "Omni Code uses a bridge-based architecture instead of locking the workflow to a managed backend. Point the client at infrastructure you control and keep the real coding context on your desktop.",
    points: [
      {
        title: "HTTP for commands, SSE for live updates",
        body: "The bridge transports messages, session state, approvals, and reply events in a model that is explicit and easy to reason about."
      },
      {
        title: "Configurable identity and access",
        body: "Bridge URL, bridge token, and allowed client IDs can be matched to your laptop, local network, or self-hosted environment."
      },
      {
        title: "Built for local desktop sessions",
        body: "The bridge is designed to stay close to the machine where the coding agent actually runs."
      }
    ],
    ctaLabel: "Open bridge repo",
    ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
  },
  {
    slug: "web",
    title: "Omni Code Web App | Omni Stream AI",
    description:
      "Use Omni Code directly in your browser — no installation required. Full voice, approval, and bridge support from any device.",
    eyebrow: "Web App",
    headline: "Omni Code runs in the browser.",
    intro:
      "Access your desktop coding-agent sessions from any device with a browser. The web app delivers the same voice, approval, and bridge features as the native clients — no download needed.",
    points: [
      {
        title: "No installation required",
        body: "Open code.omnistreamai.com in any modern browser and start managing sessions immediately."
      },
      {
        title: "Works on every platform",
        body: "Use the same web app on Windows, macOS, Linux, ChromeOS, and mobile devices without separate builds."
      },
      {
        title: "PWA support",
        body: "Install the web app to your home screen for a native-like experience with offline capabilities."
      }
    ],
    ctaLabel: "Open the web app",
    ctaHref: "https://code.omnistreamai.com"
  },
];
