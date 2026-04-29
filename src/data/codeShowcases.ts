export type CodeShowcaseFile = {
  fileName: string;
  language: string;
  code: string;
};

export type CodeShowcaseItem = {
  title: string;
  summary: string;
  tags: string[];
  files: CodeShowcaseFile[];
  explanation: {
    title: string;
    points: string[];
  };
};

export const codeShowcases: CodeShowcaseItem[] = [
  {
    title: "InventoryManager",
    summary:
      "A compact example of data-driven inventory logic with clear entry points for UI, save systems, and gameplay events.",
    tags: ["Unity", "C#", "Architecture", "Gameplay Systems"],
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
        fileName: "ItemStack.cs",
        language: "csharp",
        code: `public sealed class ItemStack
{
    public ItemDefinition Item { get; }
    public int Amount { get; private set; }

    public ItemStack(ItemDefinition item)
    {
        Item = item;
    }

    public void Add(int amount)
    {
        Amount += amount;
    }

    public void Remove(int amount)
    {
        Amount -= amount;
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
      title: "What this example shows",
      points: [
        "Small public API: systems call TryAdd and TryRemove without touching storage details.",
        "Events keep UI and audio reactions outside the inventory logic.",
        "ScriptableObject item data makes content editing comfortable for designers.",
        "The structure is intentionally easy to extend with save data, signals, or dependency injection.",
      ],
    },
  },
];
