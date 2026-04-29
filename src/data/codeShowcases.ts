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
  files: CodeShowcaseFile[];
  explanationTitle: string;
  whyThisMatters: string;
  githubUrl: string;
};

export const codeShowcases: CodeShowcaseItem[] = [
  {
    id: "inventory-system",
    title: "Inventory System",
    description:
      "A compact inventory flow built around explicit actions, predictable state changes, and UI-friendly events.",
    keyIdeas: [
      "Keep inventory mutations behind a small public API.",
      "Let UI react through events instead of owning inventory rules.",
      "Make stacking behavior obvious before adding more item complexity.",
    ],
    technologies: ["Unity", "C#", "Gameplay Systems", "ScriptableObjects"],
    files: [
      {
        fileName: "InventoryManager.cs",
        code: `public bool TryAdd(ItemDefinition item, int amount)
{
    if (item == null || amount <= 0) return false;

    ItemStack stack = FindOrCreateStack(item);
    stack.Add(amount);
    ItemAdded?.Invoke(stack);
    return true;
}`,
      },
      {
        fileName: "ItemDefinition.cs",
        code: `[CreateAssetMenu(menuName = "Game/Inventory/Item")]
public sealed class ItemDefinition : ScriptableObject
{
    [field: SerializeField] public string DisplayName { get; private set; }
    [field: SerializeField] public bool IsStackable { get; private set; } = true;
}`,
      },
    ],
    explanationTitle: "What this system shows",
    whyThisMatters:
      "This is how I usually approach inventory logic: a narrow API, clear ownership, and enough separation that UI and gameplay systems do not start pulling against each other.",
    githubUrl: "https://github.com/DeanAviv/unity-sequence-manager",
  },
  {
    id: "scriptableobject-patterns",
    title: "ScriptableObject Patterns",
    description:
      "Shared-value and data patterns that make tuning easier without burying gameplay logic inside inspectors.",
    keyIdeas: [
      "Use ScriptableObjects to expose data cleanly, not to hide architecture.",
      "Reset runtime values deliberately so Play Mode stays predictable.",
      "Keep observer-style UI updates simple and visible.",
    ],
    technologies: ["Unity", "C#", "ScriptableObjects", "Editor Workflow"],
    files: [
      {
        fileName: "FloatVariable.cs",
        code: `public float Value
{
    get => runtimeValue;
    set
    {
        if (Mathf.Approximately(runtimeValue, value)) return;
        runtimeValue = value;
        Changed?.Invoke(runtimeValue);
    }
}`,
      },
      {
        fileName: "VariableLabel.cs",
        code: `private void OnEnable()
{
    source.Changed += Refresh;
    Refresh(source.Value);
}

private void Refresh(float value)
{
    label.text = Mathf.RoundToInt(value).ToString();
}`,
      },
    ],
    explanationTitle: "What this system shows",
    whyThisMatters:
      "I like patterns like this when they make the project easier to tune and teach. The goal is not a clever framework. The goal is data that stays understandable while the game grows.",
    githubUrl: "https://github.com/DeanAviv/unity-card-deck-toolkit",
  },
  {
    id: "event-driven-systems-zenject",
    title: "Event-Driven Systems (Zenject)",
    description:
      "A signal-driven example for connecting gameplay, UI, and feedback without turning everything into direct references.",
    keyIdeas: [
      "Signals help when the event boundary is clear and intentional.",
      "Payloads should stay small so debugging remains practical.",
      "Event-driven code still needs readable flow, not magic.",
    ],
    technologies: ["Unity", "C#", "Zenject", "Signals"],
    files: [
      {
        fileName: "PlayerDamagedSignal.cs",
        code: `public readonly struct PlayerDamagedSignal
{
    public int Amount { get; }
    public string SourceId { get; }

    public PlayerDamagedSignal(int amount, string sourceId)
    {
        Amount = amount;
        SourceId = sourceId;
    }
}`,
      },
      {
        fileName: "HealthPresenter.cs",
        code: `private void OnEnable()
{
    signalBus.Subscribe<PlayerDamagedSignal>(OnPlayerDamaged);
}

private void OnPlayerDamaged(PlayerDamagedSignal signal)
{
    Debug.Log($"Player took {signal.Amount} damage from {signal.SourceId}");
}`,
      },
    ],
    explanationTitle: "What this system shows",
    whyThisMatters:
      "When I use event-driven architecture, I want the benefits of decoupling without losing the ability to explain what happened. Signals are useful only if the team can still follow the story.",
    githubUrl: "https://github.com/DeanAviv/unity-turn-base-toolkit",
  },
  {
    id: "localization-architecture",
    title: "Localization Architecture",
    description:
      "A region-locale approach that keeps content decisions explicit instead of scattering them across UI code.",
    keyIdeas: [
      "Locale rules should be visible before content bugs reach production.",
      "Fallback logic deserves to be deliberate, not assumed.",
      "Localization architecture is part UX, part systems design.",
    ],
    technologies: ["Unity", "C#", "Localization", "Content Systems"],
    files: [
      {
        fileName: "LocaleResolver.cs",
        code: `public string Resolve(string regionCode, string preferredLanguage)
{
    if (string.IsNullOrWhiteSpace(preferredLanguage))
    {
        return fallbackLocale;
    }

    string candidate = $"{preferredLanguage.ToLowerInvariant()}-{regionCode?.ToUpperInvariant() ?? "US"}";
    return CultureInfo.GetCultureInfo(candidate).Name;
}`,
      },
      {
        fileName: "LocalizedTextKey.cs",
        code: `[CreateAssetMenu(menuName = "Game/Localization/Text Key")]
public sealed class LocalizedTextKey : ScriptableObject
{
    [field: SerializeField] public string Key { get; private set; }
    [field: TextArea]
    [field: SerializeField] public string DeveloperNote { get; private set; }
}`,
      },
    ],
    explanationTitle: "What this system shows",
    whyThisMatters:
      "I think about localization as a behavior problem, not just a text problem. Region and language rules need structure early, otherwise every future screen pays the price.",
    githubUrl: "https://github.com/DeanAviv/unity-card-deck-toolkit",
  },
  {
    id: "unity-tooling",
    title: "Unity Tooling",
    description:
      "Small editor tooling that removes repeated friction and turns production chores into deliberate workflow.",
    keyIdeas: [
      "A good tool saves attention, not just clicks.",
      "Tool output should be readable for the next developer too.",
      "Workflow fixes are often as valuable as feature work.",
    ],
    technologies: ["Unity", "C#", "Editor Tools", "Workflow"],
    files: [
      {
        fileName: "ScreenshotTool.cs",
        code: `[MenuItem("Tools/Capture Screenshot")]
public static void Capture()
{
    ScreenCapture.CaptureScreenshot("screenshot.png");
}`,
      },
      {
        fileName: "BuildSceneValidator.cs",
        code: `foreach (EditorBuildSettingsScene scene in EditorBuildSettings.scenes)
{
    if (!scene.enabled) continue;

    var openedScene = EditorSceneManager.OpenScene(scene.path);
    Debug.Log($"Validated scene: {openedScene.name}");
}`,
      },
    ],
    explanationTitle: "What this system shows",
    whyThisMatters:
      "Not every useful system is player-facing. I build editor tools when they reduce noise, help the team move faster, and make routine work easier to trust.",
    githubUrl: "https://github.com/DeanAviv/unity-screenshot-tool",
  },
];
