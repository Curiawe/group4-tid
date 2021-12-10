import '../components/cards/cards.css';
import audi from '../Images/audi-a6.jpg'
import honda from '../Images/honda-crv.jpg'
import renault from '../Images/renault-captur.jpg'
import TransferCardBody from '../components/cards/TransferCards';



function TransferOverview () {
    return (
        <>
        <div className="header">
                <div className="title">
                    <h1>Transfer Overview</h1>
                </div>
        </div>
        <div className="cardPageMargin">
            <div className="cardMargin">
                <TransferCardBody car="JB12789" src={honda}/>
            </div>
            <div className="cardMargin">
                <TransferCardBody car="IH94302" src={renault}/>
            </div>
            <div className="cardMargin">
                <TransferCardBody car="FC56789" src={audi}/>
            </div>
        </div>  
        </>
    )
}

export default TransferOverview