import React from 'react';

import styles from './ResultBar.module.css';
import { ProgressBar } from '../../../common/ProgressBar/ProgressBar';

import FireWork from '../../../../assets/Firework.svg';

type ResultBarProps = {
    value: number;
}

export const ResultBar: React.FC<ResultBarProps> = ({ value }) => {
    const COLOR = "#0496FF";
    return (
        <div className={styles.bar}>
            <div className={styles.result}>
                <div className={styles.resultText}>Your result is {value}%!</div>
                <ProgressBar className={styles.resultBar} color={COLOR} value={value} />
            </div>
            <img src={FireWork} className={styles.firework} alt="firework" />
        </div>
    );
}