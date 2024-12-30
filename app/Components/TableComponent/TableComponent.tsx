'use client'
import { useState } from 'react'
import StrokeTable from '../StrokeTable/StrokeTable'
import styles from './style.module.css'
import { tableElements } from '../../utils/mock'
export default function TableComponent() {
    type StrokeType = {
        name: string,
        price: number,
        id: number
    }
    const [clicked, setClicked] = useState(1)
    const [hover, setHover] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.pagesContainer}>
                <div className={styles.textContainer}>
                    <div
                        onMouseEnter={() => setHover(1)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setClicked(1)}
                        className={
                            clicked === 1 ? styles.clickedPageText : styles.pageText}>
                        <p
                            className={hover === 1 ? styles.hoveredPageText : styles.nothing}
                        >{'Маникюр'}</p>
                    </div>
                    <div
                        onMouseEnter={() => setHover(2)}
                        onMouseLeave={() => setHover(0)}
                        className={
                            clicked === 2 ? styles.clickedPageText : styles.pageText}
                        onClick={() => setClicked(2)}
                    ><p
                        className={hover === 2 ? styles.hoveredPageText : styles.nothing}
                    >{'Педикюр'}</p>
                    </div>
                    <div
                        onMouseEnter={() => setHover(3)}
                        onMouseLeave={() => setHover(0)}
                        className={
                            clicked === 3 ? styles.clickedPageText : styles.pageText}
                        onClick={() => setClicked(3)}
                    >
                        <p
                            className={hover === 3 ? styles.hoveredPageText : styles.nothing}
                        >{'Дизайн'}</p></div>
                </div>
                <div className={styles.underDecorations}>
                    <div className={
                        clicked === 1 ? styles.decoration1 :
                            clicked === 2 ? styles.decoration2 :
                                clicked === 3 ? styles.decoration3 : styles.decoration1
                    }></div>
                </div>
            </div>
            <table className={styles.table}>
                <tbody className={styles.tableBody}>
                    {tableElements.map((item: StrokeType) => (
                        <StrokeTable
                            key={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}