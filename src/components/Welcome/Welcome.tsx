import React from 'react';

import styles from './Welcome.module.css';

import { Container } from '../common/Container/Container';
import { DownArrow } from './DownArrow/DownArrow';
import { Button } from '../common/Button/Button';
import { WelcomeBackground } from './WelcomeBackground/WelcomeBackground';

export const Welcome: React.FC = () => {

    const onCheckTest = () => {
        alert("Check test");
    }

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.content}>
                    <h1 className="heading">Welcome to the Furious world</h1>
                    <div className={styles.text}>This franchise has made a huge impact on many people who love cars. Their story, friendship and family continues to warm our hearts and make our love even stronger.</div>
                    <Button text="Check the test" onClickCallBack={onCheckTest} />
                </div>
            </Container>
            <DownArrow />
            <WelcomeBackground />            
        </div>
    );
}