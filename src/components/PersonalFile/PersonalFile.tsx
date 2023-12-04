import React from 'react';
import styles from './PersonalFile.module.css';
import { Container } from '../common/Container/Container';
import { Heading } from '../common/Heading/Heading';
import { CharacterInfo } from './CharacterInfo/CharacterInfo';

export const PersonalFile: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <Heading value={"Personal file"} />
                <CharacterInfo />
            </Container>
        </div>
    );
}