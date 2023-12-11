import React from 'react';

import styles from './HeroImage.module.css';


type HeroImageProps = {
    className?: string;
    imgSource: string;
    onClick?: () => void;
}

export const HeroImage: React.FC<HeroImageProps> = ( { className, imgSource, onClick = () => {} } ) => {
    return (
        <div className={styles.hero_img} onClick={onClick}>
            <div className={`${styles.img} ${className}`} style={{backgroundImage: `url(${imgSource})`}}/>
        </div>
    );
}
