import React from 'react';

import styles from './Hero.module.css';
import { HeroImage } from './HeroImage/HeroImage';
import { HeroRating } from './HeroRating/HeroRating';

import RamseyImg from '../../../../../assets/Ramsey/Ramsey.webp';
import { HeroType } from '../../../../../redux/slices/ratingSlice';

type HeroProps = {
    activeHero: HeroType;
}

export const Hero: React.FC<HeroProps> = ({ activeHero }) => {
    return (
        <div className={styles.hero}>
            <HeroImage className={styles.big} imgSource={activeHero.photo} />
            <HeroRating rating={activeHero.rating}/>
        </div>
    );
}
