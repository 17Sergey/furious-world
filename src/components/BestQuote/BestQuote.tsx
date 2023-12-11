import React from 'react';

import styles from './BestQuote.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { Quotes } from './Quotes/Quotes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setBestQuoteCurrentCharacter } from '../../redux/slices/bestQuoteSlice';

export const BestQuote: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const { color, currentCharacterId } = useAppSelector(state => state.currentCharacter);
    dispatch(setBestQuoteCurrentCharacter(currentCharacterId));
    const { shapeColor } = useAppSelector(state => state.bestQuoteScreen.currentCharacter);

    return (
        <div className={styles.best_quote} style={{backgroundColor: color}}>
            <Container>
                <Heading value={"Best quote"} type={"right"} className={styles.heading} shapeColor={shapeColor} />
                <Quotes />
            </Container>
        </div>
    );
}