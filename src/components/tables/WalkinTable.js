import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';

function walkin (day, estimate, registered) {
    const walkin = {estimateDay : day,
        estimate : estimate,
        registered : registered}

    return (
        walkin
    )
}

let walkins = []
walkins.push(walkin(new Date(2021,11,2), 3,0))
walkins.push(walkin(new Date(2021,11,3), 4,4))
walkins.push(walkin(new Date(2021,11,4), 3,3))
walkins.push(walkin(new Date(2021,11,5), 2,5))
walkins.push(walkin(new Date(2021,11,6), 4,2))
walkins.push(walkin(new Date(2021,11,7), 3,1))
walkins.push(walkin(new Date(2021,11,8), 1,5))
walkins.push(walkin(new Date(2021,11,9), 0,0))
walkins.push(walkin(new Date(2021,11,10), 0,0))

console.log(walkins)

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
    let entryFound = false
    let inputDate = props.date
    let outputDate = new Date(props.date).toLocaleDateString("da-DA");
    let outputEstimate
    let outputRegistered

    for (let i = 0; i < walkins.length; i++){
        let currentWalkin = walkins[i];
        console.log(currentWalkin);
        let currentDate = currentWalkin.estimateDay;
        console.log(currentDate);
        let currentDateString = currentDate.toString();
        console.log("trying to access estimate date. Date: " + currentDateString)
        if (inputDate === currentDate) {
            console.log ("The date is a match!")
            entryFound = true
        } else {
            console.log("entry not found.")
        }

    }

    if (!entryFound) {

    }



    return (
    <tr>
        <td>{outputDate}</td>
        <td>{outputEstimate} </td>
        <td>{outputRegistered}</td>
    </tr>
    )

}

/**
 * 
 * @param {Date} props defines the range of the table. 
 * @returns a <table /> element with 11 rows, showing consecutive dates and their walk-in status,
 * with the selected date as the middle element.
 */
function WalkinTable () {
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