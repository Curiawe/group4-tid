import './schedule.css';
import { CARS } from '../../data/cars';
import { StatusTile } from './StatusTile';
import Audi from '../../Images/audi-a6.jpg'

// let's simulate the array returned by the data base
// Note: When implementing the database, replace this manual constant with the result of the function call
const carsArray = [
        CARS.FC12345,
        CARS.FC56789,
        CARS.FM23456,
        CARS.HM12345,
        CARS.HM23456,
        CARS.IH12345,
        CARS.IH23456,
        CARS.IH94302,
        CARS.JB12789,
        CARS.JF19386,
        CARS.JF94837]


// Full Table
function ScheduleTable () {
    return (
        <table>
            <HeaderRow/>
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

// Tiles Car Availability Auto-Generate all

function RenderAllResults (props) {
    let rows = [];
    for (var i=0; i<carsArray.length;i++) {
        rows.push(
            <tr>
            <ScheduleCarContainer car = {carsArray[i]}></ScheduleCarContainer>
            <RenderRow car = {carsArray[i]}/>
        </tr>
        )
    }
    return rows
}

