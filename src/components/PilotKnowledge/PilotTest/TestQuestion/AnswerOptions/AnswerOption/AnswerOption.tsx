import React, { useState } from 'react';

import styles from './AnswerOption.module.css';

type AnswerOptionProps = {
    value: string;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({ value }) => {
    const COLOR = "#6F08A9";

    const [isActive, toggleIsActive] = useState(false);
    return (
        <div className={styles.option}>
            <div
                onClick={() => toggleIsActive(!isActive)}
                className={`${styles.checkbox} ${isActive ? styles.active : ""}`}
                style={{ borderColor: COLOR }}>
            </div>
            <div className={styles.value}>{value}</div>
        </div>
    );
}