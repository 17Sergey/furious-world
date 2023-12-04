import React from 'react';

import styles from './QuoteBox.module.css';

import Backticks from '../../../../../assets/Backticks.svg';

export const QuoteBox: React.FC = ({}) => {
    const quote = "Life is binary: zero and ones. Only two things keep a group like this together; fear or loyalty - and I don't see a drop of fear amongst you guys.";
    return (
        <div className={styles.quote}>
            <div className={styles.backticks}>
                <img src={Backticks} alt="backticks" />
            </div>
            <span>{quote}</span>
        </div>
    );
}

