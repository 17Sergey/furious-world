import React from 'react';

import { useAppSelector } from '../../../redux/hooks/hooks';

import styles from './Heading.module.css';
import Shape from '../../../assets/common/HeadingShape.svg';

import { SvgLoader, SvgProxy } from "react-svgmt";

type HeadingProps = {
    value: string;
    className?: string;
    type?: string;
}

const findJustify = (type: string): string => {
    switch (type) {
        case "left": {
            return "flex-start";
        }
        case "center": {
            return "center";
        }
        case "right": {
            return "flex-end";
        }
        default: {
            return "";
        }
    }
}

export const Heading: React.FC<HeadingProps> = ({ value, className = "", type = "left" }) => {

    const { color: shapeColor } = useAppSelector(state => state.currentCharacter);

    const justifyContentValue = findJustify(type);
    
    return (
        <div style={{ justifyContent: justifyContentValue }} className={styles.container}>

            <div className={styles.heading_stylized}>

                <h1 className={`heading ${styles.heading} ${className}`}>{value}</h1>

                <SvgLoader path={Shape} className={styles.shape}>
                    <SvgProxy selector="rect" fill={shapeColor} />
                    <SvgProxy selector="ellipse" fill={shapeColor} />
                </SvgLoader>

            </div>

        </div>
    );
}