export const content = {
  meta: {
    homeTitle: "Omni Code | 桌面编码代理远程控制",
    homeDescription:
      "Omni Code 是一个桌面编码代理会话的远程客户端，支持语音控制、审批、简洁回复和自托管桥接。"
  },

  nav: {
    omniCode: "Omni Code",
    moreProducts: "更多产品",
    future: "即将推出"
  },

  hero: {
    eyebrow: "本地编码代理的远程控制",
    pills: ["Omni Code", "语音优先", "人在回路", "Web + 原生"],
    headline: "随时随地控制代理。",
    lead:
      "Omni Code 让你可以与代理对话、审批敏感操作、听取回复，并将控制链路保持在你自己的桥接上。",
    ctaTryWeb: "试用 Web",
    ctaDownload: "下载",
    ctaGitHub: "GitHub"
  },

  launch: {
    availableNow: "现已可用",
    remoteControl: "桌面编码代理的远程控制",
    voiceInput:
      "语音输入、语音回复、审批和基于桥接的控制，集成于一个客户端。",
    whyExists: "为什么需要它",
    makeNative: "让远程监控感觉像原生体验，而非临时拼凑。",
    keepCoding:
      "将编码会话保留在你自己的机器上，同时让人类有更好的方式来听取、回应和审批。",
    transport: "传输",
    voiceLoop: "语音循环",
    replies: "回复"
  },

  stats: [
    {
      value: "语音优先",
      label:
        "语音输入、语音回复和 TTS 已内置于产品循环中。本地识别在设备端运行。"
    },
    {
      value: "AI 审批",
      label:
        "低风险审批可自动处理，需要时仍可手动介入。"
    },
    {
      value: "HTTP + SSE",
      label:
        "桥接传输保持明确、简洁且可自托管。"
    },
    {
      value: "简洁回复",
      label:
        "系统提示压缩可让代理更新保持简短。"
    }
  ],

  stories: {
    eyebrow: "Omni Code",
    heading: "语音、审批和桥接控制，集成于一个客户端。",
    intro:
      "Omni Code 为桌面编码代理会话提供更清晰的远程控制层。",
    items: [
      {
        eyebrow: "与代理对话",
        title: "语音成为默认工作流的一部分。",
        body:
          "语音输入、回复播放和语音合成让会话在远离键盘时仍然可用。本地识别在设备端运行，离线可用且数据不离开你的设备。",
        ctaLabel: "语音工作流",
        ctaHref: "/products/omni-code/voice"
      },
      {
        eyebrow: "随时随地审批",
        title: "当命令真正重要时，人工审核仍然可用。",
        body:
          "让低风险操作先使用 AI 辅助审批，当工作流需要真正的确认或拒绝时再介入。",
        ctaLabel: "AI 审批",
        ctaHref: "/products/omni-code/ai-approval"
      },
      {
        eyebrow: "在你自己的桥接上运行",
        title: "传输模型足够简单，易于理解。",
        body:
          "桥接 URL、令牌、允许的客户端、HTTP 命令和 SSE 更新保持在你可以检查和自托管的模型中。",
        ctaLabel: "桥接模型",
        ctaHref: "/products/omni-code/bridge",
        metricItems: [
          { label: "传输", value: "HTTP + SSE" },
          { label: "模式", value: "自托管" },
          { label: "回复", value: "提示压缩" }
        ]
      }
    ],
    visual: {
      voiceSession: "语音会话",
      askForChange: "大声说出下一个更改。",
      approvalRequest: "审批请求",
      pauseBefore: "在风险操作前暂停。",
      approve: "批准",
      askContext: "请求上下文",
      deny: "拒绝",
      bridgeStatus: "桥接状态",
      keepPath: "将控制链路保持在你的机器附近。"
    }
  },

  features: {
    eyebrow: "核心功能",
    heading: "产品实际覆盖的内容。",
    intro:
      "远程访问、审批门控、语音和你控制的桥接。",
    items: [
      {
        title: "离开桌面也能继续会话",
        body:
          "从移动设备或桌面端检查项目、继续对话并保持本地代理工作持续推进。",
        accent: "远程访问"
      },
      {
        title: "借助 AI 审批敏感操作",
        body:
          "让低风险步骤先使用 AI 辅助审批，当命令真正重要时再介入。",
        accent: "审批"
      },
      {
        title: "用语音运行循环",
        body:
          "语音输入、回复播放和语音合成让工作流无需盯着终端即可使用。本地设备端识别离线可用，数据不离开你的设备。",
        accent: "语音"
      },
      {
        title: "使用你控制的桥接",
        body:
          "将客户端指向你自己的桥接、令牌和允许的客户端，而不是依赖固定的 SaaS 后端。",
        accent: "桥接"
      }
    ],
    exploreCta: "探索产品功能"
  },

  workflow: {
    eyebrow: "Omni Code 流程",
    heading: "Omni Code 的实际工作方式。",
    intro:
      "连接桥接、恢复会话、审批重要内容，通过文本或语音回复。",
    steps: [
      {
        label: "01",
        title: "将客户端连接到你的桥接",
        description:
          "将 Omni Code 指向运行在你机器或局域网上的桌面桥接。",
        detail:
          "使用当前桥接 URL 或在设置中覆盖，然后使用桥接期望的令牌和客户端 ID 进行配对。",
        checkpoints: ["桥接 URL", "桥接令牌", "客户端 ID 白名单"]
      },
      {
        label: "02",
        title: "打开、恢复或检查项目会话",
        description:
          "直接进入活跃的代理工作，无需从头重建上下文。",
        detail:
          "客户端可以展示项目状态和现有对话，让你从移动设备或桌面端继续之前的讨论。",
        checkpoints: ["项目状态", "会话历史", "实时回复"]
      },
      {
        label: "03",
        title: "通过人工审核或 AI 辅助审批",
        description:
          "让桥接在风险操作时暂停，或让 AI 先处理低风险请求。",
        detail:
          "高风险命令、失败的调用和硬阻止规则仍然可以在你的设备上回退到明确审批。",
        checkpoints: ["风险阈值", "AI 辅助审批", "手动回退"]
      },
      {
        label: "04",
        title: "通过文本或语音回复",
        description:
          "即使双手忙碌或远离键盘，也能保持响应。",
        detail:
          "语音转文字、自动播放回复和语音合成将客户端变成代理循环的完整语音界面。本地设备端识别离线可用，打断支持让你可以在回复中途切入。",
        checkpoints: ["语音输入", "本地 ASR", "打断", "自动播放回复"]
      }
    ]
  },

  faq: {
    eyebrow: "常见问题",
    heading: "关于 Omni Code 的常见问题。",
    items: [
      {
        question: "Omni Code 是一个托管的编码 IDE 吗？",
        answer:
          "不是。Omni Code 是围绕桌面代理会话的客户端，会话仍然运行在你自己的机器上。"
      },
      {
        question: "审批模型如何工作？",
        answer:
          "敏感的桥接请求可以回退到明确审批，客户端还支持带有可配置最大风险级别的 AI 辅助审批。"
      },
      {
        question: "Omni Code 支持语音优先使用吗？",
        answer:
          "是的。客户端支持语音输入、语音转文字、语音合成播放和 AI 完成后的自动语音回复。基于 sherpa-onnx 的本地设备端识别离线可用，保护你的语音数据隐私。"
      },
      {
        question: "可以让回复更短吗？",
        answer:
          "可以。简洁回复模式可以让 AI 将所做的工作压缩为更短的摘要用于新会话。"
      },
      {
        question: "可以使用自己的桥接吗？",
        answer:
          "可以。Omni Code 围绕你可以指向自己控制的基础设施的桥接而设计。"
      }
    ]
  },

  footer: {
    description:
      "Omni Code 是桌面编码代理监控的远程客户端。",
    webApp: "Web 应用",
    client: "客户端",
    bridge: "桥接",
    releases: "版本发布"
  },

  topic: {
    alsoExplore: "还可以探索",
    remoteSupervision:
      "桌面编码代理会话的远程监控，支持语音、审批和你控制的桥接。",
    omniCode: "Omni Code",
    downloadOmniCode: "下载 Omni Code",
    overview: "概述",
    inOmniCode: "在 Omni Code 中。",
    nextStep: "下一步",
    useFromSurface:
      "从最重要的产品界面使用 Omni Code。",
    startFromClient:
      "从客户端开始，下载最新构建，或在需要将控制路径更靠近自己机器时检查桥接。",
    tryWebApp: "试用 Web 应用",
    downloadPage: "下载页面",
    links: [
      { label: "Web 应用", href: "/products/omni-code/web" },
      { label: "语音优先交互", href: "/products/omni-code/voice" },
      { label: "AI 辅助审批", href: "/products/omni-code/ai-approval" },
      { label: "自托管桥接", href: "/products/omni-code/bridge" },
      { label: "下载和版本发布", href: "/products/omni-code/download" }
    ]
  },

  topics: {
    voice: {
      title: "Omni Code 语音控制 | Omni Stream AI",
      description:
        "探索 Omni Code 中的语音控制界面，用于桌面编码代理会话的远程监控。",
      eyebrow: "语音控制",
      headline: "桌面编码代理的完整语音循环。",
      intro:
        "使用语音输入、转录和语音回复，无需一直盯着终端。语音是 Omni Code 的核心界面之一 — 现在支持本地语音识别和打断功能。",
      points: [
        {
          title: "双手忙碌时使用语音输入",
          body:
            "通过语音识别发送指令，无需在会话中输入每条消息。"
        },
        {
          title: "离线可用的本地语音识别",
          body:
            "使用 sherpa-onnx 在设备端运行语音转文字，语音输入无需网络连接即可使用，数据不离开你的设备。"
        },
        {
          title: "中途打断 AI 回复",
          body:
            "在通话模式下切断冗长或偏离的回复，无需等待完成即可重定向对话。"
        },
        {
          title: "自动播放 AI 回复",
          body:
            "回复完成后客户端自动开始播放，让你可以继续行动。"
        }
      ],
      ctaLabel: "探索客户端",
      ctaHref: "https://github.com/omni-stream-ai/omni-code"
    },
    aiApproval: {
      title: "Omni Code AI 审批 | Omni Stream AI",
      description:
        "探索 Omni Code 中的 AI 辅助审批模型，用于受监督的桌面编码代理工作流。",
      eyebrow: "AI 审批",
      headline: "带手动回退的 AI 辅助审批。",
      intro:
        "Omni Code 在敏感操作中保持人类参与，同时允许低风险请求先使用 AI 辅助审批。高风险操作仍然回退到明确审核。",
      points: [
        {
          title: "敏感请求的手动审批",
          body:
            "暂停风险桥接操作，直到有人明确批准或拒绝。"
        },
        {
          title: "低风险决策的 AI 辅助",
          body:
            "使用可配置最大风险级别的 AI 辅助审批，避免不必要的审批摩擦。"
        },
        {
          title: "安全的回退行为",
          body:
            "高风险命令、失败的调用和硬阻止规则仍然会上报给人类。"
        }
      ],
      ctaLabel: "查看桥接",
      ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
    },
    bridge: {
      title: "Omni Code 桥接 | Omni Stream AI",
      description:
        "探索 Omni Code 背后的桥接模型，用于桌面编码代理会话的远程监控。",
      eyebrow: "桥接",
      headline: "指向你自己机器的自托管桥接。",
      intro:
        "Omni Code 使用基于桥接的架构，而不是将工作流锁定在托管后端。将客户端指向你控制的基础设施，将真正的编码上下文保持在你的桌面上。",
      points: [
        {
          title: "HTTP 用于命令，SSE 用于实时更新",
          body:
            "桥接在明确且易于理解的模型中传输消息、会话状态、审批和回复事件。"
        },
        {
          title: "可配置的身份和访问",
          body:
            "桥接 URL、桥接令牌和允许的客户端 ID 可以匹配你的笔记本电脑、局域网或自托管环境。"
        },
        {
          title: "为本地桌面会话而构建",
          body:
            "桥接设计为靠近编码代理实际运行的机器。"
        }
      ],
      ctaLabel: "打开桥接仓库",
      ctaHref: "https://github.com/omni-stream-ai/omni-code-bridge"
    },
    web: {
      title: "Omni Code Web 应用 | Omni Stream AI",
      description:
        "在浏览器中直接使用 Omni Code — 无需安装。从任何设备获得完整的语音、审批和桥接支持。",
      eyebrow: "Web 应用",
      headline: "Omni Code 在浏览器中运行。",
      intro:
        "从任何带有浏览器的设备访问你的桌面编码代理会话。Web 应用提供与原生客户端相同的语音、审批和桥接功能 — 无需下载。",
      points: [
        {
          title: "无需安装",
          body:
            "在任何现代浏览器中打开 code.omnistreamai.com，立即开始管理会话。"
        },
        {
          title: "适用于每个平台",
          body:
            "在 Windows、macOS、Linux、ChromeOS 和移动设备上使用同一个 Web 应用，无需单独构建。"
        },
        {
          title: "PWA 支持",
          body:
            "将 Web 应用安装到主屏幕，获得类似原生的体验和离线功能。"
        }
      ],
      ctaLabel: "打开 Web 应用",
      ctaHref: "https://code.omnistreamai.com"
    },
    download: {
      title: "下载 Omni Code | Omni Stream AI",
      description:
        "从当前 GitHub 版本下载适用于 Android、macOS、Windows 或 Linux 的最新 Omni Code 构建。",
      eyebrow: "下载 Omni Code",
      headline: "下载适用于你平台的最新构建。",
      lead:
        "主按钮可以推荐最新的 Android、macOS、Windows 或 Linux 构建，同时保持所有平台链接可见。",
      pills: ["最新版本", "平台感知", "GitHub 托管"],
      viewReleases: "查看最新版本",
      tryWeb: "试用 Web",
      openReleases: "打开版本页面",
      platformNote:
        "平台检测在浏览器中进行。如果不确定，按钮会回退到版本发布页面。",
      suggestedTarget: "建议目标",
      releasePage: "版本页面",
      fallback: "回退",
      fallbackCopy:
        "这些链接跟随当前 GitHub 最新版本，只要发布的资源名称保持稳定。",
      cards: {
        web: { label: "Web", title: "PWA", note: "直接在浏览器中打开" },
        android: { label: "Android", title: "APK (arm64)", note: "大多数设备推荐" },
        macos: { label: "macOS", title: "未签名 ZIP", note: "可能需要 Gatekeeper 覆盖" },
        homebrew: { label: "macOS", title: "Homebrew", note: "brew install --cask omni-code" },
        windows: { label: "Windows", title: "x86_64 ZIP", note: "直接下载最新版" },
        linux: { label: "Linux", title: "x86_64 tar.gz", note: "直接下载最新版" },
        aur: { label: "Arch Linux", title: "AUR", note: "yay -S omni-code-bin" }
      },
      releasePaths: {
        eyebrow: "安装方式",
        heading: "一个主按钮，所有平台仍然可见。",
        intro:
          "页面可以自动推荐安装包，同时不会为在其他设备上下载的人隐藏完整的版本列表。"
      },
      homebrew: {
        accent: "macOS",
        heading: "通过 Homebrew 安装。",
        body:
          "使用 Homebrew 的 macOS 用户可以将 Omni Code 作为 cask 安装，支持自动更新。"
      },
      aur: {
        accent: "Arch Linux",
        heading: "从 AUR 安装。",
        body:
          "Arch Linux 用户可以从 AUR 安装预构建的二进制包。"
      },
      android: {
        accent: "Android",
        heading: "选择正确的架构。",
        body:
          "arm64、arm 和 x86_64 设备有单独的 APK 构建。update.json 清单仍可用于客户端更新流程。"
      },
      fallbackCard: {
        accent: "回退",
        heading: "始终保留手动路径。",
        body:
          "如果平台检测不明确或有人在为其他设备下载，版本页面仍然一键可达，包含所有已发布的资源。"
      },
      moreLinks: {
        eyebrow: "更多链接",
        heading: "需要更多细节时直接打开仓库。",
        body:
          "GitHub 版本是今天的主要分发路径。桥接仓库和 Android 更新清单保持链接在此供检查。",
        omniCodeRepo: "Omni Code 仓库",
        bridgeRepo: "桥接仓库",
        androidManifest: "Android 更新清单"
      }
    }
  }
};
