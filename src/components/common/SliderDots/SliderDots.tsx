import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setCurrentCharacter } from '../../../redux/slices/currentCharacterSlice';
import { SliderDot } from './SliderDot/SliderDot';
import styles from './SliderDots.module.css';
import { CharacterType } from '../../../redux/slices/charactersSlice';

type SliderDotsProps = {
    arrayToMap: any[];
    onSliderDotClick: (id : number) => void;
    checkActive: (charactedId: number) => boolean;
}




export const SliderDots: React.FC<SliderDotsProps> = ({ arrayToMap, onSliderDotClick, checkActive }) => {
    const createDots = (): any[] => {
        const dots = arrayToMap.map(item =>
            <SliderDot
                key={item.id}
                isActive={checkActive(item.id)}
                onClick={ () => onSliderDotClick(item.id) }
            />
        );
        return dots;
    }

    return (
        <div className={styles.dots}>
            {createDots()}
        </div>
    );
}