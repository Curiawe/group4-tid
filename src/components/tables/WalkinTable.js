import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';

function walkin (day, estimate, registered) {
    const walkin = {estimateDay : day,
        Estimate : estimate,
        Registered : registered}

    return (
        walkin
    )
}

let walkins = []
walkins.push(walkin(Date(2021,12,2), 3,0))
walkins.push(walkin(Date(2021,12,3), 4,4))
walkins.push(walkin(Date(2021,12,4), 3,3))
walkins.push(walkin(Date(2021,12,5), 2,5))
walkins.push(walkin(Date(2021,12,6), 4,2))
walkins.push(walkin(Date(2021,12,7), 3,1))
walkins.push(walkin(Date(2021,12,8), 1,5))
walkins.push(walkin(Date(2021,12,9), 0,0))
walkins.push(walkin(Date(2021,12,10), 0,0))

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
    let entryFoud = false
    let inputDate = props.date

    for (let i = 0; i > walkins.length; i++){
        let currentDate = walkins[i].estimateDay.toLocaleDateString();
        console.log("trying to access estimate date. Date: " + currentDate)

    }

    for (let i = 0; i < walkins.length; i++) {
        console.log(walkins[i].estimateDay + " is the current data set");

        let myDate = new Date(walkins[i].estimateDay).toLocaleDateString();
        console.log ("date string from Date object" + myDate) // somewhere between the array and this string, it just... adds a date I guess?

        myDate = new Date(walkins[i].estimateDay).toLocaleDateString()

        if (new Date (walkins[i].estimateDay) === props.date){
            console.log("The date was found:")
            console.log(walkins[i].estimateDay)
            entryFoud = true
        } else {
            console.log("not found: " + new Date (walkins[i].estimateDay).toLocaleDateString())
        }
    }
    console.log("Date found? " + entryFoud)

    if (!entryFoud) {

    }

    // find the element in the array, then return the estimate
    // doesn't work yet :'D
    let total
    let estimate = (!walkins.find((each) => {
        console.log("line 56")
        let date = new Date(each.estimateDay).toLocaleDateString('da-DA', {year: 'numeric', month: '2-digit', day: '2-digit'})
        console.log(date)
        if (each.estimateDay === props.date) {
            console.log("estimate: " + each.estimate)
            total = each.total
            return (each.estimate)
        } else {
            return 0
        }
    }))
    let estiDate = props.date.toLocaleDateString()
    return (
    <tr>
        <td>{estiDate}</td>
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