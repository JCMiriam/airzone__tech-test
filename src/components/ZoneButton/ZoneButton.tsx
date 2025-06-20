import React from 'react';
import type { ZoneButtonProps } from './ZoneButton.types';

import { ZoneName } from '@/components/ZoneName/ZoneName';
import { TemperatureDisplay } from '@/components/TemperatureDisplay/TemperatureDisplay';
import { PowerButton } from '@/components/PowerButton/PowerButton';

export const ZoneButton: React.FC<ZoneButtonProps> = ({
    zoneName,
    isOn,
    currentTemperature,
    targetTemperature,
    onToggle,
    onClick
}) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick?.();
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            data-testid="zone-button"
        >
            <div>
                <TemperatureDisplay
                    isOn={isOn}
                    currentTemperature={currentTemperature}
                    targetTemperature={targetTemperature}
                />
                <PowerButton
                    isOn={isOn}
                    onToggle={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        onToggle(e);
                    }}
                    aria-label={isOn ? 'Turn off' : 'Turn on'}
                />
            </div>
            <ZoneName name={zoneName} />
        </div>
    );
};
