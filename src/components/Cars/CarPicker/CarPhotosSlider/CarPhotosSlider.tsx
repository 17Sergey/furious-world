import React from 'react';

import styles from './CarPhotosSlider.module.css';
import { Switchers } from './Switchers/Switchers';

import ActiveCarPhoto from '../../../../assets/Ramsey/cars/DodgeChallenger.jpg'

export const CarPhotosSlider: React.FC = () => {

    const COLOR = "#6F08A9";
    return (
        <div className="car_photos_slider">
            <img
                src={ActiveCarPhoto}
                style={{ borderColor: COLOR }}
                className={styles.car_photo}
                alt="car-photo" 
            />
            <Switchers />
        </div>
    );
}
