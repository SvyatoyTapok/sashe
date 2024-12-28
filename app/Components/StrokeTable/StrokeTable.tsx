import styles from './styles.module.css'
type StrokeType = {
    name: string,
    price: number,
}
export default function StrokeTable({ name, price }: StrokeType) {
    return (
        <tr>
            <th className={styles.tableText}>{name}</th>
            <th className={styles.tableText}>{price} ₽</th>
        </tr>
    )
}