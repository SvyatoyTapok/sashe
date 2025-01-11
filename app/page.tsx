import AboutBlock from "./Components/AboutBlock/AboutBlock"
import FirstBlock from "./Components/FirstBlock/FirstBlock"
import SecondBlock from "./Components/SecondBlock/SecondBlock"
import TableComponent from "./Components/TableComponent/TableComponent"
import SectionName from "./Components/SectionName/SectionName"
import SpecialOfferBlock from "./Components/SpecialOfferBlock/SpecialOfferBlock"
import GalleryBlock from "./Components/GalleryBlock/GalleryBlock"
export default function HomePage() {
    return (
        <>
            <FirstBlock />
            <SecondBlock />
            <SectionName scrollId='table' text='Услуги и цены' />
            <TableComponent />
            <SectionName scrollId='about' text='Обо мне' />
            <AboutBlock />
            <SpecialOfferBlock />
            <SectionName scrollId='gallery' text='Мои работы' />
            <GalleryBlock />
        </>
    )
}