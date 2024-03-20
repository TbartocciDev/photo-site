import "./SortSection.css"

export default function SortSection() {
    return (
        <div className="SortSection">
            <div className="categories-container">
                <p className="sort-category">All</p>
                <p className="sort-category">Youtube</p>
                <p className="sort-category" id="selected-category">Guides</p>
                <p className="sort-category">Gear</p>
                <p className="sort-category">Itinerary</p>
                <p className="sort-category">Life</p>
                <p className="sort-category">General</p>
            </div>
            <div className="search-container">
                <p>Search...</p>
            </div>
        </div>
    )
}