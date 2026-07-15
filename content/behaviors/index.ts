import { Behavior } from "@/lib/types";
import { obstacleAvoidance } from "./obstacle-avoidance";
import { remoteControl } from "./remote-control";
import { soundControl } from "./sound-control";
import { lineFollowing } from "./line-following";

export const behaviors: Behavior[] = [
  obstacleAvoidance,
  remoteControl,
  soundControl,
  lineFollowing,
];
