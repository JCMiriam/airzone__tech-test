import { useState } from 'react';
import { ZonesContext } from './ZonesContext';
import { computeStatus } from './utils/computeStatus';
import rawZones from '@/data/zones.json';

import type { Zone } from './ZonesContext.types';

const zonesData: Zone[] = rawZones.map((z) => ({
    id: z.id,
    name: z.zoneName,
    temperature: z.currentTemperature,
    target: z.targetTemperature,
    status: computeStatus(z.isOn, z.currentTemperature, z.targetTemperature),
}));

export const ZonesProvider = ({ children }: { children: React.ReactNode }) => {
    const [zones, setZones] = useState<Zone[]>(zonesData);

    const updateZone = (
        id: string,
        data: Partial<Omit<Zone, 'status'>> & { isOn?: boolean }
    ) => {
        setZones((prev) =>
            prev.map((zone) => {
                if (zone.id !== id) return zone;

                const newTemp = data.temperature ?? zone.temperature;
                const newTarget = data.target ?? zone.target;

                const isOn =
                    typeof data.isOn === 'boolean' ? data.isOn : zone.status !== 'off';

                return {
                    ...zone,
                    ...data,
                    status: computeStatus(isOn, newTemp, newTarget),
                };
            })
        );
    };



    return (
        <ZonesContext.Provider value={{ zones, updateZone }}>
            {children}
        </ZonesContext.Provider>
    );
};
