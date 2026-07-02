import Image from "next/image";
import { SensorPin } from "@/lib/types";
import { withBasePath } from "@/lib/basePath";

interface WiringDiagramProps {
  name: string;
  wiringImage: string;
  pins: SensorPin[];
}

export default function WiringDiagram({
  name,
  wiringImage,
  pins,
}: WiringDiagramProps) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={withBasePath(wiringImage)}
        alt={`Wiring diagram for ${name}`}
        width={480}
        height={360}
        className="w-full max-w-md h-auto border border-gray-200 rounded"
      />
      <table className="text-sm border-collapse">
        <thead>
          <tr>
            <th className="text-left pr-4 border-b border-gray-300">Pin</th>
            <th className="text-left border-b border-gray-300">Arduino Pin</th>
          </tr>
        </thead>
        <tbody>
          {pins.map((pin) => (
            <tr key={pin.label}>
              <td className="pr-4 py-1">{pin.label}</td>
              <td className="py-1">{pin.arduinoPin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
