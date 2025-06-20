import React from 'react';
import type { PowerButtonProps } from './PowerButton.types';
import { Icon } from '@/ui/components/IconComponent/Icon';

export const PowerButton: React.FC<PowerButtonProps> = ({ isOn, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            aria-label={isOn ? 'Turn off' : 'Turn on'}
        >
        <Icon name="power" width={24} height={24} />
        </button>
    );
};
