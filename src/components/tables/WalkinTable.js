import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';

//Data
import { WALKINS } from '../../data/walkins'

let walkins = []
walkins.push(WALKINS['16.12.2021'])
walkins.push(WALKINS['17.12.2021'])
walkins.push(WALKINS['18.12.2021'])
walkins.push(WALKINS['19.12.2021'])
walkins.push(WALKINS['20.12.2021'])
walkins.push(WALKINS['21.12.2021'])
walkins.push(WALKINS['22.12.2021'])
walkins.push(WALKINS['23.12.2021'])
walkins.push(WALKINS['24.12.2021'])
walkins.push(WALKINS['25.12.2021'])
walkins.push(WALKINS['26.12.2021'])

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
    //let bool = (walkins.find(rowDate))
    console.log(walkins.find((el) => {
        return (el.Date === props.date)
    }))
    if (!walkins.find((el) => {
        return (el.Date === props.date)
    })){// if the current date is not part of walkins, then
        walkins.push({rowDate : {Date: props.date, estimate: 0, total: 0, changeable: true}}) 
    }

    // find the element in the array, then return the estimate
    let estimate = (!walkins.find((el) => {
        if (el.Date === props.date) {
            return (el.estimate)
        }
    }))
    let total = WALKINS[rowDate].total
    return (
    <tr>
        <td>{rowDate}</td>
        <td>{estimate} </td>
        <td>{total}</td>
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