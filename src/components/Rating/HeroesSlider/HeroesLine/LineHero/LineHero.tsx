import React from 'react';

import styles from './LineHero.module.css';
import { HeroImage } from '../../DisplayedHero/Hero/HeroImage/HeroImage';

type LineHeroProps = {
    name: string;
    isActive?: boolean
    imgSource: string;
}

export const LineHero: React.FC<LineHeroProps> = ( { name, isActive = false, imgSource } ) => {
    return (
        <div className={`${styles.line_hero} ${isActive ? styles.active: ""}`}>
            <HeroImage className={ isActive ? styles.big : styles.small } imgSource={imgSource}/>
            <div className={styles.name}>{name}</div>
        </div>
    );
}