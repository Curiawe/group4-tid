/* **
 * -------How to use the Pages constant ----------
 *
 * If you ever need to refer to a page link, use This component to prevent typos in your links.
 *
 * 1) import Pages from '.pagesPages'
 *
 * 2) instead of a "link", use {Pages.Link} instead.
 * Example: Instead of "bookings" use {Pages.BookingOverview}
 *
 * See also App.js
 *
 * */

/* make lists for the different tabs in the header here 
so we can call them with use params */

const Pages = {
  BookingOverview: "/booking-overview",
  CarGroups: "/car-groups",
  Cars: "/cars",
  DailyOverview: "/daily-overview",
  Home: "/",
  ManageBooking: "/manage-booking",
  RentalOffices: "/offices",
  Schedule: "/schedule",
  TransferOverview: "/transfers",
  Walkins: "/walkins",
};

export default Pages;
