import React from 'react';
import type { ZoneStatusProps } from './ZoneStatus.types';

import styles from './ZoneStatus.module.scss';

export const ZoneStatus: React.FC<ZoneStatusProps> = ({ status, targetTemperature, isOn }) => {
    const className = isOn
        ? styles.zoneStatusOn
        : styles.zoneStatusOff;

    let content: string;

    console.log('zoneStatus class:', className);

    switch (status) {
        case 'heating':
            content = `Heating to ${targetTemperature}º`;
        break;
        case 'cooling':
            content = `Cooling to ${targetTemperature}º`;
        break;
        case 'success':
            content = 'Success';
        break;
        default:
            content = 'Off';
    }

    return <span className={`${styles.zoneStatus} ${className}`}>{content}</span>;
};
