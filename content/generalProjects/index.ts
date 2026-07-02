import { GeneralProject } from "@/lib/types";
import { ledBlink } from "./led-blink";
import { ultrasonicBuzzer } from "./ultrasonic-buzzer";

export const generalProjects: GeneralProject[] = [ledBlink, ultrasonicBuzzer];
