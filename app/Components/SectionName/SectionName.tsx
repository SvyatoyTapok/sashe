import styles from './styles.module.css'
type SectionNameType = {
    text: string
}

export default function SectionName({ text }: SectionNameType) {
    return (
        <div className={styles.mainText}>
            <p>{text}</p>
        </div>
    );
}