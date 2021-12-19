import { NavButtons } from "../components/buttons/navigationButtons";
import Pages from "./Pages";

function Home() {
  return (
    <NavButtons
      linkButtonOne={Pages.BookingOverview}
      linkButtonTwo={Pages.Walkins}
      linkButtonThree={Pages.TransferOverview}
      textButtonOne="Add Booking"
      textButtonTwo="Estimate Walkins"
      textButtonThree="Transfers"
    />
  );
}

export default Home;
