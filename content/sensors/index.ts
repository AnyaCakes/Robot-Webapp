import { Sensor } from "@/lib/types";
import { ultrasonic } from "./ultrasonic";
import { irRemote } from "./ir-remote";
import { soundSensor } from "./sound-sensor";
import { dualUltrasonic } from "./dual-ultrasonic";
import { irLineSensors } from "./ir-line-sensors";
import { dualHorizontalUltrasonic } from "./dual-horizontal-ultrasonic";
import { tripleUltrasonic } from "./triple-ultrasonic";

export const sensors: Sensor[] = [
  ultrasonic,
  irRemote,
  soundSensor,
  dualUltrasonic,
  irLineSensors,
  dualHorizontalUltrasonic,
  tripleUltrasonic,
];
