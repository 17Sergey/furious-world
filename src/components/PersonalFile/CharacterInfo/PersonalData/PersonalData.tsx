import React from 'react';

import styles from './PersonalData.module.css'
import { DataCriteries } from './DataCriteries/DataCriteries';

export const PersonalData: React.FC = () => {
    return (
        <div className="data">
            <DataCriteries />
            <div className={styles.additional}>Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.</div>
        </div>
    );
}