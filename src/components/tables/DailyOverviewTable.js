import { useState } from "react";
import { CARGROUPS } from "../../data/carGroups";
import { BOOKINGS } from "../../data/bookings"

function littleRow (item, column) {
    let avail = 0
    let book = 0
    let rel = 0
    BOOKINGS.map((item, id) => {
        if (item === id.carGroup) {
            avail++;
            book++;
            rel++;
            }
        }
    )
    let need = avail - book
    column.push(
        <tr>
            <td id={item[0]}>{item[0]}</td>
            <td>{avail}</td>
            <td>{book}</td>
            <td>{rel}</td>
            <td>{need} <button>Transfer</button></td>
        </tr>)
}

function TableRow () {
    let column = []
    CARGROUPS.map((item) => (littleRow(item,column)))

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
            <div style={{display:"flex", flexDirection:"row", marginBottom:"16px"}}>
                <form style={{marginRight:"32px"}}>
                    <input className = "inputField" type="date" onChange = {(e) => setDate(e.target.value)}></input>
                </form>
                <button onClick={(e) => setDate(new Date ())}>Jump to today</button>
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