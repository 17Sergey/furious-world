import React from 'react';

import styles from './RatingCritery.module.css';
import { ProgressBar } from '../../../../../../common/ProgressBar/ProgressBar';

type RatingCriteryProps = {
    name: string;
    value: number;
    color: string;
}

export const RatingCritery: React.FC<RatingCriteryProps> = ( { name, value, color } ) => {
    return (
        <div className={styles.rating_critery}>
            <div className={styles.critery_heading}>{name}</div>
            <ProgressBar value={value} className={styles.progressBar} color={color}/>
        </div>
    );
}