import DatePicker from 'sassy-datepicker';
import './schedule.css'

export default function TimeFilter(){

    const onChange = (date) => {
        console.log(date.toDateString());
      };

      return (
        <div title="Pickup Date">
            <label>Pickup Date:</label>
            <DatePicker onChange={onChange} />
        </div>
      );

}