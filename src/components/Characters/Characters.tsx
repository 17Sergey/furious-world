import React from 'react';
import { Container } from '../common/Container/Container';
import { Character } from './Character/Character';
import styles from './Characters.module.css';
import { SliderDots } from '../common/SliderDots/SliderDots';
import { Arrow } from '../common/Arrow/Arrow';



export const Characters: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.content}>
                    <Arrow className={styles.left + " " + styles.arrow} />
                    <Character />
                    <Arrow className={styles.right + " " + styles.arrow} />
                </div>
                <SliderDots />
            </Container>
        </div>
    );
}

