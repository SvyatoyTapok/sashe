'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import chevronLeft from '../../images/chevronLeft.svg'
import chevronRight from '../../images/chevronRight.svg'
import { useState } from 'react';
import { useGetAllGalleryQuery } from '@/app/Store/pricesSlice';

export default function GalleryBlock() {
    const [currentPosition, setCurrentPosition] = useState(1)
    const [isClickedLeft, setIsClickedLeft] = useState(false)
    const [isClickedRight, setIsClickedRight] = useState(false)


    const { data: images, error, isLoading } = useGetAllGalleryQuery({});
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки галереи</p>;

    const imagesWithId = images.map((image: string, index: number) => ({
        id: index + 1,
        image: image,
    }));

    const handleForwardClick = () => {
        setIsClickedRight(true)
        setTimeout(() => setIsClickedRight(false), 100)
        if (currentPosition === images.length) return
        { setCurrentPosition(currentPosition + 1) }

    }

    const handleBackClick = () => {
        setIsClickedLeft(true)
        setTimeout(() => setIsClickedLeft(false), 100)
        if (currentPosition === 1) return
        { setCurrentPosition(currentPosition - 1) }
    }

    return (
        <div className={styles.container}>
            <div className={styles.carouselContainer}>
                <div className={styles.navButton} onClick={() => handleBackClick()}>
                    <Image
                        className={isClickedLeft ? styles.clicked : styles.notClicked}
                        width={60}
                        height={60}
                        src={chevronLeft}
                        alt='left button' />
                </div>
                <div className={styles.window}>
                    <div
                        style={{
                            transform: `translateX(${(currentPosition - 1) * -100}%)`
                        }}
                        className={styles.imageContainer}>
                        {imagesWithId.map((image: { id: number, image: string }) => (
                            <Image
                                key={image.id}
                                className={styles.imageStyle}
                                src={`http://109.237.96.208:4300/images/gallery/${image.image}`} alt='manicure'
                                width={200}
                                height={700}
                            />

                        ))}
                    </div>
                </div>
                <div className={styles.navButton} onClick={() => handleForwardClick()}>
                    <Image
                        className={isClickedRight ? styles.clicked : styles.notClicked}
                        width={60}
                        height={60}
                        src={chevronRight}
                        alt='right button'
                    /></div>
            </div>
            <div className={styles.indicatorContainer}>
                {imagesWithId.map((image: { image: string, id: number }) => (
                    <div
                        key={image.id}
                        style={currentPosition === image.id ? { backgroundColor: '#B6ACB4' } : {}}
                        className={styles.indicatorItem}></div>
                ))}
            </div>
        </div>
    );
}