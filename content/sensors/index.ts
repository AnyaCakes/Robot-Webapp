import { Sensor } from "@/lib/types";
import { ultrasonic } from "./ultrasonic";
import { irRemote } from "./ir-remote";
import { soundSensor } from "./sound-sensor";
import { dualUltrasonic } from "./dual-ultrasonic";

export const sensors: Sensor[] = [
  ultrasonic,
  irRemote,
  soundSensor,
  dualUltrasonic,
];
