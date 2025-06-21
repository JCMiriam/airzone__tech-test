import type { ZoneStatus } from "@/types/zoneStatus";

export interface ZoneStatusProps {
    status: ZoneStatus;
    targetTemperature?: number;
    isOn?: boolean;
}
