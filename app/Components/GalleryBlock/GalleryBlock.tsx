'use client'
import Image from 'next/image';
import manicure2 from '../../images/manicure2.jpg'
import manicure1 from '../../images/manicure1.jpg'
import styles from './styles.module.css'
import chevronLeft from '../../images/chevronLeft.svg'
import chevronRight from '../../images/chevronRight.svg'
import { useState } from 'react';
export default function GalleryBlock() {
    const [currentPosition, setCurrentPosition] = useState(1)

    const handleForwardClick = () => {
        if (currentPosition === 3) { return } else { setCurrentPosition(currentPosition + 1) }
    }

    const handleBackClick = () => {
        if (currentPosition === 1) { return } else { setCurrentPosition(currentPosition - 1) }
    }
    return (
        <div className={styles.container}>
            <div className={styles.carouselContainer}>
                <div className={styles.navButton} onClick={handleBackClick}>
                    <Image
                        width={60}
                        height={60}
                        src={chevronLeft}
                        alt='left button' />
                </div>
                <div className={styles.window}>
                    <div
                        style={
                            currentPosition === 1 ? { transform: 'translateX(0%)' } :
                                currentPosition === 2 ? { transform: 'translateX(-100%)' } :
                                    currentPosition === 3 ? { transform: 'translateX(-200%)' } : {}}
                        className={styles.imageContainer}>
                        <Image
                            className={styles.imageStyle}
                            src={manicure2} alt='manicure'
                            width={400}
                            height={300}
                        />
                        <Image
                            className={styles.imageStyle}
                            src={manicure1} alt='manicure'
                            width={400}
                            height={300}
                        />
                        <Image
                            className={styles.imageStyle}
                            src={manicure2} alt='manicure'
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
                <div className={styles.navButton} onClick={handleForwardClick}>
                    <Image
                        width={60}
                        height={60}
                        src={chevronRight}
                        alt='right button'
                    /></div>

            </div>
            <div className={styles.indicatorContainer}>
                <div
                    style={currentPosition === 1 ? { backgroundColor: '#B6ACB4' } : {}}
                    className={styles.indicatorItem}></div>
                <div
                    style={currentPosition === 2 ? { backgroundColor: '#B6ACB4' } : {}}
                    className={styles.indicatorItem}></div>
                <div
                    style={currentPosition === 3 ? { backgroundColor: '#B6ACB4' } : {}}
                    className={styles.indicatorItem}></div>
            </div>
        </div>
    );
}