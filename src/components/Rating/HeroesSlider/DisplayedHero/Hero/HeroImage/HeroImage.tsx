import React from 'react';

import styles from './HeroImage.module.css';


type HeroImageProps = {
    className?: string;
    imgSource: string;
}

export const HeroImage: React.FC<HeroImageProps> = ( { className, imgSource } ) => {
    return (
        <div className={styles.hero_img}>
            <div className={`${styles.img} ${className}`} style={{backgroundImage: `url(${imgSource})`}}/>
        </div>
    );
}
