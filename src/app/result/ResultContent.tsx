"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { sensors } from "@content/sensors";
import { behaviors } from "@content/behaviors";
import {
  findGeneralProject,
  findTemplate,
  substituteParameters,
} from "@/lib/templateEngine";
import { SensorPin, TemplateParameter } from "@/lib/types";
import ParameterForm from "@/components/ParameterForm";
import CodeViewer from "@/components/CodeViewer";
import WiringDiagram from "@/components/WiringDiagram";
import DownloadButton from "@/components/DownloadButton";

interface ResolvedResult {
  title: string;
  explanation: string;
  wiringName: string;
  wiringImage: string;
  pins: SensorPin[];
  parameters: TemplateParameter[];
  code: string;
  filename: string;
}

export default function ResultContent() {
  const searchParams = useSearchParams();
  const sensorId = searchParams.get("sensor") ?? "";
  const behaviorId = searchParams.get("behavior") ?? "";
  const projectId = searchParams.get("project") ?? "";

  const sensor = sensors.find((candidate) => candidate.id === sensorId);
  const behavior = behaviors.find((candidate) => candidate.id === behaviorId);
  const template = findTemplate(sensorId, behaviorId);
  const generalProject = findGeneralProject(projectId);

  const result: ResolvedResult | undefined = useMemo(() => {
    if (projectId) {
      return (
        generalProject && {
          title: generalProject.name,
          explanation: generalProject.explanation,
          wiringName: generalProject.name,
          wiringImage: generalProject.wiringImage,
          pins: generalProject.pins,
          parameters: generalProject.parameters,
          code: generalProject.code,
          filename: `${generalProject.id}.ino`,
        }
      );
    }
    return (
      sensor &&
      behavior &&
      template && {
        title: `${sensor.name} + ${behavior.name}`,
        explanation: template.explanation,
        wiringName: sensor.name,
        wiringImage: sensor.wiringImage,
        pins: sensor.pins,
        parameters: template.parameters,
        code: template.code,
        filename: `${sensor.id}_${behavior.id}.ino`,
      }
    );
  }, [projectId, generalProject, sensor, behavior, template]);

  const [values, setValues] = useState<Record<string, string | number>>(() =>
    Object.fromEntries(
      (result?.parameters ?? []).map((parameter) => [
        parameter.id,
        parameter.defaultValue,
      ])
    )
  );

  const generatedCode = useMemo(() => {
    if (!result) return "";
    return substituteParameters(result.code, values);
  }, [result, values]);

  function handleParameterChange(id: string, value: string | number) {
    setValues((previous) => ({ ...previous, [id]: value }));
  }

  if (!result) {
    return (
      <main className="max-w-3xl mx-auto p-6 flex flex-col gap-4">
        <p className="text-red-600">
          Couldn&apos;t find a matching code template.
        </p>
        <Link href="/" className="text-blue-600 underline">
          Back to selection
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6 flex flex-col gap-8">
      <div>
        <Link href="/" className="text-blue-600 underline text-sm">
          Back to selection
        </Link>
        <h1 className="text-2xl font-bold mt-2">{result.title}</h1>
        <p className="text-gray-600">{result.explanation}</p>
      </div>

      <WiringDiagram
        name={result.wiringName}
        wiringImage={result.wiringImage}
        pins={result.pins}
      />

      <ParameterForm
        parameters={result.parameters}
        values={values}
        onChange={handleParameterChange}
      />

      <CodeViewer code={generatedCode} />

      <DownloadButton filename={result.filename} code={generatedCode} />
    </main>
  );
}
