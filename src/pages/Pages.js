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
    GroupLandingPage: "/group-management",
    RentalLandingPage: "/rental-management",
    BookingLandingPage: "/booking-management",
    BookingOverview: "/booking-overview",
    BookingSearch: "/booking-search",
    CarGroups: "/car-groups",
    Cars: "/cars",
    DailyOverview: "/daily-overview",
    Home: "/",
    ManageBooking: "/manage-booking",
    Pickup: "/pickup",
    RentalOffices: "/offices",
    Return: "/return",
    Schedule: "/schedule",
    TransferOverview: "/transfers",
    TransferRequest: "/transfer-request",
    Walkins: "/walkins",


    BookingManagement: [
        {path:"/booking-management/booking-overview", title:"Booking Overview"},
        {path:"/booking-management/booking-search", title:"Booking Search"},
        {path:"/booking-management/car-overview", title:"Car Overview"},
        {path:"/booking-management/schedule", title:"Schedule"},],
    
   RentalManagement: [
        {path:"/rental-management/daily-overview", title:"Daily Overview"},
        {path:"/rental-management/transfers", title:"Transfers"},
        {path:"/rental-management/walkins", title:"Walk-ins"},],
    
    GroupManagement: [
        {path:"/group-management/car-groups", title:"Car Groups"},
        {path:"/group-management/offices", title:"Rental Offices"}]
    }

export default Pages