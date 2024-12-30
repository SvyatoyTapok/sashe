import styles from './styles.module.css'
type SectionNameType = {
    text: string,
    scrollId: string,
}

export default function SectionName({ text, scrollId }: SectionNameType) {
    return (
        <div className={styles.mainText} id={scrollId}>
            <p>{text}</p>
        </div>
    );
}