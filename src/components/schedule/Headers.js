import './schedule.css'

// Day Header
// Table Row Date Header
// Tiles Date Header
// Table Row Hours Header

function PeriodCells(props) {
    let start = props.start
    console.log("start:" + start)
    let end = props.end
    console.log("end:" + end)
    let max = props.max
    console.log("max:" + max)
    let cells= []
    console.log("Cells Created")
    for (var i = start; i<=max;i+=2){
        cells.push(        
        <th>{start}-{end}</th>
        )
        console.log("pushed" + {start} + "-" + {end} )
        start += 2
        console.log("start:" + start)
        end +=2
        console.log("end:" + end)
        console.log("max:" + max)
    }
    return cells
}

/**
 * @param {props} String, give the length of the result array of the cars filter.  
 * @returns a table header row with 7 cells, containing the number of applicable cars and the bi-hourly 
 */
export function HeaderRow(props) {
    return (
        <thead>
        <tr>
            <th id="small">
                {props.size} cars found
            </th>
            <PeriodCells start="8" end="10" max="20"/>
        </tr>
        </thead>

    );
}
