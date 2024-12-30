import styles from './styles.module.css';
import sasha from '../../images/sasha.jpeg'
import PersonItem from '../PersonItem/PersonItem';
export default function AboutBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.itemsContainer}>
                <PersonItem image={sasha} />
            </div>
        </div>
    );
}