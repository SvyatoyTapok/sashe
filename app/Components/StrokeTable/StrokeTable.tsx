type StrokeType = {
    name: string,
    price: number,
}
export default function StrokeTable({ name, price }: StrokeType) {
    return (
        <tr>
            <th>{name}</th>
            <th>{price} ₽</th>
        </tr>
    )
}