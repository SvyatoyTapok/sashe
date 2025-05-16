'use client';
import { useState } from 'react';
import StrokeTable from '../StrokeTable/StrokeTable';
import styles from './style.module.css';

export default function TableComponent() {
    const [clicked, setClicked] = useState('Маникюр');

    const [hover, setHover] = useState('Маникюр');

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
                <tbody className={`${styles.tableBody}`}>
                    {/* {Array.isArray(data) && data.map((item: StrokeType) => (
                        <StrokeTable
                            key={item.id}
                            name={item.name}
                            cost={item.cost}
                            id={item.id}
                        />
                        
                    ))} */}
                    <StrokeTable
                        key={1}
                        name={'✨ Снятие + маникюр + гель лак'}
                        cost={500}
                        id={1}
                    />
                    <StrokeTable
                        key={2}
                        name={'💅 Снятие + маникюр + гель лак + укрепление'}
                        cost={650}
                        id={2}
                    />
                    <StrokeTable
                        key={3}
                        name={'🔥 Коррекция / ремонт / наращивание 1 ногтя'}
                        cost={50}
                        id={3}
                    />
                    <StrokeTable
                        key={4}
                        name={'🍓 Наращивание'}
                        cost={1000}
                        id={4}
                    />
                    <StrokeTable
                        key={5}
                        name={'💋 Коррекция наращивания (моя работа)'}
                        cost={800}
                        id={5}
                    />
                    <StrokeTable
                        key={6}
                        name={'💄 Любой дизайн (1 ноготь)'}
                        cost={30}
                        id={6}
                    />
                </tbody>
            </table>
        </div>
    );
}