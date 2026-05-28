export const content = {
  meta: {
    homeTitle: "Omni Code | Remote Control for Desktop Coding Agents",
    homeDescription:
      "Omni Code is a remote client for desktop coding-agent sessions with voice control, approvals, brief replies, and a self-hosted bridge."
  },

  nav: {
    omniCode: "Omni Code",
    moreProducts: "More products",
    future: "Future"
  },

  hero: {
    eyebrow: "Remote control for local coding agents",
    pills: ["Omni Code", "Voice-first", "Human-in-loop", "Web + Native"],
    headline: "Control the agent from anywhere.",
    lead:
      "Omni Code lets you speak to the agent, approve sensitive actions, hear replies back, and keep the control path on a bridge you own.",
    ctaTryWeb: "Try Web",
    ctaDownload: "Download",
    ctaGitHub: "GitHub"
  },

  launch: {
    availableNow: "Available now",
    remoteControl: "Remote control for desktop coding agents",
    voiceInput:
      "Voice input, spoken replies, approvals, and bridge-based control in one client.",
    whyExists: "Why it exists",
    makeNative: "Make remote supervision feel native instead of bolted on.",
    keepCoding:
      "Keep the coding session on your own machine while giving the human better ways to hear, answer, and approve.",
    transport: "Transport",
    voiceLoop: "Voice loop",
    replies: "Replies"
  },

  stats: [
    {
      value: "Voice-first",
      label:
        "Speech input, spoken replies, and TTS are built into the product loop. Local recognition runs on-device."
    },
    {
      value: "AI approval",
      label:
        "Low-risk approvals can be automated with manual fallback when needed."
    },
    {
      value: "HTTP + SSE",
      label:
        "Bridge transport stays explicit, simple, and self-hostable."
    },
    {
      value: "Brief replies",
      label:
        "System-prompt compression can keep agent updates intentionally short."
    }
  ],

  stories: {
    eyebrow: "Omni Code",
    heading: "Voice, approvals, and bridge control in one client.",
    intro:
      "Omni Code wraps desktop coding-agent sessions in a cleaner remote control layer.",
    items: [
      {
        eyebrow: "Speak to the agent",
        title: "Voice becomes part of the default workflow.",
        body:
          "Speech input, reply playback, and text-to-speech keep the session usable away from the keyboard. Local recognition runs on-device so it works offline and stays private.",
        ctaLabel: "Voice workflow",
        ctaHref: "/products/omni-code/voice"
      },
      {
        eyebrow: "Approve from anywhere",
        title: "Manual review stays available when the command matters.",
        body:
          "Let low-risk actions use AI-assisted approval first, then step in when the workflow needs a real yes or no.",
        ctaLabel: "AI approval",
        ctaHref: "/products/omni-code/ai-approval"
      },
      {
        eyebrow: "Run it on your own bridge",
        title: "The transport stays simple enough to understand.",
        body:
          "Bridge URL, tokens, allowed clients, HTTP commands, and SSE updates stay in a model you can inspect and self-host.",
        ctaLabel: "Bridge model",
        ctaHref: "/products/omni-code/bridge",
        metricItems: [
          { label: "Transport", value: "HTTP + SSE" },
          { label: "Mode", value: "Self-hosted" },
          { label: "Replies", value: "Brief by prompt" }
        ]
      }
    ],
    visual: {
      voiceSession: "Voice session",
      askForChange: "Ask for the next change out loud.",
      approvalRequest: "Approval request",
      pauseBefore: "Pause before the risky step.",
      approve: "Approve",
      askContext: "Ask for context",
      deny: "Deny",
      bridgeStatus: "Bridge status",
      keepPath: "Keep the control path close to your machine."
    }
  },

  features: {
    eyebrow: "Core surface",
    heading: "What the product actually covers.",
    intro:
      "Remote access, approval gates, voice, and a bridge you control.",
    items: [
      {
        title: "Resume the session away from the desk",
        body:
          "Inspect projects, continue conversations, and keep local agent work moving from mobile or desktop.",
        accent: "Remote Access"
      },
      {
        title: "Approve sensitive actions with AI help",
        body:
          "Let low-risk steps use AI-assisted approval first, then step in when the command actually matters.",
        accent: "Approval"
      },
      {
        title: "Run the loop by voice",
        body:
          "Speech input, reply playback, and text-to-speech keep the workflow usable without staring at a terminal. Local on-device recognition works offline and never leaves your machine.",
        accent: "Voice"
      },
      {
        title: "Use a bridge you control",
        body:
          "Point the client at your own bridge, token, and allowed clients instead of depending on a fixed SaaS backend.",
        accent: "Bridge"
      }
    ],
    exploreCta: "Explore the product surface"
  },

  workflow: {
    eyebrow: "Omni Code flow",
    heading: "How Omni Code works in practice.",
    intro:
      "Attach to the bridge, resume the session, approve what matters, and answer by text or voice.",
    steps: [
      {
        label: "01",
        title: "Attach the client to your bridge",
        description:
          "Point Omni Code at the desktop bridge running on your machine or LAN.",
        detail:
          "Use the current bridge URL or override it in settings, then pair with the token and client ID expected by the bridge.",
        checkpoints: ["Bridge URL", "Bridge token", "Client ID allowlist"]
      },
      {
        label: "02",
        title: "Open, resume, or inspect a project session",
        description:
          "Jump into active agent work without recreating context from scratch.",
        detail:
          "The client can surface project state and existing conversations so you can pick up the thread from mobile or desktop.",
        checkpoints: ["Project state", "Session history", "Live replies"]
      },
      {
        label: "03",
        title: "Approve with human review or AI help",
        description:
          "Let the bridge pause on risky operations or let AI handle low-risk requests first.",
        detail:
          "High-risk commands, failed calls, and hard-blocked rules can still fall back to explicit approval on your device.",
        checkpoints: ["Risk ceiling", "AI-assisted approval", "Manual fallback"]
      },
      {
        label: "04",
        title: "Reply by text or voice",
        description:
          "Stay responsive even when your hands are busy or you are away from the keyboard.",
        detail:
          "Speech-to-text, auto-play replies, and text-to-speech turn the client into a full voice surface for the agent loop. Local on-device recognition works offline, and interruption support lets you cut off a response mid-sentence.",
        checkpoints: ["Voice input", "Local ASR", "Interruption", "Auto-play replies"]
      }
    ]
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Common questions about Omni Code.",
    items: [
      {
        question: "Is Omni Code a hosted coding IDE?",
        answer:
          "No. Omni Code is a client around desktop agent sessions that still run on your own machine."
      },
      {
        question: "How does the approval model work?",
        answer:
          "Sensitive bridge requests can fall back to explicit approval, and the client also supports AI-assisted approval with a configurable maximum risk level."
      },
      {
        question: "Does Omni Code support voice-first use?",
        answer:
          "Yes. The client supports voice input, speech transcription, text-to-speech playback, and automatic spoken replies after the AI finishes. Local on-device recognition with sherpa-onnx works offline and keeps your voice data private."
      },
      {
        question: "Can I make replies shorter?",
        answer:
          "Yes. A brief-reply mode can ask the AI to compress what it did into a much shorter summary for new sessions."
      },
      {
        question: "Can I use my own bridge?",
        answer:
          "Yes. Omni Code is designed around a bridge you can point at infrastructure you control."
      }
    ]
  },

  footer: {
    description:
      "Omni Code is the remote client for desktop coding-agent supervision.",
    webApp: "Web App",
    client: "Client",
    bridge: "Bridge",
    releases: "Releases"
  },

  topic: {
    alsoExplore: "Also explore",
    remoteSupervision:
      "Remote supervision for desktop coding-agent sessions, with voice, approvals, and a bridge you control.",
    omniCode: "Omni Code",
    downloadOmniCode: "Download Omni Code",
    overview: "Overview",
    inOmniCode: "in Omni Code.",
    nextStep: "Next step",
    useFromSurface:
      "Use Omni Code from the product surface that matters most.",
    startFromClient:
      "Start from the client, download the latest build, or inspect the bridge when you want the control path closer to your own machine.",
    tryWebApp: "Try the web app",
    downloadPage: "Download page",
    links: [
      { label: "Web app", href: "/products/omni-code/web" },
      { label: "Voice-first interaction", href: "/products/omni-code/voice" },
      { label: "AI-assisted approval", href: "/products/omni-code/ai-approval" },
      { label: "Self-hosted bridge", href: "/products/omni-code/bridge" },
      { label: "Downloads and releases", href: "/products/omni-code/download" }
    ]
  },

  topics: {
    voice: {
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
          body:
            "Send instructions through speech recognition instead of typing every message into the session."
        },
        {
          title: "Local speech recognition that works offline",
          body:
            "Run speech-to-text on-device with sherpa-onnx so voice input stays available without a network connection and never leaves your machine."
        },
        {
          title: "Interrupt the AI mid-reply",
          body:
            "Cut off a long or off-track response in call mode and redirect the conversation without waiting for it to finish."
        },
        {
          title: "Auto-play AI replies",
          body:
            "Have the client start playback automatically after the reply finishes so you can keep moving."
        }
      ],
      ctaLabel: "Explore the client",
      ctaHref: "https://github.com/omni-stream-ai/omni-code"
    },
    aiApproval: {
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
          body:
            "Pause risky bridge actions until someone explicitly approves or rejects them."
        },
        {
          title: "AI help for low-risk decisions",
          body:
            "Use AI-assisted approval with a configurable maximum risk level to avoid unnecessary approval friction."
        },
        {
          title: "Safe fallback behavior",
          body:
            "High-risk commands, failed calls, and hard-blocked rules still escalate back to a person."
        }
      ],
      ctaLabel: "View the bridge",
      ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
    },
    bridge: {
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
          body:
            "The bridge transports messages, session state, approvals, and reply events in a model that is explicit and easy to reason about."
        },
        {
          title: "Configurable identity and access",
          body:
            "Bridge URL, bridge token, and allowed client IDs can be matched to your laptop, local network, or self-hosted environment."
        },
        {
          title: "Built for local desktop sessions",
          body:
            "The bridge is designed to stay close to the machine where the coding agent actually runs."
        }
      ],
      ctaLabel: "Open bridge repo",
      ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
    },
    web: {
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
          body:
            "Open code.omnistreamai.com in any modern browser and start managing sessions immediately."
        },
        {
          title: "Works on every platform",
          body:
            "Use the same web app on Windows, macOS, Linux, ChromeOS, and mobile devices without separate builds."
        },
        {
          title: "PWA support",
          body:
            "Install the web app to your home screen for a native-like experience with offline capabilities."
        }
      ],
      ctaLabel: "Open the web app",
      ctaHref: "https://code.omnistreamai.com"
    },
    download: {
      title: "Download Omni Code | Omni Stream AI",
      description:
        "Download the latest Omni Code build for Android, macOS, Windows, or Linux from the current GitHub release.",
      eyebrow: "Download Omni Code",
      headline: "Download the latest build for your platform.",
      lead:
        "The main button can recommend the latest Android, macOS, Windows, or Linux build, while keeping every platform link visible underneath.",
      pills: ["Latest release", "Platform-aware", "GitHub-hosted"],
      viewReleases: "View latest releases",
      tryWeb: "Try Web",
      openReleases: "Open releases",
      platformNote:
        "Platform detection happens in the browser. If it is unclear, the button falls back to the releases page.",
      suggestedTarget: "Suggested target",
      releasePage: "Release page",
      fallback: "Fallback",
      fallbackCopy:
        "These links follow the current GitHub latest release as long as the published asset names stay stable.",
      cards: {
        web: { label: "Web", title: "PWA", note: "Open directly in your browser" },
        android: { label: "Android", title: "APK (arm64)", note: "Recommended for most devices" },
        macos: { label: "macOS", title: "Unsigned ZIP", note: "May require Gatekeeper override" },
        homebrew: { label: "macOS", title: "Homebrew", note: "brew install --cask omni-code" },
        windows: { label: "Windows", title: "x86_64 ZIP", note: "Direct latest download" },
        linux: { label: "Linux", title: "x86_64 tar.gz", note: "Direct latest download" },
        aur: { label: "Arch Linux", title: "AUR", note: "yay -S omni-code-bin" }
      },
      releasePaths: {
        eyebrow: "Release paths",
        heading: "One primary button, all platforms still visible.",
        intro:
          "The page can recommend a package automatically without hiding the full release list from someone downloading for another machine."
      },
      homebrew: {
        accent: "macOS",
        heading: "Install via Homebrew.",
        body:
          "macOS users with Homebrew can install Omni Code as a cask with automatic updates."
      },
      aur: {
        accent: "Arch Linux",
        heading: "Install from the AUR.",
        body:
          "Arch Linux users can install the pre-built binary package from the AUR."
      },
      android: {
        accent: "Android",
        heading: "Pick the right architecture.",
        body:
          "Separate APK builds are available for arm64, arm, and x86_64 devices. The update.json manifest remains available for client update flows."
      },
      fallbackCard: {
        accent: "Fallback",
        heading: "Always leave a manual route.",
        body:
          "If platform detection is ambiguous or someone is downloading for another device, the releases page remains one click away with every published artifact."
      },
      moreLinks: {
        eyebrow: "More links",
        heading: "Open the repos directly when you need more detail.",
        body:
          "GitHub releases are the main distribution path today. The bridge repository and Android update manifest stay linked here for inspection.",
        omniCodeRepo: "Omni Code repo",
        bridgeRepo: "Bridge repo",
        androidManifest: "Android update manifest"
      }
    }
  }
};
