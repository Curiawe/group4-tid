import './tables.css'
import { useState } from 'react';

//Date Picker
import DatePicker from 'sassy-datepicker';
import BOOKINGS from '../../data/bookings';
import {WALKINS} from '../../data/walkins'

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

function setEstimate (walkin, input) {
    const reg = new RegExp('^[0-9]*$')
    if (input === "") {
        walkin.estimate = 0
        console.log("the estimate for the date " + walkin.estimateDay + " is " + walkin.estimate)
    } else if (reg.test(input)) {
        walkin.estimate = input
        console.log("the estimate for the date " + walkin.estimateDay + " is " + walkin.estimate)
    } else {
        alert("The estimate must be a number. For exampe \n 3")
    }
}

//standin for walkin table. This is where the database connection and call goes to later.
let walkins = WALKINS

function getWalkins (date) {
    let registered = 0;
    BOOKINGS.map((booking) => {
        if (booking.isWalkin) {
            registered++
        }
    })
    return registered
}

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
    let outputWalkin

    for (let i = 0; i < walkins.length; i++){
        // setting up the comparing strings (It doesn't work anymore if you try to do it all in one :((
        let currentDate = walkins[i].estimateDay;

        if (outputDate === new Date (currentDate).toLocaleDateString("da-DA")) {
            outputEstimate = walkins[i].estimate
            console.log(outputEstimate)
            outputRegistered = getWalkins(props.date)
            outputWalkin = i
            entryFound = true
            break;
        } else {
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
        <td><input type = "text" name = "estimate" placeholder = {outputEstimate} onChange={(e) => {setEstimate(walkins[outputWalkin],e.target.value)} }/> </td>
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

    return (
        <>
        <DatePicker onChange={onChange} selected={date} />
        <table style={{marginTop:"16px", marginBottom:"16px"}}>
            <WalkinHeader />
                <WalkinContent date={date} />             
        </table>
        </>
    )
}

export default WalkinTable