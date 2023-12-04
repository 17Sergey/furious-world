import React from 'react';
import styles from './Character.module.css';
import ChatacterImg from '../../../assets/Ramsey.webp';

export const Character: React.FC = () => {
    return (
        <div className={styles.character}>
            <h2 className={`heading + ${styles.heading}`}>Ramsey Rosewood</h2>
            <img
                src={ChatacterImg}
                alt="Ramsey image"
                className={styles.image}
            />
        </div>
    );
}