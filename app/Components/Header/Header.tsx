"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { headerItems } from "@/app/utils/mock";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
    const [hover, setHover] = useState(0);
    const [isClicked, setIsClicked] = useState(0);

    const handleClick = (item: number) => {
        setIsClicked(item);
        setTimeout(() => setIsClicked(0), 100);
    };

    return (
        <div className={styles.container}>
            <Link href="/" style={{ cursor: "pointer" }}>
                <Image
                    src={"https://sashestudio.ru:4300/images/icon.png"}
                    width={80}
                    height={80}
                    alt="sticker"
                />
            </Link>

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