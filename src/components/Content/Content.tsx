import React from 'react';

import styles from './Content.module.css';
import { Header } from '../Header/Header';
import { Characters } from '../Characters/Characters';
import { PersonalFile } from '../PersonalFile/PersonalFile';
import { Cars } from '../Cars/Cars';
import { Rating } from '../Rating/Rating';
import { BestQuote } from '../BestQuote/BestQuote';
import { PilotKnowledge } from '../PilotKnowledge/PilotKnowledge';
import { Congratulations } from '../Congratulations/Congratulations';

export const Content: React.FC = () => {
    return (
        <div>
            <Header />
            {/* <Characters />
            <PersonalFile />
            <Cars />
            <Rating />
            <BestQuote />
            <PilotKnowledge />
            <Congratulations /> */}
        </div>
    );
}
