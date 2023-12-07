
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setCurrentCharacter } from '../../../redux/slices/currentCharacterSlice';
import { SliderDot } from './SliderDot/SliderDot';
import styles from './SliderDots.module.css';


export const SliderDots: React.FC = () => {
    const dispatch = useAppDispatch();

    const characters = useAppSelector(state => state.charactersScreen.characters);
    const currentCharacterId = useAppSelector(state => state.currentCharacter.currentCharacterId);


    const createDots = () => {
        const dots = characters.map(character => {
            <SliderDot
                key={character.id}
                isActive={character.id === currentCharacterId}
                onClick={() => dispatch(setCurrentCharacter(character.id))}
            />
        });
        return dots;
    }

    return (
        <div className={styles.dots}>
            {/* {createDots()} */}
            <SliderDot isActive={false} />
            <SliderDot isActive={true} />
            <SliderDot isActive={false} />
            <SliderDot isActive={false} />
            <SliderDot isActive={false} />

        </div>
    );
}