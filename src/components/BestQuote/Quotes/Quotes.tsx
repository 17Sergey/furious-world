import React from 'react';
import styles from './Quotes.module.css';

import { SliderDots } from '../../common/SliderDots/SliderDots';
import { Quote } from './Quote/Quote';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { changeActiveQuote } from '../../../redux/slices/bestQuoteSlice';

type QuotesProps = {
}

export const Quotes: React.FC<QuotesProps> = ({ }) => {

    const quotes = useAppSelector(state => state.bestQuoteScreen.currentCharacter.quotes);
    const activeQuoteId = useAppSelector(state => state.bestQuoteScreen.activeQuote.id);

    const checkActive = (quoteId: number) : boolean => {
        return quoteId === activeQuoteId;
    }

    const dispatch = useAppDispatch();
    const changeQuote = (quoteNumber: number) => {
        dispatch(changeActiveQuote(quoteNumber));
    }

    return (
        <div className={styles.quotes}>
            <Quote />
            <SliderDots arrayToMap={quotes} onSliderDotClick={changeQuote} checkActive={checkActive} />
        </div>
    );
}