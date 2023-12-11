import React from 'react';

import styles from './BestQuote.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { Quotes } from './Quotes/Quotes';
import { useAppSelector } from '../../redux/hooks/hooks';

export const BestQuote: React.FC = ({}) => {
    const color = useAppSelector(state => state.currentCharacter.color);

    return (
        <div className={styles.best_quote} style={{backgroundColor: color}}>
            <Container>
                <Heading value={"Best quote"} type={"right"} className={styles.heading} shapeColor={"#FF7750"} />
                <Quotes />
            </Container>
        </div>
    );
}