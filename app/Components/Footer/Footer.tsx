import styles from './styles.module.css';
export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.addressContainer}>
                <p className={styles.mainText}>Адрес:</p>
                <a target='_blank' href={'https://yandex.ru/maps/47/nizhny-novgorod/house/ulitsa_strokina_6/YEoYfgJnSkUBQFtsfX53cnVlYw==/?ll=43.857893%2C56.263848&z=17.73'} className={styles.secondText}>ул.Строкина, д.6</a>
                <p className={styles.mainText}>Время работы:</p>
                <p className={styles.secondText}>Ежедневно с 10:00-22:00 по предварительной записи</p>
            </div>
            <div className={styles.phoneContainer}>
                <p className={styles.mainText}>Телефон и e-mail:</p>
                <a href={'tel:+7 (904) 926 60-51'} className={styles.secondText}>+7 (904) 926 60-51</a>
                <a href={'mailto:osssmanova@mail.ru'} className={styles.secondText}>osssmanova@mail.ru</a>
            </div>
        </div>
    );
}