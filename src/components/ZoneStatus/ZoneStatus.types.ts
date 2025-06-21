export type ZoneStatus = 'cooling' | 'heating' | 'success' | 'off';

export interface ZoneStatusProps {
    status: ZoneStatus;
    targetTemperature?: number;
    isOn?: boolean;
}
