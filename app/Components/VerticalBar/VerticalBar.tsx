"use client"
import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import vk_icon from '../../images/vk.svg'
import tg_icon from '../../images/tg.svg'
import inst_icon from '../../images/inst.svg'

export default function VerticalBar() {

    const [hover, setHover] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.decorateItem}></div>
            <a
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(0)}
                target='_'
                href='https://vk.com/ossssmanova'>
                <Image
                    className={hover === 1 ? styles.hovered_item : styles.item}
                    src={vk_icon}
                    width={48}
                    height={48}
                    alt={'VK'}
                />
            </a>
            <a
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(0)}
                target='_'
                href='https://ttttt.me/osssmanova'>
                <Image
                    className={hover === 2 ? styles.hovered_item : styles.item}
                    src={tg_icon}
                    width={48}
                    height={48}
                    alt={'TG'}
                />
            </a>
            <a
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(0)}
                target='_'
                href='https://instagram.com'>
                <Image
                    className={hover === 3 ? styles.hovered_item : styles.item}
                    src={inst_icon}
                    width={48}
                    height={48}
                    alt={'IG'} />
            </a>
            <div className={styles.decorateItem}></div>
        </div >
    )
}