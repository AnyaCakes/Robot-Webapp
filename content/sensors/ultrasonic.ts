import { Sensor } from "@/lib/types";

export const ultrasonic: Sensor = {
  id: "ultrasonic",
  name: "Ultrasonic Distance Sensor (HC-SR04)",
  description:
    "Sends out a sound pulse and times how long it takes to bounce back, so the robot can tell how far away something is.",
  wiringImage: "/images/wiring/ultrasonic.svg",
  pins: [
    { label: "VCC", arduinoPin: "5V" },
    { label: "GND", arduinoPin: "GND" },
    { label: "Trig", arduinoPin: "9" },
    { label: "Echo", arduinoPin: "10" },
  ],
};
