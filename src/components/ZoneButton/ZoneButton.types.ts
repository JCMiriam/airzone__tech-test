export interface ZoneButtonProps {
    zoneName: string;
    isOn: boolean;
    currentTemperature: number;
    targetTemperature?: number;
    onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClick: () => void;
}
