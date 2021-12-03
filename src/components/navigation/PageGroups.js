import Pages from '../../pages/Pages'

const PageGroups = {
    RentalOperations: [Pages.BookingOverview, Pages.ManageBooking, Pages.Cars, Pages.Pickup, Pages.Return, Pages.Schedule],
    RentalManagement: [Pages.DailyOverview, Pages.TransferOverview, Pages.Walkins],
    GroupManagement: [Pages.CarGroups, Pages.RentalOffices]
}

export default PageGroups