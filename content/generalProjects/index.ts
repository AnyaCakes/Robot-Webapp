import { GeneralProject } from "@/lib/types";
import { motorSweepTest } from "./motor-sweep-test";
import { ledBlink } from "./led-blink";
import { ultrasonicBuzzer } from "./ultrasonic-buzzer";

export const generalProjects: GeneralProject[] = [
  motorSweepTest,
  ledBlink,
  ultrasonicBuzzer,
];
