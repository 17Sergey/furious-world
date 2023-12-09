import React from 'react';
import styles from './Quotes.module.css';

import { SliderDots } from '../../common/SliderDots/SliderDots';
import { Quote } from './Quote/Quote';

export const Quotes: React.FC = ({}) => {

    const sliderDotClicked = (id: number) => {
        return false;
    }

    const checkActive = (characterId: number) : boolean => {
        return false;
    }

    return (
        <div className="quotes">
            <Quote />
            <SliderDots arrayToMap={[1,2]} onSliderDotClick={sliderDotClicked} checkActive={checkActive} />
        </div>
    );
}