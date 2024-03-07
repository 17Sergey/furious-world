import React from 'react';

import styles from './CarPicker.module.css';
import { CarPhotosSlider } from './CarPhotosSlider/CarPhotosSlider';
import { CarsOptions } from './CarsOptions/CarsOptions';
import { useAppSelector } from '../../../redux/hooks/hooks';

export const CarPicker: React.FC = () => {
    const { currentCharacterId } = useAppSelector(state => state.currentCharacter);
    const characterInfo = useAppSelector(state => state.carsScreen.characters[currentCharacterId]);
    const activeCar = useAppSelector(state => state.carsScreen.activeCar);

    return (
        <div className={styles.car_picker}>
            <CarPhotosSlider car={activeCar}/>
            <CarsOptions characterInfo={characterInfo} activeCar={activeCar}/>
        </div>
    );
}
