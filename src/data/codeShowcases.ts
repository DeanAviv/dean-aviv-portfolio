export type CodeShowcaseItem = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  scripts: string[];
  githubUrl: string;
};

export const codeShowcases: CodeShowcaseItem[] = [
  {
    id: "turn-based-toolkit",
    title: "Turn-Based Toolkit",
    description:
      "A modular Unity architecture for turn-based gameplay, focused on separating turn logic from concrete player and AI controllers.",
    skills: [
      "State-driven flow",
      "Interfaces",
      "Turn management",
      "Gameplay architecture",
    ],
    scripts: ["GameManager.cs", "IPlayTurn.cs", "ITurnManager.cs"],
    githubUrl: "https://github.com/DeanAviv/unity-turn-base-toolkit",
  },
  {
    id: "sequence-manager",
    title: "Sequence Manager",
    description:
      "A reusable action-sequencing system for Unity, combining interfaces, async execution, dependency injection, and editor-facing workflow.",
    skills: [
      "Async / Await",
      "Interfaces",
      "Reusable systems",
      "Dependency Injection",
      "Editor tooling",
    ],
    scripts: [
      "SequenceManager.cs",
      "ISequence.cs",
      "ISequenceManager.cs",
      "SequenceEditor.cs",
    ],
    githubUrl: "https://github.com/DeanAviv/unity-sequence-manager",
  },
  {
    id: "card-deck-toolkit",
    title: "Card Deck Toolkit",
    description:
      "A data-driven card deck system built with ScriptableObjects, separating card definitions from runtime deck behavior.",
    skills: [
      "ScriptableObjects",
      "Data-driven design",
      "Collection management",
      "Gameplay systems",
    ],
    scripts: ["CardDeck.cs", "DeckData.cs", "CardData.cs", "DiscardPile.cs"],
    githubUrl: "https://github.com/DeanAviv/unity-card-deck-toolkit",
  },
];
