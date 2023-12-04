import React from 'react';

import styles from './HeroRating.module.css';
import { RatingCritery } from './RatingCritery/RatingCritery';

export const HeroRating: React.FC = () => {
    return (
        <div className={styles.hero_rating}>
            <RatingCritery name={"Speed:"} value={30} color={"#FF4365"} />
            <RatingCritery name={"Leadership:"} value={38} color={"#03CEA4"}/>
            <RatingCritery name={"Intelligence:"} value={95} color={"#57E2E5"}/>
            <RatingCritery name={"Fighting skills:"} value={55} color={"#0496FF"} />
        </div>
    );
}