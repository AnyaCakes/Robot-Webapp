import { Sensor } from "@/lib/types";

export const irRemote: Sensor = {
  id: "ir-remote",
  name: "IR Remote Receiver (HX1838)",
  description:
    "Picks up infrared signals from a handheld remote so a person can drive the robot themselves instead of the robot deciding on its own.",
  wiringImage: "/images/wiring/ir-remote.svg",
  pins: [
    { label: "VCC", arduinoPin: "5V" },
    { label: "GND", arduinoPin: "GND" },
    { label: "OUT", arduinoPin: "11" },
  ],
};
