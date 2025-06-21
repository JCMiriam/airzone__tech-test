import React from 'react';
import type { ZoneButtonProps } from './ZoneButton.types';

import { ZoneName } from '@/components/ZoneName/ZoneName';
import { TemperatureDisplay } from '@/components/TemperatureDisplay/TemperatureDisplay';
import { PowerButton } from '@/components/PowerButton/PowerButton';
import { ZoneStatus } from '@/components/ZoneStatus/ZoneStatus';
import { Icon } from '@/ui/components/IconComponent/Icon';
import { useZoneStatus } from '@/components/ZoneStatus/useZoneStatus';

import styles from './ZoneButton.module.scss';

export const ZoneButton: React.FC<ZoneButtonProps> = ({
    zoneName,
    isOn,
    currentTemperature,
    targetTemperature,
    onToggle,
    onClick
}) => {
    const zoneStatus = useZoneStatus(isOn, currentTemperature, targetTemperature ?? currentTemperature);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.();
        }
    };

    const statusClass = styles[`zoneButton--${zoneStatus}`];

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            data-testid="zone-button"
            className={`${styles.zoneButton} ${statusClass}`}
            >
            {(zoneStatus === 'heating' || zoneStatus === 'cooling') && (
                <div className={styles.zoneButton__backgroundIcon} aria-hidden="true">
                    <Icon
                        name={zoneStatus === 'heating' ? 'heat' : 'cool'}
                        width={120}
                        height={120}
                        className={styles[`icon--${zoneStatus}`]}
                    />
                </div>
            )}

            <div className={styles.zoneButton__topSection}>
                <TemperatureDisplay
                    currentTemperature={currentTemperature}
                    isOn={isOn}
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
            <div className={styles.zoneButton__bottomSection}>
                <ZoneName name={zoneName} isOn={isOn} />
                <ZoneStatus
                    status={zoneStatus}
                    targetTemperature={targetTemperature}
                    isOn={isOn}
                />
            </div>
        </div>
    );
};
