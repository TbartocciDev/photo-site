import "./ItemsSection.css"
import GearItem from "./GearItem/GearItem"

export default function ItemsSection() {
    return (
        <div className="items-section">
            <h3>Overview</h3>
            <div className="items-container">
                <GearItem name={"vehicle"}/>
                <GearItem name={"bike"}/>
                <GearItem name={"backpack"}/>
                <GearItem name={"tent"} id="sub-item"/>
                <GearItem name={"camera"} id="sub-item"/>
                <GearItem name={"phone"} id="sub-item"/>
                <GearItem name={"computer"} id="sub-item"/>
                <GearItem name={"water"} id="sub-item"/>
                <GearItem name={"snacks"} id="sub-item"/>
                <GearItem name={"electronics"} id="sub-item"/>
            </div>
            <h3>View Detailed List</h3>
        </div>
    )
}