import React, { ReactNode } from 'react';

import styles from './HeroRating.module.css';
import { RatingCritery } from './RatingCritery/RatingCritery';
import { RatingType } from '../../../../../../redux/slices/ratingSlice';


type HeroRatingProps = {
    rating: RatingType;
}

export const HeroRating: React.FC<HeroRatingProps> = ({ rating }) => {

    const createRatingCriteries = (): Array<ReactNode> => {
        return rating.map(item => <RatingCritery name={item.caption} value={item.value} color={item.color} />);
    }
    return (
        <div className={styles.hero_rating}>
            {createRatingCriteries()}
        </div>
    );
}