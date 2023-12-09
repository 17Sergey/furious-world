import React from 'react';

import styles from './Quote.module.css';
import { QuoteBox } from './QuoteBox/QuoteBox';

import RamseyQuote from '../../../../assets/Ramsey/RamseyQuote1.jpg';

export const Quote: React.FC = ({}) => {
    return (
        <div className={styles.quote_item}>
            <QuoteBox />
            <div className={styles.image}>
                <img src={RamseyQuote} alt="character-image" />
            </div>
        </div>
    );
}

