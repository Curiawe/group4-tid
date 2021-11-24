import DatePicker from 'sassy-datepicker';
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