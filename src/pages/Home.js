import { NavButtons } from "../components/buttons/navigationButtons";
import Pages from "./Pages";
import Parse from 'parse'

import bookingFromRef from '../components/DB-functions/DB-Query-Bookings'

function Home() {  


  bookingFromRef();

  return (
    <>
    <NavButtons
      linkButtonOne={Pages.BookingOverview}
      linkButtonTwo={Pages.Walkins}
      linkButtonThree={Pages.TransferOverview}
      textButtonOne="Add Booking"
      textButtonTwo="Estimate Walkins"
      textButtonThree="Transfers"
    />
    </>
  );
}

export default Home;
