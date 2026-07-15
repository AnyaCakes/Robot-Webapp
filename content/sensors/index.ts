import { Sensor } from "@/lib/types";
import { ultrasonic } from "./ultrasonic";
import { irRemote } from "./ir-remote";
import { soundSensor } from "./sound-sensor";
import { dualUltrasonic } from "./dual-ultrasonic";
import { irLineSensors } from "./ir-line-sensors";

export const sensors: Sensor[] = [
  ultrasonic,
  irRemote,
  soundSensor,
  dualUltrasonic,
  irLineSensors,
];
