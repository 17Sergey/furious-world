import React from 'react';

import styles from './Switcher.module.css';

type SwitcherProps = {
    active?: boolean;
}
export const Switcher: React.FC<SwitcherProps> = ({ active = false }) => {
    const COLOR = "#6F08A9";
    const DEFAULT_COLOR = "#e5e5e5";
    return (
        <div className={styles.for_padding}>
            <div className={styles.switcher} style={{ backgroundColor: active ? COLOR : DEFAULT_COLOR }}></div>
        </div>
    );
}
