import React from 'react';

// import styles from './AnswerOptions.module.css';
import { AnswerOption } from './AnswerOption/AnswerOption';

export const AnswerOptions: React.FC = ({}) => {
    return (
        <div className="options">
            <AnswerOption value={"Furious 4"}/>
            <AnswerOption value={"Furious 5"}/>
            <AnswerOption value={"Furious 6"}/>
            <AnswerOption value={"Furious 7"}/>
        </div>
    );
}