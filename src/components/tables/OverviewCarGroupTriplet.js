function OverviewTriplet(bookings, available, release) {
    let triplet = {
        bookings = bookings,
        available = available,
        release = release,
        need = bookings - available
    }

    return (
        {triplet}
    )
}

export default OverviewTriplet()