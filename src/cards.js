// import logo from './logo.svg';
import './cards.css';
import FeatherIcon from 'feather-icons-react';

function PersIcon(props) {
    return <FeatherIcon icon="user"/>; 
  }

function Luggage(props) {
    return <FeatherIcon icon="briefcase"/>; 
  }

  function Gas(props) {
      return <FeatherIcon icon="droplet"/>;
  }

  function Gear(props) {
    return <FeatherIcon icon="settings"/>; 
  }
  
  function MapPin(props) {
    return <FeatherIcon icon="map-pin"/>; 
  }



function Card() {
  return (
    <div className = "card">
    <div className = "cardImg"></div>
    <div className = "h4Large"> VW PASSAT</div>
    <div className = "p1Large"> Car Group B</div>
    <div className = "p2"> AA-00000</div>
    <div className = "cardBodyLarge">
        <div className = "iconRow">
            <div className = "iconBody">
                <div className = "mainIcons"><PersIcon /></div> 
                <div className ="mainDescription">2-4</div>
            </div>
            <div className = "iconBody">
                <div className = "mainIcons"><Luggage /></div> 
                <div className ="mainDescription">3-5</div>
            </div>
            <div className = "iconBody2">
                <div className = "mainIcons"></div> 
                <div className ="mainDescription">5</div>
            </div>
        </div>
        <div className = "iconRow">
            <div className = "iconBody">
                <div className = "mainIcons"><Gas /></div> 
                <div className ="mainDescription">Diesel</div>
            </div>
            <div className = "iconBody">
                <div className = "mainIcons"><Gear /></div> 
                <div className ="mainDescription">Manual</div>
            </div>
            <div className = "iconBody2">
                <div className = "colorIcon"></div> 
                <div className ="mainDescription">RED</div>
            </div>
        </div>

        <div className = "iconRow">
            <div className = "iconBody">
                <div className = "mainIcons"><MapPin /></div> 
                <div className ="mainDescription">City Center</div>
            </div>
        </div>

        
        <div className = "iconRow">
            <div className = "iconBody">
                <div className = "availabilityIcon"></div> 
                <div className ="mainDescription">Available</div>
            </div>
        </div>
    </div>
    <div className = "cardButton">Select car</div>
</div> 
  )
}

export default Card;
