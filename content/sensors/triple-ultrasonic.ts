import { Sensor } from "@/lib/types";

export const tripleUltrasonic: Sensor = {
  id: "triple-ultrasonic",
  name: "Triple Ultrasonic Distance Sensors (3x HC-SR04)",
  description:
    "Three ultrasonic sensors: one mounted higher in the center facing straight forward, plus one mounted lower on the left and one lower on the right, so the robot can catch obstacles ahead and tell which side to steer away from.",
  wiringImage: "/images/wiring/triple-ultrasonic.svg",
  pins: [
    { label: "Middle Sensor VCC", arduinoPin: "5V" },
    { label: "Middle Sensor GND", arduinoPin: "GND" },
    { label: "Middle Sensor Trig", arduinoPin: "9" },
    { label: "Middle Sensor Echo", arduinoPin: "10" },
    { label: "Left Sensor VCC", arduinoPin: "5V" },
    { label: "Left Sensor GND", arduinoPin: "GND" },
    { label: "Left Sensor Trig", arduinoPin: "2" },
    { label: "Left Sensor Echo", arduinoPin: "3" },
    { label: "Right Sensor VCC", arduinoPin: "5V" },
    { label: "Right Sensor GND", arduinoPin: "GND" },
    { label: "Right Sensor Trig", arduinoPin: "4" },
    { label: "Right Sensor Echo", arduinoPin: "6" },
  ],
};
