/**
 * Schema:
 * ID: {name, address, phone, email,born,license{id,issued,expires,valid}
 *
 * Use CUSTOMERS.DOROTHY to test an empty user on creation.
 */

export let CUSTOMERS = [
  {
    name: "Alice Robertson",
    address: "Slipager 10, 1435 København K",
    phone: "60 38 72 40",
    email: "alice@mailinator.com",
    born: new Date(1984, 3, 25),
    license: {
      id: 41103,
      issued: new Date(1999, 3),
      expires: new Date(),
      valid: true,
    },
  },
  {
    name: "Bob Robertson",
    address: "Slipager 10, 1435 København K",
    phone: "31 37 34 57",
    email: "bob@mailinator.com",
    born: new Date(1994, 2, 1),
    license: {
      id: 41109,
      issued: new Date(2015, 0),
      expires: new Date(2021, 11),
      valid: true,
    },
  },
  {
    name: "Carlisle Bruun",
    address: "Andekæret 27, 1665 København V",
    phone: "12 55 56 89",
    email: "carl@mailinator.com",
    born: new Date(1974, 3, 1),
    license: {
      id: 41132,
      issued: new Date(1999, 0),
      expires: new Date(2021, 11),
      valid: true,
    },
  },
  {
    name: "",
    address: "",
    phone: "",
    email: "",
    born: new Date(),
    license: { id: 0, issued: new Date(), expires: new Date(), valid: false },
  },
];
