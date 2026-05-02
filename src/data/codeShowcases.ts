export type CodeShowcaseFile = {
  fileName: string;
  code: string;
};

export type CodeShowcaseItem = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  files: CodeShowcaseFile[];
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
    files: [
      {
        fileName: "GameManager.cs",
        code: `public sealed class GameManager : MonoBehaviour
{
    [SerializeField] private MonoBehaviour startingController;
    private ITurnManager turnManager;

    [Inject]
    public void Construct(ITurnManager turnManager)
    {
        this.turnManager = turnManager;
    }

    private void Start()
    {
        turnManager.BeginTurn(startingController as IPlayTurn);
    }
}`,
      },
      {
        fileName: "IPlayTurn.cs",
        code: `public interface IPlayTurn
{
    bool IsTurnComplete { get; }

    void BeginTurn();
    void TickTurn();
    void EndTurn();
}`,
      },
      {
        fileName: "ITurnManager.cs",
        code: `public interface ITurnManager
{
    IPlayTurn ActiveTurn { get; }

    void BeginTurn(IPlayTurn nextTurn);
    void CompleteActiveTurn();
}`,
      },
    ],
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
    files: [
      {
        fileName: "SequenceManager.cs",
        code: `public sealed class SequenceManager : ISequenceManager
{
    public async Task PlayAsync(ISequence sequence)
    {
        foreach (ISequence step in sequence.Children)
        {
            if (!step.CanRun()) continue;

            await step.RunAsync();
        }
    }
}`,
      },
      {
        fileName: "ISequence.cs",
        code: `public interface ISequence
{
    IReadOnlyList<ISequence> Children { get; }

    bool CanRun();
    Task RunAsync();
}`,
      },
      {
        fileName: "ISequenceManager.cs",
        code: `public interface ISequenceManager
{
    bool IsRunning { get; }

    Task PlayAsync(ISequence sequence);
    void Stop();
}`,
      },
      {
        fileName: "SequenceEditor.cs",
        code: `[CustomEditor(typeof(SequenceAsset))]
public sealed class SequenceEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        if (GUILayout.Button("Preview Sequence"))
        {
            Debug.Log("Previewing selected sequence.");
        }
    }
}`,
      },
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
    files: [
      {
        fileName: "CardDeck.cs",
        code: `public sealed class CardDeck
{
    private readonly List<CardData> cards;

    public CardDeck(IEnumerable<CardData> sourceCards)
    {
        cards = sourceCards.ToList();
        Shuffle();
    }

    public CardData Draw()
    {
        CardData card = cards[0];
        cards.RemoveAt(0);
        return card;
    }
}`,
      },
      {
        fileName: "DeckData.cs",
        code: `[CreateAssetMenu(menuName = "Cards/Deck Data")]
public sealed class DeckData : ScriptableObject
{
    [field: SerializeField]
    public List<CardData> StartingCards { get; private set; } = new();

    public CardDeck CreateRuntimeDeck()
    {
        return new CardDeck(StartingCards);
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
    [field: TextArea]
    [field: SerializeField] public string RulesText { get; private set; }
}`,
      },
      {
        fileName: "DiscardPile.cs",
        code: `public sealed class DiscardPile
{
    private readonly Stack<CardData> cards = new();

    public void Add(CardData card)
    {
        if (card == null) return;

        cards.Push(card);
    }

    public IReadOnlyCollection<CardData> Cards => cards;
}`,
      },
    ],
    githubUrl: "https://github.com/DeanAviv/unity-card-deck-toolkit",
  },
];
