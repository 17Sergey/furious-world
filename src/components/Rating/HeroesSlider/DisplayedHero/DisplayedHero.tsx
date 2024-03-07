import React from 'react';

import styles from './DisplayedHero.module.css';
import { Arrow } from '../../../common/Arrow/Arrow';
import { Hero } from './Hero/Hero';
import { HeroType } from '../../../../redux/slices/ratingSlice';

type DisplayedHeroProps = {
    activeHero: HeroType;
    showPreviousHero: () => void;
    showNextHero: () => void;
}

export const DisplayedHero: React.FC<DisplayedHeroProps> = ({ activeHero, showPreviousHero, showNextHero }) => {

    return (
        <div className={styles.wrapper}>
            <Arrow className={styles.left + " " + styles.arrow} onClickCallback={showPreviousHero}/>
            <Hero activeHero={activeHero}/>
            <Arrow className={styles.right + " " + styles.arrow} onClickCallback={showNextHero}/>
        </div>
    );
}