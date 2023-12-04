import React from 'react';

import styles from './CarPicker.module.css';
import { CarPhotosSlider } from './CarPhotosSlider/CarPhotosSlider';
import { CarsOptions } from './CarsOptions/CarsOptions';

export const CarPicker: React.FC = () => {
    return (
        <div className={styles.car_picker}>
            <CarPhotosSlider />
            <CarsOptions />
        </div>
    );
}
