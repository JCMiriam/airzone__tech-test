import React from 'react';
import type { ZoneNameProps } from './ZoneName.types';

export const ZoneName: React.FC<ZoneNameProps> = ({ name }) => {
    return (
        <h2 data-testid="zone-name">
            {name}
        </h2>
    );
};
