import React from 'react';

import styles from './PersonalData.module.css'
import { DataCriteries } from './DataCriteries/DataCriteries';
import { CharacterInfoType } from '../../../../redux/slices/personalFileSlice';

type PersonalDataProps = {
    characterInfo: CharacterInfoType;
}

export const PersonalData: React.FC<PersonalDataProps> = ({ characterInfo }) => {
    return (
        <div className="data">
            <DataCriteries characterInfo={characterInfo}/>
            <div className={styles.additional}>{characterInfo.description}</div>
        </div>
    );
}