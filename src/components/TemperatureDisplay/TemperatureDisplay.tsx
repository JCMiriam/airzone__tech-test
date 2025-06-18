import React from 'react';
import type { TemperatureDisplayProps } from './TemperatureDisplay.types';

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
    currentTemperature,
    targetTemperature,
    zoneStatus
}) => {
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
