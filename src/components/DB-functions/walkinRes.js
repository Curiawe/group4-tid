import FetchFunctions from "./FetchFunctions";


const pickTransfer = {
    
    updateCarWalkin : (license, walkin) => {
    let car = FetchFunctions.fetchCarFromLicense(license)
    car.resWalkin = walkin
    alert("Car " + license + " has been reserved for a walkin")
    }
}


export default pickTransfer
/* when button is clicked, change car[x].resWalkin to true */

/* use const like this

pickTransfer.updateCarWalkin(CAR[0].Car.license, true) 

e.g., 
alert("Car" + CAR[0].License + "has been reserved for walkin." */