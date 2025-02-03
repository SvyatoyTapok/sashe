import styles from './styles.module.css'
import Image from 'next/image'

type PersonProps = {
    image: string,
}
export default function PersonProps({ image }: PersonProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt="Description of the image"
                    width={300}
                    height={400}
                />
                <div className={styles.descriptionBlock}>
                    <div className={styles.decorationText}></div>
                    <div className={styles.textContainer}>
                        <p className={styles.nameText}>Александра Османова</p>
                        <p className={styles.subText}>Мастер на все руки</p>
                        <p className={styles.description}>Начинающий мастер маникюра и педикюра,
                            увлечённый красотой и индивидуальным подходом
                            к каждому клиенту. В работе важны аккуратность,
                            креативность и стерильность. Создаю стильные дизайны ногтей и
                            помогаю вашим ручкам и ножкам выглядеть безупречно.</p>
                    </div>
                    <div className={styles.imageFrame}></div>
                </div>
            </div>
        </div>
    )
}