import { Sensor } from "@/lib/types";
import { ultrasonic } from "./ultrasonic";
import { irRemote } from "./ir-remote";

export const sensors: Sensor[] = [ultrasonic, irRemote];
