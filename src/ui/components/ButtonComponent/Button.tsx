import React from 'react';
import styles from './Button.module.scss';

interface ButtonComponentProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    'aria-label'?: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
    onClick,
    children,
    ...props
}) => {
    return (
        <button className={styles.button} onClick={onClick} {...props}>
            {children}
        </button>
    );
};
