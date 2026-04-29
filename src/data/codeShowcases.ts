export type CodeShowcaseFile = {
  fileName: string;
  language: string;
  code: string;
};

export type CodeShowcaseItem = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  files: CodeShowcaseFile[];
  explanation: {
    title: string;
    points: string[];
  };
  whyThisMatters: string;
};

export const codeShowcases: CodeShowcaseItem[] = [
  {
    id: "inventory-system",
    title: "Inventory System",
    summary:
      "A compact gameplay system with a small public API, item definitions, and events for UI or feedback layers.",
    technologies: ["Unity", "C#", "Gameplay Systems", "ScriptableObjects"],
    files: [
      {
        fileName: "InventoryManager.cs",
        language: "csharp",
        code: `using System;
using System.Collections.Generic;
using UnityEngine;

public sealed class InventoryManager : MonoBehaviour
{
    public event Action<ItemStack> ItemAdded;
    public event Action<ItemStack> ItemRemoved;

    [SerializeField] private int maxSlots = 24;
    private readonly List<ItemStack> items = new();

    public bool TryAdd(ItemDefinition item, int amount)
    {
        if (item == null || amount <= 0) return false;
        if (items.Count >= maxSlots && !Contains(item)) return false;

        ItemStack stack = FindOrCreateStack(item);
        stack.Add(amount);
        ItemAdded?.Invoke(stack);
        return true;
    }

    public bool TryRemove(ItemDefinition item, int amount)
    {
        ItemStack stack = items.Find(entry => entry.Item == item);
        if (stack == null || stack.Amount < amount) return false;

        stack.Remove(amount);
        if (stack.Amount == 0) items.Remove(stack);
        ItemRemoved?.Invoke(stack);
        return true;
    }

    private bool Contains(ItemDefinition item) =>
        items.Exists(entry => entry.Item == item);

    private ItemStack FindOrCreateStack(ItemDefinition item)
    {
        ItemStack stack = items.Find(entry => entry.Item == item);
        if (stack != null) return stack;

        stack = new ItemStack(item);
        items.Add(stack);
        return stack;
    }
}`,
      },
      {
        fileName: "ItemDefinition.cs",
        language: "csharp",
        code: `using UnityEngine;

[CreateAssetMenu(menuName = "Game/Inventory/Item")]
public sealed class ItemDefinition : ScriptableObject
{
    [field: SerializeField] public string DisplayName { get; private set; }
    [field: SerializeField] public Sprite Icon { get; private set; }
    [field: SerializeField] public bool IsStackable { get; private set; } = true;
}`,
      },
    ],
    explanation: {
      title: "What Dean would walk through",
      points: [
        "Why TryAdd and TryRemove are easier to teach and test than open-ended mutation.",
        "How events let UI, audio, and quests react without living inside inventory code.",
        "Where this simple version should stop, and what belongs in save data or item rules later.",
      ],
    },
    whyThisMatters:
      "Inventory code gets messy fast when every system reaches into it. Clear boundaries make the feature easier to debug, teach, and extend.",
  },
  {
    id: "scriptableobject-variables",
    title: "ScriptableObject Variables",
    summary:
      "A lightweight shared-value pattern for designer-friendly tuning and UI binding without hard references everywhere.",
    technologies: ["Unity", "C#", "ScriptableObjects", "Editor Workflow"],
    files: [
      {
        fileName: "FloatVariable.cs",
        language: "csharp",
        code: `using System;
using UnityEngine;

[CreateAssetMenu(menuName = "Game/Variables/Float")]
public sealed class FloatVariable : ScriptableObject
{
    public event Action<float> Changed;

    [SerializeField] private float defaultValue;
    private float runtimeValue;

    public float Value
    {
        get => runtimeValue;
        set
        {
            if (Mathf.Approximately(runtimeValue, value)) return;
            runtimeValue = value;
            Changed?.Invoke(runtimeValue);
        }
    }

    private void OnEnable()
    {
        runtimeValue = defaultValue;
    }
}`,
      },
      {
        fileName: "VariableLabel.cs",
        language: "csharp",
        code: `using TMPro;
using UnityEngine;

public sealed class VariableLabel : MonoBehaviour
{
    [SerializeField] private FloatVariable source;
    [SerializeField] private TMP_Text label;

    private void OnEnable()
    {
        source.Changed += Refresh;
        Refresh(source.Value);
    }

    private void OnDisable()
    {
        source.Changed -= Refresh;
    }

    private void Refresh(float value)
    {
        label.text = Mathf.RoundToInt(value).ToString();
    }
}`,
      },
    ],
    explanation: {
      title: "What Dean would walk through",
      points: [
        "How ScriptableObjects can make values visible and editable without building a large framework.",
        "Why runtime reset matters when entering and exiting Play Mode.",
        "How UI can observe data without owning the gameplay system.",
      ],
    },
    whyThisMatters:
      "Students often learn faster when they can see data move. This pattern makes state visible while keeping the lesson grounded in real Unity tradeoffs.",
  },
  {
    id: "zenject-signals",
    title: "Zenject Signals",
    summary:
      "A signal-based example for keeping gameplay systems, UI, and feedback separated while still communicating clearly.",
    technologies: ["Unity", "C#", "Zenject", "Signals"],
    files: [
      {
        fileName: "PlayerDamagedSignal.cs",
        language: "csharp",
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
        language: "csharp",
        code: `using UnityEngine;
using Zenject;

public sealed class HealthPresenter : MonoBehaviour
{
    [Inject] private SignalBus signalBus;

    private void OnEnable()
    {
        signalBus.Subscribe<PlayerDamagedSignal>(OnPlayerDamaged);
    }

    private void OnDisable()
    {
        signalBus.Unsubscribe<PlayerDamagedSignal>(OnPlayerDamaged);
    }

    private void OnPlayerDamaged(PlayerDamagedSignal signal)
    {
        Debug.Log($"Player took {signal.Amount} damage from {signal.SourceId}");
    }
}`,
      },
    ],
    explanation: {
      title: "What Dean would walk through",
      points: [
        "When signals help and when they hide too much flow.",
        "Why payloads should be small, explicit, and boring in the best way.",
        "How to keep subscriptions predictable so debugging remains possible.",
      ],
    },
    whyThisMatters:
      "Architecture is only useful if the team can still follow the story of what happened. Signals need discipline, not mystery.",
  },
  {
    id: "localization-region-locale",
    title: "Localization / Region-Locale System",
    summary:
      "A small region-locale resolver that keeps content selection explicit for multilingual or region-aware Unity projects.",
    technologies: ["Unity", "C#", "Localization", "Content Systems"],
    files: [
      {
        fileName: "LocaleResolver.cs",
        language: "csharp",
        code: `using System.Globalization;

public sealed class LocaleResolver
{
    private readonly string fallbackLocale;

    public LocaleResolver(string fallbackLocale = "en-US")
    {
        this.fallbackLocale = fallbackLocale;
    }

    public string Resolve(string regionCode, string preferredLanguage)
    {
        if (string.IsNullOrWhiteSpace(preferredLanguage))
        {
            return fallbackLocale;
        }

        string normalizedRegion = regionCode?.ToUpperInvariant() ?? "US";
        string normalizedLanguage = preferredLanguage.ToLowerInvariant();
        string candidate = $"{normalizedLanguage}-{normalizedRegion}";

        return CultureInfo.GetCultureInfo(candidate).Name;
    }
}`,
      },
      {
        fileName: "LocalizedTextKey.cs",
        language: "csharp",
        code: `using UnityEngine;

[CreateAssetMenu(menuName = "Game/Localization/Text Key")]
public sealed class LocalizedTextKey : ScriptableObject
{
    [field: SerializeField] public string Key { get; private set; }
    [field: TextArea]
    [field: SerializeField] public string DeveloperNote { get; private set; }
}`,
      },
    ],
    explanation: {
      title: "What Dean would walk through",
      points: [
        "Why locale decisions should be visible instead of scattered through UI screens.",
        "How fallback rules prevent missing content from becoming a runtime surprise.",
        "Where Unity Localization packages fit once the project grows.",
      ],
    },
    whyThisMatters:
      "Localization is not just text replacement. Region and language rules touch UX, testing, and production planning.",
  },
  {
    id: "unity-tooling",
    title: "Unity Tooling",
    summary:
      "An editor utility example that turns a repeated production task into a deliberate, documented workflow.",
    technologies: ["Unity", "C#", "Editor Tools", "Workflow"],
    files: [
      {
        fileName: "BuildSceneValidator.cs",
        language: "csharp",
        code: `using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

public static class BuildSceneValidator
{
    [MenuItem("Tools/Validate Build Scenes")]
    public static void Validate()
    {
        foreach (EditorBuildSettingsScene scene in EditorBuildSettings.scenes)
        {
            if (!scene.enabled) continue;

            var openedScene = EditorSceneManager.OpenScene(scene.path);
            Debug.Log($"Validated scene: {openedScene.name}");
        }
    }
}`,
      },
    ],
    explanation: {
      title: "What Dean would walk through",
      points: [
        "How small editor tools save attention during production.",
        "Why tool output should be readable for the next developer, not just the author.",
        "What checks belong in editor validation before they become build-time pain.",
      ],
    },
    whyThisMatters:
      "Good tooling is a kindness to the future version of the team. It catches repeat problems before they become rituals.",
  },
];
