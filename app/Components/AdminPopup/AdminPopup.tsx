import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { useState } from 'react';
import { closeModal } from '@/app/Store/modalSlice';
import { useAddPriceMutation } from '@/app/Store/pricesSlice';

export default function AdminPopup() {
    const [addPrice, { isLoading, isError }] = useAddPriceMutation(); // Деструктурируем результат мутации
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [priceType, setPriceType] = useState("Маникюр");
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    const handleSendPrice = async () => {
        if (!name || !cost || !priceType) {
            alert("Заполните все поля!");
            return;
        }
        try {
            await addPrice({ name, cost: Number(cost), price_type: priceType }).unwrap();
            dispatch(closeModal());
            setName("");
            setCost("");
            setPriceType("Маникюр");
        } catch (error) {
            console.error("Ошибка при добавлении цены:", error);
            alert("Ошибка при добавлении цены");
        }
    }

    return isOpen ? (
        <div onClick={() => dispatch(closeModal())} className={styles.container}>
            <div onClick={(e) => e.stopPropagation()} className={styles.window}>
                <form onSubmit={handleSendPrice}>
                    <textarea
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            minHeight: "50px",
                            resize: "both",
                            overflow: "auto",
                        }}
                        placeholder="Введите название"
                    />
                    <input
                        type="number"
                        placeholder="Цена"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        required
                    />
                    <select value={priceType} onChange={(e) => setPriceType(e.target.value)}>
                        <option value="Маникюр">Маникюр</option>
                        <option value="Педикюр">Педикюр</option>
                        <option value="Дизайн">Дизайн</option>
                    </select>
                    <button className={styles.deleteButton} type="submit" disabled={isLoading}>Добавить</button>
                </form>
                {isError && <p style={{ color: "red" }}>Ошибка при добавлении цены</p>}
            </div>
        </div>
    ) : null;
}