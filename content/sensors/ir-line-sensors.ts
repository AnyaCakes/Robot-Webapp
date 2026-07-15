import { Sensor } from "@/lib/types";

export const irLineSensors: Sensor = {
  id: "ir-line-sensors",
  name: "Dual IR Line Sensors (2x TCRT5000)",
  description:
    "Two infrared sensors that look straight down at the floor, one just left of center and one just right of center, so the robot can tell which way to steer to stay on a black line.",
  wiringImage: "/images/wiring/ir-line-sensors.svg",
  pins: [
    { label: "Left Sensor VCC", arduinoPin: "5V" },
    { label: "Left Sensor GND", arduinoPin: "GND" },
    { label: "Left Sensor OUT", arduinoPin: "2" },
    { label: "Right Sensor VCC", arduinoPin: "5V" },
    { label: "Right Sensor GND", arduinoPin: "GND" },
    { label: "Right Sensor OUT", arduinoPin: "3" },
  ],
};
