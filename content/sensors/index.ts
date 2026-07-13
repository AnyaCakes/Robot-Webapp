import { Sensor } from "@/lib/types";
import { ultrasonic } from "./ultrasonic";
import { irRemote } from "./ir-remote";
import { soundSensor } from "./sound-sensor";

export const sensors: Sensor[] = [ultrasonic, irRemote, soundSensor];
