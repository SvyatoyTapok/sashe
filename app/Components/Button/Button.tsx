'use client'
import { useState } from 'react'
import styles from './styles.module.css'
type ButtonType = {
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


    return (
        <div
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
            }}
            className={styles.container}
        >{text}</div>
    )
}
