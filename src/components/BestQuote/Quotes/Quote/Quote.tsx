import React from 'react';

import styles from './Quote.module.css';
import { QuoteBox } from './QuoteBox/QuoteBox';

import { useAppSelector } from '../../../../redux/hooks/hooks';

export const Quote: React.FC = ({}) => {
    const {text, image} = useAppSelector(state => state.bestQuoteScreen.activeQuote);
    return (
        <div className={styles.quote_item}>
            <QuoteBox text={text}/> 
            <div className={styles.image}>
                <img src={image} alt="character-image" />
            </div>
        </div>
    );
}

