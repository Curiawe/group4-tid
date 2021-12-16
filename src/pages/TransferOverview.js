import '../components/cards/cards.css';
import audi from '../Images/audi-a6.jpg'
import honda from '../Images/honda-crv.jpg'
import renault from '../Images/renault-captur.jpg'
import TransferCardBody from '../components/cards/TransferCards';
import { CARS } from "../data/cars";



function TransferOverview () {
    const cards = []

    CARS.map((selCar) => {
        cards.push(<div key={selCar.License} className="cardMargin">
        <TransferCardBody car={selCar.License}/>
        </div>)
    })

    return (
        <>
        <div style={{ marginLeft: "32px" }}>
            <div className="header">
                <div className="title">
                    <h1>Transfer Overview</h1>
                </div>
            </div>
        </div>
        <div className="cardPageMargin">
            {cards}
        </div>  
        </>
    )
}

export default TransferOverview