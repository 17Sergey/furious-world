import React, {ReactNode} from 'react';

import styles from './Switchers.module.css';
import { Switcher } from './Switcher/Switcher';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { changeActiveCarImage } from '../../../../../redux/slices/carsSlice';

type SwitchersProps = {
    carImages: Array<string>;
    activeCarImage: string;
}

export const Switchers: React.FC<SwitchersProps> = ({ carImages, activeCarImage }) => {

    const dispatch = useAppDispatch();

    const changeActiveImage = (image: string): void => {
        dispatch(changeActiveCarImage(image));
    }

    const createSwitchers = (): Array<ReactNode> => {
        return carImages.map(image => {
            return <Switcher 
                        onClick={() => changeActiveImage(image) }
                        active={image === activeCarImage}
                    />
        })
    }

    return (
        <div className={styles.switchers}>
            {createSwitchers()}
        </div>
    );
}


