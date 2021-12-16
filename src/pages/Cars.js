import LargeCardBody from "../components/cards/CardsForOverview";
import { CARS } from "../data/cars";
import '../components/cards/cards.css';


function Cars () {
    
    const cards = []

    CARS.map((selCar) => {
        cards.push(<div key={selCar.License} className="cardMargin">
        <LargeCardBody car={selCar.License}/>
        </div>)
    })
    
    return (
        <>
        <div style={{ marginLeft: "32px" }}>
             <div className="header">
                <div className="title">
                    <h1>Car Overview</h1>
                </div>
             </div>
        </div>
        <div className="cardPageMargin">
            {cards}
        </div>
            
        </>
    )
}

export default Cars