import React from 'react';
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav_items}>
                <a href="#characters">Characters</a>
                <a href="#gallery">Cars gallery</a>
                <a href="#pilotTest">Pilot test</a>
                <a href="#rating">Character's rating</a>
            </div>
        </div>
    );
}