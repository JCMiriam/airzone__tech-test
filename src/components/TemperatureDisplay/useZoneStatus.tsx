import type { ZoneStatus } from './TemperatureDisplay.types';

export const useZoneStatus = (
    isOn: boolean,
    current: number,
    target: number
): ZoneStatus => {
    if (!isOn) return 'off';
    if (current > target) return 'cooling';
    if (current < target) return 'heating';
    return 'success';
};
