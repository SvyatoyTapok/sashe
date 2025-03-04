'use client';
import { useState, useEffect } from 'react';
import StrokeTable from '../StrokeTable/StrokeTable';
import styles from './style.module.css';
import { useGetPricesQuery } from '@/app/Store/pricesSlice';

type StrokeType = {
    name: string;
    cost: number;
    id: number;
};

export default function TableComponent() {
    const [clicked, setClicked] = useState('Маникюр');
    const { data = [], isLoading } = useGetPricesQuery(clicked, {
        selectFromResult: ({ data, isLoading }) => ({ data, isLoading }),
    });

    const [hover, setHover] = useState('Маникюр');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsLoaded(true);
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container} id="table">
            <div className={styles.pagesContainer}>
                <div className={styles.textContainer}>
                    {['Маникюр'].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => setHover(item)}
                            onMouseLeave={() => setHover('')}
                            onClick={() => setClicked(item)}
                            className={
                                clicked === item
                                    ? styles.clickedPageText
                                    : styles.pageText}>
                            <p className={
                                hover === item
                                    ? styles.hoveredPageText
                                    : styles.nothing}>
                                {'Маникюр'}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.underDecorations}>
                    <div className={styles.decoration1}></div>
                </div>
            </div>
            <table className={styles.table}>
                <tbody className={`${styles.tableBody} ${isLoaded ? styles.tableBodyStaggered : ''}`}>
                    {Array.isArray(data) && data.map((item: StrokeType) => (
                        <StrokeTable
                            key={item.id}
                            name={item.name}
                            cost={item.cost}
                            id={item.id}
                        />
                    ))}
                </tbody>
            </table>
            <div className={styles.underTableContainer}>
                {'🎨 Дизайн ногтей — в подарок!'}
            </div>
        </div>
    );
}