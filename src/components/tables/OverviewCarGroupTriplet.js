function OverviewTriplet(b, a, r) {
    let triplet = {
        bookings: b,
        available: a,
        release: r,
        need: b-a
    }

    return (
        {triplet}
    )
}

export default OverviewTriplet()