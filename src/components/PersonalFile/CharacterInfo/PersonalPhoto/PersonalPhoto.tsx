import React from 'react';

import styles from './PersonalPhoto.module.css'

import CharacterImg from '../../../../assets/PersonalFileRamsey.jpg';

export const PersonalPhoto: React.FC = () => {
    return (
        <div className="photo">
            <img src={CharacterImg} alt="character's image" />
        </div>
    );
}