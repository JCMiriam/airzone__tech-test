export type ZoneStatus = 'cooling' | 'heating' | 'success';
export interface TemperatureDisplayProps {
    currentTemperature: number;
    targetTemperature?: number;
    zoneStatus: ZoneStatus;
}
