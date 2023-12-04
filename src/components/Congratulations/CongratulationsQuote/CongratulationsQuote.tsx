import React from 'react';

import styles from './CongratulationsQuote.module.css';

export const CongratulationsQuote: React.FC = ({}) => {
    return (
        <div className="quote">
            <div className={styles.text}>
                “I live my life a quarter mile at a time. Nothing else matters. For those 10 seconds of less, I’m free”
                <span className={styles.author}>- Dominic Toretto. </span>
            </div>
        </div>
    );
}