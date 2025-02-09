'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import chevronLeft from '../../images/chevronLeft.svg'
import chevronRight from '../../images/chevronRight.svg'
import { useState } from 'react';

export default function GalleryBlock() {
    const [currentPosition, setCurrentPosition] = useState(1)
    const [isClicked, setIsClicked] = useState(0)
    const handleForwardClick = (item: number) => {
        setIsClicked(item)
        setTimeout(() => setIsClicked(0), 100)
        if (currentPosition === 3) { return } else { setCurrentPosition(currentPosition + 1) }
    }

    const handleBackClick = (item: number) => {
        setIsClicked(item)
        setTimeout(() => setIsClicked(0), 100)
        if (currentPosition === 1) { return } else { setCurrentPosition(currentPosition - 1) }
    }
    return (
        <div className={styles.container}>
            <div className={styles.carouselContainer}>
                <div className={styles.navButton} onClick={() => handleBackClick(1)}>
                    <Image
                        className={isClicked === 1 ? styles.clicked : styles.notClicked}
                        width={60}
                        height={60}
                        src={chevronLeft}
                        alt='left button' />
                </div>
                <div className={styles.window}>
                    <div style={
                        currentPosition === 1 ? { transform: 'translateX(0%)' } :
                            currentPosition === 2 ? { transform: 'translateX(-100%)' } :
                                currentPosition === 3 ? { transform: 'translateX(-200%)' } : {}}
                        className={styles.imageContainer}>
                        <Image
                            className={styles.imageStyle}
                            src={'http://localhost:4300/images/carousel_1.jpg'} alt='manicure'
                            width={200}
                            height={400}
                        />
                        <Image
                            className={styles.imageStyle}
                            src={'http://localhost:4300/images/carousel_2.jpg'}
                            width={200}
                            alt='manicure'
                            height={400}
                        />
                        <Image
                            className={styles.imageStyle}
                            src={'http://localhost:4300/images/carousel_3.jpg'}
                            alt='manicure'
                            width={200}
                            height={400}
                        />
                    </div>
                </div>
                <div className={styles.navButton} onClick={() => handleForwardClick(2)}>
                    <Image
                        className={isClicked === 2 ? styles.clicked : styles.notClicked}
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