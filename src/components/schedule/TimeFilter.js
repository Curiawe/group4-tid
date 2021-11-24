import DatePicker from 'sassy-datepicker';
/**Datepicker credit: sassy-datepicker at
 * https://www.npmjs.com/package/sassy-datepicker
 * @license MIT (https://github.com/sassy-labs/datepicker/blob/main/LICENSE)
 * @author SWiddharth Borderwala 2021
 */
import './schedule.css'

export default function TimeFilter(props){
    let timetitle= props.title;
    const onChange = (date) => {
        console.log(date.toDateString());
      };

      return (
        <div title={timetitle}>
            <label>{timetitle}</label>
            <DatePicker onChange={onChange} />
        </div>
      );

}