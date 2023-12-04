import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    onClickCallBack() : void;
}

export const Button: React.FC<ButtonProps> = ({text, onClickCallBack, className = "", style = {}}) => {
    return (
        <button  style={style} className={styles.btn + " " + className} onClick={onClickCallBack}>{text}</button>
    );
}