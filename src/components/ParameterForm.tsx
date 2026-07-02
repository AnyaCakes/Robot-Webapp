"use client";

import { TemplateParameter } from "@/lib/types";

interface ParameterFormProps {
  parameters: TemplateParameter[];
  values: Record<string, string | number>;
  onChange: (id: string, value: string | number) => void;
}

export default function ParameterForm({
  parameters,
  values,
  onChange,
}: ParameterFormProps) {
  if (parameters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {parameters.map((parameter) => (
        <div key={parameter.id} className="flex flex-col gap-1">
          <label htmlFor={parameter.id} className="font-medium">
            {parameter.label}
            {parameter.unit ? ` (${parameter.unit})` : ""}
          </label>

          {parameter.type === "number" ? (
            <input
              id={parameter.id}
              type="number"
              min={parameter.min}
              max={parameter.max}
              step={parameter.step}
              value={values[parameter.id]}
              onChange={(event) =>
                onChange(parameter.id, event.target.valueAsNumber)
              }
              className="border border-gray-300 rounded px-2 py-1 w-40"
            />
          ) : (
            <select
              id={parameter.id}
              value={values[parameter.id]}
              onChange={(event) => onChange(parameter.id, event.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-40"
            >
              {parameter.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
}
