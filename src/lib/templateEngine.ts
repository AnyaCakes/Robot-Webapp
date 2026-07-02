import { templates } from "@content/templates";
import { generalProjects } from "@content/generalProjects";
import { CodeTemplate, GeneralProject } from "./types";

function templateKey(sensorId: string, behaviorId: string): string {
  return `${sensorId}__${behaviorId}`;
}

const templatesByKey: Map<string, CodeTemplate> = new Map(
  templates.map((template) => [
    templateKey(template.sensorId, template.behaviorId),
    template,
  ])
);

export function findTemplate(
  sensorId: string,
  behaviorId: string
): CodeTemplate | undefined {
  return templatesByKey.get(templateKey(sensorId, behaviorId));
}

const generalProjectsById: Map<string, GeneralProject> = new Map(
  generalProjects.map((project) => [project.id, project])
);

export function findGeneralProject(id: string): GeneralProject | undefined {
  return generalProjectsById.get(id);
}

export function substituteParameters(
  code: string,
  values: Record<string, string | number>
): string {
  let result = code;
  for (const [id, value] of Object.entries(values)) {
    result = result.replaceAll(`{{${id}}}`, String(value));
  }
  return result;
}
