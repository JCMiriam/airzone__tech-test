import React from 'react';
import type { PowerButtonProps } from './PowerButton.types';
import { Icon } from '@/ui/components/IconComponent/Icon';
import styles from './PowerButton.module.scss';

export const PowerButton: React.FC<PowerButtonProps> = ({ isOn, onToggle}) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOn ? 'Turn off' : 'Turn on'}
      className={styles.powerButton}
    >
      <Icon
        name="power"
        width={24}
        height={24}
        className={isOn ? styles.iconOn : styles.iconOff}
      />
    </button>
  );
};
