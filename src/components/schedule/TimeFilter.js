import DatePicker from 'sassy-datepicker';

export default function TimeFilter(){

    const onChange = (date) => {
        console.log(date.toDateString());
      };

      return (
        <DatePicker onChange={onChange} />
      );

}