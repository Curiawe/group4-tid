const dbObject = {

    fullBooking : (    
        objID, ref, bStatus, walkin, carGroupName, 
        customerPointer, carPointer,
        bpickup,
        breturn,
        bill,
        returnedTime, returnedMileage,
        extraDriver, extraMiles,
        price) => {
            return {
              objID: objID,
                Ref: ref,
                Status: bStatus,
                isWalkin: walkin,
                carGroup: carGroupName,
                Customer: customerPointer,
                Car: carPointer,
                Pickup: bpickup,
                Return: breturn,
                BillAs: bill,
                Services: {
                  driver: extraDriver,
                  mileage: extraMiles,
                },
                Returned: { time: returnedTime, mileage: returnedMileage },
                price: price,
            }
      },

    pickupBooking : (        
        objID, ref, bStatus, walkin, carGroupName, 
        customerPointer, carPointer,
        bpickup,
        bill,
        price) => {
          return {
            objID: objID,
            Ref: ref,
            Status: bStatus,
            isWalkin: walkin,
            carGroup: carGroupName,
            Customer: customerPointer,
            Car: carPointer,
            Pickup: bpickup,
            BillAs: bill,
            price: price,
          }
        }
}

export default dbObject;