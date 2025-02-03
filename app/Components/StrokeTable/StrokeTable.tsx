import styles from './styles.module.css'

type StrokeType = {
    name: string,
    cost: number,
    id: number,
}

export default function StrokeTable({ name, cost }: StrokeType) {
    return (
        <tr className={styles.tableRow}>
            <th className={styles.tableTextName}>{name}</th>
            <th className={styles.tableTextCost}>{cost} ₽</th>
        </tr>
    )
}