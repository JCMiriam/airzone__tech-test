export type ZoneStatus = 'cooling' | 'heating' | 'success' | 'off';

export interface TemperatureDisplayProps {
  currentTemperature: number;
  targetTemperature?: number;
  isOn: boolean;
}
