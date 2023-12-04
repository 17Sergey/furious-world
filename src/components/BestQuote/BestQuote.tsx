import React from 'react';

import styles from './BestQuote.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { Quotes } from './Quotes/Quotes';

export const BestQuote: React.FC = ({}) => {

    const COLOR = "#6F08A9";
    return (
        <div className={styles.best_quote} style={{backgroundColor: COLOR}}>
            <Container>
                <Heading value={"Best quote"} type={"right"} className={styles.heading} shapeColor={"#A821E6"} />
                <Quotes />
            </Container>
        </div>
    );
}