import React from 'react';
import styles from './DownArrow.module.css';
import { Arrow } from '../../common/Arrow/Arrow';


export const DownArrow: React.FC = () => {
    return (
        <div className={styles.arrow}>
            <Arrow className={styles.down} />
        </div>
    );
}