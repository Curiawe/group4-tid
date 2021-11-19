// import logo from './logo.svg';
import './cards.css';
import {IconBody} from './IconBody';
import ColorIcon from './AvailabilityIcon';


function Card() {
  return (
    <div className = "card">
    <img className = "cardImg" href = "./Images/fiat-500.jpg" alt = "carpic"/>
    <div className = "h4Large"> VW PASSAT</div>
    <div className = "p1Large"> Car Group B</div>
    <div className = "p2"> AA-00000</div>
    <div className = "cardBodyLarge">
        <div className = "iconRow">
            <IconBody title="2-4" icon="user" />
            <IconBody title="3-5" icon="briefcase" />
            <IconBody title="5" icon="heart" />
        </div>
        <div className = "iconRow">
            <IconBody title="Diesel" icon="droplet" />
            <IconBody title="Manual" icon="settings" />
            <ColorIcon title="RED" />
        </div>
        <div className = "iconRow">
            <IconBody title="City Center" icon="map-pin" />
        </div>
        <div className = "iconRow">
            <ColorIcon title="Available" />
        </div>
    </div>
    <div className = "cardButton">Select car</div>
</div> 
  )
}

export default Card;
