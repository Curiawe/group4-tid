/**
 * Schema:
 * ID: {name, address, phone, email,born,license{id,issued,expires,valid}
 * 
 * Use CUSTOMERS.DOROTHY to test an empty user on creation. 
*/

export let CUSTOMERS = {
    ALICE: {name: "Alice Robertson",address:"totallyvej 2, 2300 A Real Address", phone:"12 34 56 78", email:"alice@mailinator.com", born:Date.UTC(1984, 3, 25),license: {id: 41103, issued: Date.UTC(1999, 3), expires: Date.now, valid: true}},
    BOB: {name: "Bob Robertson",address:"totallyvej 3, 2302 A Real Address", phone:"12 34 56 89", email:"bob@mailinator.com", born:Date.UTC(1994, 2, 1),license: {id: 41109, issued: Date.UTC(2015, 0), expires: Date.UTC(2021, 11), valid: true}},
    CARLISLE: {name: "Carlisle Bruun",address:"totallyvej 3, 2384 No Real Address", phone:"12 55 56 89", email:"carl@mailinator.com", born:Date.UTC(1974, 3, 1),license: {id: 41132, issued: Date.UTC(1999, 0), expires: Date.UTC(2021, 11), valid: true}},
    DOROTHY: {name: "",address:"", phone:"", email:"", born:Date.now,license: {id: 41109, issued: Date.now, expires: Date.now, valid: false}},
}