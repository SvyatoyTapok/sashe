import styles from './styles.module.css'

type TextSectionTypes = {
    mainText: string,
    secondText: string
}

export default function TextSection({ mainText, secondText }: TextSectionTypes) {
    return (
        <div className={styles.container}>
            <div className={styles.verticalBar}></div>
            <div className={styles.textContainer}>
                <div style={{ fontSize: 26 }}>{mainText}</div>
                <div style={{ fontFamily: 'Raleway', fontSize: 14, marginTop: "12px", fontWeight: 200, lineHeight: 1.5 }}>{secondText}</div>
            </div>
        </div>
    )
}