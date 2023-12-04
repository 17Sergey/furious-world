import React from 'react';

import styles from './PilotTest.module.css';
import { TestQuestion } from './TestQuestion/TestQuestion';
import { Button } from '../../common/Button/Button';

export const PilotTest: React.FC = () => {
    const BACK_COLOR = "#57E2E5";
    return (
        <div className={styles.test}>
            <TestQuestion />    
            <div className={styles.buttons}>
                <Button 
                    className={styles.back + " " + styles.btn} 
                    style={{ backgroundColor: BACK_COLOR }}
                    text={"Back"} 
                    onClickCallBack={() => { }} />
                <Button className={styles.btn} text={"Next"} onClickCallBack={() => { }} />
            </div>
        </div>
    );
}