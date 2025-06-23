import React from 'react';
import { useZones } from '@/ui/context/ZonesContext/useZones';
import { ZoneName } from '@/components/ZoneName/ZoneName';
import { TemperatureDisplay } from '@/components/TemperatureDisplay/TemperatureDisplay';
import { PowerButton } from '@/components/PowerButton/PowerButton';
import { ZoneStatus } from '@/components/ZoneStatus/ZoneStatus';
import { ButtonComponent } from '@/ui/components/ButtonComponent/Button';
import { motion } from 'framer-motion';

import styles from './ZoneDetail.module.scss';
import { ZoneBackground } from '../ZoneBackground/ZoneBackground';
import { Icon } from '@/ui/components/IconComponent/Icon';

interface ZoneDetailProps {
    zoneId: string;
    onClose: () => void;
}

export const ZoneDetail: React.FC<ZoneDetailProps> = ({ zoneId, onClose }) => {
    const { zones, updateZone } = useZones();
    const zone = zones.find((z) => z.id === zoneId);
    if (!zone) return null;

    const handleTempChange = (delta: number) => {
        updateZone(zoneId, { target: zone.target + delta });
    };

    const handleTogglePower = () => {
        const isCurrentlyOn = zone.status !== 'off';

        updateZone(zoneId, {
            isOn: !isCurrentlyOn,
            temperature: zone.temperature,
            target: zone.target,
        });
    };


    return (
        <motion.div
            className={styles.zoneDetail}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
        >
            <section className={styles.zoneDetail__header}>
                <ButtonComponent onClick={onClose} className={styles.zoneDetail__back}>
                    <Icon name='arrowLeft' height={16} width={16} />
                    <span>Back</span>
                </ButtonComponent>
            </section>

            <section className={styles.zoneDetail__status}>
                <ZoneBackground
                    isOn={zone.status !== 'off'}
                    currentTemperature={zone.temperature}
                    targetTemperature={zone.target}
                />
                <div className={styles.zoneDetail__container}>
                    <div className={styles.zoneDetail__top}>
                        <TemperatureDisplay
                        currentTemperature={zone.temperature}
                        isOn={zone.status !== 'off'}
                        />
                        <PowerButton
                            className={styles.zoneDetail__powerButton}
                            isOn={zone.status !== 'off'}
                            onToggle={handleTogglePower}
                            aria-label="Toggle power"
                        />
                    </div>
                    <div className={styles.zoneDetail__controls}>
                        <ButtonComponent onClick={() => handleTempChange(-1)} aria-label="Decrease temperature">
                            <Icon name='less' height={16} width={16} />
                        </ButtonComponent>
                        <span className={styles.zoneDetail__target}>{zone.target}°</span>
                        <ButtonComponent onClick={() => handleTempChange(1)} aria-label="Increase temperature">
                            <Icon name='more' height={16} width={16} />
                        </ButtonComponent>
                    </div>
                    <div>
                        <ZoneName name={zone.name} isOn={zone.status !== 'off'} />
                        <ZoneStatus
                            status={zone.status}
                            targetTemperature={zone.target}
                            isOn={zone.status !== 'off'}
                        />
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
