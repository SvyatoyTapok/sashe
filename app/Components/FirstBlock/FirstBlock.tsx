"use client"
import { useState } from 'react'
import styles from './styles.module.css'
import Button from '../Button/Button';
import play from '../../images/play.svg'
import Image from 'next/image';

export default function FirstBlock() {
    const [hover, setHover] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.mainText}>УСЛУГИ МАНИКЮРА В НИЖНЕМ НОВГОРОДЕ</div>
                <div
                    className={styles.secondText}>Запишись онлайн и получи скидку 10% на первое посещение
                </div>

                <Button
                    text={'Онлайн запись'}
                    width={300}
                    height={100}
                    fontSize={28}
                    marginTop={100}
                    borderRadius={12}
                    hoveredColor='#C6BAC4'
                    bgColor='#E4D8E2'
                />
                <div className={styles.videoInfo}>
                    <div className={styles.videoText}>Посмотрите видео о моей студии</div>
                    <Image
                        style={{ marginLeft: 10 }}
                        alt='play'
                        src={play}
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div
                    className={styles.firstImage}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                ></div>
                <div className={hover === 1 ? styles.hoveredFirstImage : styles.firstFrame}></div>
                <div
                    className={styles.secondImage}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(0)}
                ></div>
                <div
                    className={hover === 2 ? styles.hoveredSecondImage : styles.secondFrame}></div>
            </div>
        </div >
    )
}