import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';

//create walkin objects
function walkin (day, estimate, registered) {
    const walkin = {estimateDay : day,
        estimate : estimate,
        registered : registered}

    return (
        walkin
    )
}

function dateArray (date) {
    let dates = [date]
    for (let i = 1; i < 10; i++) {
        dates.push(new Date(date).setDate(date.getDate() + i))
    }
    return (
        dates
    )

}


//standin for walkin table. This is where the database connection and call goes to later.
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

/**
 * Table row function with automatic db addition of selected dates
 * 
 * @param {Date} props date  
 * @returns a table row with three cells, containing selected date, corresponding walkin estimate and registrations
 */
function WalkinRow (props) {

    let entryFound = false
    let outputDate = new Date(props.date).toLocaleDateString("da-DA");
    console.log(outputDate + " is the output Date")
    let outputEstimate
    let outputRegistered

    for (let i = 0; i < walkins.length; i++){
        // setting up the comparing strings (It doesn't work anymore if you try to do it all in one :((
        let currentDate = walkins[i].estimateDay;
        console.log(currentDate);
        let currentDateString = new Date (walkins[i].estimateDay).toLocaleDateString("da-DA")

        console.log("trying to access estimate date. Date: " + currentDateString)
        if (outputDate === new Date (currentDate).toLocaleDateString("da-DA")) {
            console.log ("The date is a match!")
            outputEstimate = walkins[i].estimate
            console.log(outputEstimate)
            outputRegistered = walkins[i].registered
            entryFound = true
            break;
        } else {
            console.log("entry not found.")
        }

    }

    if (!entryFound) {
        walkins.push(walkin(props.date, 0,0))
        console.log("date has been pushed: " + new Date (props.date).toLocaleDateString())
        outputEstimate = 0
        outputRegistered = 0
    }


    return (
    <tr>
        <td>{outputDate}</td>
        <td>{outputEstimate} </td>
        <td>{outputRegistered}</td>
    </tr>
    )

}

function WalkinContent (props) {
    const allDates = dateArray(props.date)
    let allRows = [] //this will have the table rows

    for (let i = 0; i < allDates.length; i++){ // for every element in allDates
        let currentDate = new Date (props.date)
        currentDate.setDate(props.date.getDate() + i)
        allRows.push(<WalkinRow key = {currentDate} date={currentDate} />)
        console.log(currentDate)
    }

    console.log(allRows)


    return (
        <tbody>
         {allRows}
        </tbody>
        
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

    let dateRows = []
    let datesArray = dateArray(date)

    for (let i = 0; i < 10; i++) {

    }

    return (
        <>
        <DatePicker onChange={onChange} selected={date} />
        <table>
            <WalkinHeader />
                <WalkinContent date={date} />             
        </table>
        </>
    )
}

export default WalkinTable