import React from 'react';
import { Container } from '../common/Container/Container';
import { Character } from './Character/Character';
import styles from './Characters.module.css';
import { SliderDots } from '../common/SliderDots/SliderDots';
import { Arrow } from '../common/Arrow/Arrow';
import { useAppSelector } from '../../redux/hooks/hooks';



export const Characters: React.FC = () => {

    const currentCharacterId = useAppSelector(state => state.currentCharacter.currentCharacterId);
    const currentCharacter = useAppSelector(state => state.characters.characters[currentCharacterId]);

    const currentCharacterColor = useAppSelector(state => state.currentCharacter.color);
    // debugger;

    return (
        <div className={styles.wrapper} style={{ backgroundColor: currentCharacterColor }}>
            <Container>
                <div className={styles.content}>
                    <Arrow className={styles.left + " " + styles.arrow} />
                    <Character character={currentCharacter} />
                    <Arrow className={styles.right + " " + styles.arrow} />
                </div>
                <SliderDots />
            </Container>
        </div>
    );
}

