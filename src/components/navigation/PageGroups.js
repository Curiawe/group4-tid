import Pages from '../../pages/Pages'

const PageGroups = {
    RentalOperations: [Pages.BookingOverview, Pages.BookingSearch, Pages.Cars, Pages.Pickup, Pages.Return, Pages.Schedule],
    RentalManagement: [Pages.DailyOverview, Pages.TransferRequest, Pages.Walkins],
    GroupManagement: [Pages.CarGroups, Pages.RentalOffices]
}

export default PageGroups