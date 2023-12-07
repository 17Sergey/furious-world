import React from 'react';
import styles from './Character.module.css';
// import ChatacterImg from '../../../assets/Dominic/Dominic.jpg';
// import ChatacterImg from '../../../assets/Brian/Brian.jpg';
// import ChatacterImg from '../../../assets/Mia/Mia.jpg';
// import ChatacterImg from '../../../assets/Ramsey/Ramsey.webp';
import { CharacterType } from '../../../redux/slices/charactersSlice';

type CharacterProps = {
    character: CharacterType;
}

export const Character: React.FC<CharacterProps> = ({ character }) => {
    return (
        <div className={styles.character}>
            <h2 className={`heading + ${styles.heading}`}>{character.name}</h2>
            <img
                src={character.photo}
                alt="character image"
                className={styles.image}
            />
        </div>
    );
}