import React from 'react';
import type { TemperatureDisplayProps } from './TemperatureDisplay.types';

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
    currentTemperature,
}) => {
    return <div>{currentTemperature.toFixed(1)} ºC</div>;
};
