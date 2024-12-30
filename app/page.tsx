import AboutBlock from "./Components/AboutBlock/AboutBlock"
import FirstBlock from "./Components/FirstBlock/FirstBlock"
import SecondBlock from "./Components/SecondBlock/SecondBlock"
import TableComponent from "./Components/TableComponent/TableComponent"
import SectionName from "./Components/SectionName/SectionName"
export default function HomePage() {
    return (
        <>
            <FirstBlock />
            <SecondBlock />
            <SectionName text='Услуги и цены' />
            <TableComponent />
            <SectionName text='Обо мне' />
            <AboutBlock />
        </>
    )
}