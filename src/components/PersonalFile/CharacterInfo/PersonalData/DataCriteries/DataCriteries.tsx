import React from 'react';

import styles from './DataCriteries.module.css';
import { DataCritery } from './DataCritery/DataCritery';
import { CharacterInfoType } from '../../../../../redux/slices/personalFileSlice';

type DataCriteriesProps = {
    characterInfo: CharacterInfoType;
}

export const DataCriteries: React.FC<DataCriteriesProps> = ({ characterInfo }) => {
    return (
        <div className={styles.criteries}>
            <DataCritery heading={"Full name:"} value={characterInfo.fullName}/>
            <DataCritery heading={"Age:"} value={characterInfo.age}/>
            <DataCritery heading={"Nationality:"} value={characterInfo.nationality}/>
            <DataCritery heading={"Best skills:"} value={characterInfo.bestSkills}/>
            <DataCritery heading={"Marital status:"} value={characterInfo.maritalStatus}/>
        </div>
    );
}