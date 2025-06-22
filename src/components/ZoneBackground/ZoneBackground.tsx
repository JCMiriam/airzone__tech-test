import React from 'react';
import { Icon } from '@/ui/components/IconComponent/Icon';
import { useZoneStatus } from '@/components/ZoneStatus/useZoneStatus';
import type { ZoneBackgroundProps } from './ZoneBackground.types';

import styles from './ZoneBackground.module.scss';

export const ZoneBackground: React.FC<ZoneBackgroundProps> = ({
    isOn,
    currentTemperature,
    targetTemperature,
    className = '',
}) => {
    const status = useZoneStatus(isOn, currentTemperature, targetTemperature);

    return (
        <div 
            className={`${styles.zoneBackgroundWrapper}${className}`}
            aria-hidden="true"
            role="presentation"
            data-testid="zone-bg-wrapper"
        >
            <div className={`${styles.zoneBackground} ${status === 'success' ? styles.active : ''} ${styles.success}`} />
            <div className={`${styles.zoneBackground} ${status === 'cooling' ? styles.active : ''} ${styles.cooling}`} />
            <div className={`${styles.zoneBackground} ${status === 'heating' ? styles.active : ''} ${styles.heating}`} />
            <div className={`${styles.zoneBackground} ${status === 'off' ? styles.active : ''} ${styles.off}`} />

            {(status === 'heating' || status === 'cooling') && (
                <Icon
                name={status === 'heating' ? 'heat' : 'cool'}
                width={120}
                height={120}
                className={styles.zoneBackground__icon}
                />
            )}
        </div>
    );
};

