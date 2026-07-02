"use client";

interface SelectableItem {
  id: string;
  name: string;
  description: string;
}

interface ItemSelectorProps<T extends SelectableItem> {
  legend: string;
  fieldName: string;
  items: T[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function ItemSelector<T extends SelectableItem>({
  legend,
  fieldName,
  items,
  selectedId,
  onSelect,
}: ItemSelectorProps<T>) {
  return (
    <fieldset>
      <legend className="font-semibold mb-2">{legend}</legend>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <label
            key={item.id}
            className={`border rounded p-3 cursor-pointer ${
              selectedId === item.id ? "border-blue-600 bg-blue-50" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={fieldName}
              value={item.id}
              checked={selectedId === item.id}
              onChange={() => onSelect(item.id)}
              className="mr-2"
            />
            <span className="font-medium">{item.name}</span>
            <p className="text-sm text-gray-600 ml-6">{item.description}</p>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
