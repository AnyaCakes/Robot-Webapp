"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { sensors } from "@content/sensors";
import { behaviors } from "@content/behaviors";
import { generalProjects } from "@content/generalProjects";
import { findTemplate } from "@/lib/templateEngine";
import ItemSelector from "@/components/ItemSelector";

export default function SelectorPage() {
  const router = useRouter();
  const [sensorId, setSensorId] = useState<string | null>(null);
  const [behaviorId, setBehaviorId] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  const template = useMemo(() => {
    if (!sensorId || !behaviorId) return undefined;
    return findTemplate(sensorId, behaviorId);
  }, [sensorId, behaviorId]);

  const showNoMatch = Boolean(sensorId && behaviorId && !template);

  function handleGenerateRobotCar() {
    if (!sensorId || !behaviorId) return;
    router.push(`/result?sensor=${sensorId}&behavior=${behaviorId}`);
  }

  function handleGenerateGeneralProject() {
    if (!projectId) return;
    router.push(`/result?project=${projectId}`);
  }

  return (
    <main className="max-w-3xl mx-auto p-6 flex flex-col gap-12">
      <div>
        <h1 className="text-2xl font-bold">Robot Code Builder</h1>
        <p className="text-gray-600">
          Pick a project below to get a starting Arduino sketch.
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <div>
          <h2 className="text-xl font-semibold">General Projects</h2>
          <p className="text-gray-600">
            Standalone Arduino projects that aren&apos;t part of the robot
            car.
          </p>
        </div>

        <ItemSelector
          legend="Project"
          fieldName="project"
          items={generalProjects}
          selectedId={projectId}
          onSelect={setProjectId}
        />

        <button
          type="button"
          disabled={!projectId}
          onClick={handleGenerateGeneralProject}
          className="self-start bg-blue-600 text-white rounded px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Generate Code
        </button>
      </section>

      <section className="flex flex-col gap-8 border-t border-gray-200 pt-8">
        <div>
          <h2 className="text-xl font-semibold">Robot Car</h2>
          <p className="text-gray-600">
            Pick a sensor and a behavior for your robot.
          </p>
        </div>

        <ItemSelector
          legend="Sensor"
          fieldName="sensor"
          items={sensors}
          selectedId={sensorId}
          onSelect={setSensorId}
        />

        <ItemSelector
          legend="Behavior"
          fieldName="behavior"
          items={behaviors}
          selectedId={behaviorId}
          onSelect={setBehaviorId}
        />

        {showNoMatch && (
          <p className="text-red-600">
            No code template exists yet for that sensor and behavior
            combination.
          </p>
        )}

        <button
          type="button"
          disabled={!template}
          onClick={handleGenerateRobotCar}
          className="self-start bg-blue-600 text-white rounded px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Generate Code
        </button>
      </section>
    </main>
  );
}
