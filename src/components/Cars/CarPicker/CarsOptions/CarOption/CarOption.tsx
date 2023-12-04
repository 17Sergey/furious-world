import React from 'react';

import styles from './CarOption.module.css';

type CarOptionProps = {
    value: string;
    isActive?: boolean;
}

export const CarOption: React.FC<CarOptionProps> = ({ value = "",  isActive = false }) => {

    const COLOR = "#6F08A9";
    const DEFAULT_COLOR = "#fff";

    const background = isActive ? COLOR : DEFAULT_COLOR;    
    const color = isActive ? DEFAULT_COLOR : "#000";


    return (
        <div className={styles.car_option + " " + (isActive ? styles.active : styles.default) }>
            <div className={styles.car_name}>{value}</div>
        </div>
    );
}
