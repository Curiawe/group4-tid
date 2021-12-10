import './tables.css';
import { LOCATIONS} from '../../data/locations';

function LocationsTable () {
        let table = []

        LOCATIONS.map((office) => {
            let row = (
                <tr key={office.ID}>
                    <td>{office.Location}</td>
                    <td>{office.Address}</td>
                    <td>{office.Email}</td>
                    <td>{office.Phone}</td>
                    <td>{office.Region}</td>
                </tr>
            )
            table.push(row)
            return null
        })


    return (
        <table>
            <thead>
                <tr>
                    <th>Location Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )

}

export default LocationsTable