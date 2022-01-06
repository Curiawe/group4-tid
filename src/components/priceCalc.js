import { CARGROUPS } from "../data/carGroups";
import updateDate from "./dataHandling/updateDate";

// Returns 0 instead of NaN when values are empty
function getNumber(value) {
  if (isNaN(value)) {
    return 0;
  }
  return value;
}


/**
 * Calculating booking price based on booking details
 * 
 * @param {Date} returnDate 
 * @param {String} returnTime 
 * @param {Date} pickupDate 
 * @param {String} pickupTime 
 * @param {String} carGroup 
 * @param {Boolean} extraDriver 
 * @param {Number} extraMileage 
 * @returns Array of deposit, total cost and hourly rate.
 */
function bookingPrice(
  returnDate,
  returnTime,
  pickupDate,
  pickupTime,
  carGroup,
  extraDriver,
  extraMileage
) {
  // Deposit
  let deposit = 500;

  // Hourly Price for each carGroup
  let hourlyPrice = 0;
  if (carGroup === undefined) {
    hourlyPrice = 0;
  } else if (typeof carGroup === "string" && carGroup !== undefined) {
    if (carGroup === CARGROUPS[0].name) {
      hourlyPrice = CARGROUPS[0].Price;
    } else if (carGroup === CARGROUPS[1].name) {
      hourlyPrice = CARGROUPS[1].Price;
    } else if (carGroup === CARGROUPS[2].name) {
      hourlyPrice = CARGROUPS[2].Price;
    } else if (carGroup === CARGROUPS[3].name) {
      hourlyPrice = CARGROUPS[3].Price;
    } else if (carGroup === CARGROUPS[4].name) {
      hourlyPrice = CARGROUPS[4].Price;
    } else if (carGroup === CARGROUPS[5].name) {
      hourlyPrice = CARGROUPS[5].Price;
    } else if (carGroup === CARGROUPS[6].name) {
      hourlyPrice = CARGROUPS[6].Price;
    } else if (carGroup === CARGROUPS[7].name) {
      hourlyPrice = CARGROUPS[7].Price;
    } else if (carGroup === CARGROUPS[8].name) {
      hourlyPrice = CARGROUPS[8].Price;
    }
  } else {
    hourlyPrice = carGroup.Price;
  }

  // Rental period
  let timeOfReturn = new Date(updateDate(returnDate, returnTime));
  let timeOfPickup = new Date(updateDate(pickupDate, pickupTime));

  const diffMilliseconds = Math.abs(timeOfReturn - timeOfPickup);
  let diffHours = diffMilliseconds / 36e5;

  // pickupDate must be before returnDate
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
    extraMileagePrice = extraMileage * 2; // 1 extra km costs 2 DKK
  }

  // Adding discount on longer rentals
  // The hourly rates are smaller the longer rental
  if (diffHours >= 48 && diffHours < 72) {
    hourlyPrice = hourlyPrice / 1.5;
  }
  if (diffHours >= 72 && diffHours < 120) {
    hourlyPrice = hourlyPrice / 2.5;
  }
  if (diffHours >= 120) {
    hourlyPrice = hourlyPrice / 4;
  }

  // Transforming NaN to 0
  diffHours = getNumber(diffHours);

  // Calculating the total price

  let total =
    hourlyPrice * diffHours + extraDriverPrice + extraMileagePrice + deposit;

  // Creating an array with the deposit, total, hourly price and number of hours for the booking
  let prices = [];
  prices.push(deposit, total, hourlyPrice, diffHours);

  return prices;
}

export { bookingPrice, getNumber };
