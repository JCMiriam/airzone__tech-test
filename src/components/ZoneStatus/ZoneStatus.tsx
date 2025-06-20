import React from 'react';
import type { ZoneStatusProps } from './ZoneStatus.types';

export const ZoneStatus: React.FC<ZoneStatusProps> = ({ status, targetTemperature }) => {
    if (status === 'heating') return <span>Heating to {targetTemperature}º</span>;
    if (status === 'cooling') return <span>Cooling to {targetTemperature}º</span>;
    if (status === 'success') return <span>Success</span>;
    return <span>Off</span>;
};
