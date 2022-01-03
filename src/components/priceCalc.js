import { CARGROUPS } from "../data/carGroups";

function calcPrice(booking) {
  // time
  let hourlyPrice = 0;

  if (!booking.BillAs) {
    hourlyPrice = booking.carGroup[3];
  } else {
    hourlyPrice = booking.BillAs[3];
  }

  let returnDate = new Date(booking.Return.time);
  let pickupDate = new Date(booking.Pickup.time);

  const diffTime = Math.abs(returnDate - pickupDate);
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

  let timePeriod = 6; // (divided by two)
  // this needs fixing!

  // extra Services
  let extraDriver = 0;

  if (booking.Services.driver) {
    extraDriver = 500;
  }

  let extraMileage = 0;
  if (booking.Services.mileage) {
    extraMileage = booking.Services.mileage * 2;
  }

  return hourlyPrice * timePeriod + 500 + extraDriver + extraMileage;
}

function bookingPrice(
  returnDate,
  pickupDate,
  carGroup,
  extraDriver,
  extraMileage
) {
  // Deposit
  let deposit = 500;

  // Hourly Price for each carGroup
  let hourlyPrice = 0;

  if (carGroup == CARGROUPS[0].name) {
    hourlyPrice = CARGROUPS[0].Price;
  } else if (carGroup == CARGROUPS[1].name) {
    hourlyPrice = CARGROUPS[1].Price;
  } else if (carGroup == CARGROUPS[2].name) {
    hourlyPrice = CARGROUPS[2].Price;
  } else if (carGroup == CARGROUPS[3].name) {
    hourlyPrice = CARGROUPS[3].Price;
  } else if (carGroup == CARGROUPS[4].name) {
    hourlyPrice = CARGROUPS[4].Price;
  } else if (carGroup == CARGROUPS[5].name) {
    hourlyPrice = CARGROUPS[5].Price;
  } else if (carGroup == CARGROUPS[6].name) {
    hourlyPrice = CARGROUPS[6].Price;
  } else if (carGroup == CARGROUPS[7].name) {
    hourlyPrice = CARGROUPS[7].Price;
  }

  // Number of hours
  let DateOfReturn = new Date(returnDate);
  let DateOfPickup = new Date(pickupDate);

  const diffMilliseconds = Math.abs(DateOfReturn - DateOfPickup);
  let diffHours = diffMilliseconds / 36e5;

  if (pickupDate > returnDate) {
    diffHours = 0;
  }

  // Adding fees for extra services
  let extraDriverPrice = 0;

  if (extraDriver) {
    extraDriverPrice = 500;
  }

  let extraMileagePrice = 0;
  if (extraMileage) {
    extraMileagePrice = extraMileage * 2;
  }

  // Getting the total price
  let total = hourlyPrice * diffHours + extraDriverPrice + extraMileagePrice;

  // Creating an array with the deposit, total, hourly price and number of hours for the booking
  let prices = [];
  prices.push(deposit, total, hourlyPrice, diffHours);

  return prices;
}

export { calcPrice, bookingPrice };
