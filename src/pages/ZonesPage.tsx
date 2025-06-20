import React, { useState } from 'react';
import zonesData from '@/data/zones.json';
import { ZoneButton } from '@/components/ZoneButton/ZoneButton';

export const ZonesPage: React.FC = () => {
    const [zones, setZones] = useState(zonesData);

    const handleToggle = (zoneId: string) => {
        setZones(prev =>
        prev.map(zone =>
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
        <div style={{ display: 'grid', gap: '1rem' }}>
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
        </div>
    );
};
