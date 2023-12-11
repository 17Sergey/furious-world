import React from 'react';

import styles from './HeroesSlider.module.css';
import { DisplayedHero } from './DisplayedHero/DisplayedHero';
import { HeroesLine } from './HeroesLine/HeroesLine';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setActiveHero } from '../../../redux/slices/ratingSlice';

export const HeroesSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentHeroId = useAppSelector(state => state.currentCharacter.currentCharacterId);

    // Check if component renders for first time and needs initial set to hero
    const isInitialHeroSet = useAppSelector(state => state.ratingScreen.isInitialHeroSet);
    if (!isInitialHeroSet) dispatch(setActiveHero(currentHeroId));

    const activeHero = useAppSelector(state => state.ratingScreen.activeHero); 

    const showPreviousHero = () => {
        dispatch(setActiveHero(activeHero.id - 1));
    }

    const showNextHero = () => {
        dispatch(setActiveHero(activeHero.id + 1));
    }

    return (
        <div className={styles.slider}>
            <DisplayedHero activeHero={activeHero} showPreviousHero={showPreviousHero} showNextHero={showNextHero}/>
            <HeroesLine activeHero={activeHero} showPreviousHero={showPreviousHero} showNextHero={showNextHero}/>
        </div>
    );
}
