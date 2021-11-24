import './tables.css'



function WalkinTable (props) {

    return (
        <table>
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
            <tbody>
                <tr>
                    <td>24.11.2021</td>
                    <td>3</td>
                    <td>5</td>
                </tr>
            </tbody>
        </table>
    )
}

export default WalkinTable