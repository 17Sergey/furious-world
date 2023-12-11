import React, { ReactNode } from 'react';

import styles from './HeroesLine.module.css';
import { LineHero } from './LineHero/LineHero';

import { HeroType } from '../../../../redux/slices/ratingSlice';
import { useAppSelector } from '../../../../redux/hooks/hooks';

type HeroesLineProps = {
    activeHero: HeroType;
    showPreviousHero: () => void;
    showNextHero: () => void;
}

export const HeroesLine: React.FC<HeroesLineProps> = ({ activeHero, showPreviousHero, showNextHero }) => {
    let activeHeroIndex = activeHero.id;
    const heroes = useAppSelector(state => state.ratingScreen.heroes);

    let nextHeroIndex = activeHeroIndex + 1;
    if (nextHeroIndex > heroes.length - 1) nextHeroIndex =  0; 
    
    let previousHeroIndex = activeHeroIndex - 1;
    if (previousHeroIndex < 0) previousHeroIndex = heroes.length - 1;  

    const previousHero = heroes[previousHeroIndex];
    const nextHero = heroes[nextHeroIndex];

    const createHeroesLine = (): Array<ReactNode> => {

        const addClickCallBack = (heroId: number) => {
            let callback = () => {};
            if (heroId === previousHero.id) callback = showPreviousHero;
            if (heroId === nextHero.id) callback = showNextHero;
            return callback;
        }

        let heroes = [previousHero, activeHero, nextHero];
        return heroes.map(hero => <LineHero
                                        key={hero.id} 
                                        name={hero.name} 
                                        imgSource={hero.photo} 
                                        isActive={hero.id === activeHeroIndex}
                                        onClick={addClickCallBack(hero.id)}
                                    />
                        );
    }
    return (
        <div className={styles.line}>
            {createHeroesLine()}
        </div>
    );
}