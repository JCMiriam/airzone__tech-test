import type { ZoneStatus } from "@/types/zoneStatus";

export type Zone = {
    id: string;
    name: string;
    temperature: number;
    target: number;
    status: ZoneStatus;
};

export type ZonesContextType = {
    zones: Zone[];
    updateZone: (id: string, data: Partial<Omit<Zone, 'status'>>) => void;
};