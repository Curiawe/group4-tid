import './schedule.css';
import { CARS } from '../../data/cars';
import { StatusTile } from './StatusTile';
import Audi from '../../Images/audi-a6.jpg'
import HeaderRow from './Headers';

// let's simulate the array returned by the data base
// Note: When implementing the database, replace this manual constant with the result of the function call
const carsArray = CARS

// Full Table
function ScheduleTable () {
    return (
        <table>
            <HeaderRow size={carsArray.length}/>
            <RenderAllResults/>
        </table>
    )
}


// Car Info Tile (Working on generating the little image for the car)
/* const image = CARS.JF19386.Image */

function ScheduleCarImg (props) {
    let carImage= <img src={Audi} alt={props.car.License} title = {props.car.License} height="48px"/>
        return (
            carImage
    )
}

function ScheduleCarContainer (props) {
    return(
        <td>
            <ScheduleCarImg car = {props.car}/>
            <p id="small" style={{marginTop:"4px", marginBottom:"4px"}}>{props.car.License}</p>
        </td>
    )
}

export {ScheduleCarContainer, ScheduleTable, ScheduleCarImg };

// Table Row car availability

function RenderRow(props) {
    let row = [];
    for (var i =0 ; i<6;i++){
        let carString = props.car.License
        let start = (8 + 2*i).toString + "-"
        let end =  (10+2*i)
        const id = carString+start+end
        row.push(<StatusTile key = {id} car={props.car}/>)
    }
    return row
}

// Tiles Car Availability Auto-Generate all

function RenderAllResults (props) {
    let rows = [];
    for (var i=0; i<carsArray.length;i++) {
        rows.push(
            <tr key={carsArray[i].License}>
                <ScheduleCarContainer car = {carsArray[i]}></ScheduleCarContainer>
                <RenderRow car = {carsArray[i]}/>
            </tr>
        )
    }
    return (
        <tbody>
            {rows}
        </tbody>
        )
}

