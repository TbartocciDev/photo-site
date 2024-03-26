import "./GearPage.css"

// sections
import DescriptionSection from "./DescriptionSection/DescriptionSection"
import ItemsSection from "./ItemsSection/ItemsSection"

export default function GearPage() {
    return (
        <main className="GearPage" id="main-page">
            <DescriptionSection />
            <ItemsSection />
        </main>
    )
}