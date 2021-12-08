import './cards.css';
import ButtonStyled from '../buttons/ColorButton';
import { IconBody } from './IconBody';
import Pages from '../../pages/Pages';
import { CARS } from '../../data/cars';
import { CARGROUPS } from '../../data/carGroups';
import ColorIcon from './AvailabilityIcon';
import { Icon } from '@iconify/react'; 
import { TRANSFERS } from '../../data/transfer';

function BookingToGroup(x) {
    let group = x.carGroup;
    return(
        CARGROUPS[group]
    )
}

function CarToTransfer(x){
    let y = ""
    x = TRANSFERS[y].Car.License;
    return (
        y
    )
} 

function TransferCardBody(props) {
    let usedCar = ""
    let usedCarGroup = ""
    let outgoing = ""
    let incoming = ""

    switch (props.car) {

        case "ford-mondeo":
            usedCar = CARS.HM12345;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[4].Outgoing[0];
            incoming = TRANSFERS[4].Incoming[0];
            break;

        case "renault-captur":
            usedCar = CARS.IH94302;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[3].Outgoing[0];
            incoming = TRANSFERS[3].Incoming[0];
            break;

        case "vw-passat":
            usedCar = CARS.IH23456;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[7].Outgoing[0];
            incoming = TRANSFERS[7].Incoming[0];
            break;

        case "audi-a6":
            usedCar = CARS.FC56789;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[6].Outgoing[0];
            incoming = TRANSFERS[6].Incoming[0];
            break;

        case "honda-crv":
            usedCar = CARS.JB12789;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[0].Outgoing[0];
            incoming = TRANSFERS[0].Incoming[0];
            break;

        case "fiat-500":
            usedCar = CARS.JF19386;
            usedCarGroup = BookingToGroup(usedCar);
            outgoing = TRANSFERS[2].Outgoing[0];
            incoming = TRANSFERS[2].Incoming[0];
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
                <IconBody title={usedCar.fuelType} icon="droplet" />
                <IconBody title="Manual" icon="settings" />
                <ColorIcon title= {usedCar.Color} />
            </div>
            <div className="iconRow">
                <IconBody title={outgoing} icon="map-pin" />
                <IconBody title="(Outgoing)" />
            </div>
            <div className="iconRow">
                <IconBody title={incoming} icon="map-pin" />
                <IconBody title="(Incoming)" />
            </div>
            <div className="iconRow">
                <ColorIcon title={usedCar.relStatus} />
            </div>
        </div>
        <div className="btnMargin">
        <ButtonStyled link = {Pages.Walkins} color="PurpleBtn" primary="false" 
        className="buttonSmall" title="Select car"/>
        </div>
    </div>
    )
}

export default TransferCardBody
