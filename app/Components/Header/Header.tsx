"use client"

import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import sticker from '../../images/sticker.png'
import { headerItems } from '@/app/utils/mock'


export default function Header() {
    const [hover, setHover] = useState(0)
    return (
        <div className={styles.container}>
            <a><Image src={sticker} width={80} height={80} alt='sticker' /></a>
            {headerItems.map(item =>
                <a
                    key={item.id}
                    onMouseLeave={() => setHover(0)}
                    onMouseEnter={() => setHover(item.id)}
                    href={item.href}
                    className={hover === item.id ? styles.hovered_item : styles.default_item}
                >
                    {item.text}
                </a>)}
        </div>
    )
}