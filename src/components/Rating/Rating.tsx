import React from 'react';

import styles from './Rating.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { HeroesSlider } from './HeroesSlider/HeroesSlider';

export const Rating: React.FC = () => {
    return (
        <div className={styles.rating}>
            <Container>
                <a id="rating"></a>
                <Heading value={"Rating"} />
                <HeroesSlider />
            </Container>
        </div>
    );
}
