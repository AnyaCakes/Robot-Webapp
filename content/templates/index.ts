import { CodeTemplate } from "@/lib/types";
import { ultrasonicObstacleAvoidance } from "./ultrasonic__obstacle-avoidance";
import { irRemoteRemoteControl } from "./ir-remote__remote-control";
import { soundSensorSoundControl } from "./sound-sensor__sound-control";
import { dualUltrasonicObstacleAvoidance } from "./dual-ultrasonic__obstacle-avoidance";
import { irLineSensorsLineFollowing } from "./ir-line-sensors__line-following";

export const templates: CodeTemplate[] = [
  ultrasonicObstacleAvoidance,
  irRemoteRemoteControl,
  soundSensorSoundControl,
  dualUltrasonicObstacleAvoidance,
  irLineSensorsLineFollowing,
];
