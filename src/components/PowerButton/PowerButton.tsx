import React from 'react';
import styles from './PowerButton.module.sass';
import type { PowerButtonProps } from './PowerButton.types';
import { Icon } from '@/ui/components/IconComponent/Icon';

export const PowerButton: React.FC<PowerButtonProps> = ({ isOn, onToggle, className }) => {
    return (
        <button
            className={`${styles.button} ${isOn ? styles.on : styles.off} ${className || ''}`}
            onClick={onToggle}
            aria-label={isOn ? 'Turn off' : 'Turn on'}
        >
        <Icon name="power" width={24} height={24} />
        </button>
    );
};
