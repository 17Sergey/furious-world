import React from 'react';

import styles from './CharacterInfo.module.css';
import { PersonalPhoto } from './PersonalPhoto/PersonalPhoto';
import { PersonalData } from './PersonalData/PersonalData';
import { useAppSelector } from '../../../redux/hooks/hooks';

export const CharacterInfo: React.FC = () => {
    const characterInfo = useAppSelector(state => state.personalFileScreen.characters[0]);

    return (
        <div className={styles.character_info}>
            <PersonalData characterInfo={characterInfo}/>
            <PersonalPhoto photo={characterInfo.photo}/>
        </div>
    );
}