import React from 'react';
import styles from './SceneCard.module.scss';
import { Icon } from '@/ui/components/IconComponent/Icon';
import type { SceneCardProps } from './SceneCard.types';

export const SceneCard: React.FC<SceneCardProps> = ({ icon, name }) => {
  return (
    <div className={styles.sceneCard}>
      <Icon name={icon} width={48} height={48} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};
