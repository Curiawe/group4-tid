import { useState } from "react";
import { CARGROUPS } from "../../data/carGroups";
import { BOOKINGS } from "../../data/bookings"
import ButtonStyled from "../buttons/ColorButton"
import { ButtonNoLink } from "../buttons/ColorButton";
import InputField from "../inputField";

function littleRow (item, column, date) {
    const currDate = new Date(date).toLocaleDateString
    let avail = 0
    let book = 0
    let rel = 0
    BOOKINGS.map((booking) => { // item is the 
        console.log("current Booking: ")
        console.log(booking)
        const bookingDate = new Date(booking.Pickup.time).toLocaleDateString
        if ( bookingDate === currDate && booking.carGroup === item) {
            book++;
            console.log("increment booking")
            }
        }
    )
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

function TableRow () {
    let column = []
    CARGROUPS.map((item) => (littleRow(item, column)))

    return (   
        <>
        {column}
        </>
    )
}

export default function DailyOverviewTable (props) {


    

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
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}