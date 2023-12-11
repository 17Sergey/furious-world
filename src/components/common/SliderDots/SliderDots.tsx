import React, { ReactNode } from 'react';

import { SliderDot } from './SliderDot/SliderDot';
import styles from './SliderDots.module.css';

type SliderDotsProps = {
    arrayToMap: any[];
    onSliderDotClick: (quoteNumber: number) => void;
    checkActive: (quoteNumber: number) => boolean;
}

export const SliderDots: React.FC<SliderDotsProps> = ({ arrayToMap, onSliderDotClick, checkActive }) => {

    const createDots = (): Array<ReactNode> => {
        const dots = arrayToMap.map(item => { 
            return <SliderDot
                key={item.id}
                isActive={checkActive(item.id)}
                onClick={() => onSliderDotClick(item.id)}
            />
        }
        );
        return dots;
    }

    return (
        <div className={styles.dots}>
            {createDots()}
        </div>
    );
}