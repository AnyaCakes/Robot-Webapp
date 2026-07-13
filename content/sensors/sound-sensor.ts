import { Sensor } from "@/lib/types";

export const soundSensor: Sensor = {
  id: "sound-sensor",
  name: "Sound Sensor Module (KY-038)",
  description:
    "Listens with a small microphone and reports how loud the sound is, so the robot can react to noise - like a clap or a whistle - instead of distance or a remote.",
  wiringImage: "/images/wiring/sound-sensor.svg",
  pins: [
    { label: "VCC", arduinoPin: "5V" },
    { label: "GND", arduinoPin: "GND" },
    { label: "AO (analog out)", arduinoPin: "A0" },
  ],
};
