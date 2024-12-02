"use client"

import styles from './styles.module.css'
import Image from 'next/image'
import vk_icon from '../../images/vk.svg'
import tg_icon from '../../images/tg.svg'
import inst_icon from '../../images/inst.svg'

export default function VerticalBar() {
    return (
        <div className={styles.container}>
            <div className={styles.decorateItem}></div>
            <a target='_' href='https://vk.com/ossssmanova'><Image className={styles.item} src={vk_icon} width={48} height={48} alt={'VK'} /></a>
            <a target='_' href='https://ttttt.me/osssmanova'><Image className={styles.item} src={tg_icon} width={48} height={48} alt={'TG'} /></a>
            <a target='_' href='https://instagram.com'><Image className={styles.item} src={inst_icon} width={48} height={48} alt={'IG'} /></a>
        </div>
    )
}