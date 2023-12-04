import React from 'react';

import styles from './PilotResult.module.css';
import { ResultBar } from './ResultBar/ResultBar';

export const PilotResult: React.FC = ({}) => {
    return (
        <div className={styles.result}>
            <ResultBar value={70} />
            <div className={styles.result_rate}>Only a real fan knows Furious world like that.</div>
        </div>
    );
}