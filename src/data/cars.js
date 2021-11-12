import LOCATIONS from "location.js"
/* Schema:
license plate: {Model,carGroup,Color,fuelType,fuelStatus,Locatoin,Doors,Status,RelStatus,Image}
 */

export let CARS = {
    FC12345: {Model:"Fiat Puto",carGroup:'A',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    FM23456: {Model:"Fiat Puto",carGroup:'A',Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    HM23456: {Model:"Skoda Fabia",carGroup:'B',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    HM12345: {Model:"Ford Mondeo",carGroup:'B',Color: "BLU",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    IH12345: {Model:"Skoda Fabia",carGroup:'B',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    IH94302: {Model:"Renault Capture",carGroup:'C',Color: "BLK",fueType:'G',fuelStatus:75, Location:LOCATIONS.AHN,Doors:2,Status:"Transfer",relStatus: "Released", Image:"./public/images/renault-captur.jpg"},
    IH23456: {Model:"VW Passat",carGroup:'E',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:""},
    FC56789: {Model:"Audi A6",carGroup:'F',Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image: "./public/images/audi-a6.jpg"},
    JB12789: {Model:"Honda CR V",carGroup:'H',Color: "BLU",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image: "./public/images/honda-crv.jpg"},
    JF94837: {Model:"Honda CR V",carGroup:'H',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image: "./public/images/honda-crv.jpg"},
    JF19386: {Model:"Fiat 500",carGroup:'I',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:"./public/images/fiat-500.jpg"}
}

