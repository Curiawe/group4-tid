import './cards.css';
import ButtonStyled from '../buttons/ColorButton';
import { IconBody } from './IconBody';
import Pages from '../../pages/Pages';
import { CARS } from '../../data/cars';
import { CARGROUPS } from '../../data/carGroups';
import ColorIcon from './AvailabilityIcon';
import { Icon } from '@iconify/react';


function BookingToGroup(x) {
    let group = x.carGroup;
    return(
        CARGROUPS[group]
    )
}

function LargeCardBody(props) {
    let usedCar = ""
    let usedCarGroup = ""

    switch (props.car) {

        case "ford-mondeo":
            usedCar = CARS.HM12345;
            usedCarGroup = BookingToGroup(usedCar);
            break;

        case "renault-captur":
            usedCar = CARS.IH94302;
            usedCarGroup = BookingToGroup(usedCar);
            break;

        case "vw-passat":
            usedCar = CARS.IH23456;
            usedCarGroup = BookingToGroup(usedCar);
            break;

        case "audi-a6":
            usedCar = CARS.FC56789;
            usedCarGroup = BookingToGroup(usedCar);
            break;

        case "honda-crv":
            usedCar = CARS.JB12789;
            usedCarGroup = BookingToGroup(usedCar);
            break;

        case "fiat-500":
            usedCar = CARS.JF19386;
            usedCarGroup = BookingToGroup(usedCar);
            break;
    }

    return (
    <div className = "card">
        <img className = "cardImg" src={props.src} alt = "carpic"/>
        <div className="h4Large"> {usedCar.Model} </div>
        <div className="p1Large"> {usedCarGroup[0]}</div>
        <div className="p2"> {usedCar.License} </div>
        <div className="cardBodyLarge">
            <div className="iconRow">
                <IconBody title={usedCarGroup[1]} icon="user" />
                <IconBody title={usedCarGroup[2]} icon="briefcase" />
                <div className="iconBody">
                    <div className="mainIcons">
                        <Icon icon="mdi:car-door" width="23.07px" height="25.01px" />
                    </div>
                    <div className="mainDescription">5</div>
                </div>
            </div>

            <div className="iconRow">
                <IconBody title={usedCar.fuelType} icon="droplet" />
                <IconBody title="Manual" icon="settings" />
                <ColorIcon title= {usedCar.Color} />
            </div>
            <div className="iconRow">
                <IconBody title={usedCar.Location[0]} icon="map-pin" />
            </div>
            <div className="iconRow">
                <ColorIcon title={usedCar.Status} />
            </div>
        </div>
        <div className="btnMargin">
        <ButtonStyled link = {Pages.Walkins} color="PurpleBtn" primary="false" 
        className="buttonSmall" title="Select car"/>
        </div>
    </div>
    )
}

export default LargeCardBody
