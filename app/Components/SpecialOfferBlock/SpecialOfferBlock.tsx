import styles from './styles.module.css'
import Button from '../Button/Button'
export default function SpecialOfferBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <div className={styles.mainText}>Скидка 10%</div>
                    <div className={styles.subText}>Новым клиентам при записи онлайн</div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        text={'Записаться онлайн'}
                        width={400}
                        height={80}
                        fontSize={28}
                        borderRadius={0}
                        hoveredColor='#FFF4FE'
                        bgColor='#FFFFFF'
                    />
                </div>
            </div>
        </div>
    );
}