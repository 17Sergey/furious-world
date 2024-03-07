import React from 'react';

import { Header } from '../Header/Header';
import { Characters } from '../Characters/Characters';
import { PersonalFile } from '../PersonalFile/PersonalFile';
import { Cars } from '../Cars/Cars';
import { Rating } from '../Rating/Rating';
import { BestQuote } from '../BestQuote/BestQuote';

export const Content: React.FC = () => {
    return (
        <div>
            <Header />
            <Characters />
            <PersonalFile />
            <Cars />
            <Rating />
            <BestQuote />
        </div>
    );
}
