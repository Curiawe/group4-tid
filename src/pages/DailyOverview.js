import DailyOverviewTable from "../components/tables/DailyOverviewTable";

function DailyOverview() {
  return (
    <>
      <div className="pageTitle">
        <h1>Daily Overview</h1>
      </div>
      <div className="pageFilters">
        <DailyOverviewTable />;
      </div>
    </>
  );
}

export default DailyOverview;
