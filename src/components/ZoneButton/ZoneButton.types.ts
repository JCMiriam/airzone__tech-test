import type { ZoneStatus } from "../TemperatureDisplay/TemperatureDisplay.types";

export interface ZoneButtonProps {
    zoneName: string;
    isOn: boolean;
    currentTemperature: number;
    targetTemperature?: number;
    zoneStatus?: ZoneStatus;
    onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClick: () => void;
}
