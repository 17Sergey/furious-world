import React from 'react';

import styles from './Congratulations.module.css';
import { Heading } from '../common/Heading/Heading';
import { PilotResult } from './PilotResult/PilotResult';
import { CongratulationsQuote } from './CongratulationsQuote/CongratulationsQuote';
import { Button } from '../common/Button/Button';

export const Congratulations: React.FC = () => {
    return (
        <div className={styles.congratulations}>
            <Heading value={"Congratulations!"} type={"center"}/>
            <PilotResult />
            <CongratulationsQuote />
            <Button text={"Back to main screen"} onClickCallBack={ () => {} } className={styles.btn}/>
        </div>
    );
}