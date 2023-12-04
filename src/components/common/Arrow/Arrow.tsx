import React from 'react';
import styles from './Arrow.module.css';
import { SvgLoader, SvgProxy } from "react-svgmt";

import ArrowImg from '../../../assets/arrow.svg';

interface ArrowProps {
    className: string;
}

export const Arrow: React.FC<ArrowProps>  = ({ className }) => {
    return (
        <div className={styles.wrapper}>
            <SvgLoader path={ArrowImg} className={className}>
                <SvgProxy selector="svg" fill="#6F08A9" width={"50px"} height={"50px"}/>   
            </SvgLoader>
        </div>
    );  
}