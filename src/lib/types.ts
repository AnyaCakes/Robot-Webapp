export interface SensorPin {
  label: string;
  arduinoPin: string;
}

export interface Sensor {
  id: string;
  name: string;
  description: string;
  wiringImage: string;
  pins: SensorPin[];
}

export interface Behavior {
  id: string;
  name: string;
  description: string;
}

export type TemplateParameterType = "number" | "select";

export interface TemplateParameterOption {
  label: string;
  value: string;
}

export interface TemplateParameter {
  id: string;
  label: string;
  type: TemplateParameterType;
  defaultValue: number | string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: TemplateParameterOption[];
}

export interface CodeTemplate {
  id: string;
  sensorId: string;
  behaviorId: string;
  code: string;
  parameters: TemplateParameter[];
  explanation: string;
}

// A General Project is a standalone Arduino sketch that isn't part of the
// robot car (no sensor/behavior pairing to match) - the student just picks
// one project directly, e.g. blinking an LED.
export interface GeneralProject {
  id: string;
  name: string;
  description: string;
  wiringImage: string;
  pins: SensorPin[];
  code: string;
  parameters: TemplateParameter[];
  explanation: string;
}
