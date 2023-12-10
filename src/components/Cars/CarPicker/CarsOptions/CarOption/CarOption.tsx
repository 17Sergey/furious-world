import React from 'react';

import styles from './CarOption.module.css';
import { useAppSelector } from '../../../../../redux/hooks/hooks';

type CarOptionProps = {
    value: string;
    isActive?: boolean;
    onClick: () => void;
}

export const CarOption: React.FC<CarOptionProps> = ({ value = "",  isActive = false, onClick }) => {

    const color = useAppSelector(state => state.currentCharacter.color);
    const default_color = "#fff";
    
    const background = isActive ? color : default_color;    


    return (
        <div 
            style={{ backgroundColor: background, borderColor: color }}
            className={styles.car_option + " " + (isActive ? styles.active : styles.default) } 
            onClick={onClick}
        >
            <div className={styles.car_name}>{value}</div>
        </div>
    );
}
