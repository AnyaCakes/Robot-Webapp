import { Sensor } from "@/lib/types";

export const dualHorizontalUltrasonic: Sensor = {
  id: "dual-horizontal-ultrasonic",
  name: "Dual Horizontal Ultrasonic Distance Sensors (2x HC-SR04)",
  description:
    "Two ultrasonic sensors mounted side by side facing forward, one on the left and one on the right, so the robot can tell which side an obstacle is on and turn away from that side instead of turning a fixed direction.",
  wiringImage: "/images/wiring/dual-horizontal-ultrasonic.svg",
  pins: [
    { label: "Left Sensor VCC", arduinoPin: "5V" },
    { label: "Left Sensor GND", arduinoPin: "GND" },
    { label: "Left Sensor Trig", arduinoPin: "9" },
    { label: "Left Sensor Echo", arduinoPin: "10" },
    { label: "Right Sensor VCC", arduinoPin: "5V" },
    { label: "Right Sensor GND", arduinoPin: "GND" },
    { label: "Right Sensor Trig", arduinoPin: "4" },
    { label: "Right Sensor Echo", arduinoPin: "6" },
  ],
};
