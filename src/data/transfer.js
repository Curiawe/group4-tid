import {CARS} from "./cars"
import {LOCATIONS} from "./locations"

export let TRANSFERS = [
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:new Date(2021,11,8), Car:CARS[0]},
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:new Date(2021,11,8), Car:CARS[3]},
    {Incoming:LOCATIONS.CPA, Outgoing:LOCATIONS.CPC, Date:new Date(2021,11,8), Car:CARS[2]},
    {Incoming:LOCATIONS.AHN, Outgoing:LOCATIONS.AHA, Date:new Date(2021,11,9), Car:CARS[2]},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHC, Date:new Date(2021,11,9), Car:CARS[1]},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHS, Date:new Date(2021,11,10),Car:CARS[2]},
    {Incoming:LOCATIONS.AHS, Outgoing:LOCATIONS.AHN, Date:new Date(2021,11,8), Car:CARS[0]}
]