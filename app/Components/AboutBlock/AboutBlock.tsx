import styles from './styles.module.css';

import PersonItem from '../PersonItem/PersonItem';
export default function AboutBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.itemsContainer}>
                <PersonItem image={'http://sashestudio.ru/images/sasha.jpg'} />
            </div>
        </div>
    );
}