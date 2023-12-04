import React from 'react';

import styles from './CarsOptions.module.css';
import { CarOption } from './CarOption/CarOption';

export const CarsOptions: React.FC = () => {
    return (
        <div className={styles.cars_options}>
            <div className={styles.welcome}>Welcome to Ramsey’s garage!</div>
            <CarOption value={"1994 Toyota Supra Mark IV"} isActive={false}/>
            <CarOption value={"1999 Nissan Skyline R34 GT-R"} isActive={false}/>
            <CarOption value={"2010 Dodge Charger SRT-8"} isActive={true}/>
            <CarOption value={"2012 Subaru Impreza WRX STi GH"} isActive={false}/>
        </div>
    );
}