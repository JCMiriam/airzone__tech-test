import React from 'react';
import type { ZoneNameProps } from './ZoneName.types';

import styles from './ZoneName.module.scss';

export const ZoneName: React.FC<ZoneNameProps> = ({ name, isOn }) => {
    const className = isOn
        ? styles.zoneNameOn
        : styles.zoneNameOff;

    return (
        <h2 data-testid="zone-name" className={`${styles.zoneName} ${className}`}>
            {name}
        </h2>
    );
};
