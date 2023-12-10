import React, {ReactNode} from 'react'

import styles from './CarsOptions.module.css';
import { CarOption } from './CarOption/CarOption';
import { CharacterCarType, CharacterWithCarType, changeActiveCar } from '../../../../redux/slices/carsSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';

type CarsOptionsProps = {
    characterInfo: CharacterWithCarType;
    activeCar: CharacterCarType;
}

export const CarsOptions: React.FC<CarsOptionsProps> = ({ characterInfo, activeCar }) => {

    const dispatch = useAppDispatch();

    const {name: characterName, cars: characterCars} = characterInfo;

    const changeCar = (car: CharacterCarType): void => {
        dispatch(changeActiveCar(car));
    }

    const createCarOptions = (): Array<ReactNode> => {
        const dots = characterCars.map(car =>
            <CarOption
                key={car.id}
                value={car.carName}
                isActive={car.id === activeCar.id}
                onClick={() => { changeCar(car) }}
            />
        );
        return dots;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.welcome}>Welcome to {characterName}’s garage!</div>
            <div className={styles.cars_options}>
                {createCarOptions()}
            </div>

        </div>
    );
}