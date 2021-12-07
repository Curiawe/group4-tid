import { useState } from "react";

export default function DailyOverviewTable (props) {

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <p id="large">Current Date: { (new Date(date)).toLocaleDateString() }</p>
            <div style={{display:"flex", flexDirection:"row"}}>
                <form style={{marginRight:"32px"}}>
                    <input className = "inputField" type="date" onChange = {(e) => setDate(e.target.value)}></input>
                </form>
                <button onClick={(e) => setDate(new Date ())}>Jump to today</button>
            </div>
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}