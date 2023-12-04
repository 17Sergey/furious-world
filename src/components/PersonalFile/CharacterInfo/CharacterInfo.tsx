import React from 'react';

import styles from './CharacterInfo.module.css';
import { PersonalPhoto } from './PersonalPhoto/PersonalPhoto';
import { PersonalData } from './PersonalData/PersonalData';

export const CharacterInfo: React.FC = () => {
    return (
        <div className={styles.character_info}>
            <PersonalData />
            <PersonalPhoto />
        </div>
    );
}