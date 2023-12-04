import React from 'react';
import { ReactNode } from 'react';
import styles from './Container.module.css';

interface PropsType {
    children: ReactNode;
}

export const Container: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}