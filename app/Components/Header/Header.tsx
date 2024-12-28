"use client"

import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import sticker from '../../images/sticker.png'
import { headerItems } from '@/app/utils/mock'


export default function Header() {
    const [hover, setHover] = useState(0)
    const [isClicked, setIsClicked] = useState(0)
    const handleClick = (item: number) => {
        setIsClicked(item);
        setTimeout(() => setIsClicked(0), 100);
    };
    return (
        <div className={styles.container}>
            <a><Image src={sticker} width={80} height={80} alt='sticker' /></a>
            {headerItems.map(item =>
                <a
                    key={item.id}
                    onMouseLeave={() => setHover(0)}
                    onMouseEnter={() => setHover(item.id)}
                    onClick={() => handleClick(item.id)}
                    href={item.href}
                    style={isClicked === item.id ? { scale: 0.8 } : { scale: 1 }}
                    className={
                        hover === item.id ? styles.hovered_item : styles.default_item

                    }
                >
                    {item.text}
                    <p className={hover === item.id ? styles.hovered_underline : styles.underline}></p>
                </a>

            )}
        </div>
    )
}