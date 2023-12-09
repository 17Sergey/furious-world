import React from 'react';

import styles from './CharacterInfo.module.css';
import { PersonalPhoto } from './PersonalPhoto/PersonalPhoto';
import { PersonalData } from './PersonalData/PersonalData';
import { useAppSelector } from '../../../redux/hooks/hooks';

export const CharacterInfo: React.FC = () => {
    const currentCharacterId = useAppSelector(state => state.currentCharacter.currentCharacterId);
    const characterInfo = useAppSelector(state => state.personalFileScreen.characters[currentCharacterId]);

    return (
        <div className={styles.character_info}>
            <PersonalData characterInfo={characterInfo}/>
            <PersonalPhoto photo={characterInfo.photo}/>
        </div>
    );
}