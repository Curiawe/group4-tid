import {CARS} from "cars.js"
import {LOCATIONS} from "location.js"

export let TRANSFERS = [
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:new Date.UTC(2021,11,8), Car:CARS.JF94837},
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:new Date.UTC(2021,11,8), Car:CARS.FM23456},
    {Incoming:LOCATIONS.CPA, Outgoing:LOCATIONS.CPC, Date:new Date.UTC(2021,11,8), Car:CARS.IH12345},
    {Incoming:LOCATIONS.AHN, Outgoing:LOCATIONS.AHA, Date:new Date.UTC(2021,11,9), Car:CARS.HM23456},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHC, Date:new Date.UTC(2021,11,9), Car:CARS.HM12345},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHS, Date:new Date.UTC(2021,11,10), Car:CARS.IH23456},
    {Incoming:LOCATIONS.AHS, Outgoing:LOCATIONS.AHN, Date:new Date.UTC(2021,11,8), Car:CARS.FC56789}
]
