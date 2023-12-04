import React from 'react';
import styles from './Quotes.module.css';

import { SliderDots } from '../../common/SliderDots/SliderDots';
import { Quote } from './Quote/Quote';

export const Quotes: React.FC = ({}) => {
    return (
        <div className="quotes">
            <Quote />
            <SliderDots />
        </div>
    );
}