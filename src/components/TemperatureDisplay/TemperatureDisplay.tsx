import React from 'react';
import type { TemperatureDisplayProps } from './TemperatureDisplay.types';
import { useZoneStatus } from './useZoneStatus';

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
    currentTemperature,
    targetTemperature = currentTemperature,
    isOn
}) => {
    const zoneStatus = useZoneStatus(isOn, currentTemperature, targetTemperature);


    const renderStatus = () => {
        if (zoneStatus === 'heating') return `Heating to ${targetTemperature}º`;
        if (zoneStatus === 'cooling') return `Cooling to ${targetTemperature}º`;
        if (zoneStatus === 'success') return `Success`;
        return null;
    };

    return (
        <div>
            <div>{renderStatus()}</div>
            <div>{currentTemperature.toFixed(1)} ºC</div>
        </div>
    );
};
