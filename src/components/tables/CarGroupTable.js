import { CARGROUPS } from "../../data/carGroups";
import './tables.css';

function makeRows() {
    let rows = []
    CARGROUPS.map((group) => {
        let row = (
            <tr key = {group.name}>
                <td>{group.name}</td>
                <td>{group.Seats}</td>
                <td>{group.Baggage}</td>
                <td>{group.Price}</td>
            </tr>
        )
        rows.push(row)
        return null
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