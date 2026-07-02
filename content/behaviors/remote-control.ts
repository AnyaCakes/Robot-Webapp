import { Behavior } from "@/lib/types";

export const remoteControl: Behavior = {
  id: "remote-control",
  name: "Remote Control",
  description:
    "A person drives the robot with a handheld IR remote: forward, backward, left, right, and stop. The robot stops on its own if it stops receiving a signal.",
};
