import WalkinTable from "../components/tables/WalkinTable";

function Walkins() {
  return (
    <>
      <div className="pageTitle">
        <h1>Walk-ins</h1>
      </div>
      <div className="pageContent">
        <WalkinTable />
      </div>
    </>
  );
}

export default Walkins;
