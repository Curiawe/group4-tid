export default function calcPrice(booking) {
   // time
    const hourlyPrice
    if (!booking.BillAs){
        hourlyPrice = booking.carGroup[3];
    } else {
        hourlyPrice = booking.BillAs[3]
    }

    let timePeriod = new Date(booking.Return.time) - new Date (booking.Pickup.time) // (divided by two)
    // this needs fixing!

    // extra Services
    let extraDriver = 0

    if (booking.Services.driver) {
        extraDriver = 500
    }

    let extraMileage = 0
    if (booking.Services.mileage) {
        extraMileage = (booking.Services.mileage * 2)
    }

    return (
        ((hourlyPrice * timePeriod) + 500 + extraDriver + extraMileage)
    ) 

}