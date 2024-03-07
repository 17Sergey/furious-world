import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav_items}>
                <a href="#characters">Characters</a>
                <a href="#gallery">Cars gallery</a>
                <a href="#rating">Character's rating</a>
                <a href="#bestQuotes">Best quotes</a>
            </div>
        </div>
    );
}