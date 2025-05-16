import styles from './styles.module.css';

import PersonItem from '../PersonItem/PersonItem';
export default function AboutBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.itemsContainer}>
                <PersonItem image={'http://109.237.96.208:4300/images/sasha.jpg'} />
            </div>
        </div>
    );
}