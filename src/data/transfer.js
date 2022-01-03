import { CARS } from "./cars";
import { LOCATIONS } from "./locations";

export let TRANSFERS = [
  {
    Incoming: LOCATIONS[0],
    Outgoing: LOCATIONS[1],
    Date: new Date(2021, 11, 8, 13),
    Car: CARS[0],
  },
  {
    Incoming: LOCATIONS[0],
    Outgoing: LOCATIONS[1],
    Date: new Date(2021, 11, 8),
    Car: CARS[3],
  },
  {
    Incoming: LOCATIONS[1],
    Outgoing: LOCATIONS[0],
    Date: new Date(2021, 11, 8),
    Car: CARS[2],
  },
  {
    Incoming: LOCATIONS[3],
    Outgoing: LOCATIONS[7],
    Date: new Date(2021, 11, 9),
    Car: CARS[2],
  },
  {
    Incoming: LOCATIONS[7],
    Outgoing: LOCATIONS[2],
    Date: new Date(2021, 11, 9),
    Car: CARS[1],
  },
  {
    Incoming: LOCATIONS[7],
    Outgoing: LOCATIONS[6],
    Date: new Date(2021, 11, 10),
    Car: CARS[2],
  },
  {
    Incoming: LOCATIONS[6],
    Outgoing: LOCATIONS[3],
    Date: new Date(2021, 11, 8),
    Car: CARS[0],
  },
];
