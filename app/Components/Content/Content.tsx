import styles from './styles.module.css'

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.mainText}>УСЛУГИ МАНИКЮРА НА ДОМУ В НИЖНЕМ НОВГОРОДЕ</div>
                <div className={styles.secondText}>Запишись онлайн и получи скидку 10% на первое посещение</div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.firstImage}></div>
                <div className={styles.secondImage}></div>
            </div>
        </div>
    )
}