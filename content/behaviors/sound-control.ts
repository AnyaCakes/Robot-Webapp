import { Behavior } from "@/lib/types";

export const soundControl: Behavior = {
  id: "sound-control",
  name: "Sound Control",
  description:
    "The robot listens for sound: a loud, low-pitched noise (like a clap) drives it forward, and a loud, high-pitched noise (like a whistle) makes it spin in place. Quiet means it stays still.",
};
