import styles from './styles.module.css'

type TimeItemProps = {
    value: string
    onClick: () => void
    setTimeValue: (value: string) => void
    timeValue: string
}

export default function TimeItem({ value, setTimeValue, timeValue }: TimeItemProps) {
    return (
        <div
            onClick={() => setTimeValue(value)}
            className={timeValue === value
                ? styles.activeContainer
                : styles.container
            }>
            {value}
        </div>
    )
}