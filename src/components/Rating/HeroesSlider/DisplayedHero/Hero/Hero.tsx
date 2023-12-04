import React from 'react';

import styles from './Hero.module.css';
import { HeroImage } from './HeroImage/HeroImage';
import { HeroRating } from './HeroRating/HeroRating';

import RamseyImg from '../../../../../assets/Ramsey.webp';

export const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <HeroImage className={styles.big} imgSource={RamseyImg} />
            <HeroRating />
        </div>
    );
}
