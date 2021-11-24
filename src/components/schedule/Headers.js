import './schedule.css'

/**
 * @param {props} String, give the length of the result array of the cars filter.  
 * @returns a table header row with 7 cells, containing the number of applicable cars and the bi-hourly 
 */

export default function HeaderRow (props) {
    return (
        <thead>
            <tr>
            <th id="small">
                {props.size} cars found
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
    </thead>
    )
}
