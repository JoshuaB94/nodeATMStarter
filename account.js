"use strict";
//! START HERE! Then atm.js, then index.js
//! Remember to run npm init to create your Node application!

//TODO: Create variables for account balance & account pin

//Export these variables

//Variables for Account Pin and Balance
let accountPin = 6098
let accountBalance = '$' + 15500;
// console.log(accountBalance);

//Exporting of Variables
module.exports = {
    pin: accountPin,
    balance: accountBalance
}