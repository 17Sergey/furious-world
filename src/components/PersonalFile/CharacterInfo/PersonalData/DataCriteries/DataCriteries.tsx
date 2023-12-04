import React from 'react';

import styles from './DataCriteries.module.css';
import { DataCritery } from './DataCritery/DataCritery';

export const DataCriteries: React.FC = () => {
    return (
        <div className={styles.criteries}>
            <DataCritery heading={"Full name:"} value={"Ramsey Rosewood"}/>
            <DataCritery heading={"Age:"} value={"28"}/>
            <DataCritery heading={"Nationality:"} value={"England"}/>
            <DataCritery heading={"Best skills:"} value={"Technology & computers"}/>
            <DataCritery heading={"Marital status:"} value={"Married with Tej Parker"}/>
        </div>
    );
}