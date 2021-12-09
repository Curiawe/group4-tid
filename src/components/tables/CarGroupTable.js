import { Tablet } from "react-feather";
import { CARGROUPS } from "../../data/carGroups";
import './tables.css';

function makeRows() {
    let rows = []
    CARGROUPS.map((group) => {
        let row = (
            <tr key = {group[0]}>
                <td>{group[0]}</td>
                <td>{group[1]}</td>
                <td>{group[2]}</td>
                <td>{group[3]}</td>
            </tr>
        )
        rows.push(row)
    })

    return rows

}

function CarGroupTable() {



    return (
        <table style={{marginBottom:"32px"}} >
        <thead>
            <tr>
                <th>Car Group</th>
                <th>Seats</th>
                <th>Baggage Capacity</th>
                <th>Hourly Price</th>
            </tr>
        </thead>
        <tbody>
        {makeRows()}
        </tbody>
    </table>
)

}

export default CarGroupTable