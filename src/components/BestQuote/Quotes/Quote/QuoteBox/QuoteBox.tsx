import React from 'react';

import styles from './QuoteBox.module.css';

import Backticks from '../../../../../assets/common/Backticks.svg';

type QuoteBoxProps = {
    text: string;
}

export const QuoteBox: React.FC<QuoteBoxProps> = ({ text }) => {
    return (
        <div className={styles.quote}>
            <div className={styles.backticks}>
                <img src={Backticks} alt="backticks" />
            </div>
            <span>{text}</span>
        </div>
    );
}

