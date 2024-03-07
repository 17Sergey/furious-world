import React from 'react';

import styles from './PersonalPhoto.module.css'

type PersonalPhotoProps = {
    photo: string;
}

export const PersonalPhoto: React.FC<PersonalPhotoProps> = ({ photo }) => {
    return (
        <div className={styles.photo}>
            <img src={photo} alt="character's image" />
        </div>
    );
}