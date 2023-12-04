import React from 'react';

import styles from './Switchers.module.css';
import { Switcher } from './Switcher/Switcher';

export const Switchers: React.FC = () => {
    return (
        <div className={styles.switchers}>
            <Switcher />
            <Switcher active={true}/>
            <Switcher />
            <Switcher />
            <Switcher />
        </div>
    );
}


