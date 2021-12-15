export default function calcPrice(booking) {
   // time
    let hourlyPrice = 0;

    if (!booking.BillAs) {
        hourlyPrice = booking.carGroup[3];
    } else {
        hourlyPrice = booking.BillAs[3]
    }
    
    let timePeriod = 6 // (divided by two)
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