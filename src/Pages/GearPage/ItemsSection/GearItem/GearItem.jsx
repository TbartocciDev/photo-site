import "./GearItem.css"

// import bag from './public/bag.png'

export default function GearItem({name, id}) {
    return (
        <div className="GearItem" id={id}>
            <div className="gear-img-holder">
                <img src={process.env.PUBLIC_URL+'/items/colored/'+name+'.png'} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}