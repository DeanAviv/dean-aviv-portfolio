export type CodeShowcaseFile = {
  fileName: string;
  code: string;
};

export type CodeShowcaseItem = {
  id: string;
  title: string;
  description: string;
  keyIdeas: string[];
  technologies: string[];
  suggestedScripts: string[];
  files: CodeShowcaseFile[];
  explanationTitle: string;
  whyThisMatters: string;
  githubUrl: string;
};

export const codeShowcases: CodeShowcaseItem[] = [
  {
    id: "turn-based-toolkit",
    title: "Turn-Based Toolkit",
    description:
      "A modular Unity framework for turn-based gameplay, focused on state-driven architecture, player and AI turn flow, and clean separation between game flow, input, and behavior.",
    keyIdeas: [
      "State-driven flow keeps player and AI turns predictable.",
      "Input, behavior, and turn ownership stay in separate layers.",
      "Interfaces make new turn states easier to add and test.",
    ],
    technologies: [
      "State Pattern",
      "Interfaces",
      "Turn Management",
      "Gameplay Architecture",
      "Dependency Injection (Zenject)",
    ],
    suggestedScripts: [
      "TurnManager.cs",
      "ITurnState.cs / TurnState.cs",
      "PlayerTurnState.cs / EnemyTurnState.cs",
    ],
    files: [
      {
        fileName: "TurnManager.cs",
        code: `public sealed class TurnManager
{
    private ITurnState currentState;

    public void ChangeState(ITurnState nextState)
    {
        currentState?.Exit();
        currentState = nextState;
        currentState.Enter();
    }
}`,
      },
      {
        fileName: "ITurnState.cs",
        code: `public interface ITurnState
{
    void Enter();
    void Tick();
    void Exit();
}`,
      },
      {
        fileName: "PlayerTurnState.cs",
        code: `public sealed class PlayerTurnState : ITurnState
{
    public void Enter() => input.Enable();
    public void Tick() => playerActions.ReadIntent();
    public void Exit() => input.Disable();
}`,
      },
    ],
    explanationTitle: "What this repository shows",
    whyThisMatters:
      "Turn-based games can become hard to follow when flow, input, and behavior are mixed together. This toolkit shows how I organize those responsibilities so the game remains readable as rules expand.",
    githubUrl: "https://github.com/DeanAviv/unity-turn-base-toolkit",
  },
  {
    id: "sequence-manager",
    title: "Sequence Manager",
    description:
      "A Unity tool for building and running action sequences with support for delays, conditional actions, looping actions, and editor-facing workflow.",
    keyIdeas: [
      "Actions are composed into readable sequences instead of one-off scripts.",
      "Async flow keeps timing logic explicit and debuggable.",
      "Editor-facing attributes make repeated setup easier to manage.",
    ],
    technologies: [
      "Command-style sequencing",
      "Async / Await",
      "Reusable Systems",
      "Dependency Injection",
      "Custom Inspector",
    ],
    suggestedScripts: [
      "SequenceManager.cs",
      "ISequence.cs / ISequenceManager.cs",
      "SequenceAttribute.cs (or custom inspector script)",
    ],
    files: [
      {
        fileName: "SequenceManager.cs",
        code: `public sealed class SequenceManager : ISequenceManager
{
    public async Task RunAsync(ISequence sequence)
    {
        foreach (ISequenceAction action in sequence.Actions)
        {
            if (action.CanRun())
            {
                await action.ExecuteAsync();
            }
        }
    }
}`,
      },
      {
        fileName: "ISequence.cs",
        code: `public interface ISequence
{
    IReadOnlyList<ISequenceAction> Actions { get; }
    bool ShouldLoop { get; }
}`,
      },
      {
        fileName: "SequenceAttribute.cs",
        code: `public sealed class SequenceAttribute : PropertyAttribute
{
    public string GroupName { get; }

    public SequenceAttribute(string groupName)
    {
        GroupName = groupName;
    }
}`,
      },
    ],
    explanationTitle: "What this repository shows",
    whyThisMatters:
      "Sequence tools are most useful when designers and developers can understand the order of operations quickly. This example focuses on reusable actions, clear timing, and a workflow that can grow without becoming fragile.",
    githubUrl: "https://github.com/DeanAviv/unity-sequence-manager",
  },
  {
    id: "card-deck-toolkit",
    title: "Card Deck Toolkit",
    description:
      "A data-driven card deck system built around ScriptableObjects, designed to separate card data from runtime behavior and make deck logic easier to reuse.",
    keyIdeas: [
      "Card definitions live as data, while runtime systems own behavior.",
      "Deck, discard, draw, and hand logic stay reusable across game modes.",
      "ScriptableObjects make tuning and authoring easier without hiding flow.",
    ],
    technologies: [
      "ScriptableObjects",
      "Data-driven design",
      "Collection Management",
      "Gameplay Systems",
    ],
    suggestedScripts: [
      "DeckManager.cs (or equivalent)",
      "CardData ScriptableObject",
      "Card draw / shuffle / hand management logic",
    ],
    files: [
      {
        fileName: "DeckManager.cs",
        code: `public sealed class DeckManager
{
    private readonly List<CardData> drawPile = new();
    private readonly List<CardData> hand = new();

    public CardData Draw()
    {
        if (drawPile.Count == 0) ShuffleDiscardIntoDeck();
        CardData card = drawPile[0];
        drawPile.RemoveAt(0);
        hand.Add(card);
        return card;
    }
}`,
      },
      {
        fileName: "CardData.cs",
        code: `[CreateAssetMenu(menuName = "Cards/Card Data")]
public sealed class CardData : ScriptableObject
{
    [field: SerializeField] public string DisplayName { get; private set; }
    [field: SerializeField] public int Cost { get; private set; }
}`,
      },
      {
        fileName: "DeckFlow.cs",
        code: `public void Shuffle()
{
    for (int i = drawPile.Count - 1; i > 0; i--)
    {
        int swapIndex = Random.Range(0, i + 1);
        (drawPile[i], drawPile[swapIndex]) = (drawPile[swapIndex], drawPile[i]);
    }
}`,
      },
    ],
    explanationTitle: "What this repository shows",
    whyThisMatters:
      "Card systems work best when the data model is stable and the runtime flow is easy to reason about. This toolkit shows that split clearly, which makes the system easier to reuse, tune, and explain.",
    githubUrl: "https://github.com/DeanAviv/unity-card-deck-toolkit",
  },
];
