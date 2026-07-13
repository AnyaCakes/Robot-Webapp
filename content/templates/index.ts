import { CodeTemplate } from "@/lib/types";
import { ultrasonicObstacleAvoidance } from "./ultrasonic__obstacle-avoidance";
import { irRemoteRemoteControl } from "./ir-remote__remote-control";
import { soundSensorSoundControl } from "./sound-sensor__sound-control";

export const templates: CodeTemplate[] = [
  ultrasonicObstacleAvoidance,
  irRemoteRemoteControl,
  soundSensorSoundControl,
];
