import React from 'react';

import styles from './DataCritery.module.css';

type DataCriteryProps = {
    heading: string;
    value: string;
}

const COLOR = "#6F08A9";

export const DataCritery: React.FC<DataCriteryProps> = ({ heading, value }) => {
    return (
        <div className={styles.critery}>
            <div>
                <div className={styles.critery_heading}>{heading}</div>
                <div style={{ backgroundColor: COLOR }} className={styles.underline}></div>
            </div>
            <div className={styles.critery_value}>{value}</div>
        </div>
    );
}