import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';

//Data
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
    const rowDate = new Date (props.date).toLocaleDateString('da-DA', { year: 'numeric', month: '2-digit', day: '2-digit' })
    return (
    <tr>
        <td>{rowDate}</td>
        <td>{WALKINS[1].estimate} </td>
        <td>{WALKINS[1].total}</td>
    </tr>
    )

}

/**
 * 
 * @param {Date} props defines the range of the table. 
 * @returns a <table /> element with 11 rows, showing consecutive dates and their walk-in status,
 * with the selected date as the middle element.
 */
function WalkinTable (props) {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
      console.log(`New date selected - ${newDate.toString()}`);
      setDate(newDate);
    };


    return (
        <>
        <DatePicker onChange={onChange} selected={date} />
        <table>
            <WalkinHeader />
            <tbody>
                <WalkinRow date={date}/>
            </tbody>
        </table>
        </>
    )
}

export default WalkinTable