import { Sensor } from "@/lib/types";

export const dualUltrasonic: Sensor = {
  id: "dual-ultrasonic",
  name: "Dual Ultrasonic Distance Sensors (2x HC-SR04)",
  description:
    "Two ultrasonic sensors mounted one above the other, both facing forward, so the robot can catch obstacles a single sensor's beam would miss - something low sitting on the floor, or something like a tabletop edge higher up.",
  wiringImage: "/images/wiring/dual-ultrasonic.svg",
  pins: [
    { label: "High Sensor VCC", arduinoPin: "5V" },
    { label: "High Sensor GND", arduinoPin: "GND" },
    { label: "High Sensor Trig", arduinoPin: "2" },
    { label: "High Sensor Echo", arduinoPin: "3" },
    { label: "Low Sensor VCC", arduinoPin: "5V" },
    { label: "Low Sensor GND", arduinoPin: "GND" },
    { label: "Low Sensor Trig", arduinoPin: "4" },
    { label: "Low Sensor Echo", arduinoPin: "6" },
  ],
};
