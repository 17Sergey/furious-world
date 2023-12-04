import React from 'react';
import styles from './SliderDot.module.css';

type SliderDotProps = {
    active?: boolean;
}

export const SliderDot: React.FC<SliderDotProps> = ({ active = false }) => {
    return (
        <div className={active ? styles.dot + " " + styles.active : styles.dot}></div>
    );
}
