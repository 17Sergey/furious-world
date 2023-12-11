import React from 'react';

import styles from './ProgressBar.module.css';

type ProgressBarProps = {
    value: number;
    className: string;
    color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ( {value, className, color }) => {
    if (value === 100) value = 102; 
    return (
        <div className={styles.bar + " " + className}>
            <div className={styles.colored_bar} style={{ backgroundColor: color, width: `${value}%` }}></div>
        </div>
    );
}