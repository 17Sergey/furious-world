import React from 'react';
import styles from './WelcomeBackground.module.css';

import Background from '../../../assets/welcome/WelcomeBackground2.png';

export const WelcomeBackground: React.FC = () => {
    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.background + " " + "welcomeBg"} style={{ backgroundImage: `url(${Background})` }}></div>
            </div>
        </>
    );
}