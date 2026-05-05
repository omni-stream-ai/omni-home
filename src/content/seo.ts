export type TopicPage = {
  slug: "voice" | "ai-approval" | "bridge" | "download";
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
    title: "Omni Code Voice Control | Full Voice Loop for Coding Agents",
    description:
      "Use Omni Code for voice input, speech transcription, auto-play replies, and text-to-speech playback while supervising desktop coding agents.",
    eyebrow: "Voice Control",
    headline: "A full voice loop for desktop coding agents.",
    intro:
      "Omni Code turns a desktop agent session into something you can talk to. Use voice input, get speech transcription, and hear replies back without staying on the terminal.",
    points: [
      {
        title: "Voice input when your hands are busy",
        body: "Send instructions through speech recognition instead of typing every message into the session."
      },
      {
        title: "Auto-play AI replies",
        body: "Have the client start playback automatically after the reply finishes so you can keep moving."
      },
      {
        title: "Speech-to-text and text-to-speech in one loop",
        body: "The client supports both transcription and playback so the session can become a practical spoken workflow."
      }
    ],
    ctaLabel: "Explore the client",
    ctaHref: "https://github.com/omni-stream-ai/omni-code"
  },
  {
    slug: "ai-approval",
    title: "Omni Code AI Approval | AI-Assisted Approval for Agent Actions",
    description:
      "Use Omni Code to combine manual approval with AI-assisted approval for low-risk desktop agent actions, with configurable risk thresholds and manual fallback.",
    eyebrow: "AI Approval",
    headline: "AI-assisted approval with manual fallback.",
    intro:
      "Omni Code can keep a human in the loop for sensitive actions while allowing low-risk requests to use AI-assisted approval first. High-risk operations still fall back to explicit review.",
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
    title: "Omni Code Bridge | Self-Hosted Bridge for Desktop Agent Sessions",
    description:
      "Run Omni Code with a self-hosted bridge over HTTP and SSE, with configurable bridge URL, token, and client IDs for your machine or LAN.",
    eyebrow: "Bridge",
    headline: "A self-hosted bridge you point at your own machine.",
    intro:
      "Omni Code uses a bridge-based architecture instead of locking your workflow to a managed backend. Point the client at infrastructure you control and keep the real coding context on your desktop.",
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
    slug: "download",
    title: "Download Omni Code | Client Releases and Self-Hosted Updates",
    description:
      "Download Omni Code client releases and use official GitHub releases or a bridge-served manifest for self-hosted update delivery.",
    eyebrow: "Download",
    headline: "Install the client and choose your update path.",
    intro:
      "Omni Code ships as a cross-platform client and supports straightforward release distribution. Use the official GitHub release path or serve updates through your own bridge when you want tighter control.",
    points: [
      {
        title: "Official release distribution",
        body: "The client can check the official GitHub release manifest for app updates."
      },
      {
        title: "Self-hosted update manifests",
        body: "You can also expose a bridge-served manifest when you want a fully self-hosted distribution flow."
      },
      {
        title: "Cross-platform client footprint",
        body: "The product client is built in Flutter and targets mobile and desktop use around desktop agent sessions."
      }
    ],
    ctaLabel: "Open releases",
    ctaHref: "https://github.com/omni-stream-ai/omni-code/releases"
  }
];
