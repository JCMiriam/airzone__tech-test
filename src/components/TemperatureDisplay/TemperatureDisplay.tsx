import React from 'react';
import type { TemperatureDisplayProps } from './TemperatureDisplay.types';

import styles from './TemperatureDisplay.module.scss';

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
    currentTemperature,
    isOn,
}) => {
    const displayClass = isOn
        ? styles.temperatureDisplayOn
        : styles.temperatureDisplayOff;

    return (
        <span className={`${styles.temperatureDisplay} ${displayClass}`}>
        {Math.round(currentTemperature)}º
        </span>
    );
};
