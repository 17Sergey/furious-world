import React from 'react';

import styles from './Cars.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { CarPicker } from './CarPicker/CarPicker';

export const Cars: React.FC = () => {
    return (
        <div className={styles.cars}>
            <Container>
                <Heading value={"Cars"} type={"right"}/>
                <CarPicker />
                <div className={styles.text_centered}>
                    A person’s car has always been important in the Furious world. They travel with cars, rest with cars, fight with cars. Are these guys in their cars? If yes, you’re going to lose.
                </div>
            </Container>
        </div>
    );
}