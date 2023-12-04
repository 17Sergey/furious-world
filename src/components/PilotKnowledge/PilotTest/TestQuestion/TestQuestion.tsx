import React from 'react';

import styles from './TestQuestion.module.css';
import { AnswerOptions } from './AnswerOptions/AnswerOptions';

export const TestQuestion: React.FC = () => {
    return (
        <div className="question">
            <div className={styles.count}>Question 1/9</div>
            <div className={styles.heading}>What was the first time Dominic Toretto said “Family is the most important thing in life?”</div>
            <AnswerOptions />
        </div>
    );
}

