import './schedule.css';
import { CARS } from '../../data/cars';
import { COLORS } from '../../values/colors';


// Full Table
function ScheduleTable () {
    return (
        <table>
            <HeaderRow/>
            <tr>
                <ScheduleCarTile car = {CARS.JF19386}></ScheduleCarTile>
                <RenderRow car = {CARS.JF19386}/>
            </tr>
            <tr>
                <ScheduleCarTile car = {CARS.FM23456}/>
                <RenderRow car = {CARS.FM23456}/>

            </tr>
        </table>
    )
}


// Car Info Tile (Working on generating the little image for the car)
/* const image = CARS.JF19386.License */

function ScheduleCarImg (props) {
    return (
        <img src={props.car.Image} alt={props.car.License} title = {props.car.License}>{props.car.license}</img>
    )
}

function ScheduleCarContainer (props) {
    return(
        <div>
            <ScheduleCarImg car = {props.car}/>
            <p id="small">{props.car.License}</p>
        </div>
    )
}

function ScheduleCarTile (props) {

    return (
        <td>
            <ScheduleCarContainer car={props.car}/>
        </td>
    )
}

export {ScheduleCarTile, ScheduleTable, ScheduleCarImg };

// Empty Tile

function EmptyScheduleTile(props){
    return (
        <td></td>
    )
}

// Formatted Tile

const colorMap = {
    // this first part is used for availability
    Unavailable: COLORS.Red300,
    Available: COLORS.Green400,
    Returned: COLORS.Green600,
    Rented: COLORS.Blue300,
    Transfer: COLORS.Purple300,
    Service: COLORS.Yellow400,
}

function StatusTile(props) {
    console.log (props.car.Status)
    let bgColor;
    switch (props.car.Status) {
        case "Rented":
            bgColor = colorMap.Rented
            break;
        
        case "Returned":
            bgColor = colorMap.Returned
            break;

        case "Transfer":
            bgColor = colorMap.Transfer
            break;

        case "Unavailable":
            bgColor = colorMap.Unavailable
            break;

        default:
            break;
    }
    return (
        <td style={{backgroundColor:bgColor}}/>
    )
}

// Day Header

// Table Row Date Header

// Tiles Date Header

// Table Row Hours Header
function HeaderRow (props) {
    return (
        <tr>
        <th id="small">
            4 cars found
        </th>
        <th>
            8-10
        </th>
        <th>
            10-12
        </th>
        <th>
            12-14
        </th>
        <th>
            14-16
        </th>
        <th>
            16-18
        </th>
        <th>
            18-20
        </th>
    </tr>
    )
}

// Tiles Hours Header

// Table Row car availability

function RenderRow(props) {
    let row = [];
    for (var i =0 ; i<6;i++){
        row.push(<StatusTile car={props.car}/>)
    }
    return row
}

// Tiles Car Availability