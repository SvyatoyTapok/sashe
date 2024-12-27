'use client'
import { useState } from 'react'
import StrokeTable from '../StrokeTable/StrokeTable'
import styles from './style.module.css'
export default function TableComponent() {

    const [clicked, setClicked] = useState(1)
    const [hover, setHover] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.mainText}>
                <p>{'Услуги и цены'}</p>
            </div>
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
                    ><p
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
                <tbody>
                    <StrokeTable
                        name='Маникюр без покрытия'
                        price={700}
                    />
                    <StrokeTable
                        name='Маникюр c однотонным покрытием гель-лак'
                        price={1200}
                    />
                    <StrokeTable
                        name='Маникюр с однотонным покрытием гель-лак (френч/лунки)'
                        price={1400}
                    />
                    <StrokeTable
                        name='Укрепление твёрдым гелем'
                        price={400}
                    />
                    <StrokeTable
                        name='Снятие наращивания'
                        price={200}
                    />
                    <StrokeTable
                        name='Снятие гель-лака'
                        price={200}
                    />
                    <StrokeTable
                        name='Ремонт 1 ногтя'
                        price={100}
                    />
                    <StrokeTable
                        name='Ремонт трещин перед покрытием'
                        price={50}
                    />
                </tbody>
            </table>
        </div>
    )
}