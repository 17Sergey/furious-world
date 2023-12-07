import React from 'react';
import styles from './Arrow.module.css';
import { SvgLoader, SvgProxy } from "react-svgmt";

import ArrowImg from '../../../assets/common/arrow.svg';

interface ArrowProps {
    className: string;
    onClickCallback: () => void;
}

export const Arrow: React.FC<ArrowProps>  = ({ className, onClickCallback }) => {
    return (
        <div className={styles.wrapper} onClick={ onClickCallback }>
            <SvgLoader path={ArrowImg} className={className}>
                <SvgProxy selector="svg" fill="#6F08A9" width={"50px"} height={"50px"}/>   
            </SvgLoader>
        </div>
    );  
}