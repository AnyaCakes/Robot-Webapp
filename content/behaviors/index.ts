import { Behavior } from "@/lib/types";
import { obstacleAvoidance } from "./obstacle-avoidance";
import { remoteControl } from "./remote-control";

export const behaviors: Behavior[] = [obstacleAvoidance, remoteControl];
