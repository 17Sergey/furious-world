import React from 'react';

import styles from './CarPhotosSlider.module.css';
import { Switchers } from './Switchers/Switchers';

import { useAppSelector } from '../../../../redux/hooks/hooks';
import { CharacterActiveCarType } from '../../../../redux/slices/carsSlice';

type CarPhotosSliderProps = {
    car: CharacterActiveCarType;
}

export const CarPhotosSlider: React.FC<CarPhotosSliderProps> = ({ car }) => {

    const color = useAppSelector(state => state.currentCharacter.color);

    return (
        <div className={styles.car_photos_slider}>
            <div>
                <img
                    src={car.activeImage}
                    style={{ borderColor: color }}
                    className={styles.car_photo}
                    alt="car-photo"
                />
            </div>
            <Switchers carImages={car.carImages} activeCarImage={car.activeImage} />
        </div>
    );
}
