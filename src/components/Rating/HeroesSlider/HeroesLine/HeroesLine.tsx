import React from 'react';

import styles from './HeroesLine.module.css';
import { LineHero } from './LineHero/LineHero';

import RamseyImg from '../../../../assets/Ramsey.webp';
import TejImg from '../../../../assets/Tej.jpg';
import RomanImg from '../../../../assets/Roman.jpg';

export const HeroesLine: React.FC = () => {
    return (
        <div className={styles.line}>
            <LineHero name={"Tej"} imgSource={TejImg}/>
            <LineHero name={"Ramsey"} imgSource={RamseyImg} isActive={true}/>
            <LineHero name={"Roman"} imgSource={RomanImg} />
        </div>
    );
}