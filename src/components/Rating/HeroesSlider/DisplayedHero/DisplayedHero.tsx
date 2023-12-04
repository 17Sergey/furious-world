import React from 'react';

import styles from './DisplayedHero.module.css';
import { Arrow } from '../../../common/Arrow/Arrow';
import { Hero } from './Hero/Hero';

export const DisplayedHero: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Arrow className={styles.left + " " + styles.arrow} />
            <Hero />
            <Arrow className={styles.right + " " + styles.arrow} />
        </div>
    );
}