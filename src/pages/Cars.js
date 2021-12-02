import LargeCardBody from "../components/cards/CardsForOverview";
import '../components/cards/cards.css';
import audi from '../Images/audi-a6.jpg'
import honda from '../Images/honda-crv.jpg'
import renault from '../Images/renault-captur.jpg'



function Cars () {
    return (
        <div className="cardPageMargin">
            <div className="cardMargin">
                <LargeCardBody car="honda-crv" src={honda}/>
            </div>
            <div className="cardMargin">
                <LargeCardBody car="renault-captur" src={renault}/>
            </div>
            <div className="cardMargin">
                <LargeCardBody car="audi-a6" src={audi}/>
            </div>
        </div>  
    )
}

export default Cars