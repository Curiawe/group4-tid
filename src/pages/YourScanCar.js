import CarGroupTable from "../components/tables/CarGroupTable";
import LocationsTable from "../components/tables/LocationsTable";

function YourScanCar() {
  return (
    <>
      <div className="pageTitle">
        <h1>Your ScanCar</h1>
      </div>
      <div className="pageFilters">
        <h4>Car Groups</h4>
        <CarGroupTable />
        <h4>ScanCar Offices</h4>
        <LocationsTable />
      </div>
    </>
  );
}

export default YourScanCar;
