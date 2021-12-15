export default function calcPrice(booking) {
   // time
    let hourlyPrice = 0;

    if (!booking.BillAs) {
        hourlyPrice = booking.carGroup[3];
    } else {
        hourlyPrice = booking.BillAs[3]
    }

    let returnDate = new Date (booking.Return.time)
    let pickupDate = new Date (booking.Pickup.time)

    const diffTime = Math.abs(returnDate - pickupDate);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
    console.log(diffHours)

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