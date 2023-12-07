import React from 'react';
import styles from './SliderDot.module.css';

type SliderDotProps = {
    // key: number;
    isActive: boolean;
    // onClick: () => void;
}

export const SliderDot: React.FC<SliderDotProps> = ({ isActive, onClick }) => {
    return (
        <div className={isActive ? styles.dot + " " + styles.active : styles.dot} onClick={onClick}></div>
    );
}
