import React from 'react';
import type { TemperatureDisplayProps } from './TemperatureDisplay.types';

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
    current,
    target,
    isHeating = false,
    isCooling = false,
}) => {
    const hasTarget = typeof target === 'number' && (isHeating || isCooling);

    const renderStatus = () => {
        if (isHeating) return `Heating to ${target}º`;
        if (isCooling) return `Cooling to ${target}º`;
        return null;
    };

    return (
        <div>
            {hasTarget && <div>{renderStatus()}</div>}
            <div>{current.toFixed(1)} ºC</div>
        </div>
    );
};
