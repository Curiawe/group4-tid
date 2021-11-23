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

export default function HeaderRow (props) {
    return (
        <tr>
        <th id="small">
            4 cars found
        </th>
        <th>
            8-10
        </th>
        <th>
            10-12
        </th>
        <th>
            12-14
        </th>
        <th>
            14-16
        </th>
        <th>
            16-18
        </th>
        <th>
            18-20
        </th>
    </tr>
    )
}
