import './tables.css'
import { WALKINS } from '../../data/walkins'

function WalkinHeader () {
    return (
        <thead>
        <tr>
            <th>
                Date
            </th>
            <th>
                Estimate Walk-ins
            </th>
            <th>
                Registered
            </th>
        </tr>
    </thead>
    )
}

function WalkinRow (props) {
    return (
    <tr>
        <td>{WALKINS[1].Date}</td>
        <td>{WALKINS[1].estimate} </td>
        <td>{WALKINS[1].total}</td>
    </tr>
    )

}

function WalkinTable (props) {

    return (
        <table>
            <WalkinHeader />
            <tbody>
                <WalkinRow />
            </tbody>
        </table>
    )
}

export default WalkinTable