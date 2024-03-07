import React from 'react';

import styles from './DataCritery.module.css';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';

type DataCriteryProps = {
    heading: string;
    value: string;
}

export const DataCritery: React.FC<DataCriteryProps> = ({ heading, value }) => {

    const { color } = useAppSelector(state => state.currentCharacter);

    return (
        <div className={styles.critery}>
            <div>
                <div className={styles.critery_heading}>{heading}</div>
                <div style={{ backgroundColor: color }} className={styles.underline}></div>
            </div>
            <div className={styles.critery_value}>{value}</div>
        </div>
    );
}