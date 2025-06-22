import type { ZoneStatus } from "@/types/zoneStatus";

export type Zone = {
    id: string;
    name: string;
    temperature: number;
    target: number;
    status: ZoneStatus;
};

export interface ZonesContextType {
    zones: Zone[];
    updateZone: (
        id: string,
        data: Partial<Omit<Zone, 'status'>> & { isOn?: boolean } // <-- AÑADIDO
    ) => void;
}
