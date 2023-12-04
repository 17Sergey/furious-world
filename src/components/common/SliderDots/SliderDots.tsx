
import { SliderDot } from './SliderDot/SliderDot';
import styles from './SliderDots.module.css';


export const SliderDots: React.FC = () => {
    return (
        <div className={styles.dots}>
            <SliderDot />
            <SliderDot active={true}/>
            <SliderDot />
            <SliderDot />
            <SliderDot />
            <SliderDot />
            <SliderDot />
        </div>
    );
}