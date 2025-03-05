"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link"; // ✅ Импортируем Next.js Link
import { headerItems } from "@/app/utils/mock";
import { Link as ScrollLink } from "react-scroll"; // Переименовываем, чтобы не конфликтовало

export default function Header() {
    const [hover, setHover] = useState(0);
    const [isClicked, setIsClicked] = useState(0);

    const handleClick = (item: number) => {
        setIsClicked(item);
        setTimeout(() => setIsClicked(0), 100);
    };

    return (
        <div className={styles.container}>
            {/* ✅ Используем Next.js Link для перехода на главную */}
            <Link href="/" style={{ cursor: "pointer" }}>
                <Image
                    src={"http://localhost:4300/images/icon.png"}
                    width={80}
                    height={80}
                    alt="sticker"
                />
            </Link>

            {/* Оставляем react-scroll для прокрутки */}
            {headerItems.map((item) => (
                <ScrollLink
                    smooth={true}
                    duration={600}
                    offset={-100}
                    to={item.scrollId}
                    key={item.id}
                    onMouseLeave={() => setHover(0)}
                    onMouseEnter={() => setHover(item.id)}
                    onClick={() => handleClick(item.id)}
                    style={isClicked === item.id ? { scale: 0.8 } : { scale: 1 }}
                    className={hover === item.id ? styles.hovered_item : styles.default_item}
                >
                    {item.text}
                    <div
                        className={hover === item.id ? styles.hovered_underline : styles.underline}
                    ></div>
                </ScrollLink>
            ))}
        </div>
    );
}