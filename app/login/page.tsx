"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css'

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "lolop12321") {
            document.cookie = "auth=true; path=/";
            router.push("/admin");
        } else {
            alert("Неверный пароль!");
        }
    };

    return (
        <div className={styles.mainContainer}>
            <form onSubmit={handleLogin} className={styles.formContainer}>
                <h1 className={styles.enterText}>Вход в админку</h1>
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Войти
                </button>
            </form>
        </div>
    );
}