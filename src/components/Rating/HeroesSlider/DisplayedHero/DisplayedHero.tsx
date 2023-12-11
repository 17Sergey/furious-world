import React from 'react';

import styles from './DisplayedHero.module.css';
import { Arrow } from '../../../common/Arrow/Arrow';
import { Hero } from './Hero/Hero';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { setActiveHero } from '../../../../redux/slices/ratingSlice';

export const DisplayedHero: React.FC = () => {
    const dispatch = useAppDispatch();

    const currentHeroId = useAppSelector(state => state.currentCharacter.currentCharacterId);

    // Check if component renders for first time and needs initial set to hero
    const isInitialHeroSet = useAppSelector(state => state.ratingScreen.isInitialHeroSet);
    if (!isInitialHeroSet) dispatch(setActiveHero(currentHeroId));

    const activeHero = useAppSelector(state => state.ratingScreen.activeHero);
    // debugger;   

    const showPreviousHero = () => {
        dispatch(setActiveHero(activeHero.id - 1));
    }

    const showNextHero = () => {
        dispatch(setActiveHero(activeHero.id + 1));
    }

    return (
        <div className={styles.wrapper}>
            <Arrow className={styles.left + " " + styles.arrow} onClickCallback={showPreviousHero}/>
            <Hero activeHero={activeHero}/>
            <Arrow className={styles.right + " " + styles.arrow} onClickCallback={showNextHero}/>
        </div>
    );
}