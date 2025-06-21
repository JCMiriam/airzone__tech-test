import React, { useState } from 'react';
import zonesData from '@/data/zones.json';
import { ZoneButton } from '@/components/ZoneButton/ZoneButton';
import type { ZoneData } from './ZonesDashboard.types';

import styles from './ZonesDashboard.module.scss';

export const ZonesDashboard: React.FC = () => {
    const [zones, setZones] = useState<ZoneData[]>(zonesData);

    const handleToggle = (zoneId: string) => {
        setZones(prevZones =>
            prevZones.map(zone =>
                zone.id === zoneId
                ? { ...zone, isOn: !zone.isOn }
                : zone
            )
        );
    };

    const handleClick = (zoneId: string) => {
        console.log(`Zone ${zoneId} clicked`);
    };

    return (
        <section className={styles.zonesDashboard}>
            {zones.map(zone => (
                <ZoneButton
                    key={zone.id}
                    zoneName={zone.zoneName}
                    isOn={zone.isOn}
                    currentTemperature={zone.currentTemperature}
                    targetTemperature={zone.targetTemperature}
                    onClick={() => handleClick(zone.id)}
                    onToggle={() => handleToggle(zone.id)}
                />
            ))}
        </section>
    );
};
