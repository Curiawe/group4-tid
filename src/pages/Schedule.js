import { ScheduleTable } from "../components/schedule/ScheduleTiles";
import Filters from "../components/schedule/FilterRow";

function Schedule(props) {
  return (
    <>
      <div className="pageTitle">
        <h1>Schedule go BRRRRR~</h1>
      </div>
      <div className="pageFilters">
        <Filters />

        <ScheduleTable />
      </div>
    </>
  );
}

export default Schedule;
