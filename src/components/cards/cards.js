// import logo from './logo.svg';
import './cards.css';
import { IconBody } from './IconBody'
import ColorIcon from './AvailabilityIcon';
import { Icon } from '@iconify/react';
import honda from '../../Images/honda-crv.jpg';
import ButtonStyled from '../buttons/ColorButton';
import Pages from '../../pages/Pages';


function Card() {
  return (
<div className = "card">
    <img className = "cardImg" src = {honda} alt = "carpic"/>
    <div className = "h4Large"> VW PASSAT</div>
    <div className = "p1Large"> Car Group B</div>
    <div className = "p2"> AA-00000</div>
    <div className = "cardBodyLarge">
        <div className = "iconRow">
            <IconBody title="2-4" icon="user" />
            <IconBody title="3-5" icon="briefcase" />
            <div className="iconBody">
                <div className="mainIcons">
                    <Icon icon="mdi:car-door" width="23.07px" height="25.01px" />
                </div>
                <div className="mainDescription">5</div>
            </div>
        </div>
        <div className="iconRow">
            <IconBody title="Diesel" icon="droplet" />
            <IconBody title="Manual" icon="settings" />
            <ColorIcon title="RED" />
        </div>
        <div className="iconRow">
            <IconBody title="City Center" icon="map-pin" />
        </div>
        <div className="iconRow">
            <ColorIcon title="Available" />
        </div>
    </div>
    <div className="btnMargin">
        <ButtonStyled link = {Pages.Walkins} color="PurpleBtn" primary="false" 
        className="buttonSmall" title="Select car"/>
    </div>
</div> 
  )
}

export default Card;
