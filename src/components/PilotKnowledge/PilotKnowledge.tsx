import React from 'react';

import styles from './PilotKnowledge.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { PilotTest } from './PilotTest/PilotTest';



export const PilotKnowledge: React.FC = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.container}>
                    <Heading value={"Check out our pilot test!"} type={"center"} />
                    <PilotTest />
                </div>
            </Container>
        </div>
    );
}