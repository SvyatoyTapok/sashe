import styles from './styles.module.css'
import TextSection from '../TextSection/TextSection'
export default function SecondBlock() {
    return (
        <div className={styles.container}>
            <TextSection
                mainText='Мастерство персонала'
                secondText='Мы владеем всеми техниками маникюра
                и моделирования ногтей, а так же выполняем качественный
                аппаратный педикюр' />
            <TextSection
                mainText='Качественная стерилизация'
                secondText='Процедура обработки инструментов
                происходит в 3 этапа: дезинфекция, предстерилизационная очистка
                и стерилизация. Крафтовый пакет с инструментами вскрывается при вас' />
            <TextSection
                mainText='Разнообразие дизайнов'
                secondText='Мастера выполняют дизайны люблой сложности: будь
                то геометрия, градиент, художественная роспись или объёмная
                инкрустация' />
        </div>
    )
}