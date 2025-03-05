"use client";
import styles from './styles.module.css'

export default function AdminPage() {
    const logout = () => {
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // Удаляем куку
        window.location.href = "/login";
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Добро пожаловать в админку!</h1>




            <button onClick={logout} className={styles.button}>
                Выйти
            </button>
        </div>
    );
}