import React from 'react';

import styles from './HeroesSlider.module.css';
import { DisplayedHero } from './DisplayedHero/DisplayedHero';
import { HeroesLine } from './HeroesLine/HeroesLine';

export const HeroesSlider: React.FC = () => {
    return (
        <div className={styles.slider}>
            <DisplayedHero />
            <HeroesLine />
        </div>
    );
}
