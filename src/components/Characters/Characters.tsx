import React from 'react';
import { Container } from '../common/Container/Container';
import { Character } from './Character/Character';
import styles from './Characters.module.css';
import { SliderDots } from '../common/SliderDots/SliderDots';
import { Arrow } from '../common/Arrow/Arrow';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setCurrentCharacter } from '../../redux/slices/currentCharacterSlice';



export const Characters: React.FC = () => {
    const dispatch = useAppDispatch();

    // Set up character(API call should be here)
    const { currentCharacterId, color: currentCharacterColor } = useAppSelector(state => state.currentCharacter);

    const characters = useAppSelector(state => state.charactersScreen.characters);
    const currentCharacter = characters[currentCharacterId];

    const showPreviousCharacter = () => {
        dispatch(setCurrentCharacter(currentCharacterId - 1));
    }

    const showNextCharacter = () => {
        dispatch(setCurrentCharacter(currentCharacterId + 1));
    }

    const sliderDotClicked = (id: number) => {
        dispatch(setCurrentCharacter(id));
    }

    const checkActive = (characterId: number) : boolean => {
        return characterId === currentCharacterId;
    }

    return (
        <div className={styles.wrapper} style={{ backgroundColor: currentCharacterColor }}>
            <Container>
                <div className={styles.content}>
                    <Arrow className={styles.left + " " + styles.arrow} onClickCallback={showPreviousCharacter} />
                    <Character character={currentCharacter} />
                    <Arrow className={styles.right + " " + styles.arrow} onClickCallback={showNextCharacter} />
                </div>
                <SliderDots arrayToMap={characters} onSliderDotClick={sliderDotClicked} checkActive={checkActive}/>
            </Container>
        </div>
    );
}

