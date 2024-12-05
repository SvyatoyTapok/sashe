import Header from "./Components/Header/Header"
import VerticalBar from "./Components/VerticalBar/VerticalBar"
import Content from './Components/Content/Content'
import styles from './styles.module.css'

export default function HomePage() {
    return (
        <>
            <Header />
            <VerticalBar />
            <Content />
        </>
    )
}