import schedule from "../Images/schedule.png";

function Schedule(props) {
  return (
    <>
      <div className="pageTitle">
        <h1>Schedule</h1>
      </div>

      <div className="pageContent">
        <img
          src={schedule}
          alt="Visualisation of the final ScanCar schedule"
          style={{ width: "100%", maxWidth: "1000px" }}
        />
      </div>
    </>
  );
}

export default Schedule;
