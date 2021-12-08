import { useState } from "react";
import { CARGROUPS } from "../../data/carGroups";
import { BOOKINGS } from "../../data/bookings"
import { CARS } from "../../data/cars";
import { TRANSFERS } from "../../data/transfer";
import ButtonStyled from "../buttons/ColorButton"
import { ButtonNoLink } from "../buttons/ColorButton";
import InputField from "../inputField";

function littleRow (item, column, date) {
    const currDate = new Date(date).toLocaleDateString("da-DA")
    console.log("current Date: " + currDate)
    let avail = 0
    let book = 0
    let rel = 0

    // check bookings for today
    BOOKINGS.map((booking) => {
        const bookingDate = new Date(booking.Pickup.time).toLocaleDateString("da-DA")
        if ( bookingDate === currDate && booking.carGroup === item) {
            book++;
            }
        }
    )


    // check available cars
    // must also check for soon to be released cars!
    CARS.map((car) =>{
        if (car.carGroup === item && car.Status === "Available") {
            avail++
        }
    } )

    // check released cars
    TRANSFERS.map((transfer) => {
        console.log("current transfer:")
        console.log(transfer)
        console.log(item)
        let transferDate = new Date(transfer.Date).toLocaleDateString("da-DA")
        console.log("Transfer Date: " + transferDate)
        let car = transfer.Car
        if (transferDate === currDate && car.carGroup === item) {
            rel++
        }
    })

    let need = book - avail
    column.push(
        <tr>
            <td id={item[0]}>{item[0]}</td>
            <td>{book}</td>
            <td>{avail}</td>
            <td>{rel}</td>
            <td>{need} <ButtonStyled link="/transfers" 
                            className="buttonSmall" 
                            color="DarkBlueBtn" 
                            title="Transfer"
                            style={{padding:"0px"}} /></td>
        </tr>)
}

function TableRow (props) {
    let column = []
    let date = new Date(props.date)
    console.log("starting render of rows")
    CARGROUPS.map((item) => (littleRow(item, column, date)))

    return (   
        <>
        {column}
        </>
    )
}

export default function DailyOverviewTable () {

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <p id="large">Current Date: { (new Date(date)).toLocaleDateString() }</p>
            <div style={{display:"flex", flexDirection:"row", marginBottom:"16px", alignItems:"center"}}>
                <form>
                    <InputField className="inputField" type="date" onChange={(e) => setDate(e.target.value)} placeHolder="Select Date"/>
                </form>
                <ButtonNoLink onClick={(e) => setDate(new Date ())} title="Jump to Today" primary="true" className="buttonMedium" color="DarkBlueBtn"/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Car Group</th>
                        <th>Bookings</th>
                        <th>Available</th>
                        <th>Released</th>
                        <th>Need</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow date={date}/>
                </tbody>
            </table>
        </div>
    )
}