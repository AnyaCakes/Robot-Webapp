import { Behavior } from "@/lib/types";

export const lineFollowing: Behavior = {
  id: "line-following",
  name: "Line Following",
  description:
    "The robot follows a black line on the floor, steering to keep the line centered between its two sensors, and stopping if it loses the line entirely.",
};
