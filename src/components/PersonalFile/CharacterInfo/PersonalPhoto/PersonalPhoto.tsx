import React from 'react';

import styles from './PersonalPhoto.module.css'

import CharacterImg from '../../../../assets/Ramsey/PersonalFileRamsey.jpg';

type PersonalPhotoProps = {
    photo: string;
}

export const PersonalPhoto: React.FC<PersonalPhotoProps> = ({ photo }) => {
    return (
        <div className="photo">
            <img src={photo} alt="character's image" />
        </div>
    );
}