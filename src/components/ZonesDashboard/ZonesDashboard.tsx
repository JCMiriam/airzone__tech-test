import React, { useState } from 'react';
import { ZoneButton } from '@/components/ZoneButton/ZoneButton';
import { useZones } from '@/ui/context/ZonesContext/useZones';
import { ZoneDetail } from '@/components/ZoneDetail/ZoneDetail';
import { AnimatePresence } from 'framer-motion';

import styles from './ZonesDashboard.module.scss';

export const ZonesDashboard: React.FC = () => {
    const { zones, updateZone } = useZones();
    const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);

    const handleToggle = (zoneId: string) => {
        const zone = zones.find((z) => z.id === zoneId);
        if (!zone) return;

        const isCurrentlyOn = zone.status !== 'off';

        updateZone(zoneId, {
            isOn: !isCurrentlyOn,
            temperature: zone.temperature,
            target: zone.target,
        });
    };


    const handleClick = (zoneId: string) => {
        setSelectedZoneId(zoneId);
    };

    return (
        <section className={styles.zonesDashboard}>
        {zones.map((zone) => (
            <ZoneButton
            key={zone.id}
            zoneName={zone.name}
            isOn={zone.status !== 'off'}
            currentTemperature={zone.temperature}
            targetTemperature={zone.target}
            onClick={() => handleClick(zone.id)}
            onToggle={() => handleToggle(zone.id)}
            />
        ))}

        <AnimatePresence>
            {selectedZoneId && (
            <ZoneDetail
                key={selectedZoneId} // necesario para la animación
                zoneId={selectedZoneId}
                onClose={() => setSelectedZoneId(null)}
            />
            )}
        </AnimatePresence>
        </section>
    );
};
