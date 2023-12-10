import React from 'react';

import styles from './Switcher.module.css';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';

type SwitcherProps = {
    active: boolean;
    onClick: () => void;
}
export const Switcher: React.FC<SwitcherProps> = ({ active = false, onClick }) => {
    const color = useAppSelector(state => state.currentCharacter.color);
    const default_color = "#e5e5e5";
    return (
        <div className={styles.for_padding} onClick={onClick}>
            <div className={styles.switcher} style={{ backgroundColor: active ? color : default_color }}></div>
        </div>
    );
}
