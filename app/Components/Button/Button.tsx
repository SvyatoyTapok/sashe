'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
type ButtonType = {
    onClick?: () => void
    width?: number | string
    bgColor?: string
    height?: number | string
    text?: string
    fontSize?: number
    marginTop?: number
    borderRadius?: number
    hoveredColor?: string
}
export default function Button({
    width,
    bgColor,
    height,
    text,
    fontSize,
    marginTop,
    borderRadius,
    hoveredColor
}: ButtonType) {
    const [hover, setHover] = useState(false)
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
    };
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href='https://t.me/osssmanova'>
            <div
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    marginTop: marginTop ? marginTop : 0,
                    width: width ? width : 300,
                    backgroundColor: hover ? hoveredColor : bgColor,
                    height: height ? height : 100,
                    fontSize: fontSize ? fontSize : 24,
                    borderRadius: borderRadius ? borderRadius : 0,
                    transition: '0.33s ease',
                    transform: isClicked ? 'scale(0.9)' : 'scale(1)',
                }}
                className={styles.container}
            >{text}</div>
        </Link>
    )
}
